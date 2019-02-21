import React from 'react';
import ReactDOM from 'react-dom';

class FooterPortal extends React.Component {
    constructor(props) {
      super(props);
      this.el = document.createElement('div');
    }

    componentDidMount() {
      const footerPortal = document.getElementById('footer');
      footerPortal.appendChild(this.el);
    }
  
    componentWillUnmount() {
        const footerPortal = document.getElementById('footer');
        footerPortal.removeChild(this.el);
    }
  
    render() {
      return ReactDOM.createPortal(
        this.props.children,
        this.el,
      );
    }
}

export default FooterPortal;