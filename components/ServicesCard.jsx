import { services } from "@/data/service";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const ServicesCard = ({
  title,
  description,
  features,
  price,
  whatsappLink,
}) => {
  const whatsappNumber = "+880 1737-760068";
  return (
    <>
      <section className="items-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Remote IT Support & Web Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl shadow-md p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className=" mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <p className="text-lg font-semibold text-indigo-600 mb-4">
                    {service.price}
                  </p>
                  <div className="items-center">
                    <Link
                      href="https://wa.me/8801737760068"
                      rel="noreferrer"
                      target="_blank"
                      aria-label="WhatsApp Contact"
                      className="flex items-center justify-center gap-2 w-full py-3 
             bg-gradient-to-r from-green-500 to-green-600 
             text-white font-semibold rounded-lg shadow-md 
             hover:from-green-600 hover:to-green-700 transition text-center"
                    >
                      <FaWhatsapp className="text-lg" />
                      <span className="text-center">Contact on WhatsApp</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCard;
