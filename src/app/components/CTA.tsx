import Link from "next/link";
import Image from "next/image";
import Insatgram from "../../../public/Instagram.svg"
import LinkedIn from "../../../public/LinkedIn.svg"
const features = [
    {
        icon: (
            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        title: "Самарадорлик",
        description: "Жараёнлар автоматлашади, вақт ва ресурслар тежалади.",
        offset: "translate-x-0"
    },
    {
        icon: (
            <div className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
            </div>
        ),
        title: "Хавфсизлик",
        description: "Маълумотлар назорат остида ва ишончли ҳимояланган.",
        offset: "lg:-translate-x-8"
    },
    {
        icon: (
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        title: "Масштабланиш",
        description: "Сервисингиз бизнесингиз билан бирга осон кенгаяди.",
        offset: "translate-x-0"
    }
];

export default function CTA() {
    return (
        <section id="contact" className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#F9FAFB] mb-4 rounded-[2rem] p-6 lg:p-16 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                  
                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-gray-900 leading-[1.3] lg:leading-[1.2]">
                            Бизнесингиз учун ягона <br className="hidden lg:block"/> рақамли бошқарув тизими
                        </h2>
                        <p className="mt-6 text-gray-600 text-[15px] sm:text-base leading-relaxed max-w-md">
                            Жараёнларни битта платформадан назорат қилинг. Бепул демо версияга буюртма беринг ва тизим имкониятларини синаб кўринг.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4 items-center">
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-semibold text-white bg-[#1C68E1] hover:bg-blue-700 transition-colors"
                            >
                                Демо версиясига ўтиш
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-semibold text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                Консультация олиш
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:ml-auto w-full max-w-[420px]">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-start gap-4 transform transition-all duration-300 ${feature.offset}`}
                            >
                                <div className="mt-1 shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[17px] font-bold text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-1.5 text-[13px] text-gray-500 leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                  <div className="bg-[#F9FAFB] rounded-[2rem] p-6 lg:p-8 flex flex-col lg:flex-row gap-10">
                   
                    <div className="bg-[#1C68E1] rounded-3xl p-8 text-white flex flex-col justify-between w-full lg:w-[320px] shrink-0 min-h-[300px]">
                        <div>
                            <h2 className="text-3xl font-medium mb-4">TechFlow</h2>
                            <p className="text-blue-100/90 text-[15px] leading-relaxed max-w-[260px]">
                                Автосервис ва эҳтиёт қисмларни бошқариш учун замонавий платформа
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
                                <h3 className="text-gray-900 font-bold mb-5 tracking-tight">Маҳсулот</h3>
                                <ul className="space-y-4">
                                    <li><Link href="#" className="text-[15px] text-gray-500 hover:text-blue-600 transition-colors">Имкониятлар</Link></li>
                                    <li><Link href="#" className="text-[15px] text-gray-500 hover:text-blue-600 transition-colors">Тарифлар</Link></li>
                                    <li><Link href="#" className="text-[15px] text-gray-500 hover:text-blue-600 transition-colors">Интеграциялар</Link></li>
                                </ul>
                            </div>
                           
                            <div>
                                <h3 className="text-gray-900 font-bold mb-5 tracking-tight">Компания</h3>
                                <ul className="space-y-4">
                                    <li><Link href="#" className="text-[15px] text-gray-500 hover:text-blue-600 transition-colors">Биз ҳақимизда</Link></li>
                                    <li><Link href="#" className="text-[15px] text-gray-500 hover:text-blue-600 transition-colors">Ҳамкорлик</Link></li>
                                </ul>
                            </div>
                           
                            <div>
                                <h3 className="text-gray-900 font-bold mb-5 tracking-tight">Боғланиш</h3>
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
                                            55, Боғиравон кўчаси, Юнусобод тумани, Тошкент
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                      
                        <div className="mt-16 lg:mt-auto pt-8">
                            <p className="text-[13px] text-gray-500 font-medium">
                                © 2026 TechFlow. Барча ҳуқуқлар ҳимояланган.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
