import Image from "next/image";
import profile from "@/assets/images/profile 0.png";

const AboutMe: React.FC = () => {
  return (
    <>
        <div className="flex flex-col md:grid grid-cols-2 gap-x-4 items-center m-auto">
          <div className="overflow-hidden">
            <h1 className="title">About Me</h1>
            <p className="text">
              I am a Full-Stack Developer, specialized in Front-End, passionate
              for facing challenges in the development of websites and projects.
              I excel at creating user interfaces (UI) and
              engaging user experiences (UX), ensuring a fluid and memorable interaction on every tour.
              <br />
              I am committed to continuous improvement, focusing on solving
              problems accurately and quickly, renewing the visual and
              complying with the objectives established by the company. {" "}
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={profile}
              alt="Profile Picture"
              className="profile"
            />
          </div>
        </div>
    </>
  );
};

export default AboutMe;
