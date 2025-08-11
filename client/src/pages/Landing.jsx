import React from "react";
import { plans } from "@js/config";
import { SiTicktick } from "react-icons/si"; 
import { useNavigate } from "react-router-dom";

const Landing = () => { 

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 relative">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-2 shadow-md bg-white relative">
        <h2 className="text-2xl font-bold text-green-600">BillingPro</h2>
        <nav className="space-x-6 flex items-center">
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#pricing" className="hover:text-green-600">Pricing</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
 
            <button onClick={()=>navigate("/bills")} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Login
            </button>
 
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-4 bg-gradient-to-br from-green-50 to-white">
        <h2 className="text-4xl font-extrabold mb-4">
          Simple, Powerful & Fast Billing for Your Business
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Add products, register customers, and generate daily bills in seconds.
          Track revenue with real-time analytics and export full reports — from anywhere.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded text-lg hover:bg-green-700">
          Get Started for Free
        </button>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-xl font-semibold mb-2">Product & Billing Management</h4>
            <p className="text-gray-600">
              Add products once and start creating daily bills instantly based on customer purchases.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Role-Based Access</h4>
            <p className="text-gray-600">
              Owners get full control with analytics, while staff can add bills and manage customers securely.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Advanced Analytics</h4>
            <p className="text-gray-600">
              View revenue trends, bill reports, and performance insights anytime.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Cloud-Based Access</h4>
            <p className="text-gray-600">
              Access your billing system securely from any device — no setup headaches.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Scalable Plans</h4>
            <p className="text-gray-600">
              From small shops to growing businesses, upgrade anytime without losing data.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Reports & Exports</h4>
            <p className="text-gray-600">
              Export bill data and analytics in one click for compliance or accounting needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Choose Your Plan
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Flexible pricing to fit teams of all sizes. Upgrade or downgrade anytime.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 w-80 transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 ${
                plan.name === "Starter" ? "border-primary" : ""
              }`}
            >
              {plan.name === "Starter" && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-gray-900 text-center">
                {plan.name}
              </h3>
              <p className="text-gray-500 text-center mt-2">{plan.description}</p>

              <div className="text-center mt-6">
                <p className="text-4xl font-extrabold text-gray-800">{plan.price}</p>
                <p className="text-sm text-gray-500">{plan.yearlyPrice}</p>
              </div>

              <ul className="mt-6 space-y-3 text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md"
                  >
                    <span className="text-green-500"><SiTicktick size={18}/></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full btn`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="mt-20 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Simplify your daily billing, track growth effortlessly, and empower your team — all in one place.
        </p>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-left text-gray-700">
          <li className="flex items-start bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
            <span className="text-2xl">⚡</span>
            <span className="ml-3">
              <strong>Instant Billing</strong><br />
              Create and manage bills in seconds — no complicated steps.
            </span>
          </li>

          <li className="flex items-start bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
            <span className="text-2xl">📊</span>
            <span className="ml-3">
              <strong>Smart Reports</strong><br />
              View product sales, customer activity, and revenue insights instantly.
            </span>
          </li>

          <li className="flex items-start bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
            <span className="text-2xl">☁️</span>
            <span className="ml-3">
              <strong>Cloud Powered</strong><br />
              Access your data securely anytime, anywhere — no device limits.
            </span>
          </li>

          <li className="flex items-start bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
            <span className="text-2xl">📱</span>
            <span className="ml-3">
              <strong>Mobile-Friendly</strong><br />
              Bill customers right from your phone, wherever you are.
            </span>
          </li>

          <li className="flex items-start bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
            <span className="text-2xl">👥</span>
            <span className="ml-3">
              <strong>Team Access Control</strong><br />
              Assign roles to staff for secure and efficient billing operations.
            </span>
          </li>

          <li className="flex items-start bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
            <span className="text-2xl">📈</span>
            <span className="ml-3">
              <strong>Growth Ready</strong><br />
              Upgrade plans as you grow without any setup hassles.
            </span>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-center py-8 mt-5 border-t bg-gray-50 text-sm">
        &copy; 2025 BillingPro. Built by{" "}
        <a href="https://www.linkedin.com/in/inkersal-mahendran" className="text-green-600 hover:underline">
          Inkersal
        </a>.
      </footer>
    </div>
  );
};

export default Landing;
