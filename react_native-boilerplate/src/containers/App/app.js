import React from 'react';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';
import Store from '../../store/store';
import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    componentWillMount() {
        persistStore(Store, { storage: AsyncStorage }, () => {
            this.setState({
                loading: true
            })
        })
    }

    render() {
        if (this.state.loading === true) {
            return (
                <View>
                    {this.props.navigation.navigate('Login')}
                </View>
            )
        }
        else {
            return (
                <ActivityIndicator
                    color="black"
                    size="large"
                    style={style.centering}
                    animating={!this.state.loading}
                />
            )
        }
    }
}

export default App;

const style = {
    centering: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    }
}