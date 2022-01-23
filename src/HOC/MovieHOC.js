import React from "react";
import { Route } from "react-router-dom";

//../layouts/MovieLayout
import MovieLayout from "../Layouts/MovieLayout";

const MovieHOC = ({ component: Component , ...rest }) => {
  return (
    <>
    <Route
    {...rest}

    component = {(props) => (
      <MovieLayout>
       <Component {...props} />
      </MovieLayout>
    )

    }
     />
    </>
  );
};

export default MovieHOC;