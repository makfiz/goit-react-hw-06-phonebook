import shortid from 'shortid'

export const addContact = (name, number) => {
    return {
        type: "contacts/addContact",
        payload: {
            id: shortid.generate(),
            name,
            number,
        }
    }
}

export const deleteContact = id => {
  return {
    type: "contacts/deleteContact",
    payload: id,
  };
};

export const filterByValue = value => {
  return {
    type: "filter/filterByValue",
    payload: value,
  };
};