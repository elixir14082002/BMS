import React from "react";
import { Route } from "react-router-dom";

import DefaultLayout from "../Layouts/DefaultLayout";

const DefaultHOC = ({ component: Component , ...rest }) => {
  return (
    <>
    <Route
    {...rest}

    component = {(props) => (
      <DefaultLayout>
       <Component {...props} />
      </DefaultLayout>
    )

    }
     />
    </>
  );
};

export default DefaultHOC;