import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import ContactList from './ContactList';

const getFilteredContacts = (allContacts, filter) => {
  const normalizedContact = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContact),
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: getFilteredContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
