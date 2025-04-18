import SEO from "@/components/SEO";
import { blogPosts } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const blog = () => {
  return (
    <>
      <SEO
        title="Blog - Mushfiq's Portfolio"
        description="Read my latest blogs on web development, IT support, and tech insights."
      />
      <div className="w-full min-h-screen py-20">
        <div className="max-w-[1240px] mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-6">Blog</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded"
                    width={100}
                    height={100}
                  />
                  <h2 className="text-xl font-semibold mt-3">{post.title}</h2>
                  <p className="text-sm text-gray-600">
                    {post.date} - {post.category}
                  </p>
                  <p className="mt-2 text-gray-700">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;
