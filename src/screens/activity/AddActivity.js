import React, { Component } from 'react';
import {Layout, FooterPortal} from '../../components/layout';
import { Input, SelectRange } from '../../components/inputs';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addActivity } from './actions';

class AddActivity extends Component {

    _onChange = (event) => {

    }

    _onNext = (event) => {
        //const name = event.target.activityNmae.value;

        //this.props.AddActivity();
        this.props.history.push('/activity/address/add');
    }

    render(){
        return(
            <Layout>
                <div className='container'>
                    <h1>About Your Activity</h1>
                </div>
                <div className='container'>
                    <Input name='activityNmae' label='Activity Name'  required />
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

                <FooterPortal>
                    <button className='secondary' onClick={() => this.props.history.goBack()}> Back </button>
                    <button className='primary orange' onClick={this._onNext.bind(this)}> Next </button>
                </FooterPortal>
            </Layout>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addActivity }, dispatch);
};
  
export default connect(null, mapDispatchToProps)(AddActivity);