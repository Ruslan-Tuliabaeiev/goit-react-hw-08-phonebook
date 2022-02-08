

import { useDispatch } from 'react-redux';
import { filterContacts } from '../redux/fiter/action';
import style from './phonebook.module.css';

export const Filter = () => {
  const dispatch = useDispatch()
return (
    <>
    <label className={style.contactFind}>Find contacts by name</label>

<input
  type="text"

      onChange={e => dispatch(filterContacts(e.target.value)) }

/>
</>
)

}



