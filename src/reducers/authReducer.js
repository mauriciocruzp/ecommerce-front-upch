import { decodeJWT } from "../utils/jwt";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      const {
        userId: id,
        fullName,
        sub: email,
        roles,
      } = decodeJWT(action.payload);

      const user = {
        id,
        fullName,
        email,
        roles,
      };

      return {
        ...state,
        accessToken: action.payload,
        isAuthenticated: true,
        user,
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
