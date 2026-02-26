import Image from "next/image";
import image1 from "../../../public/Rectangle.svg";
import image2 from "../../../public/Rectangle2.svg";
import image3 from "../../../public/Rectangle3.svg";

const audiences = [
    {
        id: "dealers",
        title: "Диллерлар",
        image: image1,
    },
    {
        id: "autoparks",
        title: "Автопарклар",
        image: image2,
    },
    {
        id: "autoservices",
        title: "Автосервислар",
        image: image3,
    },
];

export default function ForWhom() {
    return (
        <section id="for-whom" className="py-24 bg-[#0B0F19]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">                
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-[32px] sm:text-[36px] font-bold text-white tracking-tight">
                        Кимлар учун?
                    </h2>
                    <p className="mt-4 text-[#8B93A5] font-medium text-[15px] sm:text-base">
                        Биз ҳар қандай миқёсдаги бизнес учун мос келамиз
                    </p>
                </div>
              
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {audiences.map(({ id, title, image }) => (
                        <div
                            key={id}
                            className="group cursor-pointer flex flex-col"
                        >
                         
                            <div className="w-full relative rounded-[20px] overflow-hidden aspect-[16/10] mb-5 border border-white/5 group-hover:border-white/20 transition-all duration-300">
                                <Image
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                />
                              
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 to-transparent pointer-events-none opacity-50"></div>
                            </div>

                            <h3 className="text-start text-[19px] font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                                {title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
