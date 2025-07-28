import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const ServicePackageCard = ({ title, price, features, cta }) => {
  return (
    <div className=" shadow-lg rounded-2xl p-6 w-full hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-blue-600 mb-4">${price}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="/contact">
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          {cta}
        </button>
      </Link>
    </div>
  );
};

export default ServicePackageCard;
