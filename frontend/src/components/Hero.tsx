import "../hero.css"
import hero from "../assets/pexels-kindelmedia-6994277.jpg"
const Hero = () => {
    return (
        <div className="container mx-auto">
            <div className="inset-0 absolute -z-10 bg-orange-500 overflow-hidden h-[92vh]">
                <img src={hero} className="mask aspect-square w-auto max-w-[750px] m-auto h-screen absolute right-0 scale-100 lg:scale-150"></img>
            </div>
            <div className="flex lg:items-center h-[75vh] m-auto">
                <div className="flex flex-col gap-12 max-w-md px-4">
                    <h1 className="font-bold text-7xl tracking-tight">Goodness is waiting</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero;