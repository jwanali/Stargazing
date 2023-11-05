
import  '../styles/Alert.css';
import css from "classnames";
import React, {useState} from "react";

export default function Alert({ children, type, message }) {
  const [isShow, setIsShow] = useState(true);
  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };
  
  return (
    <div className="alert">
      <span className="closebtn" onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}
//css(style.alert, style[type], !isShow && style.hide)