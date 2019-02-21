import React, { PureComponent } from 'react';

export default class Select extends PureComponent {

    render(){

        const {label, description, options, placeholder, required, name, message } = this.props;

        return(
            <div className='input-container'>
                { label && <label>{label} <span>{!required &&  'Optional'}</span></label>}
                { description && <div className='description'>{description}</div>}
                <select type='text' name={name} placeholder={placeholder}>
                {
                    options && options.map((item, index) => 
                        <option key={index} value={item.value}>{item.label}</option>
                    )
                }
                </select>
                { message && <div className='message'>{message}</div>}
            </div>
        )
    }
}