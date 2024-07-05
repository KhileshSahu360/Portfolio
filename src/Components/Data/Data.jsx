import { createContext, useState } from "react"
import { useContext } from "react";
import TodoList from '../../assets/Image/TodoList.png'
import Weather from '../../assets/Image/Weather.png'
import News360 from '../../assets/Image/News360.png'
import LibraryManagement from '../../assets/Image/LibraryManagement.png'
import EngineerLink from '../../assets/Image/EngineerLink.png'
import BootstrapIcon from '../../assets/Icon/BootstrapIcon.svg'
import MongoDB from '../../assets/Icon/MongoDB.svg'
import ReactIcon from '../../assets/Icon/React.svg'
import Node from '../../assets/Icon/Node.svg'
import Express from '../../assets/Icon/Express.svg'
import PHP from '../../assets/Icon/PHP.svg'
import HTML from '../../assets/Icon/HTML.svg'
import CSS from '../../assets/Icon/CSS.svg'
import Tailwind from '../../assets/Icon/Tailwind.svg'
import Next from '../../assets/Icon/Next.svg'
import Javascript from '../../assets/Icon/Javascript.svg'
import Adobe from '../../assets/Icon/Adobe.svg'

const gradientBtn = {
    /* font-size: .5rem */
    boxSizing: "border-box",
    fontSize: ".6rem",
    padding: ".8rem 2.2rem",
    borderRadius: "3px",
    border: "none",
    color: "white",
    cursor: "pointer",
    backgroundImage: "linear-gradient(15deg, hsl(327deg 98% 45%) 0%, hsl(321deg 100% 42%) 15%, hsl(315deg 100% 38%) 26%, hsl(305deg 100% 34%) 40%, hsl(292deg 100% 33%) 60%, hsl(277deg 87% 36%) 100%)"
}
const waterBtn = {
  boxSizing: "border-box",
  boxShadow: "-2px -2px 10px 0px rgb(255, 255, 255),3px 2px 10px -3px rgba(0, 0, 0, 0.5)",
  fontSize: ".6rem",
  padding: ".8rem 2.2rem",
  borderRadius: "3px",
  border: "none",
  color: "#08203a",
  cursor: "pointer",
  backgroundImage: "linear-gradient(120deg,hsl(220deg 60% 99%) 0%,hsl(219deg 58% 99%) 13%,hsl(219deg 58% 98%) 24%,hsl(218deg 57% 98%) 34%,hsl(218deg 57% 98%) 42%,hsl(217deg 56% 98%) 49%,hsl(217deg 56% 97%) 56%,hsl(216deg 56% 97%) 61%,hsl(216deg 56% 97%) 66%,hsl(215deg 56% 96%) 71%,hsl(215deg 56% 96%) 75%,hsl(214deg 56% 96%) 79%,hsl(214deg 56% 96%) 83%,hsl(213deg 56% 95%) 86%,hsl(213deg 56% 95%) 88%,hsl(212deg 56% 95%) 91%,hsl(212deg 56% 94%) 93%,hsl(211deg 56% 94%) 95%,hsl(211deg 56% 94%) 97%,hsl(210deg 56% 93%) 99%,hsl(210deg 56% 93%) 100%)"
}

const projectCardData = [
  {
    name : 'Todo List',
    title : 'Todo-List Responsive App',
    descr : 'Introducing a sleek and intuitive to-do list app, designed to help you stay organized and productive. Manage your tasks effortlessly and prioritize your day with ease',
    url : 'https://todolist-hf0t.onrender.com',
    image : TodoList
  },
  {
    name : 'Weather',
    title : 'Weather Responsive App',
    descr : 'Stay ahead of the weather with My Weather App. Seamlessly designed to provide with up-to-date forecasts, detailed weather information. Check Now!',
    url : 'https://weatherbykhilesh.onrender.com',
    image : Weather
  },
  {
    name : 'News360',
    title : 'News360 Responsive App',
    descr : 'Get the latest scoop with our News App. Stay informed with breaking news, personalized articles, and a seamless reading experience, all in one place.Check Now for Free',
    url : 'https://khileshnews360.onrender.com',
    image : News360
  },
  {
    name : 'Library Management',
    title : 'Library Management Responsive App',
    descr : 'Efficiently manage your library with our Library Management System. Keep track of books, borrowers, and transactions seamlessly. Simplify library operations today!',
    url : '',
    image : LibraryManagement
  },
  {
    name : 'Engineer Link',
    title : 'Engineer Link Responsive App',
    descr : 'Engineer Link is the real time social media platform where engineer can connect and collaborate with each others! user can chat with the real time chat app',
    url : 'https://egineerLink.onrender.com',
    image : EngineerLink
  }
]
const accordionData = [
  {
    icon : MongoDB,
    title : 'MongoDB',
    descr : 'sufficient understanding of mongodb, still learning Mongo DB. Skill - 90%.'
  },
  {
    icon : Express ,
    title : 'Express JS',
    descr : 'good knowledge on api creating and express, still learning Express JS with Node JS. Skill - 80%'
  },
  {
    icon : ReactIcon,
    title : 'React JS',
    descr : 'I am good in React. I know almost all concept of React. Skill - 80%'
  },
  {
    icon : Node,
    title : 'Node JS',
    descr : 'I am good on Node JS. Skill - 80%'
  },
  {
    icon : Next,
    title : 'Next JS',
    descr : 'After completing the React I will start learning Next JS Skill - 20%'
  },
  {
    icon : HTML,
    title : 'HTML',
    descr : 'I hava deep understanding in HTML. Skills - 100%'
  },
  {
    icon : CSS,
    title : 'CSS',
    descr : 'I Good in CSS. And i design UI professionaly  Skills - 90%'
  },
  {
    icon : Javascript,
    title : 'Javascript',
    descr : 'I have deep understanding in Javascript and their core concepts with best Practices. Skill - 80% '
  },
  {
    icon : BootstrapIcon,
    title : 'Bootstrap',
    descr : 'I use Bootstrap for enhancing my productivity and reduce time. Skills - 80%'
  },
  {
    icon : Tailwind,
    title : 'Tailwind',
    descr : 'I have good knowledge of tailwind css. currently my latest project designed with Tailwind CSS. Skills - 70%'
  },
  {
    icon : PHP,
    title : 'Php',
    descr : 'I have little-bit knowledge about PHP. but i maked one project(Library Management) in PHP. Skills - 40%'
  },
  {
    icon : Adobe,
    title : 'Video Editing',
    descr : 'I am also Video Editor. I know video editing tools like CAPCUT and many more.'
  }
]

const ButtonContext = createContext();
const ProjectDataContext = createContext();
const SkillsDataContext = createContext();
export const useData = () => useContext(ButtonContext);
export const projectData = () => useContext(ProjectDataContext);
export const skillsData = () => useContext(SkillsDataContext);
const ButtonData = ({children}) =>{
  const [data,setData] = useState({
    gradientBtn,
    waterBtn
  });
  return(
    <>
      <ButtonContext.Provider value={{data,setData}}>
        <ProjectDataContext.Provider value={projectCardData}>
          <SkillsDataContext.Provider value={accordionData}>
            {children}
          </SkillsDataContext.Provider>
        </ProjectDataContext.Provider>

      </ButtonContext.Provider>
    </>
  )
}
export default ButtonData;