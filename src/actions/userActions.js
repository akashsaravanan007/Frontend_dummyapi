export const selectUser = (user) => {
  return {
    type: "SELECT_USER",
    payload: user,
  };
};

export const unselectUser = () => {
  return {
    type: "UNSELECT_USER",
  };
};