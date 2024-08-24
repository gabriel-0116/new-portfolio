import Skills from "../../assets/LottieJson/skills.json"
import Lottie from 'react-lottie'

export const SkillsAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Skills,
    }

    return <Lottie options= {defaultOptions} width={200} height= {100} />
}