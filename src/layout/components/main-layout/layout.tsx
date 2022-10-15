import React from 'react'
import {Footer} from '../footer';

interface Props {
    children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({children}) => {
  return (
    <div>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout