import React from "react";
import styled from "styled-components";
import { Link } from "../../../components";
import { Button } from "../../../components/button";
import { categoriesData } from "./data";


interface Props {}

export const Footer: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <FooterWrapper>
      <HRElement />
      <RowContainer>
        {categoriesData.map((category) => (
          <ColumnContainer key={category.catId}>
            <HeaderContainer>
              <HeaderText>{category.title}</HeaderText>
              <HRElement />
            </HeaderContainer>
            <LinkList>
              {category.linkItems.map((link) => (
                <LinkItem key={link.id}>
                  <Link href={link.href} title={link.title} />
                </LinkItem>
              ))}
            </LinkList>
          </ColumnContainer>
        ))}
      </RowContainer>
      <ButtonSection>
        <ButtonContainer>
          <ButtonLabel>Become A Driver</ButtonLabel>
          <Button
            title="Apply Now"
            height="35px"
            width="151px"
            bgColor="orange"
            bRadius="3px"
            textColor="#fff"
          />
        </ButtonContainer>
        <ButtonContainer>
          <ButtonLabel>Become A Supplier</ButtonLabel>
          <Button
            title="Apply Now"
            height="35px"
            width="151px"
            bgColor="orange"
            bRadius="3px"
            textColor="#fff"
          />
        </ButtonContainer>
      </ButtonSection>
      <LogoContainer />
      <Text>Adding convenience to home made mealsTM</Text>
      <Copyright>
        <Text>{new Date().getFullYear()} Copyright: </Text>
        <Text> ChopChowSD</Text>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  max-width: none !important;
  width: 90% !important;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowContainer = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  gap: 50px;
  /* justify-content: center; */

  @media screen and (max-width: 760px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const HRElement = styled.hr`
  width: 100%;
  display: inline-block;
  margin-bottom: 4px;
  border: 1px solid purple;
`;

const ColumnContainer = styled.div<{
  bgColor?: string;
  width?: string;
  padding?: string;
  height?: string;
}>`
  width: ${({ width }) => (width ? width : "400px")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: ${({ height }) => height};
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.colors.white};
  padding: ${({ padding }) => (padding ? padding : "0")};

  @media screen and (max-width: 760px) {
    &:nth-child(1),
    :nth-child(2) {
      flex: 1;
    }
    &:last-child {
      width: 100%;
    }
  }

  @media screen and (max-width: 567px) {
    &:last-child {
      width: 100%;
    }
  }
`;

// title

const HeaderContainer = styled.div`
  width: 100%;
`;

const HeaderText = styled.p`
  font-weight: 600;
  font-size: 14px;
  // add inter font here
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.gray};
`;

// link-items

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LinkItem = styled.li`
  padding: 10px 0px;
  font-weight: 400;
  color: #000;
  font-style: none;

  @media screen and (max-width: 567px) {
    font-size: 12px;
  }
  line-height: 15px;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const LogoContainer = styled.div`
  background-image: url("/assets/logos/CC_Logo_no_bg.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 92px;
  width: 46px;
  margin-top: 119px;
`;

const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;

  @media screen and (max-width: 567px) {
    font-size: 11px;
  }
`;

const Copyright = styled.div`
  display: flex;
  gap: 5px;
  margin: 17px 0px 87px;
`;
// button section

const ButtonSection = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  gap: 41px;
  margin-top: 55px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

const ButtonLabel = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;
