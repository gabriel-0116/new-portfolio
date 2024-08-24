import Award from "../../assets/LottieJson/award.json"
import Lottie from 'react-lottie'

export const AwardAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Award,
    }

    return <Lottie options= {defaultOptions} width={200} height= {100} />
}