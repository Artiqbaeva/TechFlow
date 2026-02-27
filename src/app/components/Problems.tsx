export default function Problems() {
    return (
        <section id="problems" className="pt-24  bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Бозор муаммолари
                    </h2>
                    <p className="mt-4 text-gray-500 font-medium">
                        Купгина автосервис ва дуконлар дуч
                        келадиган муаммолар.
                    </p>
                </div>

                <div className="hidden md:block w-full max-w-4xl mx-auto h-[250px] sm:h-[300px] flex items-center justify-center mb-16">
                    <img src="/problems.svg" alt="" />
                </div>

                <div className="grid md:grid-cols-3 gap-8  lg:text-center md:text-left sm:text-left px-4">
                    <div className="space-y-3">
                        <img className="block md:hidden mx-auto" src="/problem1.svg" alt="" />
                        <h3 className="text-lg font-bold text-gray-900">Таъмир буюртмалар йўқолиши</h3>
                        <p className="text-sm lg:text-center md:text-left sm:text-left text-gray-500 leading-relaxed max-w-xs sm:mx-0">
                            Бу кечикиш ва мижоз норозилигига олиб келади.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <img className="block md:hidden mx-auto" src="/problem2.svg" alt="" />
                        <h3 className="text-lg font-bold text-gray-900">Омбор назорати йўқлиги</h3>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs sm:mx-0">
                            Запчастлар ҳисобда йўқолади ва харажат ошиб кетади.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <img className="block md:hidden mx-auto" src="/problem3.svg" alt="" />
                        <h3 className="text-lg font-bold text-gray-900">Инсон омили ва хатолар</h3>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs sm:mx-0">
                            Қўлда ишлаш хатолар ва секинликка олиб келади.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
