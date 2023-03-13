import React from "react";
import PropTypes from "prop-types";

import Form from "./Form";
import ContactList from "./Contacts";

  class App extends React.Component {
    static propTypes = {
      state: PropTypes.shape({
        
    }),
    }
    
    state = {
      
    }
  
    formSubmitHandler = (data) => {
      console.log(data)      
    };
    
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(e)
    };
   
    render() {     
      return (
        <>
          <div>
            <h1>Phonebook</h1>
            <Form onSubmit={this.formSubmitHandler } />

            <h2>Contacts</h2>
            {/* <Filter ... /> */}
            <ContactList />
          </div>
        </>
      );
    }
  };


export default App;