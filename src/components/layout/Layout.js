import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {withRouter} from 'react-router-dom';

const Layout = (props) => <div className='layout'>
    <Header />
    <div className='layout-body'>
        {props.children}
    </div>
    <Footer>
        <button className='secondary' onClick={() => props.history.goBack()}> Back </button>
        <button className='primary orange' onClick={() => props.history.push('/activity/address/add')}> Next </button>
    </Footer>
</div>

export default withRouter(Layout);