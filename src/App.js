import "./styles/App.scss";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

//project images
import shopApp from "./assets/shopp-app.png";
import memoryCard from "./assets/memory-card.png";

const NAME = "John Doe";
const PROJECTS = [
  {
    name: "Shop App",
    desc: "A front end fortnite store built with React, React Router, and CSS. The store allows users to browse, add, and remove items from their cart.",
    technologies: "React, React Router, SCSS",
    date: "2022",
    previewUrl: "https://faceyage.github.io/shopping-cart/",
    srcUrl: "https://github.com/faceyage/shopping-cart",
    imgUrl: shopApp,
  },
  {
    name: "Memory Card",
    desc: "Memory Card game you can play in your browser!",
    technologies: "React, html scss, javacsript",
    date: "2022",
    previewUrl: "https://faceyage.github.io/memory-card/",
    srcUrl: "https://github.com/faceyage/memory-card",
    imgUrl: memoryCard,
  },
];

function App() {
  return (
    <div className="App">
      {/* <Nav name={NAME} /> */}
      <main>
        <Intro name={NAME} />
        <Projects projects={PROJECTS} />
        <About name={NAME} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
