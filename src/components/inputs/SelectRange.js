import React, { PureComponent } from 'react';

export default class SelectRange extends PureComponent {

    render(){

        const {label, description, from, to, placeholder, required, name, message } = this.props;

        return(
            <div className='input-container'>
                { label && <label>{label} <span>{!required &&  'Optional'}</span></label>}
                { description && <div className='description'>{description}</div>}

                <div className='select-range'>
                    <select type='text' name={name[0]} >
                    <option value="" disabled selected>{placeholder[0]}</option>
                    {
                        from && from.map((item, index) => 
                            <option key={index} value={item.value}>{item.label}</option>
                        )
                    }
                    </select>
                    <select  type='text' name={name[1]}>
                    <option value="" disabled selected>{placeholder[1]}</option>
                    {
                        to && to.map((item, index) => 
                            <option key={index} value={item.value}>{item.label}</option>
                        )
                    }
                    </select>
                </div>
                { message && <div className='message'>{message}</div>}
            </div>
        )
    }
}