import React from "react";
import styled from "styled-components";
import { Link } from "../../../components";

interface Props {}

export const Footer: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <FooterWrapper>
      <HRElement />
      <RowContainer>
        <ColumnContainer>
          <HeaderContainer>
            <HeaderText>Services</HeaderText>
            <HRElement />
          </HeaderContainer>
          <LinkList>
            <LinkItem>
              <Link href="/" title="Recipes" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Grocery List" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Food Products" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Kitchen Products" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Household Products" />
            </LinkItem>
          </LinkList>
        </ColumnContainer>
        <ColumnContainer>
          <HeaderContainer>
            <HeaderText>Resources</HeaderText>
            <HRElement />
          </HeaderContainer>
          <LinkList>
            <LinkItem>
              <Link href="/" title="Login/ My Account" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Sign Up" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Supplier Home" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Shipping Return" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="FAQ + Support" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Contact" />
            </LinkItem>
          </LinkList>
        </ColumnContainer>
        <ColumnContainer>
          <HeaderContainer>
            <HeaderText>Company</HeaderText>
            <HRElement />
          </HeaderContainer>
          <LinkList>
            <LinkItem>
              <Link href="/" title="About Us" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Careers" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Partners" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Terms of Service" />
            </LinkItem>
            <LinkItem>
              <Link href="/" title="Privacy Policy" />
            </LinkItem>
          </LinkList>
        </ColumnContainer>
      </RowContainer>
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
`;

const ColumnContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 760px) {
    &:nth-child(1),
    :nth-child(2) {
      flex: 1;
    }
    &:last-child {
      width: 100%;
    }
  }

  @media screen and (max-width: 480px) {
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
  
  @media screen and (max-width: 560px){
    font-size: 12px;
    
  }
  line-height: 15px;

  &:hover {
    color: ${({theme}) => theme.colors.gray};
  }
`;