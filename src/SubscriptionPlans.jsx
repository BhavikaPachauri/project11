import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const plans = [
  {
    name: "Plus",
    color: "text-blue-600",
    check: [true, true, true, true, true, true, false, false, false, false, false, false],
    price: "₹424 / month",
    button: "Get Plus",
  },
  {
    name: "Iconic",
    color: "text-orange-500",
    check: [true, true, true, true, true, true, true, true, false, false, false, false],
    price: "₹965 / month",
    button: "Get Iconic",
  },
  {
    name: "Centre",
    color: "text-blue-500",
    check: [true, true, true, true, true, false, false, true, true, true, true, true],
    price: "Launched in 54 cities",
    button: "Choose centre",
  },
];

const features = [
  "India’s best educators",
  "Interactive live classes",
  "Structured courses & PDFs",
  "Live tests & quizzes",
  "Free access to UAITs",
  "Access to curated test series",
  "Digital notes & study material",
  "Physical notes",
  "1:1 Live mentorship",
  "Access to classes at Centres",
  "In-person doubt solving",
  "Live doubt solving",
];

const SubscriptionPlans = () => {
  return (
   <>
   <Navbar/>
    <div className="px-4 py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full min-w-[800px] table-auto text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-lg font-semibold">Benefits</th>
              {plans.map((plan) => (
                <th key={plan.name} className={`p-4 text-center text-lg font-semibold ${plan.color}`}>
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b last:border-0">
                <td className="p-4">{feature}</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="text-center">
                    {plan.check[index] ? (
                      <span className="text-green-600 text-xl">✔</span>
                    ) : (
                      <span className="text-gray-400 text-xl">✘</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td className="p-4 font-semibold"> </td>
              {plans.map((plan) => (
                <td key={plan.name} className="text-center p-4">
                  <p className="font-bold mb-2">{plan.price}</p>
                  <button
                    className={`px-4 py-2 rounded font-semibold text-white ${
                      plan.name === "Plus"
                        ? "bg-blue-600"
                        : plan.name === "Iconic"
                        ? "bg-orange-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {plan.button}
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold mb-2">Have questions about the subscriptions?</h2>
        <p className="mb-4 text-gray-700">Our expert can answer all your questions</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-black text-white px-6 py-2 rounded">Get a call from us</button>
          <p className="text-sm text-gray-600">OR CALL US: <span className="font-medium">+91 8585858585</span></p>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default SubscriptionPlans;
