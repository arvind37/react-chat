export const saveConversations = (data) => {
  localStorage.setItem("conversations", JSON.stringify(data));
};

export const getConversations = () => {
  return JSON.parse(localStorage.getItem("conversations")) || [];
};

export const clearCurrentChat = () => {
  localStorage.removeItem("currentChat");
};
