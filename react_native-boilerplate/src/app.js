import React from 'react';
import { Provider } from 'react-redux';
import Store from './store/store.js';
import Routes from './routes';

class App extends React.Component {

    render() {
        return (
            <Provider store={Store}>
                <Routes />
            </Provider>
        )
    }
}

export default App;