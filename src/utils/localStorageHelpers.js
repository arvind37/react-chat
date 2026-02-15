export const saveConversation = (conversation) => {
  const existing = JSON.parse(localStorage.getItem("conversations")) || [];
  existing.push(conversation);
  localStorage.setItem("conversations", JSON.stringify(existing));
};

export const getConversations = () => {
  return JSON.parse(localStorage.getItem("conversations")) || [];
};

export const clearCurrentChat = () => {
  localStorage.removeItem("currentChat");
};
