import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

class Form extends React.Component {    
    static propTypes = {
      state: PropTypes.shape({
        
    }),
    }
    
    state = {
      contacts: [],
      name: ''
    }

    nameInputId = shortid.generate();
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
        <>
           <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.name}
              onChange={this.handleInputChange}
              id={this.nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            
            <button type="submit">save</button>
            </form>
        </>
      );
    }
  };


export default Form;