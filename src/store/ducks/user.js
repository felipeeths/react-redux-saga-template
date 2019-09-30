export const Types = {
  LOGIN_REQUEST: 'user/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'user/LOGIN_SUCCESS',
  LOGIN_ERROR: 'user/LOGIN_ERROR',
  ERROR: 'user/ERROR',
};

const INITAL_STATE = {
  loading: false,
  me: {},
  token: '',
  errorLogin: null,
};

export default function user(state = INITAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true, errorLogin: null };
    case Types.LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload.token };
    case Types.LOGIN_ERROR:
      return { ...state, loading: false, errorLogin: true };
    default:
      return state;
  }
}

export const Creators = {
  getLoginRequest: (tokenuid) => ({
    type: Types.LOGIN_REQUEST,
    payload: { tokenuid },
  }),
  getLoginSuccess: (token) => ({
    type: Types.LOGIN_SUCCESS,
    payload: { token },
  }),
  getLoginError: () => ({
    type: Types.LOGIN_ERROR,
  }),
};
