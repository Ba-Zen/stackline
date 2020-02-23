let data = require('./Webdev_data2.json');

const INITIAL_STATE = {
  data
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dataReducer;
