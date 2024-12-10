import { FaStar } from "react-icons/fa6";

const SingleHotel = ({ hotel }) => {
  const {
    hotel_id,
    hotel_name,
    hotel_picture,
    guest,
    bedrooms,
    beds,
    baths,
    special_facility,
    ratings,
    cost_per_night,
    total_cost,
  } = hotel;
  return (
    <div className="grid md:grid-cols-2 gap-[30px] mb-[43px]">
      <div>
        <img className="rounded-[5px]" src={hotel_picture} alt="" />
      </div>
      <div className="space-y-3 px-3 md:px-0">
        <h2 className="font-montserrat text-lg font-medium text-[#000000]">
          {hotel_name}
        </h2>
        <div className="flex gap-2 text-base text-[#6A6A6A] font-montserrat font-normal">
          <p>{guest} guests</p>
          <p>{bedrooms} bedrooms</p>
          <p>{beds} beds</p>
          <p>{baths} baths</p>
        </div>
        <p className="text-base text-[#6A6A6A] font-montserrat font-normal">
          {special_facility[0]}
        </p>
        <p className="text-base text-[#6A6A6A] font-montserrat font-normal">
          {special_facility[1]}
        </p>
        <div className="flex gap-[30px]">
          <p className="flex items-center gap-2 text-base font-montserrat">
            <FaStar className="text-[#FFAF38]" />
            <span className="font-medium text-[#000000]">{ratings}</span>
          </p>
          <p className="font-montserrat text-lg">
            <span className="font-medium text-[#000000]">
              ${cost_per_night}/
            </span>
            <span className="font-light">night</span>
          </p>
          <p className="text-base font-montserrat font-light text-[#898989]">
            ${total_cost} total
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
