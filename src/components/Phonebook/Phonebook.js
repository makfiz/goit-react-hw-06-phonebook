// import { useState, useEffect } from "react";
import {  useSelector, useDispatch  } from "react-redux";
import ContactForm from 'components/ContactForm/ContactForm'
import Filter from 'components/Filter/Filter'
import ContactList from "components/ContactList/ContactList";
import { getContacts} from "redux/selectors";
import { addContact } from "redux/actions";

const Phonebook = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts)

    const onSubmitHandler = (data) => {
        
      const alreadyInContacts =  [...contacts].map(contact => {
          if (contact.name.toLowerCase() === data.name.toLowerCase()) {
              alert(`${contact.name} is already in contacts.`)
              return true
          }
          
          return false
      })
    
        if (alreadyInContacts.includes(true)) return
        else {
            dispatch(addContact(data.name, data.number))
        }
    }
    

    // useEffect(() => {
    //     // if (localStorage.getItem('contacts') !== null) {
    //     //     setContacts(JSON.parse(localStorage.getItem('contacts')) )
    //     // }
    // },[])
    
    
    // useEffect(() => {
    //     // console.log(state)
    //     //         if (state !== contacts) {
    //         localStorage.setItem('contacts', JSON.stringify(contacts))
    //     // }
    // },[contacts])


        return (
            <>  
                <h1 >Phonebook</h1>
                <ContactForm submit={onSubmitHandler} />
                <h2 >Contact</h2>
                <Filter name={'filter'} />
                <ContactList />
            </>
        )
    
}

export default Phonebook