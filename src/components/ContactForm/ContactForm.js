import  { useState} from "react";
import FormField from 'components/ContactForm/FormField/FormField'
import inputSetings from '../utils/inputSetings'
import {Form, Btn} from 'components/ContactForm/ContactForm.styled'

const ContactForm = ({ submit }) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        submit({name, number})
        e.currentTarget.reset()  
    }

  const  onChangeHandler = (e) => { 
        switch (e.target.name) {
            case 'name': 
                setName(e.target.value)
                break;
        
            case 'number': 
                setNumber(e.target.value)
                break;
        
            default:
                break;
        }
    }


        return (
            <>  
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <FormField label={'Name'} settings={inputSetings.name} onChange={(e) => onChangeHandler(e)} />
                    <FormField label={'Tel'} settings={inputSetings.number} onChange={(e) => onChangeHandler(e)}/>
                    <Btn type='submit' >Add contact</Btn>
                </Form>
            </>
        )
}

export default ContactForm

