import "./CoursesNav.css";
const CoursesNav = (props) => {
  return (
    <ul className="coursesNav">
      <li>Show All</li>
      {props.courses.map(cource=><li key={cource.id}>{cource.name}</li>)}
    </ul>
  );
};

export default CoursesNav;
