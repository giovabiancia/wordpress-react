/* import React, { useState, createContext } from "react";
import axios from "axios";

export const HomeContext = createContext();

export const HomeProvider = props => {
  const [array, setArray] = useState([]);

  const apiCall = async () => {
    await axios.get(`/wordpress/wp-json/wp/v2/pages/15`).then(function(res) {
      let slider = res.data.acf.slider;

      setArray(slider);
      console.log(slider);
    });
  };
  apiCall();

  return (
    <HomeContext.Provider value={array}>{props.children}</HomeContext.Provider>
  );
}; */
// stiamo esportando due cose diverse: il Homeprovider e il HomeContext
// quando vogliamo utilizzare le info presenti in HomeProvider basta che importo il HomeContext nel componente
