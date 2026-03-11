'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import { useEffect } from 'react'

interface RichTextEditorProps {
	value: string
	onChange: (html: string) => void
}

const ToolbarButton = ({
	onClick,
	active,
	title,
	children,
}: {
	onClick: () => void
	active?: boolean
	title: string
	children: React.ReactNode
}) => (
	<button
		type='button'
		onClick={onClick}
		title={title}
		className={`px-2.5 py-1.5 rounded text-sm font-medium transition-colors ${
			active
				? 'bg-blue-600 text-white'
				: 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
		}`}
	>
		{children}
	</button>
)

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
	const editor = useEditor({
		immediatelyRender: false,
		extensions: [
			StarterKit,
			Underline,
			TextAlign.configure({ types: ['heading', 'paragraph'] }),
		],
		content: value,
		onUpdate: ({ editor }) => {
			onChange(editor.getHTML())
		},
		editorProps: {
			attributes: {
				class:
					'min-h-[240px] px-4 py-3 text-gray-900 text-sm leading-relaxed focus:outline-none',
			},
		},
	})

	// Sync external value changes (e.g. when editing a blog)
	useEffect(() => {
		if (editor && value !== editor.getHTML()) {
			editor.commands.setContent(value, false)
		}
	}, [value, editor])

	if (!editor) return null

	return (
		<div className='border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500'>
			{/* Toolbar */}
			<div className='flex flex-wrap gap-1 p-2 bg-gray-50 border-b border-gray-200'>
				{/* Headings */}
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
					active={editor.isActive('heading', { level: 1 })}
					title='Heading 1'
				>
					H1
				</ToolbarButton>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
					active={editor.isActive('heading', { level: 2 })}
					title='Heading 2'
				>
					H2
				</ToolbarButton>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
					active={editor.isActive('heading', { level: 3 })}
					title='Heading 3'
				>
					H3
				</ToolbarButton>

				<span className='w-px bg-gray-300 mx-1' />

				{/* Inline formatting */}
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleBold().run()}
					active={editor.isActive('bold')}
					title='Bold'
				>
					<strong>B</strong>
				</ToolbarButton>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleItalic().run()}
					active={editor.isActive('italic')}
					title='Italic'
				>
					<em>I</em>
				</ToolbarButton>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleUnderline().run()}
					active={editor.isActive('underline')}
					title='Underline'
				>
					<span style={{ textDecoration: 'underline' }}>U</span>
				</ToolbarButton>

				<span className='w-px bg-gray-300 mx-1' />

				{/* Lists */}
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					active={editor.isActive('bulletList')}
					title='Bullet List'
				>
					• List
				</ToolbarButton>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					active={editor.isActive('orderedList')}
					title='Ordered List'
				>
					1. List
				</ToolbarButton>

				<span className='w-px bg-gray-300 mx-1' />

				{/* Blockquote & Code */}
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleBlockquote().run()}
					active={editor.isActive('blockquote')}
					title='Blockquote'
				>
					❝
				</ToolbarButton>
				<ToolbarButton
					onClick={() => editor.chain().focus().toggleCodeBlock().run()}
					active={editor.isActive('codeBlock')}
					title='Code Block'
				>
					{'</>'}
				</ToolbarButton>

				<span className='w-px bg-gray-300 mx-1' />

				{/* Alignment */}
				<ToolbarButton
					onClick={() => editor.chain().focus().setTextAlign('left').run()}
					active={editor.isActive({ textAlign: 'left' })}
					title='Align Left'
				>
					≡L
				</ToolbarButton>
				<ToolbarButton
					onClick={() => editor.chain().focus().setTextAlign('center').run()}
					active={editor.isActive({ textAlign: 'center' })}
					title='Align Center'
				>
					≡C
				</ToolbarButton>
				<ToolbarButton
					onClick={() => editor.chain().focus().setTextAlign('right').run()}
					active={editor.isActive({ textAlign: 'right' })}
					title='Align Right'
				>
					≡R
				</ToolbarButton>

				<span className='w-px bg-gray-300 mx-1' />

				{/* Undo / Redo */}
				<ToolbarButton
					onClick={() => editor.chain().focus().undo().run()}
					title='Undo'
				>
					↩
				</ToolbarButton>
				<ToolbarButton
					onClick={() => editor.chain().focus().redo().run()}
					title='Redo'
				>
					↪
				</ToolbarButton>
			</div>

			{/* Editor area */}
			<EditorContent editor={editor} />
		</div>
	)
}
