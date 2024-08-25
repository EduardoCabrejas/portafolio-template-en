"use client";
import { useTheme } from "@/context/themeContext";
import VideoArea from "@/components/VideoArea/index";
import gitH from '@/assets/icons/1 GitHub.png'
import Image from "next/image";

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light' ? 'redirButtonLight' : 'redirButtonDark';

    return (
        <>
        <div className="area">
            <h1 className="title">Projects</h1>
            <p className="text">During my period of study, I have gained an in-depth knowledge of various technologies and tools. However, I am still constantly looking for new opportunities to learn and apply what I am discovering through professional networks and developer communities. I am confident in my ability and accuracy in handling the next:</p>
            <div className="mt-8">
                <VideoArea/>
            </div>
            <div className="mt-8 flex flex-col justify-center md:grid grid-cols-[70%_30%] gap-4 items-center">
            <p className="text">For those who are interested and want to know in detail about my projects, I leave you the link about my GitHub profile here:</p>
            <button 
          onClick={() => window.open("https://github.com/EduardoCabrejas", "_blank")} 
          className={buttonClass}>
            <Image src={gitH} alt="GitHub Icon" className="w-10 h-10 rounded-full" />
          Go to GitHub
        </button>
        </div>
        </div>
        </>
    )
}

export default Projects;