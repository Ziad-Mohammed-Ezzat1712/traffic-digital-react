import React, { useContext } from "react";
import style from "./ServicesSection.module.css";
import { FaCode, FaBullhorn, FaVideo } from "react-icons/fa";
import { LanguageContext } from "../../Context/LanguageContext";

export default function ServicesSection() {
  const { isArabic } = useContext(LanguageContext);

  const services = [
    {
      title: isArabic ? "سوفت وير" : "Software",
      icon: <FaCode className="text-4xl text-primary group-hover:text-white transition" />,
      description: isArabic
        ? "نطور حلول برمجية مخصصة تساعد عملك على النمو والتطور."
        : "We develop custom software solutions to help your business grow and evolve.",
    },
    {
      title: isArabic ? "ماركتينج" : "Marketing",
      icon: <FaBullhorn className="text-4xl text-primary group-hover:text-white transition" />,
      description: isArabic
        ? "نصنع لك حملات تسويقية احترافية تزيد من ظهورك وتحول جمهورك إلى عملاء."
        : "We create professional marketing campaigns to boost your visibility and convert your audience into customers.",
    },
    {
      title: isArabic ? "برودكشن" : "Production",
      icon: <FaVideo className="text-4xl text-primary group-hover:text-white transition" />,
      description: isArabic
        ? "إنتاج فيديوهات عالية الجودة تسوّق لخدماتك بشكل احترافي وجذاب."
        : "High-quality video production that professionally promotes your services.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4 text-center">
        <h2 dir={isArabic ? undefined : "ltr"} className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          {isArabic ? "خدماتنا" : "Our Services"}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white shadow-xl rounded-2xl p-6 hover:bg-[#2a2a2a] hover:text-white transition duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full mb-5 hover:bg-[#2a2a2a] transition">
                {service.icon}
              </div>
              <h3 dir={isArabic ? undefined : "ltr"} className="text-xl font-semibold mb-2">{service.title}</h3>
              <p dir={isArabic ? undefined : "ltr"} className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
