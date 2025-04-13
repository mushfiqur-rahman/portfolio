import { useRouter } from "next/router";
import Image from "next/image";
import SEO from "../../components/SEO";
import { blogPosts } from "@/data/posts";
import { Merriweather } from "next/font/google";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebook,
  FaLinkedin,
  FaLink,
  FaWhatsapp,
  FaShareSquare,
} from "react-icons/fa";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [showShareOptions, setShowShareOptions] = useState(false);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found!</p>;

  const shareOnPlatform = (platform) => {
    const postUrl = `${window.location.origin}${router.asPath}`;
    const shareText = `Check out this post: ${post.title}`;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}&url=${encodeURIComponent(postUrl)}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            postUrl
          )}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            postUrl
          )}&title=${encodeURIComponent(post.title)}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(
            `${shareText} ${postUrl}`
          )}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(postUrl);
        alert("Link copied to clipboard!");
        break;
      default:
        break;
    }

    setShowShareOptions(false);
  };

  return (
    <>
      <SEO title={post.title} description={post.description} />
      <div className="min-h-screen py-12">
        <div className="max-w-3xl mx-auto p-6 sm:p-10 shadow-md rounded-lg">
          {/* Post Title */}
          <h1 className="text-4xl font-bold leading-snug">{post.title}</h1>

          {/* Post Meta Info */}
          <div className="flex items-center space-x-4 text-sm mt-2">
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
            className={`${merriweather.variable} font-serif text-lg prose lg:prose-lg`}
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Share & Bookmark Section */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-3">
              <button className="px-4 py-2 rounded-md">👍 Like</button>
              <button className="px-4 py-2 rounded-md">💾 Bookmark</button>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowShareOptions(!showShareOptions)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                Share <FaShareSquare />
              </button>

              {showShareOptions && (
                <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg py-2 z-10">
                  <div className="flex items-center gap-4 px-4 py-2">
                    <button
                      onClick={() => shareOnPlatform("twitter")}
                      className="text-[#000000] hover:text-[#1DA1F2] transition-colors"
                      title="Share on Twitter"
                    >
                      <FaXTwitter size={20} />
                    </button>
                    <button
                      onClick={() => shareOnPlatform("facebook")}
                      className="text-[#1877F2] hover:text-[#166FE5] transition-colors"
                      title="Share on Facebook"
                    >
                      <FaFacebook size={20} />
                    </button>
                    <button
                      onClick={() => shareOnPlatform("linkedin")}
                      className="text-[#0A66C2] hover:text-[#004182] transition-colors"
                      title="Share on LinkedIn"
                    >
                      <FaLinkedin size={20} />
                    </button>
                    <button
                      onClick={() => shareOnPlatform("whatsapp")}
                      className="text-[#25D366] hover:text-[#128C7E] transition-colors"
                      title="Share on WhatsApp"
                    >
                      <FaWhatsapp size={20} />
                    </button>
                    <button
                      onClick={() => shareOnPlatform("copy")}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                      title="Copy link"
                    >
                      <FaLink size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
