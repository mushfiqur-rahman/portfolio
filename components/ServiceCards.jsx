// components/ServiceCards.js
import { FaGoogle, FaWindows } from "react-icons/fa";
import { SiMicrosoftoffice } from "react-icons/si";
import { AiOutlineMail, AiOutlineCloudUpload } from "react-icons/ai";
import { MdOutlineDomain } from "react-icons/md";

const services = [
  {
    title: "cPanel to Google Workspace Migration",
    icon: <FaGoogle className="w-6 h-6" />,
  },
  {
    title: "Google Workspace to Microsoft 365",
    icon: <SiMicrosoftoffice className="w-6 h-6" />,
  },
  {
    title: "Microsoft 365 to Google Workspace",
    icon: <FaGoogle className="w-6 h-6" />,
  },
  {
    title: "Email Deliverability Optimization",
    icon: <AiOutlineMail className="w-6 h-6" />,
  },
  {
    title: "Domain Migration & DNS Transfer",
    icon: <MdOutlineDomain className="w-6 h-6" />,
  },
  {
    title: "Windows Installation & Setup",
    icon: <FaWindows className="w-6 h-6" />,
  },
];

export default function ServiceCards() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="border rounded-2xl p-6 hover:shadow-md transition flex flex-col items-start space-y-4"
          >
            <div className="p-3 rounded-full border">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
