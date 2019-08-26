import React from "react";
import { css } from "emotion";
import Button from "../../atoms/Button";

const HeaderStyle = css({
  height: 50,
  backgroundColor: "black",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const HeaderButtonStyle = css({
  position: "fixed",
  right: 20
});

const Header: React.FC = () => {
  return (
    <div className={HeaderStyle}>
      <div>header</div>
      <div className={HeaderButtonStyle}>
        <Button text={"保存する"} onClick={() => console.log("click")} />
      </div>
    </div>
  );
};

export default Header;
