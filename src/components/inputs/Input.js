import React, { PureComponent } from 'react';

export default class Input extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            inputValue: props.value || '',
        }

        this._onChange.bind(this);
    }
    _onChange = (event) => {
        const value = event.target.value;
        this.setState({inputValue: value})
    }

    render(){

        const {label, description, placeholder, required, name, message, className } = this.props;
        const { inputValue } = this.state;

        return(
            <div className={`input-container ${className !== undefined ? className : ''}`}>
                { label && <label>{label} <span>{!required &&  'Optional'}</span></label>}
                { description && <div className='description'>{description}</div>}
                <input type='text' name={name} value={inputValue} placeholder={placeholder}
                    onChange={this._onChange} />
                { message && <div className='message'>{message}</div>}
            </div>
        )
    }
}