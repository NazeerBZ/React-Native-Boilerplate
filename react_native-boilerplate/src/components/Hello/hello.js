import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native'

class Hello extends React.Component {

    render() {
        return (
            <View>
                <Text>Hello World</Text>
            </View>
        )
    }
}

export default Hello;