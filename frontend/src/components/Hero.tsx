import "../hero.css"
import hero from "../assets/pexels-kindelmedia-6994277.jpg"
const Hero = () => {
    return (
        <div className="container mx-auto h-[74vh]">
            <div className="inset-0 absolute -z-10 bg-orange-500 overflow-hidden">
                <img src={hero} className="mask aspect-square max-w-[750px] scale-100 m-auto opacity-75 lg:scale-150"></img>
            </div>
            <div className="flex items-center h-full max-h-[750px] m-auto">
                <div className="flex flex-col gap-12 max-w-md md:max-w-full px-4 md:mx-auto">
                    <h1 className="font-bold text-7xl lg:text-8xl tracking-tight md:text-center text-white">Delivery goodness inside!</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero;