import { combineReducers } from 'redux';
import ContactsReducer from './ContactsReducer';
import ContactFormReducer from './ContactFormReducer';

export default combineReducers({
	contacts: ContactsReducer,
	contactForm: ContactFormReducer
});