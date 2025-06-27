import { AiOutlineCheckCircle } from "react-icons/ai";

const pricingData = [
  {
    title: "Web Development",
    plans: [
      {
        name: "Starter",
        price: "$299",
        duration: "5 Days Delivery",
        features: [
          { label: "1 Page Website", included: true },
          { label: "Responsive Design", included: true },
          { label: "Free Hosting Setup", included: true },
          { label: "1 Web Mail Setup", included: true },
          { label: "Basic SEO Setup", included: false },
          { label: "Custom Contact Form", included: false },
          { label: "1 Month Maintenance", included: false },
        ],
      },
      {
        name: "Standard",
        price: "$499",
        duration: "10 Days Delivery",
        features: [
          { label: "Up to 5 Pages", included: true },
          { label: "Responsive Design", included: true },
          { label: "Free Hosting Setup", included: true },
          { label: "1 Web Mail Setup", included: true },
          { label: "Basic SEO Setup", included: true },
          { label: "Custom Contact Form", included: true },
          { label: "1 Month Maintenance", included: false },
        ],
      },
      {
        name: "Exclusive",
        price: "$1599",
        duration: "15 Days Delivery",
        features: [
          { label: "Custom Website (up to 10 pages)", included: true },
          { label: "Responsive Design", included: true },
          { label: "Hosting & Domain Setup", included: true },
          { label: "1 Web Mail Setup", included: true },
          { label: "Advanced SEO", included: true },
          { label: "Custom Forms & Blog Setup", included: true },
          { label: "3 Months Maintenance", included: true },
        ],
      },
    ],
  },
  {
    title: "IT Support",
    plans: [
      {
        name: "Starter",
        price: "$99",
        duration: "Same Day Delivery",
        features: [
          { label: "Email Troubleshooting", included: true },
          { label: "DNS Record Fix", included: true },
          { label: "One Mail Box Migration", included: false },
          { label: "SPF/DKIM Setup", included: false },
          { label: "Remote Support (30 mins)", included: true },
        ],
      },
      {
        name: "Standard",
        price: "$199",
        duration: "1–2 Days Delivery",
        features: [
          { label: "Up to 3 Email Migrations", included: true },
          { label: "SPF/DKIM/DMARC Setup", included: true },
          { label: "DNS & Domain Help", included: true },
          { label: "Google/Microsoft Support", included: true },
          { label: "Remote Support (1 Hour)", included: true },
        ],
      },
      {
        name: "Exclusive",
        price: "$399",
        duration: "3 Days Delivery",
        features: [
          { label: "Full Workspace/Office 365 Setup", included: true },
          { label: "Email Deliverability Fix", included: true },
          { label: "Domain & DNS Audit", included: true },
          { label: "Mail Warm-Up & Reputation", included: true },
          { label: "Priority Remote Support (2+ hrs)", included: true },
        ],
      },
    ],
  },
];

export default function PricingSection() {
  return (
    <div id="pricing" className="py-12 px-4 max-w-7xl mx-auto">
      {pricingData.map((category, i) => (
        <div key={i} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            {category.title} Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.plans.map((plan, j) => (
              <div
                key={j}
                className="p-6 border rounded-2xl flex flex-col justify-between hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                  <p className="text-sm mb-2">{plan.duration}</p>
                  <p className="text-3xl font-bold mb-6">{plan.price}</p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, k) => (
                      <li
                        key={k}
                        className={`flex items-center space-x-3 ${
                          feature.included ? "" : "opacity-40"
                        }`}
                      >
                        <AiOutlineCheckCircle className="w-5 h-5" />
                        <span>{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-auto w-full rounded-full py-2 px-4 font-semibold hover:from-pink-600 hover:to-pink-700 transition">
                  Book a Free Call
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
