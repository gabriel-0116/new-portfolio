import Up from "../../assets/LottieJson/up.json"
import Lottie from 'react-lottie'

export const UpAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Up,
    }

    return <Lottie options= {defaultOptions} width={40} height= {40} />
}