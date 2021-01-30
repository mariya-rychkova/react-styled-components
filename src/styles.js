import { css } from "styled-components";

//Text helpers
export const setColor = {
  primaryColor: "#bdc3c7",
  mainWhite: "#fff",
  mainBlack: "#2c3e50",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
};

export const setFont = {
  main: "font-family: 'Hachi Maru Pop', cursive;",
  header: "font-family: 'Nanum Gothic', sans-serif;",
};

//Image layout helpers

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x}`;
};

export const setBackground = ({
  img = "https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  color = "rgba(0,0,0,0)",
} = {}) => {
  return `background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat`;
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`;
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black",
} = {}) => {
  return `border:${width} ${style} ${color}`;
};

// Iterate through the sizes and create a media template
const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};

/*
export const setShadow = {
  light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
  dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);",
  darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);",
};
*/
