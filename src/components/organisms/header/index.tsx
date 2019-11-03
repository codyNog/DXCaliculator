import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";

const HeaderStyle = css({
  height: 50,
  backgroundColor: "black",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const HeaderLinkStyle = css({
  width: 100,
  borderWidth: 0.5,
  borderColor: "black",
  color: "white",
  position: "absolute",
  right: 20
});

const Header: React.FC = () => {
  return (
    <div className={HeaderStyle}>
      <div>header</div>
      <Link to="/pdf" className={HeaderLinkStyle}>
        保存する
      </Link>
    </div>
  );
};

export default Header;
