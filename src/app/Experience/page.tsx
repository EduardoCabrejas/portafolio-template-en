import React, { FC } from "react";

const ExperiencePage: FC = () => {
  return (
    <>
      <h1 className="title mb-4">Experience</h1>
      <div className="relative overflow-hidden bg-opacity-wrapper flex flex-col rounded-xl border-2 border-[var(--borderColor)]">
        <hgroup className="p-4 relative z-10">
          <h1 className="redact-title">
            Full Stack Developer - Truckers Talent Inc.
          </h1>
          <h2 className="redact-sub-title">From Mar. 2025 to present.</h2>
          <p className="redact">
            I am developing a job board for this start-up company, dedicated to
            the U.S. and its logistics industry. I apply technologies such as
            JavaScript, AWS S3 Bucket, Digital Ocean, React.js, Redux,
            Bootstrap, MUI, Node.js, PostgreSQL, among others.
          </p>
        </hgroup>
        <hgroup className="p-4 relative z-10">
          <h1 className="redact-title">Full Stack Developer - Freelancer</h1>
          <h2 className="redact-sub-title">From Sept. 2024 to Feb. 2025.</h2>
          <p className="redact">
            I developed a web management system for a client&apos;s hardware
            store, using technologies such as .NET, C#, HTML, CSS, and
            JavaScript. You can view the result and its repository in the{" "}
            <strong>Projects</strong> section.
          </p>
        </hgroup>
      </div>
    </>
  );
};

export default ExperiencePage;
