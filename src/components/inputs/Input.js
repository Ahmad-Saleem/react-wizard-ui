import React, { PureComponent } from 'react';

export default class Input extends PureComponent {

    render(){

        const {label, description, value, placeholder, required, name, message, className } = this.props;

        return(
            <div className={`input-container ${className != undefined ? className : ''}`}>
                { label && <label>{label} <span>{!required &&  'Optional'}</span></label>}
                { description && <div className='description'>{description}</div>}
                <input type='text' name={name} value={value} placeholder={placeholder} />
                { message && <div className='message'>{message}</div>}
            </div>
        )
    }
}