import React from "react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-green-600">BillingPro</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#pricing" className="hover:text-green-600">Pricing</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Login
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-4 bg-gradient-to-br from-green-50 to-white">
        <h2 className="text-4xl font-extrabold mb-4">
          Simplify Your Billing with <span className="text-green-600">BillingPro</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Manage invoices, track payments, and get reports — all in one place. Perfect for freelancers, startups, and small businesses.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded text-lg hover:bg-green-700">
          Get Started for Free
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-xl font-semibold mb-2">Customer Management</h4>
            <p className="text-gray-600">Add, edit, and track your customers with ease.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Invoice Generation</h4>
            <p className="text-gray-600">Generate branded invoices in just a few clicks.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Reports & Analytics</h4>
            <p className="text-gray-600">Monitor income, payments, and outstanding bills.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-center py-8 border-t bg-gray-50 text-sm">
        &copy; 2025 BillingPro. Built by <a href="www.linkedin.com/in/inkersal-mahendran">Inkersal</a>.
      </footer>
    </div>
  );
};

export default Landing;
