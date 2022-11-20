import { List, Item, Btn } from 'components/ContactList/ContactList.styled'
import {useDispatch, useSelector  } from "react-redux";
import {deleteContact} from "redux/contactsSlice";   
import { getContacts, getFilterValue } from "redux/selectors";




const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilterValue)

    const filterByName = () => {
        return (
            contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        )
    }
   return ( 
            <List>
                {(filter === ''
                    ?
                    contacts
                    :
                    filterByName()
           ).map(contact => { return <Item key={contact.id}>{contact.name}: {contact.number} <Btn id={contact.id} onClick={(e) => dispatch(deleteContact(e.target.id))}> Delete</Btn></Item> })   
                }  
            </List>
        )
}

export default ContactList