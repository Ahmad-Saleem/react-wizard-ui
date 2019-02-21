import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => <div className='layout'>
    <Header />
    <div className='layout-body'>
        {children}
    </div>
    <Footer>
        <button className='secondary'> Back </button>
        <button className='primary orange'> Next </button>
    </Footer>
</div>

export default Layout;