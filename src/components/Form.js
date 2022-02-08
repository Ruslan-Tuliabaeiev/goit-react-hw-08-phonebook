
import { useState } from 'react';
import style from './phonebook.module.css';

import PropTypes from 'prop-types';


import { useCreateContactMutation } from '../redux/contactApi';
//

export function Form({contacts}) {
const [name, setName] = useState('');
const [number, setNumber] = useState('');
  const [createContact] = useCreateContactMutation();

const handleChange = event => {
  // console.log(event.target.value)
  const {name, value} = event.target;
  
  switch(name) {
    case 'name':
       setName(value);
    break; 

    case 'number':
       setNumber(value);
    break;
default:
  return;
  }


};
const handleSubmit = (event) => {
  event.preventDefault()
  console.log(name , number);
  const findName = contacts.find(contact => contact.name === name)
  if (findName) {
    alert('This name is already in the phone book')
  } else {
    
    createContact({ name, number })
  }

reset();
}


const  reset = () => {
  setNumber('')
  setName('')

     }

//////////

return (
  <>
  <h1 className={style.contact}>Phonebook</h1> 
  <form className={style.formStyle} onSubmit={handleSubmit} >
 <div className={style.blockList}>
 <span className={style.span}>Neme:</span> 
   <label >
   <input
   type="text"
   name="name"
   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
   required
value={name}
 onChange={handleChange}

 


/>

 </label>
  
 </div>
 <div className={style.blockList}>
 <span className={style.span}>Number:</span> 

 <label>
 <input
   type="tel"
   name="number"
   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
   required
   value={number}
 onChange={handleChange}

 

 />
 </label> 
 </div>
  <div> <button  className={style.buttonSudmit}
  type='submit' >Add contact</button>
   </div>
 </form>
 </>
)

};

Form.prototype = { 
  contacts:PropTypes.array, 
}