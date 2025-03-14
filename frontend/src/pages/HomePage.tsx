import { Card } from "@/components/ui/card";
import landing from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <Card className="py-8 flex flex-col gap-5 text-center -mt-10">
                <h2>Order delivery or pickup from restaurants near you</h2>
            </Card>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landing}></img>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">Order takeaway even faster ordering</span>
                    <span>Download Merneats Apps for faster ordering</span>
                    <img src={appDownloadImage}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;