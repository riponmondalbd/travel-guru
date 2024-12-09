import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold font-bebas-neue">Oops!</h1>
          <p className="py-4 font-montserrat">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="pb-6 font-montserrat">
            <i>{error.statusText || error.message}</i>
          </p>
          <Link to={-1}>
            <button className="btn btn-warning font-montserrat">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
