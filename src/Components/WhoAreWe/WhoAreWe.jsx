import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext'; // عدل المسار حسب مشروعك
import style from "./WhoAreWe.module.css" 
import MyClints from '../My-Clints/My-Clints'
import InfoSection from '../InfoSection/InfoSection'
import OurExperience from '../OurExperience/OurExperience'
import TechnicalTeam from '../TechnicalTeam/TechnicalTeam';
import MarketingTeam from '../MarketingTeam/MarketingTeam';

export default function WhoAreWe() {
  const { isArabic, toggleLanguage } = useContext(LanguageContext);

  // نصوص بالعربي و بالإنجليزي
  const texts = {
    title: isArabic ? 'من نحن' : 'Who Are We',
    subtitle: isArabic ? 'يسعدنا ان تتعرف علينا' : 'We are happy to introduce ourselves',
    companyTitle: isArabic ? 'من هي شركة Traffic Digital' : 'Who is Traffic Digital',
    points: isArabic ? [
      { icon: "fa-users", text: "قوتنا في عملائنا" },
      
      { icon: "fa-bullhorn", text: "فريقنا " },
    ] : [
      { icon: "fa-users", text: "Our strength is our clients" },
      { icon: "fa-lightbulb", text: "Technical Team" },
      { icon: "fa-bullhorn", text: "Marketing Team" },
    ],
    aboutCompany: isArabic 
      ? `شركتنا نشأت في ظل عصر التكنولوجيا عام 2025، هذا الذي جعل لها شخصية متفرده ...`
      : `Our company was established in the era of technology in 2025, which gave it a unique personality ...`,
    readyText: isArabic ? 'هل أنت مستعد للعمل معنا؟' : 'Are you ready to work with us?',
    startButton: isArabic ? 'ابدأ الأن' : 'Start Now',
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="lg:w-1/2 space-y-9">
          <div className="space-y-9 text-right w-full">
            <h1 dir={isArabic ? undefined : "ltr"} className="text-5xl md:text-5xl mb-[50px] font-bold leading-snug">
              {texts.title.split(' ').map((word, i) => 
                word === 'Traffic' ? <span key={i} className="text-blue-600">{word}</span> : word + ' '
              )}
            </h1>
            <p dir={isArabic ? undefined : "ltr"} className="text-xl text-gray-600 w-full leading-loose">{texts.subtitle}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg max-w-md w-full">
            <h1 dir={isArabic ? undefined : "ltr"} className="text-xl text-right font-bold mb-4">{texts.companyTitle}</h1>

            {texts.points.map((point, i) => (
              <div key={i} className="flex items-center gap-3 my-3">
                <i className={`fa-solid ${point.icon} text-black text-2xl`}></i>
                <span dir={isArabic ? undefined : "ltr"} className="font-semibold text-base">{point.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-80 h-80 max-w-md">
          <div className="absolute inset-0 bg-[#000000] rounded-full translate-x-8"></div>
          <img
            src="../images/who are we.jpg"
            alt="team-work"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-full -translate-x-4 z-10 shadow-lg transition-transform duration-500"
          />
        </div>
      </section>

      <section className="bg-[#E3E3FA66] py-16 px-4 max-w-7xl mx-auto text-center">
        <div className="text-center mb-10">
          <h2 dir={isArabic ? undefined : "ltr"} className="text-3xl md:text-4xl font-bold leading-relaxed">{texts.companyTitle}</h2>
        </div>
        
        <p dir={isArabic ? undefined : "ltr"} className="max-w-[1000px] mx-auto text-gray-700 text-base leading-loose mt-6">
          {texts.aboutCompany}
        </p>
      </section>

      <MyClints />
      <InfoSection />
      <OurExperience />

      <div
        className="max-w-xs mx-auto bg-[#8D9EC9] p-4 text-center rounded-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src="/images/profile2.jpg"
          alt="profile"
          className="rounded-full mx-auto w-40 h-40 object-cover"
        />
        <div className="p-6">
          <h2 dir={isArabic ? undefined : "ltr"} className="text-3xl text-white font-bold mb-3">Peter Nabil</h2>
          <p dir={isArabic ? undefined : "ltr"} className="text-white text-xl mb-3">Traffic Digital Founder & CEO</p>
          <p dir={isArabic ? undefined : "ltr"} className="text-white text-lg mb-1">+20126951644</p>
          <p dir={isArabic ? undefined : "ltr"} className="text-white text-lg">peternabil@gmail.com</p>
        </div>
      </div>

     
      <MarketingTeam />

      <section className={`text-white bg-gradient-to-br from-neutral-950 to-neutral-700 my-7 py-16 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between rounded-xl text-center lg:text-left`}>
        <h2 dir={isArabic ? undefined : "ltr"} className="text-3xl md:text-4xl font-bold leading-relaxed lg:flex-none lg:text-left lg:w-auto">
          {texts.readyText}
        </h2>

        <button
          className="font-bold bg-white text-black border border-white rounded-full px-8 py-2 hover:bg-blue-600 hover:text-black transition mt-6 lg:mt-0"
          type="button"
          onClick={toggleLanguage} // هنا زرار يبدل اللغة عند الضغط
        >
          {texts.startButton}
        </button>
      </section>
    </>
  );
}
