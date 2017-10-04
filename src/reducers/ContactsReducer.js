import _ from 'lodash';

import { 
  ATTEMPTING_FETCH_CONTACT,
  CONTACTS_FETCH_SUCCESS,
  CONTACTS_FETCH_FAIL,
  CONTACT_SELECTED,
  TOGGLE_CONTACT_FORM
} from '../actions/ContactsActions';


const INITIAL_STATE = {
  loading: true,
  error: '',
  allContacts: [],
  showForm: false
};


export default (state=INITIAL_STATE, action) => {
  switch(action.type) {

    case ATTEMPTING_FETCH_CONTACT: 
      return {
        ...state,
        loading: true
      }

    case CONTACTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        allContacts: action.payload || []
      }

    case CONTACTS_FETCH_FAIL: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case CONTACT_SELECTED:
      const { id, selected } = action.payload;

      const contacts = _.map(state.allContacts, contact => {
        if(contact.recordID === id) {
          return {...contact, isSelected: selected};
        }
        return contact;
      })

      return {
        ...state,
        allContacts: contacts
      }

    case TOGGLE_CONTACT_FORM: 
      return {
        ...state,
        showForm: action.payload
      }

    default:
      return state;
  }
}
