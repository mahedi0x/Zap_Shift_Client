// src/components/HowItWork.jsx
import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { LuBaggageClaim } from "react-icons/lu";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdOutlineCorporateFare } from "react-icons/md";





const HowItWork = () => {
  const steps = [
    {
      icon: <FaPeopleCarryBox className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Booking Pick & Drop",
      description: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      icon: <LuBaggageClaim className="w-16 h-16 md:w-20 md:h-20 text-orange-500" />,
      title: "Cash On Delivery",
      description: "From personal packages to business shipments — we deliver on time, every time."
    },
    { 
      icon: <FaTruck className="w-16 h-16 md:w-20 md:h-20 text-primary" />,
      title: "Delivery Hub",
      description: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      icon: <MdOutlineCorporateFare className="w-16 h-16 md:w-20 md:h-20 text-gray-600" />,
      title: "Booking SME & Corporate",
      description: "From personal packages to business shipments — we deliver on time, every time."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 flex flex-col items-center"
            >
              <div className="mb-6 text-emerald-600">
                {
                    step.icon
                }
                
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;