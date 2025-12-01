// src/components/OurServices.jsx
import React from 'react';
import { 
  FaShippingFast, 
  FaTruckLoading, 
  FaBoxOpen, 
  FaMoneyBillWave, 
  FaBuilding, 
  FaUndoAlt 
} from 'react-icons/fa';

const OurServices = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
      icon: <FaShippingFast className="w-12 h-12" />,
      highlight: false
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
      icon: <FaTruckLoading className="w-12 h-12" />,
      highlight: true  // This one is highlighted in lime/yellow
    },
    {
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: <FaBoxOpen className="w-12 h-12" />,
      highlight: false
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <FaMoneyBillWave className="w-12 h-12" />,
      highlight: false
    },
    {
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
      icon: <FaBuilding className="w-12 h-12" />,
      highlight: false
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: <FaUndoAlt className="w-12 h-12" />,
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-[#03373D] rounded-2xl text-white my-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our Services
        </h2>
        <p className="text-gray-300 text-sm md:text-lg max-w-4xl mx-auto mb-12 md:mb-16">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments we deliver on time, every time.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:bg-lime-300
                ${service.highlight 
                  ? 'bg-lime-300 text-gray-900 shadow-xl scale-105' 
                  : 'bg-white text-gray-800'
                }`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6
                ${service.highlight ? 'bg-white/30' : 'bg-gray-100'}
              `}>
                <div className={service.highlight ? 'text-gray-800' : 'text-lime-500'}>
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-xl md:text-2xl font-bold mb-4 ${
                service.highlight ? 'text-gray-900' : 'text-gray-800'
              }`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-sm md:text-base leading-relaxed ${
                service.highlight ? 'text-gray-800' : 'text-gray-600'
              }`}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      

    </section>
  );
};

export default OurServices;