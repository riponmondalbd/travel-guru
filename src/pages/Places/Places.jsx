import { useLoaderData, useParams } from "react-router-dom";
import BlackNavbar from "../shared/navbar/BlackNavbar";

const Places = () => {
  const { id } = useParams();
  const places = useLoaderData();

  const singlePlace = places.find((place) => place.id == id);
  const { title, hotels } = singlePlace;

  console.log(hotels);
  return (
    <div className="max-w-7xl mx-auto">
      <BlackNavbar />
      <h2>Stay in {title}</h2>
    </div>
  );
};

export default Places;
