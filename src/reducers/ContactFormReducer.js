import { 
  TOGGLE_CONTACT_FORM,
  FORM_NAME_CHANGED,
  FORM_PHONE_CHANGED,
  CONTACT_SAVE_SUCCESS
} from '../actions/ContactFormActions';


const INITIAL_STATE = {
  error: '',
  showForm: false,
  name: '',
  phone: ''
};


export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_CONTACT_FORM: 
      return {
        ...state,
        showForm: action.payload
      }

    case FORM_NAME_CHANGED:
      return {
        ...state,
        name: action.payload
      }

    case FORM_PHONE_CHANGED:
      return {
        ...state,
        phone: action.payload
      }

    case CONTACT_SAVE_SUCCESS:
      return INITIAL_STATE

    default:
      return state;
  }
}
