import { FaAngleRight } from "react-icons/fa";
const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-percent">
        OFF
        <br />
      <span>  50%</span>
      </div>
      <div className="midle">
        <p>VALIDE: <span>24 APRIL 2036</span></p>
        <h3>Special Offer<span> 50%</span><br/>OFF!</h3>
      </div >
      <div className="right"><FaAngleRight/></div>
    </div>
  );
};

export default Offer;
