import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ title, description, image, slug }) => {
  if (!slug) {
    console.error("Missing slug for service:", title);
  }

  // Create a short description (first sentence or first 100 characters)
  const shortDescription =
    description.split(".")[0] +
    (description.split(".")[0].length < description.length ? "..." : "");

  return (
    <Link
      href={`/services/${slug}`}
      className="border rounded-xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg hover:scale-105 duration-300 h-full"
    >
      <div className="mb-4 flex justify-center">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 line-clamp-3">{shortDescription}</p>
      <span className="mt-3 text-blue-600 text-sm font-medium hover:underline">
        Learn more
      </span>
    </Link>
  );
};

export default ServiceCard;
