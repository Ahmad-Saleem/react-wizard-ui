import React, { Component } from 'react';
import {Layout} from '../../components/layout';
import { Input } from '../../components/inputs';

class AddAddress extends Component {
    render(){
        return(
            <Layout>
                <div className='container'>
                    <h1>About The Address</h1>
                    <button className='blue w200'> Copy from existing activity </button>
                </div>
                <div className='container'>
                    <Input label='Place Name' required />
                </div>
                <div className='container left'>
                    <Input className='m-2' label='Postcode'  value='EC1R 4RB' required />
                </div>
                <div className='container left'>
                    <Input  className='m-2' label='Building Unit' />
                </div>
                <div className='container'>
                    <Input label='Building Name' />
                </div>
                <div className='container'>
                    <Input label='Street Number' />
                </div>
                <div className='container'>
                    <Input label='Street Name' required />
                </div>
                <div className='container'>
                    <Input label='Town' />
                </div>
            </Layout>
        )
    }
}

export default AddAddress;