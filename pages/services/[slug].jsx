import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import { services } from "@/data/services";
import Image from "next/image";

const ServiceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the service based on the slug
  const service = services.find((item) => item.slug === slug);

  // If service is not found, show 404 message
  if (!service) {
    return <h1 className="text-center text-3xl mt-20">Service Not Found</h1>;
  }

  return (
    <>
      <SEO
        title={service.title}
        keywords={service.description}
        description={service.description.split("\n")[0]}
      />
      <div className="w-full min-h-screen py-12 pt-[100px]">
        <div className="max-w-[800px] mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            {service.title}
          </h1>
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={300}
            className="rounded-lg mx-auto mb-6"
          />

          <div className="prose max-w-none">
            {service.description.split("\n").map((line, i) => (
              <p
                key={i}
                className={
                  line.startsWith("✅")
                    ? "flex items-start mb-2"
                    : line.startsWith("💡")
                    ? "p-4 rounded-lg my-4 border-4 border-blue-500"
                    : line.startsWith("🚀")
                    ? "p-4 rounded-lg my-4 border-4 border-green-500"
                    : "mb-4"
                }
              >
                {line.startsWith("✅") && <span className="mr-2">✅</span>}
                {line.replace(/^(✅|💡|🚀)\s?/, "")}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
