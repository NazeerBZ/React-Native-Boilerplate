import React from 'react';
import { connect } from 'react-redux';
import { Hello } from '../../components';

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

class Demo extends React.Component {

    render() {
        return (
            <Hello />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);