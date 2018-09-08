import Actions from '../actions';

function getData(){
  return (dispatch)=>{
    var mockcity = ['Faislabad', 'Peshawar', 'Multan', 'Hydrabad', 'Karachi', 'Islamabad', 'Quetta', 'Rawalpindi', 'Sawat'];
    dispatch(Actions.data(mockcity));
  }
};

const ExampleMiddleware = {
  getData,
}

export default ExampleMiddleware;