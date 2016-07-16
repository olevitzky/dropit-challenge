import React, { Component, PropTypes } from 'react';
import MasterLoader from '../../shared/loader/master_loader';
import MasterNotification from '../../shared/notifications/master_notification';
import {red600} from 'material-ui/styles/colors';

class MasterApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.showNotification = this.showNotification.bind(this);
        this.closeNotification = this.closeNotification.bind(this);
        this.showLoader = this.showLoader.bind(this);
        this.hideLoader = this.hideLoader.bind(this);
    }

    //////////// Shared functions /////////////

    showNotification(message) {
        this.props.actions.showNotification(message);
    }

    closeNotification() {
        this.props.actions.hideNotification();
    }

    showLoader() {
        this.props.actions.showLoader();
    }

    hideLoader() {
        this.props.actions.hideLoader();
    }

    ///////////////////////////////////

    sharedActions() {
        return {
            showNotification: this.showNotification, 
            hideLoader: this.hideLoader, 
            showLoader: this.showLoader
        };
    }

    renderChild(element) {
        return React.cloneElement(element, {
            shared: this.sharedActions()
        });
    }

    render() {
        return (
            <div>
                {React.Children.map(this.props.children, this.renderChild.bind(this))}
                <MasterNotification notification={this.props.appState.notification} closeNotification={this.closeNotification}/>
                <MasterLoader loader={this.props.appState.loader} />
            </div>
        );
    }
}

MasterApp.propTypes = {
    children: PropTypes.element,
    actions: React.PropTypes.object,
    appState: React.PropTypes.object
};

export default MasterApp;

