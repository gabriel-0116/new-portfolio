import Download from "../../assets/LottieJson/download.json"
import Lottie from 'react-lottie'

export const DownloadAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Download
    }

    return <Lottie options= {defaultOptions} width= {30} height= {80} />
}