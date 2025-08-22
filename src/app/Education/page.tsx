import React, { FC } from "react";

const EducationPage: FC = () => {
  return (
    <>
      <h1 className="title mb-4">Education</h1>
      <div className="relative overflow-hidden bg-opacity-wrapper flex flex-col rounded-xl border-2 border-[var(--borderColor)]">
        <hgroup className="p-4 relative z-10">
          <h1 className="redact-title">Full Stack Web Developer - Soy Henry</h1>
          <h2 className="redact-sub-title">Mar. 2024 - Aug. 2024</h2>
          <p className="redact">
            Full-Time professional virtual course of approximately 5 months, 800
            hours.{" "}
            <a
              className="link"
              href="https://drive.google.com/file/d/17Y6COWjL-kX0pcAgwSqLirB8j6erb6Q2/view?usp=sharing"
              target="_blank"
            >
              Here&apsos;s my certificate.
            </a>
            .
          </p>
        </hgroup>
        <hgroup className="p-4 relative z-10">
          <h1 className="redact-title">
            Agricultural Technical High School - C.E.P.T. N° 20
          </h1>
          <h2 className="redact-sub-title">Mar. 2011 - Dic. 2016</h2>
          <p className="redact">
            Secondary studies completed at this alternating school, with a focus
            on Agriculture. I lived and studied one week at the school. On the
            Friday of that week, I would go back home and waited about two weeks
            to travel back to school.
          </p>
        </hgroup>
      </div>
    </>
  );
};

export default EducationPage;
