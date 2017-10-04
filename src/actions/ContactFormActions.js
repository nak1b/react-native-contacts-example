import Contacts from 'react-native-contacts';
import { fetchContacts } from './ContactsActions';

/*
	Contacts Action Types
*/
export const TOGGLE_CONTACT_FORM = 'toggleContactForm';
export const FORM_NAME_CHANGED = 'formNameChanged';
export const FORM_PHONE_CHANGED = 'formPhoneChanged';
export const CONTACT_SAVE_SUCCESS = 'contactSaveSuccess';

/*
	Contacts Actions
*/
export const saveContact = (contact) => {
	return dispatch => {
		Contacts.addContact(contact, (err) => {
			if(err) {
				return console.log(`Error Saving Contact: ${err}`);
			}
			contactSaveSuccess(dispatch);
		});
	}
}

export const toggleContactForm = (isVisible) => {
	return dispatch => {
		dispatch({
			type: TOGGLE_CONTACT_FORM,
			payload: isVisible
		});
	};
}

export const nameChanged = (text) => {
	return dispatch => {
		dispatch({
			type: FORM_NAME_CHANGED,
			payload: text
		});
	};
}

export const phoneChanged = (text) => {
	return dispatch => {
		dispatch({
			type: FORM_PHONE_CHANGED,
			payload: text
		});
	};
}

/*
	HELPERS
*/
const contactSaveSuccess = (dispatch) => {
	dispatch({
		type: CONTACT_SAVE_SUCCESS
	});

	//refetch data
	dispatch(fetchContacts());
}