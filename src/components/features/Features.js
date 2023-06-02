import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web application development"
          des="Creating responsive web design using reactjs and javascript concepts 
          and Using reactjs library making it more attractive"
         
        />
        <Card
          title="Good understanding of javascript and reactjs"
          des="Have complete knowledge of javascript concepts like destructuring 
          objects array methods ,promise and Dom concepts and in reactjs i have very good 
          understading of reactjs hooks ,virtual dom concepts ,react router concept,and making 
          more responsive web development"
          icon={<AiFillAppstore />}
        />
        <Card
          title=" HTML/CSS design and  analaysis"
          des=" have knowledge of all css properties like display position and box modeling concepts
          and making good designs  "
          icon={<SiProgress />}
        />
        <Card
          title="Java programing"
          des="Good understanding about java opps and exceptions concepts "
          icon={<SiAntdesign />}
        />
        <Card
          title="Hibernate/mysql database"
          des="Have good knowledge Creating entity class and add the properties into database~"
          icon={<FaMobile />}
        />
        <Card
          title="Spring boot application developments"
          des="Good understanding about springboot architecture ,Developing restfull apis using spring boot tool
          understanding of http methods,and have knowledege of how to work with postman "
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features