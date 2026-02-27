"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navItems = [
        { name: "Муаммолар", id: "problems" },
        { name: "Модуллар", id: "solutions" },
        { name: "Жараён", id: "workflow" },
        { name: "Боғланиш", id: "contact" },
    ];
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-[72px]">

                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-[22px] font-semibold text-[#0F172A] tracking-tight">TechFlow</span>
                    </Link>

                  
                    <div className="hidden lg:flex items-center gap-8 bg-white border border-gray-100 shadow-sm px-6 py-2 rounded-full absolute left-1/2 -translate-x-1/2">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                
                    <div className="hidden lg:flex items-center gap-5">
                        <div className="flex items-center gap-1 cursor-pointer text-sm font-medium text-gray-700">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            UZ
                        </div>
                        <Link
                            href="#"
                            className="text-sm font-medium text-white bg-[#1463E1] hover:bg-blue-700 px-6 py-2.5 rounded-full transition-colors"
                        >
                            Демо сўраш
                        </Link>
                    </div>

                   
                    <div className="flex lg:hidden items-center gap-3 sm:gap-4">
                        <Link
                            href="#"
                            className="hidden sm:inline-flex text-[14px] font-medium text-white bg-[#1463E1] hover:bg-blue-700 px-6 py-2.5 rounded-full transition-colors"
                        >
                            Демо сўраш
                        </Link>

                        <button
                            className="p-2 rounded-md text-gray-800"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

              
                {mobileOpen && (
                    <div className="lg:hidden absolute top-[76px] right-4 sm:right-6 w-[280px] bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden flex flex-col">
                        <div className="flex flex-col px-4 pt-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="block py-4 text-center text-[15px] font-medium text-[#0F172A] hover:text-[#1463E1] border-b border-gray-100 last:border-0"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-between items-center px-4 py-5 mt-2">
                            <button className="bg-[#1463E1] text-white flex-1 mx-1 py-2 rounded-md text-[14px] font-medium transition hover:bg-blue-700">
                                Ўзб
                            </button>
                            <button className="bg-transparent text-[#0F172A] flex-1 mx-1 py-2 rounded-md text-[14px] font-medium transition hover:bg-gray-50">
                                Рус
                            </button>
                            <button className="bg-transparent text-[#0F172A] flex-1 mx-1 py-2 rounded-md text-[14px] font-medium transition hover:bg-gray-50">
                                Uzb
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
