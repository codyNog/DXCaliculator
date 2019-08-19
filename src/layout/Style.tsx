import React from "react";
import { css } from "emotion";

/* const Page: React.FC = props => {
  const { children } = props;
  return <div>{children}</div>;
};
 */

const Page: React.FC = props => {
  const { children } = props;
  const PageStyle = css({
    flex: 1
  });
  return <div className={PageStyle}>{children}</div>;
};

const Wrapper: React.FC = props => {
  const { children } = props;
  const WrapperStyle = css({
    flex: 1
  });
  return <div className={WrapperStyle}>{children}</div>;
};

export { Page, Wrapper };
