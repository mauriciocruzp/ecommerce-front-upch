const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        accessToken: action.payload,
      };
    case 'LOGOUT':
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;