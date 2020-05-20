import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';
// import * as actions from './../actions/Action';

class MessageContainer extends Component {
    render() {
        return (
            <Message message={this.props.message}></Message>
        );
    }
}
MessageContainer.propTypes = {
    cart:
        PropTypes.shape({
            message: PropTypes.string.isRequired
        })
}


const mapStateToProps = (state, ownProps) => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer)