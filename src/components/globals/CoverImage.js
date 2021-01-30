import styled from "styled-components";
import { setFlex, setBackground } from "../../styles";

const CoverImage = styled.div`
  min-height: 100vh;
  ${setFlex()};
  ${(props) => setBackground({ img: props.img })};
`;

export default CoverImage;
