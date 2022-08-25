import { ContactListElement } from "components/ContactListElement/ContactListElement"
import css from "./ContactList.module.css"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as contactOperations from "../../reduxStore/operations"


export const ContactList = ({ onClick }) => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(contactOperations.getContacts())
    }, [dispatch])

    const visibleContacts = contacts
  .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={css.contactList}>
            {
                visibleContacts.map(contact => {
                    return <ContactListElement key={contact.id} contact={contact} deleteItem={onClick}/>
                })
            }
        </ul>
    )
}