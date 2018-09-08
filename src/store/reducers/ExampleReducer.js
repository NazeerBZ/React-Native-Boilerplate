import ActionTypes from '../Actiontypes';

const INITIAL_STATE = {
  data: null
};

function ExampleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.DATA:
      return { ...state, data: action.payload };

    default:
      return state;
  }
}

export default ExampleReducer;


// ****nested example****
// const initialState = {
//   myPosts: {
//     isPending: false,
//     data: []
//   }
// };
// {...state, myPosts: { ...state.myPosts, isPending: true } }