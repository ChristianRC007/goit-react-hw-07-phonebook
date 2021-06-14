import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: state.phonebook.filter,
  isAppeared: state.phonebook.contacts.length,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
