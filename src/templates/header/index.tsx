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

const Header: React.FC = () => {
  return (
    <div className={HeaderStyle}>
      <div>header</div>
      <Button
        text={"保存する"}
        onClick={() => console.log("click")}
        style={{
          position: "absolute",
          right: 20
        }}
      />
    </div>
  );
};

export default Header;
