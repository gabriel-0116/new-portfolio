import Education from "../../assets/LottieJson/education.json"
import Lottie from 'react-lottie'

export const EducationAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Education
    }

    return <Lottie options= {defaultOptions} width= {200} height= {100} />
}