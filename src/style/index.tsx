import React from "react";
import { css } from "emotion";
import { marginM } from "./variables";

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

interface IPropsSection {
  style?: object;
}

const Section: React.FC<IPropsSection> = props => {
  const { children, style } = props;
  const SectionStyle = css({
    ...{
      margin: marginM,
      display: "flex",
      flexDirection: "column",
      border: "solid 0.5px grey"
    },
    ...style
  });
  return <section className={SectionStyle}>{children}</section>;
};

interface IPropsMargin {
  margin: number;
}

const MarginProps: React.FC<IPropsMargin> = props => {
  const { children, margin } = props;
  const SectionStyle = css({ marginBottom: margin });
  return <section className={SectionStyle}>{children}</section>;
};

export { Page, Wrapper, Section, MarginProps };
