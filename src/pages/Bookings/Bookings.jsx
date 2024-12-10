import PropTypes from "prop-types";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLoaderData, useParams } from "react-router-dom";
import homeBackground from "../../assets/images/Rectangle 1.png";
import WhiteNavbar from "../shared/navbar/WhiteNavbar";

const Bookings = () => {
  const spots = useLoaderData();
  const { id } = useParams();

  const singleSpot = spots.find((spot) => spot.id == id);
  const { title, description, origin } = singleSpot;

  //   console.log(spots, id, singleSpot);
  //   const [startDate, setStartDate] = useState(new Date());
  //   const [endDate, setEndDate] = useState(new Date());

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${homeBackground})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70  bg-black">
        <div className="max-w-7xl mx-auto">
          <WhiteNavbar />
          <div className="text-base-100 grid items-center md:grid-cols-2 gap-28 px-2 lg:px-0 mt-[134px]">
            <div>
              <h2 className="text-[80px] lg:text-[99px] font-bebas-neue font-normal">
                {title}
              </h2>
              <p>{description}</p>
            </div>

            <div>
              <div className="card bg-base-100 w-full md:max-w-sm shrink-0 shadow-2xl">
                <form className="card-body text-black">
                  <div className="form-control">
                    <label className="label font-montserrat text-base">
                      <span className="label-text text-base font-medium text-[#818181]">
                        Origin
                      </span>
                    </label>
                    <input
                      type="text"
                      defaultValue={`${origin}`}
                      className="input input-bordered font-bold"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-montserrat text-base">
                      <span className="label-text text-base font-medium text-[#818181]">
                        Destination
                      </span>
                    </label>
                    <input
                      type="text"
                      defaultValue={`${title}`}
                      className="input input-bordered font-bold"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <div className="flex gap-4">
                      <div>
                        <label className="label font-montserrat text-base">
                          <span className="label-text text-base font-medium text-[#818181]">
                            From
                          </span>
                        </label>
                        {/* <DatePicker
                          className="text-black input input-bordered w-full font-bold"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        /> */}
                        <DatePicker
                          className="text-black input input-bordered w-full font-bold"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          minDate={new Date()}
                        />
                      </div>
                      <div>
                        <label className="label font-montserrat text-base">
                          <span className="label-text text-base font-medium text-[#818181]">
                            To
                          </span>
                        </label>
                        {/* <DatePicker
                          className="text-black input input-bordered w-full font-bold"
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                        /> */}
                        <DatePicker
                          className="text-black input input-bordered w-full font-bold"
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          minDate={new Date()}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <Link>
                      <button className="btn font-montserrat text-base bg-[#F9A51A] w-full">
                        Start Booking
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Bookings.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  origin: PropTypes.node,
};

export default Bookings;
