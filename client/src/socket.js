import io from "socket.io-client";
import store from "./store";
import {
  setNewConvoMessage,
  setMarkedMessage,
  removeOfflineUser,
  addOnlineUser,
} from "./store/conversations";
import { setNewMessage } from "./store/convoMessages";

const token = window.localStorage.jwtToken;
const socket = io.connect(window.location.origin, {
  query: { token },
});

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });

  socket.on("new-message", (data) => {
    store.dispatch(setNewConvoMessage(data.message, data.sender));
    store.dispatch(setNewMessage(data.message, data.sender));
  });

  socket.on("message-marked", (message) => {
    store.dispatch(setMarkedMessage(message));
  });
});

export default socket;
