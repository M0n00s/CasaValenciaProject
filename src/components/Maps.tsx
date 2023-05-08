import React from "react";
import GoogleMaps from "simple-react-google-maps";

export const Maps = () => {
  return (
    <>
      <h3 className=" pt-6 text-4xl font-semibold text-primary">
        A donde iras...
      </h3>
      <div className=" pb-12 pt-4 md:h-[40vh] lg:h-[80vh] ">
        <GoogleMaps
          apiKey={"AIzaSyAPqG7r-0msk4PwPkR5Zc6G-i90QxXvr2M"}
          style={{ height: "100%", width: "100%" }}
          zoom={8}
          center={{ lat: 8.88752, lng: -64.24544 }}
          markers={{ lat: 8.88752, lng: -64.24544 }} //optional
        />
      </div>
    </>
  );
};
