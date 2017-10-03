import Contacts from 'react-native-contacts';

/*
	Contacts Action Types
*/
export const ATTEMPTING_FETCH_CONTACT = 'attemptingFetchContacts';
export const CONTACTS_FETCH_SUCCESS = 'contactsFetchSuccess';
export const CONTACTS_FETCH_FAIL = 'contactsFetchFail';


/*
	Contacts Actions
*/
export const fetchContacts = () => {
	return dispatch => {

		attemptFetchingContacts(dispatch);

		Contacts.getAllWithoutPhotos((err, contacts) => {
		  if(err === 'denied') {
		  	return contactsFetchFail(dispatch, err);
			}
			
			contactsFetchSuccess(dispatch, contacts);
		});
	}
}


/*
	HELPERS
*/
const attemptFetchingContacts = (dispatch) => {
	dispatch({
		type: ATTEMPTING_FETCH_CONTACT
	});
}

const contactsFetchSuccess = (dispatch, contacts) => {
	dispatch({
		type: CONTACTS_FETCH_SUCCESS,
		payload: contacts
	});
}

const contactsFetchFail = (dispatch, error) => {
	dispatch({
		type: CONTACTS_FETCH_FAIL,
		payload: error
	});
}