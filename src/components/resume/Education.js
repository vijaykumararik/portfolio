import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2019</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Civil engineering"
            subTitle="SDM college of enginnering and tech dharwad (2015 - 2019)"
            result="9.38/10"
            des="The training helped me to understand the realtime projects and implementations."
          />
          <ResumeCard
            title="PUC in science "
            subTitle="HIPU science College (2013 - 2015)"
            result="90.5 %"
            des="Pre universiity course helps us to gain pre knowledge about the technologies, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Maruti Secondary School (2010 - 201)"
            result="80.16 %"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Software Engineer"
            subTitle="Nirvanasoft tech - (2021 - Present)"
            result="Bangalore"
            des="I am in UI developement using REACTJS tool and i worked in hospital management project  "
          />
          <ResumeCard
            title="Mathematics subject matter expert"
            subTitle="Doubtnut - (2020 - 2021)"
            result="Gurgaon"
            des="Iam working on the project that i need to check quality of content developed by experts according to the requirments."
          />
          {/* <ResumeCard
            title="Front-end Developer"
            subTitle=" "
            result=" "
            des=" "
          /> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Education