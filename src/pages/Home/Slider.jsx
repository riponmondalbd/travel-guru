import { useEffect, useState } from "react";
import SingleSlider from "../SingleSlider/SingleSlider";

const Slider = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch("spots.json")
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);

  return (
    <div className="carousel w-full min-h-[90%]">
      {spots.map((spot) => (
        <SingleSlider key={spot.id} spot={spot}></SingleSlider>
      ))}
    </div>
  );
};

export default Slider;
