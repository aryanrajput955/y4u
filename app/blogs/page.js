"use client";

import { Calendar, User, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const samplePosts = [
  {
    id: 1,
    title: "Unlocking Industrial Skills: The Future of Manufacturing in Uttarakhand",
    excerpt: "Explore how hands-on training programs are bridging the gap between education and industry needs in the heart of Uttarakhand's manufacturing hub.",
    date: "2025-12-05",
    author: "Dr. Rajesh Kumar",
    readTime: "5 min read",
    slug: "unlocking-industrial-skills-uttarakhand",
    category: "Industrial Training",
  },
  {
    id: 2,
    title: "Digital Marketing Essentials for Aspiring Entrepreneurs",
    excerpt: "A beginner's guide to mastering digital tools and strategies that can skyrocket your business in the competitive online landscape.",
    date: "2025-11-28",
    author: "Priya Sharma",
    readTime: "7 min read",
    slug: "digital-marketing-essentials",
    category: "Digital Skills",
  },
  {
    id: 3,
    title: "Real Estate Sales: Building Trust and Closing Deals",
    excerpt: "Learn proven techniques for effective client communication and negotiation in the dynamic real estate market of India.",
    date: "2025-11-20",
    author: "Amit Verma",
    readTime: "4 min read",
    slug: "real-estate-sales-tips",
    category: "Sales & Real Estate",
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState(samplePosts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const paginatedPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  // TODO: Replace with actual API call to fetch posts from your MongoDB backend
  // useEffect(() => {
  //   fetch('/api/posts')
  //     .then(res => res.json())
  //     .then(data => setPosts(data));
  // }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider border-b border-blue-200 inline-block pb-1">
              Insights & Knowledge
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight max-w-4xl mx-auto">
              Latest from Our Blog
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
              Stay updated with industry trends, skill-building tips, and success stories from our training programs. Discover actionable insights to advance your career.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                {/* Featured Image */}
                <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
                  <span className="relative z-10 text-white text-lg font-semibold px-4 py-2 bg-blue-600/80 rounded-lg">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed text-base">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm"
                  >
                    Read Full Article
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 border border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 bg-white text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup - Optional Professional Touch */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Informed
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to get the latest articles delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}