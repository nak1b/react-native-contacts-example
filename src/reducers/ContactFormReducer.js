import { 
  TOGGLE_CONTACT_FORM
} from '../actions/ContactFormActions';


const INITIAL_STATE = {
  error: '',
  showForm: false
};


export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_CONTACT_FORM: 
      return {
        ...state,
        showForm: action.payload
      }

    default:
      return state;
  }
}
