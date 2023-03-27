import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Courses from "./sections/courses/Courses";
import Events from "./sections/events/Events";
import Home from "./sections/home/Home";
import Register from "./sections/register/Register";
import Team from "./sections/team/Team";


function App() {
  return (
    <>
    <Header/>
    <Home/>
      <Courses />
      <Team />
      <Events />
      <Register />
      <Footer />
    </>
  );
}

export default App;
