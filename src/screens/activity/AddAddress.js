import React, { Component } from 'react';
import {Layout, FooterPortal} from '../../components/layout';
import { Input } from '../../components/inputs';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addAddress, copyAddressFromExistingActivity } from './actions';


class AddAddress extends Component {

    state= {
        placeName: '',
        postcode: '',
        buildingUnit: '',
        buildingName: '',
        streetNumber: '',
        streetName: '',
        town: '',

        addressHistory: {
            status: null,
            error: null,
        },

        validations: {
            placeName: '',
            postcode: '',
            streetName: '',
        },
    }

    _onNext = () => {
        const { placeName, postcode, buildingUnit, buildingName, streetNumber, streetName, town } = this.state;
        
        let isValid = true;
        let messages = {};

        if(placeName === '' && placeName.length < 3){
            isValid = false;
            messages['placeName'] = "Place name must be more than 3 letters";
        }

        if(postcode === '' && (postcode.length !== 6 || postcode.length !== 7)){
            isValid = false;
            messages['postcode'] = "Please, Enter valid Postcode.";
        }

        if(streetName === '' && streetName.length < 3){
            isValid = false;
            messages['streetName'] = "Street name must be more than 3 letters";
        }

        if(isValid){
            this.props.addAddress(placeName, postcode, buildingUnit, buildingName, streetNumber, streetName, town);
            this.props.history.push('/activity/confirm');
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

    copyActivityAddress = () => {
        this.props.copyAddressFromExistingActivity();
    }

    componentDidMount = () => {
        const {address} = this.props;
        if(address){
            this.setState({
                ...address
            })
        }

    }

    componentWillReceiveProps(nextProps){
            const { data, status, error } = nextProps.addressHistory;
            
            if( status && status !== this.state.addressHistory.status){
                if(data && data.length > 0 ){
                    this.setState({
                        ...data[0],
                        addressHistory: {
                            status,
                            error
                        }
                    })
                }else {
                    this.setState({
                        addressHistory: {
                            status,
                            error
                        }
                    })
                }
            }
    }

    render(){
    
        const { 
            placeName, postcode, buildingUnit, buildingName, 
            streetNumber, streetName, town, validations, addressHistory } = this.state;
        
        return(
            <Layout>
                <div className='container'>
                    <h1>About The Address</h1>
                    <button className='blue w200' 
                        onClick={this.copyActivityAddress.bind(this)}
                        disabled={addressHistory.status === 'pendding'}
                    > 
                        Copy from existing activity 
                    </button>
                </div>
                <div className='container'>
                    <Input label='Place Name' name='placeName' value={placeName}
                        message={validations['placeName']}
                        onChange={this._handleChange.bind(this)} required />
                </div>
                <div className='container left'>
                    <Input className='m-2' label='Postcode' name='postcode' value={postcode || 'EC1R 4RB'}
                        message={validations['postcode']}
                        onChange={this._handleChange.bind(this)}  required />
                </div>
                <div className='container left'>
                    <Input  className='m-2' label='Building Unit' name='buildingUnit'
                        onChange={this._handleChange.bind(this)} value={buildingUnit} />
                </div>
                <div className='container'>
                    <Input label='Building Name' name='buildingName'
                        onChange={this._handleChange.bind(this)} value={buildingName} />
                </div>
                <div className='container'>
                    <Input label='Street Number' name='streetNumber' value={streetNumber}
                        onChange={this._handleChange.bind(this)} />
                </div>
                <div className='container'>
                    <Input label='Street Name' name='streetName' value={streetName}
                        message={validations['streetName']}
                        onChange={this._handleChange.bind(this)} required />
                </div>
                <div className='container'>
                    <Input label='Town' name='town' value={town}
                        onChange={this._handleChange.bind(this)} />
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
        address: activity.address,
        addressHistory: activity.addressHistory,
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addAddress, copyAddressFromExistingActivity }, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);