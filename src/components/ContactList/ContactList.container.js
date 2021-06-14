import { connect } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import ContactList from './ContactList';

const getFilteredContacts = (allContacts, filter) => {
  const normalizedContact = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContact),
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter, loading } }) => ({
  contacts: getFilteredContacts(contacts, filter),
  isLoading: loading,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
  getContacts: () => dispatch(phonebookOperations.getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
