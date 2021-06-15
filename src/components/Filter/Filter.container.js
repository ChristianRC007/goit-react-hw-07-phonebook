import { connect } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/phonebook';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
