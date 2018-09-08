import ActionTypes from '../Actiontypes';

function data(payload){
  return {
    type: ActionTypes.DATA,
    payload: payload,
  }
};

const Actions = {
  data,
}

export default Actions; 