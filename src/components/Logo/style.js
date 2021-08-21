import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${(center) => (center ? "center" : "none")};
`;

export const LogoWrapper = styled.div`
  height: ${(props) => (props.center ? "80px" : "40px")};
  width: ${(props) => (props.center ? "80px" : "40px")};
  box-shadow: 2.5px 0px 1px 0px green;
  border-radius: 50%;
  color: green;
  @media (max-width: 320px) {
    height: ${(props) => (props.center ? "50px" : "30px")};
    width: ${(props) => (props.center ? "50px" : "30px")};
  }
`;

export const LogoB = styled.h1`
  font-size: ${(props) => (props.center ? "50px" : "27px")};
  padding-top: ${(props) => (props.center ? "7px" : "2px")};
  padding-left: ${(props) => (props.center ? "20px" : "10px")};
  @media (max-width: 320px) {
    font-size: ${(props) => (props.center ? "30px" : "20px")};
    padding-top: ${(props) => (props.center ? "5px" : "1px")};
    padding-left: ${(props) => (props.center ? "15px" : "5px")};
  }
`;
