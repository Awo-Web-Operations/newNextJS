import React from "react";
import styled from "styled-components";

type Colors = "orange" | "gray" | "black";

interface IButton {
  title: string;
  bgColor?: Colors;
  width?: string;
  height?: string;
  bRadius?: string;
  textColor?: string;
}

interface ButtonCustomStyle {
  bgColor?: Colors;
  width?: string;
  height?: string;
  bRadius?: string;
  textColor?: string;
}

export const Button: React.FC<IButton> = (props) => {
  const { title, bgColor, height, width, bRadius, textColor } = props;
  const styleProps: ButtonCustomStyle = {
    bgColor,
    height,
    width,
    bRadius,
    textColor,
  };
  return <StyledButton {...styleProps}>{title}</StyledButton>;
};

export default Button;

const StyledButton = styled.button<ButtonCustomStyle>`
  border: none;
  outline: none;
  padding: 14px 17px;
  border-radius: ${({ bRadius }) => (bRadius ? bRadius : "0px")};
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ textColor }) => textColor};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.colors.lighGray};
  transition: opacity 0.3s ease-in-out;
  font-weight: 500;
  &:hover {
    opacity: 0.7;
  }
`;
