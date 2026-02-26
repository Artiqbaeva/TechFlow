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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900 tracking-tight">TechFlow</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 bg-white border border-gray-100 shadow-sm px-6 py-2 rounded-full">
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


                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-1 cursor-pointer text-sm font-medium text-gray-700">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            UZ
                        </div>
                        <Link
                            href="#"
                            className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full transition-colors shadow-md shadow-blue-500/20"
                        >
                            Демо олиш
                        </Link>
                    </div>


                    <button
                        className="md:hidden p-2 rounded-md text-gray-600"
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


                {mobileOpen && (
                    <div className="md:hidden pb-4 pt-2 border-t border-gray-100">
                        {["Имкониятлар", "Модуллар", "Нархлари", "Боғланиш"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block px-2 py-2 text-sm text-gray-700 hover:text-blue-600 font-medium"
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 mt-3 px-2">
                            <div className="flex items-center gap-1 cursor-pointer text-sm font-medium text-gray-700 py-2">
                                UZ ▼
                            </div>
                            <Link href="#" className="text-sm font-semibold text-center text-white bg-blue-600 px-4 py-2.5 rounded-full shadow-md">
                                Демо олиш
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
