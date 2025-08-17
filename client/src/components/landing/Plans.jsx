import React, { useEffect, useState } from "react";
import { getPlans } from "@js/config";
import { SiTicktick } from "react-icons/si";
import Register from "./Register";

function Plans() {
    
  const [plans, setPlans] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  
  const fetchPlans = async () => {
    const result = await getPlans();
    if (result.status) setPlans(result.data);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <>
      {plans.length > 0 && (
        <div>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Choose Your Plan
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Flexible pricing to fit teams of all sizes. Upgrade or downgrade
            anytime.
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
                <p className="text-gray-500 text-center mt-2">{plan.desc}</p>

                <div className="text-center mt-6">
                  <p className="text-2xl font-extrabold text-gray-800">
                    Rs. {plan.priceMonthly} / Month
                  </p>
                  <p>or</p>
                  <p className="text-lg text-gray-600">
                    Rs. {plan.priceYearly} / Year
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md"
                    >
                      <span className="text-green-500">
                        <SiTicktick size={18} />
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`mt-8 w-full btn`} onClick={()=>{setActivePlan(plan);setShowModal(true)}}>Get Started</button>
              </div>
            ))}
          </div>
          {showModal && 
          <Register isOpen={showModal} onRequestClose={() => {setActivePlan(null);setShowModal(false)}} activePlan={activePlan} />}
        </div>        
      )}
    </>
  );
}

export default Plans;
