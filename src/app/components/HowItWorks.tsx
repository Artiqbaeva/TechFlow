"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function HowItWorks() {
    const { t } = useLanguage();

    const steps = [
        {
            id: "1",
            titleKey: "step1",
            descKey: "step1_desc",
            iconColor: "bg-orange-400",
            strokeColor: "text-orange-400/70",
            icon: (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            ),
        },
        {
            id: "2",
            titleKey: "step2",
            descKey: "step2_desc",
            iconColor: "bg-[#F33959]",
            strokeColor: "text-[#F33959]/70",
            icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M8 12h8" />
                    <rect x="3" y="14" width="4" height="7" rx="1" fill="white" stroke="none" />
                    <rect x="10" y="8" width="4" height="13" rx="1" fill="white" stroke="none" />
                    <rect x="17" y="4" width="4" height="17" rx="1" fill="white" stroke="none" />
                </svg>
            ),
        },
        {
            id: "3",
            titleKey: "step3",
            descKey: "step3_desc",
            iconColor: "bg-green-500",
            strokeColor: "text-green-500/70",
            icon: (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
        },
        {
            id: "4",
            titleKey: "step4",
            descKey: "step4_desc",
            iconColor: "bg-yellow-400",
            strokeColor: "text-yellow-400/70",
            icon: (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM4 18V6h16v12H4zm3-7a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zm-5 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
            ),
        },
        {
            id: "5",
            titleKey: "step5",
            descKey: "step5_desc",
            iconColor: "bg-blue-500",
            strokeColor: "text-blue-500/70",
            icon: (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="workflow" className="py-24 bg-[#0B0F19]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-20 text-white">
                    <h2 className="text-[32px] sm:text-[36px] font-bold tracking-tight">
                        {t("Workflow", "title")}
                    </h2>
                    <p className="mt-4 text-[#8B93A5] font-medium text-[15px] sm:text-base leading-relaxed">
                        {t("Workflow", "description")}
                    </p>
                </div>


                <div className="hidden lg:flex justify-between relative mt-16 mb-24 px-8">
                    {steps.map((step) => (
                        <div key={step.id} className="relative flex-1 flex flex-col items-center">


                            <div className="absolute top-4 left-0 w-full h-24 overflow-hidden pointer-events-none">
                                <svg fill="none" className={`w-full h-[200%] ${step.strokeColor} opacity-50`} stroke="currentColor" strokeWidth="2" strokeDasharray="6 6">
                                    <ellipse cx="50%" cy="100%" rx="50%" ry="100%" />
                                </svg>
                            </div>


                            <div className={`relative z-10 w-11 h-11 rounded-xl ${step.iconColor} flex items-center justify-center shadow-lg shadow-${step.iconColor}/20`}>
                                {step.icon}
                            </div>


                            <div className="relative z-10 mt-[80px] w-[26px] h-[26px] rounded-full bg-[#374151] flex items-center justify-center border-2 border-[#1E293B]">
                                <span className="text-white text-[11px] font-bold">{step.id}</span>
                            </div>


                            <div className="mt-5 flex flex-col items-center text-center">
                                <h3 className="text-white font-bold text-[17px] tracking-wide mb-2">
                                    {t("Workflow", step.titleKey)}
                                </h3>
                                <p className="text-[#8B93A5] text-[13px] leading-relaxed max-w-[160px]">
                                    {t("Workflow", step.descKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:hidden grid sm:grid-cols-2 gap-10 relative">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center text-center">
                            <div className={`w-14 h-14 rounded-2xl ${step.iconColor} flex items-center justify-center shadow-lg shadow-${step.iconColor}/20 mb-6`}>
                                {step.icon}
                            </div>
                            <div className="w-[26px] h-[26px] mb-4 rounded-full bg-[#374151] flex items-center justify-center border-2 border-[#1E293B]">
                                <span className="text-white text-[11px] font-bold">{step.id}</span>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">
                                {t("Workflow", step.titleKey)}
                            </h3>
                            <p className="text-[#8B93A5] text-sm max-w-[200px]">
                                {t("Workflow", step.descKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
