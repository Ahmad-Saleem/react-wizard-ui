import React, { Component } from 'react';
import {Layout, FooterPortal} from '../../components/layout';
import { Input, SelectRange } from '../../components/inputs';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addActivity } from './actions';

class AddActivity extends Component {

    state= {
        name: '',
        recommendAge: {from: 0, to: 0},
        webpage: '',
        phone: '',
        validations: {
            name: '',
            recommendAge: '',
            webpage: '',
            phone: '',
        },
    }

    componentDidMount = () => {
        const {data} = this.props;
        if(data){
            this.setState({
                ...data
            })
        }
    }

    _onNext = () => {
        const { name, recommendAge, webpage, phone } = this.state;
        let isValid = true;
        let messages = {};

        if(!/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(webpage)){
            isValid = false;
            messages['webpage'] = "Please, Enter valid weboage url."
        }

        if(name === '' && name.length < 3){
            isValid = false;
            messages['name'] = "Activity name must be more than 3 letters";
        }

        // if(phone === '' && phone.length < 10){
        //     isValid = false;
        //     messages['phone'] = "Please, Enter valid phone number"
        // }

        if(recommendAge.from > 0 && recommendAge.to > 0){
            if(recommendAge.from >= recommendAge.to){
                isValid = false;
                messages['recommendAge'] = "Please, The min age must be less than max age."
            }
        }else {
            isValid = false;
            messages['recommendAge'] = "Please, Enter min & max recommend age."
        }

        if(isValid){
            this.props.addActivity(name, recommendAge, webpage, phone );
            this.props.history.push('/activity/address/add');
        }else {
            this.setState({
                validations: messages,
            })
        }
        
    }

    _handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        
        this.setState({[name]: value});
    }

    _handleRangeChange = (range) => {
        this.setState({
            recommendAge: {...range}
        })
    } 

    render(){
        const { name, recommendAge, webpage, phone, validations} = this.state;

        return(
            <Layout>
                <div className='container'>
                    <h1>About Your Activity</h1>
                </div>
                <div className='container'>
                    <Input name='name' label='Activity Name'  value={name}
                        onChange={this._handleChange.bind(this)}
                        message={validations['name']}
                        required 
                    />
                </div>
                <div className='container'>
                    <SelectRange label='Recommend Age' 
                        placeholder={['From', 'To']}
                        from={[1,2,3,4,5,6,7,8,9,10,11]}
                        to={[1,2,3,4,5,6,7,8,9,10,11]}
                        name={['from', 'to']}
                        value={recommendAge}
                        onChange={this._handleRangeChange.bind(this)}
                        message={validations['recommendAge']}
                        required 
                    />
                </div>
                <div className='container'>
                    <Input label='Activity Webpage' name='webpage' value={webpage}
                        description='Use a spesific page if possible. Try to avoid homepage links.'
                        placeholder='e.g. example.com/activity'
                        onChange={this._handleChange.bind(this)}
                        message={validations['webpage']}
                        required
                    />
                </div>
                <div className='container'>
                    <Input label='Activity Phone Number' name='phone' value={phone}
                        onChange={this._handleChange.bind(this)}
                        message={validations['phone']}
                    />
                </div>

                <FooterPortal>
                    <button className='secondary' onClick={() => this.props.history.goBack()}> Back </button>
                    <button className='primary orange' onClick={this._onNext.bind(this)}> Next </button>
                </FooterPortal>
            </Layout>
        )
    }
}

const mapStateToProps = ({activity}) => {
    return {
        data: activity.activity,
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addActivity }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(AddActivity);