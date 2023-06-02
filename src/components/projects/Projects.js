import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="TIKET BOOKING APPLICATION"
          des=" Developed ticket booking application using reactjs and Api,,json Server by using 
          all reactjs Hooks and concepts,it contains bus booking and flight booking information
          and showing active booking information and user signin and login features "
          src={projectOne}
        />
        <ProjectsCard
          title="BASIC OTT FLATFORM "
          des="Basic OOT flatform to display the movies and movies information and adding new 
          movie to platform and updating movie information ,like and unlike oparation"
          src={projectTwo}
        />
        <ProjectsCard
          title="STUDENT EXM APPLY APPLICATION  "
          des=" The application developed with reactjs ,and springboot ,and mysql.
          in this application student can apply for one perticular exm and admin can 
          see the students applied fot that exm ,and all crud oparations  "
          src={projectThree}
        />
        
        <ProjectsCard
          title="E-commerce Website"
          des=" By reactjs displaying the online shoping products ,and displaying those 
          in user requirments"
          src={projectOne}
        />
       
      </div>
    </section>
  );
}

export default Projects