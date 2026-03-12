"use client";

import { useLanguage } from "../context/LanguageContext";
import { useEffect } from "react";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode?: "demo" | "consultation";
}

export default function DemoModal({ isOpen, onClose, mode = "demo" }: DemoModalProps) {
    const { t } = useLanguage();
    const titleKey = mode === "consultation" ? "consultation_title" : "title";


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white rounded-[16px] w-full max-w-[536px] p-[20px] lg:p-[32px] relative shadow-xl">

                <div className="flex justify-between items-center mb-[20px]">
                    <h2 className="text-[20px] md:text-[24px] leading-[32px] font-semibold text-[#030712] ">
                        {t("Modal", titleKey)}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-[#030712] rounded-full bg-[#F3F4F6] hover:text-gray-600 transition-colors p-[12px]  "
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <form className="flex flex-col gap-5" onSubmit={(e) => {
                    e.preventDefault();
                    onClose();
                }}>
                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] md:text-[16px] font-regular tracking-[0.02em] leading-[22px] text-[#364153]">
                            {t("Modal", "name")}
                        </label>
                        <input
                            type="text"
                            placeholder={t("Modal", "name_placeholder")}
                            className="w-full tracking-[0.02em] px-[20px] py-[12px] rounded-[32px] bg-[#F3F4F6] border-1 border-[#E5E7EB] text-[14px] md:text-[16px] text-[#030712] placeholder-[#6A7282] focus:outline-none focus:bg-[#F3F4F6]"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] md:text-[16px] font-regular tracking-[0.02em] leading-[22px] text-[#364153]">
                            {t("Modal", "phone")}
                        </label>
                        <input
                            type="tel"
                            placeholder={t("Modal", "phone_placeholder")}
                            className="w-full tracking-[0.02em] px-[20px] py-[12px] rounded-[32px] bg-[#F3F4F6] border border-[#E5E7EB] text-[14px] md:text-[16px] text-[#030712] placeholder-[#6A7282] focus:outline-none focus:bg-[#F3F4F6]"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] md:text-[16px] font-regular tracking-[0.02em] leading-[22px] text-[#364153]">
                            {t("Modal", "company")}
                        </label>
                        <input
                            type="text"
                            placeholder={t("Modal", "company_placeholder")}
                            className="w-full tracking-[0.02em] px-[20px] py-[12px] rounded-[32px] bg-[#F3F4F6] border border-[#E5E7EB] text-[14px] md:text-[16px] text-[#030712] placeholder-[#6A7282] focus:outline-none focus:bg-[#F3F4F6]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-[32px] lg:mt-3 bg-[#1463E1] text-white font-medium py-[13px] rounded-[32px] transition-colors text-[16px] leading-[20px] "
                    >
                        {t("Modal", "submit")}
                    </button>
                </form>
            </div>
        </div>
    );
}
