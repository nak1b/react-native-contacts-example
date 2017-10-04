import Contacts from 'react-native-contacts';

/*
	Contacts Action Types
*/
export const TOGGLE_CONTACT_FORM = 'toggleContactForm';


/*
	Contacts Actions
*/
export const toggleContactForm = (isVisible) => {
	return dispatch => {
		dispatch({
			type: TOGGLE_CONTACT_FORM,
			payload: isVisible
		});
	};
}


/*
	HELPERS
*/