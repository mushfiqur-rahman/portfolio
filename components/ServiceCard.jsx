import { FaCheckCircle } from "react-icons/fa";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="border rounded-xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg">
      <FaCheckCircle className="text-4xl mb-3 text-primary" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm mt-2 opacity-80">{description}</p>
    </div>
  );
};

export default ServiceCard;
