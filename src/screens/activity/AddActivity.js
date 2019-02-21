import React, { Component } from 'react';
import {Layout} from '../../components/layout';
import { Input, SelectRange } from '../../components/inputs';

class AddActivity extends Component {
    render(){
        return(
            <Layout>
                <div className='container'>
                    <h1>About Your Activity</h1>
                </div>
                <div className='container'>
                    <Input label='Activity Name' required />
                </div>
                <div className='container'>
                    <SelectRange label='Recommend Age' 
                        placeholder={['From', 'top']}
                        from={[{value: 6, label: 6}, {value: 12, label: 12}, {value: 18, label: 18},]}
                        to={[{value: 6, label: 6}, {value: 12, label: 12}, {value: 18, label: 18},]}
                        name={['from', 'to']}
                        required 
                    />
                </div>
                <div className='container'>
                    <Input label='Activity Webpage' 
                        description='Use a spesific page if possible. Try to avoid homepage links.'
                        placeholder='e.g. example.com/activity'
                        required
                    />
                </div>
                <div className='container'>
                    <Input label='Activity Phone Number' />
                </div>
            </Layout>
        )
    }
}

export default AddActivity;