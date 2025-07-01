import React, { useContext } from "react";
import style from "./TechnicalTeam.module.css";
import { LanguageContext } from "../../Context/LanguageContext"; // عدل المسار حسب مكان الملف


export default function TechnicalTeam() {
  const { isArabic } = useContext(LanguageContext);

  const teamMembers = [
    {
      name: isArabic ? "زينب رضا " : "Zeinb Reda",
      position: isArabic
        ? "مهندس برمجيات شركة Traffic Digital"
        : "Traffic Digital's Software Engineer",
      email: "peternabil@gmail.com",
      imgSrc: "../images/zeinb.jpg",
    },
    {
      name: isArabic ? "بيتر نبيل" : "Peter Nabil",
      position: isArabic
        ? "مؤسس ومدير شركة Traffic Digital"
        : "Traffic Digital's Founder & CEO",
      email: "peternabil@gmail.com",
      imgSrc: "../images/profile.jpg",
    },
    {
      name: isArabic ? "بيتر نبيل" : "Peter Nabil",
      position: isArabic
        ? "مؤسس ومدير شركة Traffic Digital"
        : "Traffic Digital Founder & CEO",
      email: "peternabil@gmail.com",
      imgSrc: "../images/profile.jpg",
    },
  ];

  return (
    <>
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <div className="text-center mb-10">
          <h3
            className="text-3xl md:text-4xl font-bold text-[#0E3FBD] leading-relaxed"
            dir={isArabic ? undefined : "ltr"}
          >
            {isArabic ? "فريق التقني" : "Technical Team"}
          </h3>
        </div>

        {[...Array(2)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="flex flex-col md:flex-row justify-center items-stretch gap-6 p-4 bg-gray-100 mb-6"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 bg-white border rounded-lg text-center shadow-md"
              >
                <img
                  src={member.imgSrc}
                  alt="profile"
                  className="w-full h-90 object-cover"
                />
                <div className="bg-[#8D9EC9] p-8 h-52">
                  <h2
                    className="text-3xl text-white font-bold mb-5"
                    dir={isArabic ? undefined : "ltr"}
                  >
                    {member.name}
                  </h2>
                  <p
                    className="text-white text-2xl mb-5"
                    dir={isArabic ? undefined : "ltr"}
                  >
                    {member.position}
                  </p>
                  <p className="text-white text-2xl" dir="ltr">
                    {member.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
