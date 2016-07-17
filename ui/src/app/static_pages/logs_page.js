import React, { Component, PropTypes } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import logsApi from '../api/logs';
import BodyClassName from 'react-body-classname';
import scrollToElement from 'scroll-to-element';

class LogsPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            logs: []
        };
        this.fetchLatestLog = this.fetchLatestLog.bind(this);
        this.updateScroll = this.updateScroll.bind(this);
    }

    componentDidMount() {
        this.props.shared.showLoader();
        logsApi.getAllLogs().then((res) => {
            if (res.data && res.data.logMessages) {
                this.setState({logs: res.data.logMessages});
            }
            this.props.shared.hideLoader();
            this.updateScroll();
            setInterval(this.fetchLatestLog, 3000);
        }).catch((err) => {
            this.props.shared.showNotification("Something went wrong while fetching location.");
        });
    }

    updateScroll() {
        const currentLogs = this.state.logs;
        if (currentLogs.length > 0) {
            const lastElement = currentLogs[currentLogs.length - 1];
            scrollToElement(`#log-${lastElement.id}`);
        }
    }

    fetchLatestLog() {
        console.log("Fetching new logs...");
        this.props.shared.showLoader();
        logsApi.latestLogMessage().then((res) => {
            if (res.data && res.data.id) {
                const similarLogs = this.state.logs.filter(log => log.id == res.data.id);
                const alreadyExists = similarLogs.length > 0;
                if (!alreadyExists) {
                    const allLogs = this.state.logs.slice();
                    allLogs.push(res.data);
                    const newState = {...this.state, ...{logs: allLogs}};
                    this.setState(newState);
                    this.updateScroll();
                }
            }
            this.props.shared.hideLoader();
        }).catch((err) => {
            this.props.shared.showNotification("Something went wrong while fetching location.");
        });
    }
    
    render() {
        return (
            <BodyClassName className="logs_body">
                <section id="logs_page" style={{height: "100%"}}>
                    <h1 style={{color: "black", textAlign: "center", background: "white", margin: 0, padding: "20px"}}>Logs</h1>
                    <ul style={{margin: 0, padding: "10px"}}>
                        {this.state.logs.map(function(log) {
                            return  (
                                <li id={`log-${log.id}`} key={log.id} className={log.severity}>
                                    <span>{`(${log.severity})`}</span>: {log.content}
                                </li>
                            );
                        }.bind(this))}
                    </ul>
                </section>
            </BodyClassName>
        );
    }
}

LogsPage.propTypes = {
    shared: React.PropTypes.object
};

export default LogsPage;
