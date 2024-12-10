import { useLoaderData, useParams } from "react-router-dom";
import googleMap from "../../assets/images/googlemap.png";
import BlackNavbar from "../shared/navbar/BlackNavbar";
import SingleHotel from "../SingleHotel/SingleHotel";

const Places = () => {
  const { id } = useParams();
  const places = useLoaderData();

  const singlePlace = places.find((place) => place.id == id);
  const { title, hotels } = singlePlace;

  //   console.log(hotels);
  return (
    <div className="max-w-7xl mx-auto">
      <BlackNavbar />
      <div className="divider"></div>
      <h2 className="text-2xl font-montserrat font-bold my-8">
        Stay in {title}
      </h2>
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          {hotels.map((hotel) => (
            <SingleHotel key={hotel.hotel_id} hotel={hotel}></SingleHotel>
          ))}
        </div>
        <div>
          <img src={googleMap} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Places;
