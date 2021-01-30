import React from "react";
import CoverImage from "../globals/CoverImage";
import bgImg from "../../images/pink-rect.png";
import CenteredBanner from "../globals/CenteredBanner";
import { PrimaryBtn } from "../globals/Buttons";

const FullScreenImage = () => {
  return (
    <CoverImage img={bgImg}>
      <CenteredBanner
        title="my header text"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita optio
        quo asperiores aperiam odio sapiente omnis unde iusto pariatur, a, cumque,
        minima mollitia quod vero explicabo corporis eveniet tempora maxime!"
      >
        <PrimaryBtn>See more...</PrimaryBtn>
      </CenteredBanner>
    </CoverImage>
  );
};

export default FullScreenImage;
