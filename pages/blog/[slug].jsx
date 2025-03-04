import { useRouter } from "next/router";

import SEO from "../../components/SEO";
import { blogPosts } from "@/data/posts";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found!</p>;

  return (
    <>
      <SEO title={post.title} description={post.description} />
      <div className="w-full min-h-screen py-12 pt-[100px]">
        <div className="max-w-[1240px] mx-auto px-4">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p>
            {post.date} - {post.category}
          </p>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-80 object-cover my-4 rounded"
          />
          <p className="text-lg">{post.content}</p>
        </div>
      </div>
    </>
  );
};


export default BlogPost;
