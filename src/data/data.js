import AwesomeBook from "../Assets/projects/awesome-book.png";
import CarValley from "../Assets/projects/car-valley.png";
import MathMagician from "../Assets/projects/math-magician.png";
import SpaceTravellers from "../Assets/projects/space-travellers.png";
import TodoList from "../Assets/projects/todo.png";
import Bookstore from "../Assets/projects/bookstore.png";
import CovidStat from "../Assets/projects/covid-stat.png";

const data = [
  {
    id: 1,
    name: "Bookstore",
    image: Bookstore,
    github: "https://github.com/Ibizugbe/bookstore",
    live: "https://book-store-97.netlify.app/",
    description:
      "Bookstore is an SPA made for ethusiastic readers. it is a content management app that helps you track your progress on your reading journey. It is built using React.js",
    skills: ["HTML", "CSS", "Redux", "React"],
  },
  {
    id: 2,
    name: "covid-19-Tracker",
    image: CovidStat,
    github: "https://github.com/Ibizugbe/covid-19-Tracker",
    live: "https://covid19-tracker-97.netlify.app/",
    description:
      "This is a web application built with react and redux. It uses an API to get covid statitics in African countries and renders it on the page.",
    skills: ["Bootstrap", "Redux", "React"],
  },
  {
    id: 3,
    name: "MathMagician",
    image: MathMagician,
    github: "https://github.com/Ibizugbe/math-Magician",
    live: "https://math-magician-97.netlify.app/",
    description:
      "This is a simple calculator app that performs simple mathematical calculations and also gives you mathematical quotes to get inspired.",
    skills: ["Bootstrap", "Redux", "React", "Animate.css"],
  },
  {
    id: 4,
    name: "AwesomeBooks",
    image: AwesomeBook,
    github: "https://github.com/Ibizugbe/awesome-book-ES6",
    live: "https://ibizugbe.github.io/awesome-book-ES6/",
    description:
      "Awesome books is an app where you can add and remove list books you are currently reading. This app is built with the latest ES6 technology.",
    skills: ["HTML", "CSS", "JavaScript (Vanilla)"],
  },
  {
    id: 5,
    name: "CarValley",
    image: CarValley,
    github: "https://github.com/Ibizugbe/car-valley-backend",
    live: "/",
    description:
      "Car valley is a full-stack web application that allows its users to book cars online, the frontend of the application was built with React js and Redux and we used Ruby on Rails in the backend to be able to generate at the end an API that the frontend uses",
    skills: ["HTML", "CSS", "React", "Redux", "Ruby", "Rails"],
  },
  {
    id: 6,
    name: "SpaceTravellers",
    image: SpaceTravellers,
    github: "https://github.com/Ibizugbe/space-travellers",
    live: "https://space-travellers-97.netlify.app/",
    description:
      "This application works with real live data from the SpaceX API. It was build for a company that provides commercial and scientific space travel services. It allows users to book rockets and join selected space missions.",
    skills: ["Bootstrap", "React", "Redux"],
  },
  {
    id: 7,
    name: "TodoList",
    image: TodoList,
    github: "https://github.com/Ibizugbe/Todo-list-vanillaJS",
    live: "https://ibizugbe.github.io/Todo-list-vanillaJS/",
    description:
      "A 'To-do list' is a tool that helps to organize your daily activities. It lists the tasks you need to get done. You can add, edit and it also allows you to check them when they are completed.",
    skills: ["HTML", "CSS", "Javascript(vanilla)"],
  },
];

export default data;
