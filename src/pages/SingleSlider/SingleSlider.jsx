import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingleSlider = ({ spot }) => {
  const { title, description, picture, id } = spot;

  //   console.log(id, id);
  //   console.log(`slider${id}`);
  //   console.log(`#slider${id + 1}`);

  //   console.log(`#slider${id}` == `#slider${3}` ? `#slider${1}` : "o");
  //   console.log(`#slider${id}` == `#slider${1}` ? `#slider${3}` : "o");

  return (
    <div
      id={`slider${id}`}
      className="carousel-item relative w-full text-base-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 mt-2 md:mt-40 px-2 lg:px-0">
        <div>
          <h2 className="text-[80px] lg:text-[99px] font-bebas-neue font-normal">
            {title}
          </h2>
          <p>{description}</p>
          <Link to={`/bookings/${id}`}>
            <button className="mt-[26px] flex items-center gap-[10px] text-[#000000] font-montserrat font-medium text-base bg-[#F9A51A] py-3 px-[29px] rounded-[5px]">
              Booking <FaArrowRightLong />
            </button>
          </Link>
        </div>
        <div className="mb-24 flex justify-center">
          <img
            className="h-[300px] md:h-[416px] border-[4px] border-[#FBBC04]  rounded-[25px]"
            src={picture}
            alt=""
          />
        </div>
      </div>
      <div className="absolute left-40 md:left-2/3 gap-3 bottom-0 flex -translate-y-1/2 transform justify-between">
        <a
          href={
            `#slider${id}` == `#slider${1}` ? `#slider${3}` : `#slider${id - 1}`
          }
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href={
            `#slider${id}` == `#slider${3}` ? `#slider${1}` : `#slider${id + 1}`
          }
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

SingleSlider.propTypes = {
  spot: PropTypes.shape({
    title: PropTypes.node,
    description: PropTypes.node,
    picture: PropTypes.node,
    id: PropTypes.node,
  }),
};

export default SingleSlider;
