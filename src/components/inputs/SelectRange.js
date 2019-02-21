import React, { PureComponent } from 'react';

export default class SelectRange extends PureComponent {

    state = {
        from: 0,
        to: 0
    }

    _onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        let range = this.state;
        range = {
            ...range, [name]: value
        }

        this.setState({...range});
        this.props.onChange(range)
    }

    render(){

        const {label, description, from, to, placeholder, required, name, message, value } = this.props;
 
        return(
            <div className='input-container'>
                { label && <label>{label} <span>{!required &&  'Optional'}</span></label>}
                { description && <div className='description'>{description}</div>}

                <div className='select-range'>
                    <select type='text' name={name[0]} value={value.from || -1}
                        onChange={this._onChange.bind(this)}>
                        <option value="-1" disabled>{placeholder[0]}</option>
                        {
                            from && from.map((item, index) => 
                                <option key={index} value={item}>{item}</option>
                            )
                        }
                    </select>
                    <select  type='text' name={name[1]} value={value.to || -1}
                        onChange={this._onChange.bind(this)}>
                        <option value="-1" disabled>{placeholder[1]}</option>
                        {
                            to && to.map((item, index) => 
                                <option key={index} value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                { message && <div className='message'>{message}</div>}
            </div>
        )
    }
}