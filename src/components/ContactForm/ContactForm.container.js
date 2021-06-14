import { connect } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  allContacts: state.phonebook.contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(phonebookOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
