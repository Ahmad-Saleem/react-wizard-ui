(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{81:function(e,t,a){e.exports=a.p+"static/media/logo.93797a63.png"},82:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(24),l=a(81),i=a.n(l),c=function(e){e.children;return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:i.a,className:"logo",alt:"Logo"})),r.a.createElement("nav",null,r.a.createElement("div",{className:"organiser-name"},"Mr Boing\u2019s Trampoline Club"),r.a.createElement("div",{className:"link"},r.a.createElement(s.b,{to:"/activity/id"},"back to activity"))))},o=function(e){return r.a.createElement("footer",null,r.a.createElement("div",{id:"footer"},e.children))},m=a(10),d=Object(m.e)(function(e){return r.a.createElement("div",{className:"layout"},r.a.createElement(c,null),r.a.createElement("div",{className:"layout-body"},e.children),r.a.createElement(o,null))}),u=a(19),h=a(20),p=a(22),b=a(21),v=a(23),g=a(26),E=a.n(g),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(b.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("footer").appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.getElementById("footer").removeChild(this.el)}},{key:"render",value:function(){return E.a.createPortal(this.props.children,this.el)}}]),t}(r.a.Component);a.d(t,"b",function(){return d}),a.d(t,"a",function(){return N})},83:function(e,t,a){"use strict";var n=a(19),r=a(20),s=a(22),l=a(21),i=a(27),c=a(23),o=a(0),m=a.n(o),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e)))._onChange=function(e){var t=e.target.value;a.setState({inputValue:t}),a.props.onChange(e)},a._onChange.bind(Object(i.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.description,n=e.placeholder,r=e.required,s=e.name,l=e.message,i=e.className,c=e.value;return m.a.createElement("div",{className:"input-container ".concat(void 0!==i?i:"")},t&&m.a.createElement("label",{htmlFor:s},t," ",m.a.createElement("span",null,!r&&"Optional")),a&&m.a.createElement("div",{className:"description"},a),m.a.createElement("input",{type:"text",name:s,value:c,placeholder:n,onChange:this._onChange}),l&&m.a.createElement("div",{className:"message"},l))}}]),t}(o.PureComponent),u=a(25),h=a(9),p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={from:0,to:0},a._onChange=function(e){var t=e.target.name,n=e.target.value,r=a.state;r=Object(h.a)({},r,Object(u.a)({},t,n)),a.setState(Object(h.a)({},r)),a.props.onChange(r)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.description,n=e.from,r=e.to,s=e.placeholder,l=e.required,i=e.name,c=e.message,o=e.value;return m.a.createElement("div",{className:"input-container"},t&&m.a.createElement("label",null,t," ",m.a.createElement("span",null,!l&&"Optional")),a&&m.a.createElement("div",{className:"description"},a),m.a.createElement("div",{className:"select-range"},m.a.createElement("select",{type:"text",name:i[0],value:o.from||-1,onChange:this._onChange.bind(this)},m.a.createElement("option",{value:"-1",disabled:!0},s[0]),n&&n.map(function(e,t){return m.a.createElement("option",{key:t,value:e},e)})),m.a.createElement("select",{type:"text",name:i[1],value:o.to||-1,onChange:this._onChange.bind(this)},m.a.createElement("option",{value:"-1",disabled:!0},s[1]),r&&r.map(function(e,t){return m.a.createElement("option",{key:t,value:e},e)}))),c&&m.a.createElement("div",{className:"message"},c))}}]),t}(o.PureComponent);a.d(t,"a",function(){return d}),a.d(t,"b",function(){return p})},85:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(25),s=a(19),l=a(20),i=a(22),c=a(21),o=a(23),m=a(0),d=a.n(m),u=a(82),h=a(83),p=a(28),b=a(8),v=a(15),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,o=new Array(l),m=0;m<l;m++)o[m]=arguments[m];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={placeName:"",postcode:"",buildingUnit:"",buildingName:"",streetNumber:"",streetName:"",town:"",addressHistory:{status:null,error:null},validations:{placeName:"",postcode:"",streetName:""}},a._onNext=function(){var e=a.state,t=e.placeName,n=e.postcode,r=e.buildingUnit,s=e.buildingName,l=e.streetNumber,i=e.streetName,c=e.town,o=!0,m={};""===t&&t.length<3&&(o=!1,m.placeName="Place name must be more than 3 letters"),""!==n||6===n.length&&7===n.length||(o=!1,m.postcode="Please, Enter valid Postcode."),""===i&&i.length<3&&(o=!1,m.streetName="Street name must be more than 3 letters"),o?(a.props.addAddress(t,n,r,s,l,i,c),a.props.history.push("/activity/confirm")):a.setState({validations:m})},a._handleChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(r.a)({},n,t))},a.copyActivityAddress=function(){a.props.copyAddressFromExistingActivity()},a.componentDidMount=function(){var e=a.props.address;e&&a.setState(Object(n.a)({},e))},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.addressHistory,a=t.data,r=t.status,s=t.error;r&&r!==this.state.addressHistory.status&&(a&&a.length>0?this.setState(Object(n.a)({},a[0],{addressHistory:{status:r,error:s}})):this.setState({addressHistory:{status:r,error:s}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.placeName,n=t.postcode,r=t.buildingUnit,s=t.buildingName,l=t.streetNumber,i=t.streetName,c=t.town,o=t.validations,m=t.addressHistory;return d.a.createElement(u.b,null,d.a.createElement("div",{className:"container"},d.a.createElement("h1",null,"About The Address"),d.a.createElement("button",{className:"blue w200",onClick:this.copyActivityAddress.bind(this),disabled:"pendding"===m.status},"Copy from existing activity")),d.a.createElement("div",{className:"container"},d.a.createElement(h.a,{label:"Place Name",name:"placeName",value:a,message:o.placeName,onChange:this._handleChange.bind(this),required:!0})),d.a.createElement("div",{className:"container left"},d.a.createElement(h.a,{className:"m-2",label:"Postcode",name:"postcode",value:n||"EC1R 4RB",message:o.postcode,onChange:this._handleChange.bind(this),required:!0})),d.a.createElement("div",{className:"container left"},d.a.createElement(h.a,{className:"m-2",label:"Building Unit",name:"buildingUnit",onChange:this._handleChange.bind(this),value:r})),d.a.createElement("div",{className:"container"},d.a.createElement(h.a,{label:"Building Name",name:"buildingName",onChange:this._handleChange.bind(this),value:s})),d.a.createElement("div",{className:"container"},d.a.createElement(h.a,{label:"Street Number",name:"streetNumber",value:l,onChange:this._handleChange.bind(this)})),d.a.createElement("div",{className:"container"},d.a.createElement(h.a,{label:"Street Name",name:"streetName",value:i,message:o.streetName,onChange:this._handleChange.bind(this),required:!0})),d.a.createElement("div",{className:"container"},d.a.createElement(h.a,{label:"Town",name:"town",value:c,onChange:this._handleChange.bind(this)})),d.a.createElement(u.a,null,d.a.createElement("button",{className:"secondary",onClick:function(){return e.props.history.goBack()}}," Back "),d.a.createElement("button",{className:"primary orange",onClick:this._onNext.bind(this)}," Next ")))}}]),t}(m.Component);t.default=Object(p.b)(function(e){var t=e.activity;return{address:t.address,addressHistory:t.addressHistory}},function(e){return Object(b.bindActionCreators)({addAddress:v.e,copyAddressFromExistingActivity:v.f},e)})(g)}}]);
//# sourceMappingURL=4.fe75a33e.chunk.js.map