import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  allContacts: state.phonebook.contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(phonebookActions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
