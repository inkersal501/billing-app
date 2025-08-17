import { BsFillLightningFill } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoCloudDoneOutline } from "react-icons/io5";
import { MdMobileFriendly } from "react-icons/md";
import { MdOutlinePeople } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import Header from "../components/landing/Header";
import Plans from "../components/landing/Plans";

const Landing = () => { 
  
  const features = [
    {title: "Product & Billing Management", desc: "Add products once and start creating daily bills instantly based on customer purchases."},
    {title: "Role-Based Access", desc: "Owners get full control with analytics, while staff can add bills and manage customers securely."},
    {title: "Advanced Analytics", desc: "View revenue trends, bill reports, and performance insights anytime."},
    {title: "Cloud-Based Access", desc: "Access your billing system securely from any device — no setup headaches."},
    {title: "Scalable Plans", desc: "From small shops to growing businesses, upgrade anytime without losing data."},
    {title: "Reports & Exports", desc: "Export bill data and analytics in one click for compliance or accounting needs."},
  ];

  const why_choose = [
    {
      icon: <BsFillLightningFill size={20} />,
      title: "Instant Billing",
      description: "Create and manage bills in seconds — no complicated steps.",
    },
    {
      icon: <BsGraphUpArrow size={20} />,
      title: "Smart Reports",
      description: "View product sales, customer activity, and revenue insights instantly.",
    },
    {
      icon: <IoCloudDoneOutline size={20} />,
      title: "Cloud Powered",
      description: "Access your data securely anytime, anywhere — no device limits.",
    },
    {
      icon: <MdMobileFriendly size={20} />,
      title: "Mobile-Friendly",
      description: "Bill customers right from your phone, wherever you are.",
    },
    {
      icon: <MdOutlinePeople size={20} />,
      title: "Team Access Control",
      description: "Assign roles to staff for secure and efficient billing operations.",
    },
    {
      icon: <BsGraphUp size={20} />,
      title: "Growth Ready",
      description: "Upgrade plans as you grow without any setup hassles.",
    },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 relative">

      <Header />

      {/* Hero */}
      <section className="text-center py-24 px-4 bg-gradient-to-br from-green-50 to-white">
        <h2 className="text-4xl font-extrabold mb-4">
          Simple, Powerful & Fast Billing for Your Business
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Add products, register customers, and generate daily bills in seconds.
          Track revenue with real-time analytics and export full reports — from anywhere.
        </p>
        <a href="#pricing" className="bg-green-600 text-white px-6 py-3 rounded text-lg hover:bg-green-700">
          Get Started for Free
        </a>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition border border-gray-300 transition hover:delay-150 hover:duration-300 ease-in hover:bg-green-600 hover:text-white">
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm">{feature.desc}</p>
            </div>
          ))}           
        </div>
      </section>

      {/* Pricing */}      
      <section className="py-16 bg-gray-50" id="pricing">
        <Plans />
      </section>


      {/* Why Choose Us */}
      <section className="mt-20 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Simplify your daily billing, track growth effortlessly, and empower your team — all in one place.
        </p>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-left text-gray-700">
        {why_choose.map(({ icon, title, description }, index) => (
          <li
            key={index}
            className="flex items-start bg-white shadow rounded-xl p-4 hover:shadow-lg transition hover:border border-gray-300"
          >
            <span className="mt-2 bg-primary p-2 rounded">{icon}</span>
            <span className="ml-3">
              <strong>{title}</strong>
              <br />
              {description}
            </span>
          </li>
        ))}
        </ul>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-center py-8 mt-5 border-t border-gray-300 text-sm">
        &copy; 2025 BillingPro. Built by{" "}
        <a href="https://www.linkedin.com/in/inkersal-mahendran" className="text-green-600 hover:underline">
          Inkersal Mahendran
        </a>.
      </footer>
    </div>
  );
};

export default Landing;
