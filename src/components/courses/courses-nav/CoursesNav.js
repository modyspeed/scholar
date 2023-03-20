import "./CoursesNav.css";
const CoursesNav = (props) => {
  return (
    <ul className="coursesNav">
      <li onClick={()=>props.setName("All")}>Show All</li>
      {props.courses.map((cource) => (
        <li
          onClick={()=>props.setName(cource.name)}
          key={cource.id}
        >
          {cource.name}
        </li>
      ))}
    </ul>
  );
};

export default CoursesNav;
