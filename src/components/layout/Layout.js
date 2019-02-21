import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {withRouter} from 'react-router-dom';

const Layout = (props) => <div className='layout'>
    <Header />
    <div className='layout-body'>
        {props.children}
    </div>
    <Footer />
</div>

export default withRouter(Layout);