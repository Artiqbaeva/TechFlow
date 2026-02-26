"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container  h-screen bg-[#F9FAFB]">
      <div className="relative max-w-7xl mx-auto h-full px-6 flex flex-col">


        <div className="relative z-10 pt-24 flex-100 max-w-[620px]">
          <h1 className="text-[36px] leading-[46px] font-semibold text-[#0F172A]">
            Автосервис ва эҳтиёт қисмларни бошқариш учун{" "}
            <span className="text-[#2563EB]">ақлли платформа</span>
          </h1>

          <p className="mt-6 text-[16px] text-[#475569]">
            Автосервис учун тўлиқ рақамли автоматлаштириш —
            диагностикадан тортиб тўлов ва мижозни ушлаб қолишгача.
          </p>

          <div className="mt-10 flex md:flex-row flex-col gap-5 sm:flex-col ">
            <Link
              href="#"
              className="bg-[#1463E1] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-full font-medium shadow-lg transition"
            >
              Демо версиясига ўтиш
            </Link>

            <Link
              href="#"
              className="bg-white border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition"
            >
              Консультация олиш
            </Link>
          </div>
        </div>


        <div className="flex-1 flex items-end justify-end "
        style={{
          backdropFilter: "blur(70px)",
          
        }}>
          <video
            src="/videocar.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[1080px] absolute object-contain"
          />
        </div>

      </div>
    </section>
  );
}