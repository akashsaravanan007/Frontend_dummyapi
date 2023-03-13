const initialState = {
    users: [],
    selectedUser: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USERS":
        return {
          ...state,
          users: action.payload,
        };
      case "SELECT_USER":
        return {
          ...state,
          selectedUser: action.payload,
        };
      case "UNSELECT_USER":
        return {
          ...state,
          selectedUser: null,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;