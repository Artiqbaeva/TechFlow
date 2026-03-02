"use client";
import Link from "next/link";
import Image from "next/image";
import Insatgram from "../../../public/Instagram.svg";
import LinkedIn from "../../../public/LinkedIn.svg";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t, tNested } = useLanguage();

    return (
        <footer className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F9FAFB] rounded-[2rem] p-6 lg:p-8 flex flex-col lg:flex-row gap-10">

                <div className="bg-[#1C68E1] rounded-3xl p-8 text-white flex flex-col justify-between w-full lg:w-[320px] shrink-0 min-h-[300px]">
                    <div>
                        <h2 className="text-3xl font-medium mb-4">{t("Footer", "title")}</h2>
                        <p className="text-blue-100/90 text-[15px] leading-relaxed max-w-[260px]">
                            {t("Footer", "description")}
                        </p>
                    </div>
                    <div className="flex gap-3 mt-12">

                        <Link href="#" className="w-8 h-8 rounded text-[#1C68E1] bg-white flex items-center justify-center hover:bg-blue-50 transition-colors">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </Link>

                        <Link href="#" className="w-8 h-8 rounded text-[#1C68E1] bg-white flex items-center justify-center hover:bg-blue-50 transition-colors">
                            <Image src={Insatgram} alt="Instagram" width={24} height={24} />
                        </Link>

                        <Link href="#" className="w-8 h-8 rounded text-[#1C68E1] bg-white flex items-center justify-center hover:bg-blue-50 transition-colors">
                            <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
                        </Link>

                    </div>
                </div>


                <div className="flex-1 flex flex-col justify-between pt-6 lg:pt-8 lg:pl-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">

                        <div>
                            <h3 className="text-gray-900 font-bold mb-5 tracking-tight">{tNested("Footer", "links", "product")}</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-[15px] text-gray-500 hover:text-blue-600 transition-colors">{tNested("Footer", "links", "opportunities")}</Link></li>
                                <li><Link href="#" className="text-[15px] text-gray-500 hover:text-blue-600 transition-colors">{tNested("Footer", "links", "tariffs")}</Link></li>
                                <li><Link href="#" className="text-[15px] text-gray-500 hover:text-blue-600 transition-colors">{tNested("Footer", "links", "integrations")}</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-gray-900 font-bold mb-5 tracking-tight">{tNested("Footer", "links", "company")}</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-[15px] text-gray-500 hover:text-blue-600 transition-colors">{tNested("Footer", "links", "about")}</Link></li>
                                <li><Link href="#" className="text-[15px] text-gray-500 hover:text-blue-600 transition-colors">{tNested("Footer", "links", "partners")}</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-gray-900 font-bold mb-5 tracking-tight">{tNested("Footer", "links", "contact")}</h3>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+998712000000" className="text-[15px] text-gray-600 hover:text-blue-600">+998 (71) 200-00-00</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:info@techflow.uz" className="text-[15px] text-gray-600 hover:text-blue-600">info@techflow.uz</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-[14px] text-gray-600 leading-snug pr-4">
                                        {tNested("Footer", "links", "address")}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="mt-16 lg:mt-auto pt-8">
                        <p className="text-[13px] text-gray-500 font-medium">
                            {tNested("Footer", "links", "copyright")}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
