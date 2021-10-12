import React from "react";

import "./Faq.css";

import panelArrowUp from "../../assets/panel-arrow-up.svg";

const ArrowButton = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const changePanel = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    // <a href=" " type="button" onClick={changePanel}>
      <img alt="panel arrown down" src={panelArrowUp} className={"w-6 collapse-arrow"} />
    // </a> 
  );
};

export default ArrowButton;
