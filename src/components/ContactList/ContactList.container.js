import { connect } from 'react-redux';
import {
  phonebookOperations,
  getLoading,
  getFilteredContacts,
} from '../../redux/phonebook';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
  getContacts: () => dispatch(phonebookOperations.getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
