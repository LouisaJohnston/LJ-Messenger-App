import { addMessageToStore } from "./utils/reducerFunctions";

const GET_MESSAGES = "GET_MESSAGES";
const SET_MESSAGE = "SET_MESSAGE";

export const gotMessages = (messages) => {
  return {
    type: GET_MESSAGES,
    messages,
  };
};

export const setNewMessage = (message, sender) => {
  return {
    type: SET_MESSAGE,
    message
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.messages;
    case SET_MESSAGE:
        return addMessageToStore(state, action.message)
    default:
      return state;
  }
};

export default reducer;
