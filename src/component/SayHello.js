import img from "../Generic_Smurfs_2021.webp";
import React from "react";

function SayHello() {
  const userName = "smurf";

  return (
    <div className="d-flex flex-column">
      {userName ? (
        <>
          <img
            src={img}
            alt=""
            width={100}
            // height={100}
            className="rounded-circle"
          />
          <span>Hello, {userName} </span>
        </>
      ) : (
        <span> Hello, there</span>
      )}
    </div>
  );
}

export default SayHello;
