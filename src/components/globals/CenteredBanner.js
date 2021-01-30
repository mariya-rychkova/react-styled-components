import React from "react";
import styled, { css, keyframes } from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
} from "../../styles";

const CenteredBanner = ({ className, title, text, children }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="paragraph">
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};

const BannerWrapper = styled(CenteredBanner)`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(32)};
  ${setLetterSpacing(3)};
  color: ${setColor.mainWhite};
  h1 {
    text-transform: capitalize;
    font-size: ${setRem(48)};
    color: ${setColor.primaryColor};
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.tablet`width: 70vw;
    ${setBorder({ width: "6px", color: setColor.primaryColor })};
    p {
      width: 75%;
    }
  `}
  }
`;
export default BannerWrapper;
