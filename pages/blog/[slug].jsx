import { useRouter } from "next/router";
import Image from "next/image";
import SEO from "../../components/SEO";
import { blogPosts } from "@/data/posts";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found!</p>;

  return (
    <>
      <SEO title={post.title} description={post.description} />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 shadow-md rounded-lg">
          {/* Post Title */}
          <h1 className="text-4xl font-bold leading-snug">{post.title}</h1>

          {/* Post Meta Info */}
          <div className="flex items-center space-x-4 text-gray-600 text-sm mt-2">
            <Image
              src={post.authorImage}
              alt={post.authorName}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">{post.authorName}</p>
              <p>
                {post.date} • {post.category}
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="my-6">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Post Content */}
          <div
            className={`${merriweather.variable} font-serif text-lg text-gray-800 prose lg:prose-lg`}
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Share & Bookmark Section */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gray-200 rounded-md">
                👍 Like
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded-md">
                💾 Bookmark
              </button>
            </div>
            <div className="flex space-x-3">
              <a
                href="#"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
