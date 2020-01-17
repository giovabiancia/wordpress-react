import React, { Component } from "react";
import axios from "axios";

export const Api = (array, callback) => {
  let resArr = [];
  array.forEach(element => {
    axios.get(`/wordpress/wp-json/wp/v2/pages/${element}`).then(res => {
      resArr.push(res);
      callback(res);
    });
  });
};
