import React, { useContext } from "react";
import style from "./MarketingTeam.module.css";
import { LanguageContext } from "../../Context/LanguageContext";

export default function MarketingTeam() {
  const { isArabic } = useContext(LanguageContext);

  const teamMembers = [
    {
      name: isArabic ? "جمال عبدالناصر" : "Gamal AbdAlnaser",
      position: isArabic
        ? "مصمم جرافيك لدي Traffic Digital"
        : "Traffic Digital's Graphic Designer",
      
      imgSrc: "../images/gamal1.jpg",
    },
    {
      name: isArabic ? "زينب رضا" : "Zienb Reda",
      position: isArabic
        ? "مهندس برمجيات شركة Traffic Digital"
        : "Traffic Digital's Software Engineer",
      
      imgSrc: "../images/zeinb.jpg",
    },
    {
      name: isArabic ? " أحمد حمزه" : "Ahmed Hamza",
      position: isArabic
        ? "مؤسس ومدير شركة Traffic Digital"
        : "Traffic Digital Founder & CEO",
      
      imgSrc: "../images/hamza.jpg",
    },
   
           {
      name: isArabic ? "أدهم كرم" : "Adham Karm",
      position: isArabic
        ? "مسئول الاستوديو لدي Traffic Digital"
        : "Traffic Digital's Studio Opreation Manegaer ",
      
      imgSrc: "../images/adham.jpg",
    },
      
       {
      name: isArabic ? "يوسف أحمد" : "Youssef Ahmed",
      position: isArabic
        ? "  مصور لدي Traffic Digital"
        : "Traffic Digital's Photographer",
      
      imgSrc: "../images/youssef.jpg",
    },
           {
      name: isArabic ? " عمرو علاء" : "Amr Alaa",
      position: isArabic
        ? "  مصور فيديو لدي Traffic Digital"
        : "Traffic Digital's Videographer",
      
      imgSrc: "../images/amr.jpg",
    },
    
     {
      name: isArabic ? " جرجس لطفي" : "Girgis Lotfy",
      position: isArabic
        ? "  متخصص في وسائل التواصل الإجتماعي لدي Traffic Digital"
        : "Traffic Digital's Social Media Specialist",
      
      imgSrc: "../images/gargis.jpg",
    },
    
        {
      name: isArabic ? " مريم صادق" : "Mariam Sadek  ",
      position: isArabic
      ? "مصمم جرافيك لدي Traffic Digital"
        : "Traffic Digital's Graphic Designer ",
      
      imgSrc: "../images/marim.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <div className="text-center mb-10">
        <h3
          className="text-3xl md:text-4xl font-bold text-[#000000] leading-relaxed"
          dir={isArabic ? undefined : "ltr"}
        >
          {isArabic ? "طاقم العمل" : "Our Team"}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center items-stretch gap-6 p-2 bg-gray-100">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full  sm:w-1/2 md:w-1/3 lg:w-[31%] bg-white border rounded-lg text-center shadow-md"
          >
            <img
              src={member.imgSrc}
              alt="profile"
              className="w-full h-120 object-cover rounded-t-lg"
            />
            <div className="bg-neutral-600  p-6 h-52">
              <h2
                className="text-2xl  text-white font-bold mb-10 mt-3"
                dir={isArabic ? undefined : "ltr"}
              >
                {member.name}
              </h2>
              <p
                className="text-white text-lg mb-2"
                dir={isArabic ? undefined : "ltr"}
              >
                {member.position}
              </p>
              <p className="text-white text-base" dir="ltr">
                {member.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
