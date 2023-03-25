
import './App.css';
import Footer from './components/footer/Footer';
import Courses from './sections/courses/Courses';
import Events from './sections/events/Events';
import Register from './sections/register/Register';
import Team from './sections/team/Team';



function App() {
  return (
    <>
    <Courses/>
    <Team/>
    <Events/>
    <Register/>

     <Footer/>
    </>
  );
}

export default App;
