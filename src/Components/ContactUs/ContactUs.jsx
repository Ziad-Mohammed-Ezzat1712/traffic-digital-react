import React, { useContext } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { LanguageContext } from "../../Context/LanguageContext";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const { isArabic } = useContext(LanguageContext);

  // Schema using yup
  const schema = yup.object().shape({
    full_name: yup.string().required(isArabic ? "الاسم مطلوب" : "Full name is required"),
    email: yup
      .string()
      .email(isArabic ? "بريد إلكتروني غير صالح" : "Invalid email")
      .required(isArabic ? "البريد الإلكتروني مطلوب" : "Email is required"),
    phone: yup
      .string()
      .matches(/^01[0-2,5]{1}[0-9]{8}$/, isArabic ? "رقم الهاتف غير صالح" : "Invalid phone number")
      .required(isArabic ? "رقم الهاتف مطلوب" : "Phone number is required"),
    service: yup.string().required(isArabic ? "نوع الخدمة مطلوب" : "Service type is required"),
    message: yup.string().required(isArabic ? "الرسالة مطلوبة" : "Message is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const form = new FormData();
      for (let key in data) {
        form.append(key, data[key]);
      }

   
      console.log("✅ Response:", res.data);
      alert(isArabic ? "تم الإرسال بنجاح" : "Message sent successfully!");
      reset();
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      alert(isArabic ? "حدث خطأ أثناء الإرسال" : "Something went wrong!");
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50 text-right">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-neutral-950 mb-8 text-center">
          {isArabic ? "تواصل معنا" : "Contact Us"}
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              {isArabic ? "الاسم الكامل" : "Full Name"}
            </label>
            <input
              type="text"
              {...register("full_name")}
              placeholder={isArabic ? "ادخل اسمك الكامل" : "Enter your full name"}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <p className="text-red-600 text-sm mt-1">{errors.full_name?.message}</p>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              {isArabic ? "البريد الإلكتروني" : "Email"}
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <p className="text-red-600 text-sm mt-1">{errors.email?.message}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              {isArabic ? "رقم الهاتف" : "Phone Number"}
            </label>
            <input
              type="tel"
              {...register("phone")}
              placeholder="01012345678"
              className="w-full border text-right border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <p className="text-red-600 text-sm mt-1">{errors.phone?.message}</p>
          </div>

          {/* Service */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              {isArabic ? "نوع الخدمة" : "Service Type"}
            </label>
            <input
              type="text"
              {...register("service")}
              placeholder={isArabic ? "مثال: تسويق إلكتروني" : "e.g., Digital Marketing"}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <p className="text-red-600 text-sm mt-1">{errors.service?.message}</p>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              {isArabic ? "الرسالة" : "Message"}
            </label>
            <textarea
              rows="5"
              {...register("message")}
              placeholder={isArabic ? "اكتب رسالتك هنا" : "Write your message here"}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <p className="text-red-600 text-sm mt-1">{errors.message?.message}</p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-neutral-950 border-2 hover:bg-[#000000] hover:text-white font-semibold px-8 py-3 rounded-full transition duration-300"
            >
              {isSubmitting
                ? isArabic
                  ? "جارٍ الإرسال..."
                  : "Sending..."
                : isArabic
                ? "إرسال"
                : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}