import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title=" Software Engineer"
            subTitle="Complted java full stack cource in jspiders"
            result="Bangalore"
            des="I have skills like HTML,CSS JAVASCRIPT ,REACTJS,JAJA,HIBERNATE,SPRINGBOOT,
            and have complete knowledge about the tools like GIT,GITHUB,POSTMAN,VSCODE,ECLIPSE  "
          />
          <ResumeCard
            title="Mathematics subject matter expert"
            subTitle="Doubtnut"
            result="Gurgaon"
            des="Iam working on the project that i need to check quality of content developed by experts according to the requirments."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
         
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
