import { connect } from 'react-redux';
import { phonebookOperations, getContacts } from '../../redux/phonebook';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  allContacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(phonebookOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
