import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { WrapperPopupStyle } from "./popup.style";

type IPopup = {
  children?: React.ReactNode;
};

export const Popup: React.FC<IPopup> = ({ children }) => {
  const [isPopupShow, setIsPopupShow] = useState(true);
  const id = nanoid();
  const popupStyle = `popup-${id}`;

  useEffect(() => {
    const listener = (e: any) => {
      if (e.target.classList.contains(popupStyle)) {
        setIsPopupShow(false);
      }
    };
    if (isPopupShow) {
      window.addEventListener("click", listener);
    }
    return () => {
      window.removeEventListener("click", listener);
    };
  }, [isPopupShow]);

  return (
    <>
      {isPopupShow && (
        <WrapperPopupStyle className={popupStyle} isPopupShow={isPopupShow}>
          <div className="popup-body">{children}</div>
        </WrapperPopupStyle>
      )}
    </>
  );
};
