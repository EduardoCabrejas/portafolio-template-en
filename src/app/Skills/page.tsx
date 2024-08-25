import Carousel from "@/components/Carousel/Carousel";
import { imagesArray } from "@/components/Carousel/utils/utils";
import { EmblaOptionsType } from "embla-carousel";

const carouselOptions: EmblaOptionsType = {
    loop: true,
};

const Skills: React.FC = () => {
    return (
        <>
        <div className="area">
            <h1 className="title">Skills</h1>
            <p className="text">During my period of study, I have gained an in-depth knowledge of various technologies and tools. However, I am still constantly looking for new opportunities to learn and apply what I am discovering through professional networks and developer communities. I am confident in my ability and accuracy in handling the following:</p>
            <div className="mt-4">
                <Carousel slides={imagesArray} options={carouselOptions}/>
            </div>
        </div>
        </>
    )
}

export default Skills;