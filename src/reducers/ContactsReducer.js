import { 
  ATTEMPTING_FETCH_CONTACT,
  CONTACTS_FETCH_SUCCESS,
  CONTACTS_FETCH_FAIL 
} from '../actions/ContactsActions';


const INITIAL_STATE = {
  loading: true,
  error: '',
  allContacts: []
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

    default:
      return state;
  }
}
