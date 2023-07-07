// reducers.js
const initialState = {
    name: '',
    email: '',
    password: '',
    isLoading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoading: false,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  