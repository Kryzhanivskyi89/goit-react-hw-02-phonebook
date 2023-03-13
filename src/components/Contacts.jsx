import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

class ContactList extends React.Component {    
    static propTypes = {
      state: PropTypes.shape({
        
    }),
    }
    
    state = {
        contacts: [],
        name: '',
        number: ''
    }
    
    telInputId = shortid.generate();
    
    handleInputChange = (e) => {
      console.log(e)
      this.setState({name: e.currentTarget.value})
    };
    
    handleSubmit = (e) => {
      e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    
    reset = () => {
        this.setState({contacts: [], name: ''})
    }
    render() {     
        return (
            <input
                value={this.state.name}
                onChange={this.handleInputChange}
                id={this.telInputId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        );
    }
  };


export default ContactList;