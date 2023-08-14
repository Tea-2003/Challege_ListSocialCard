import style from "./navStyle.module.css";
import React, { useState } from "react";

const index = ({ activeTab }) => {
  <div className={style.Navigation} >
    <div className={style.btn}>Add New</div>
    <div className={style.search}>
      <input type="text" placeholder="Search Name..." />
      <span>
        <img src="./images/icon_search.svg" alt="" />
      </span>
    </div>
  </div>;
};

export default index;
