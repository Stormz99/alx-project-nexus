import Image from "next/image";


const Hero = () => {
    return (
        <section className="relative w-full min-h-screen">
            <Image
                src="/images/hero.jpg"
                alt="Hero image"
                fill
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/30">
                <div className="w-1/2 h-full p-4 flex flex-col justify-center space-y-3">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        Your Style, Your Store Thousands of Options Updated Daily
                    </h1>
                    <p className="max-w-lg">
                        Hate missing out on the best prices? We drop exclusive discounts daily — grab yours before the timer runs out.
                    </p>
                </div>
            </div>
        </section>
    )
}


export default Hero;