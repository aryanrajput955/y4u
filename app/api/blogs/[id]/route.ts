import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Blog from '@/app/lib/models/Blog';

// PUT - Update a blog
export async function PUT(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const params = await context.params;
        const { id } = params;
        await connectDB();

        const body = await request.json();
        const { metaTitle, metaDescription, image, content, date } = body;

        // Validation
        if (!metaTitle || !metaDescription || !image || !content) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'All fields are required',
                },
                { status: 400 }
            );
        }

        // Generate new slug from meta title
        const slug = metaTitle
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

        // Check if slug already exists (excluding current blog)
        const existingBlog = await Blog.findOne({
            slug,
            _id: { $ne: id }
        });

        if (existingBlog) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'A blog with this title already exists',
                },
                { status: 400 }
            );
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            {
                metaTitle,
                metaDescription,
                image,
                content,
                date: date || new Date(),
                slug,
            },
            { new: true, runValidators: true }
        );

        if (!updatedBlog) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Blog not found',
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: updatedBlog,
                message: 'Blog updated successfully',
            },
            { status: 200 }
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to update blog';
        return NextResponse.json(
            {
                success: false,
                error: errorMessage,
            },
            { status: 500 }
        );
    }
}

// DELETE - Delete a specific blog
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await connectDB();

        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Blog not found',
                },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Blog deleted successfully',
        });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to delete blog';
        return NextResponse.json(
            {
                success: false,
                error: errorMessage,
            },
            { status: 500 }
        );
    }
}
