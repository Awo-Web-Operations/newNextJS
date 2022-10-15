import React from 'react'
import NextLink from 'next/link';
import styled from 'styled-components'

interface Props {
    href: string;
    title: string;
}

export const Link: React.FC<Props> = (props) => {
    const {href, title} = props;
  return (
    <NextLink href={href}>
      <StyledA>{title}</StyledA>
    </NextLink>
  )
}

export default Link;


export const StyledA = styled.a`
  cursor: pointer;
`;