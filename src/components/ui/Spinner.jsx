import React from "react";
import spinner from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Please wait, Still Loading..."
    />
  );
};

export default Spinner;

/* this component is used for loading part, 
   which the data is being fetched from axios api call, 
   there will be a loading spinner displayed
*/
