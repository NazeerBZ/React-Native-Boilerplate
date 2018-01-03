import Actions from '../actions/actions.js';

class DemoMiddleware {

    static demo() {
        return (dispatch) => {
            dispatch(Actions.demoaAction());
        }
    }
}

export default DemoMiddleware;