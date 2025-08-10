const apiEndpoint = import.meta.env.VITE_API_BASE_URL;

const storage = JSON.parse(localStorage.getItem("admin"));

const defaultState  =  {
    admin: {
        isLoggedin: storage?.isLoggedin || false,
        user: storage?.user || null,
        refreshAdminUsers: false,
        refreshBillingPlans: false, 
        refreshCustomers: false,
        refreshCustomerDetails: false,
    },
    auth: {
        isLoggedin: null,
        user: null
    },
    products: {
        list: []
    }
}
const plans = [
    {
      name: "Basic",
      price: "₹299/month",
      yearlyPrice: "₹2,999/year",
      description: "Ideal for individual sellers or small stalls.",
      features: [
        "Up to 50 bills/month",
        "Up to 2 staff users",
        "Simple product management",
        "Basic billing reports",
        "Customer list management",
      ],
    },
    {
      name: "Starter",
      price: "₹499/month",
      yearlyPrice: "₹4,999/year",
      description: "Perfect for small shops going digital.",
      features: [
        "Up to 100 bills/month",
        "Up to 5 staff users",
        "Customer & product tracking",
        "Daily billing history",
        "Downloadable basic reports",
      ],
    },
    {
      name: "Professional",
      price: "₹999/month",
      yearlyPrice: "₹9,999/year",
      description: "Best for growing businesses and chains.",
      features: [
        "Unlimited bills",
        "Unlimited staff users",
        "Detailed revenue analytics",
        "Product-wise performance reports",
        "Advanced billing history and export options",
      ],
    },
  ];
export { apiEndpoint, defaultState, plans };