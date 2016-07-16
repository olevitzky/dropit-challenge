import React, { Component, PropTypes } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import coordsApi from '../api/coordinates';

class TrackingMap extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            marker: {},
            mapCenter: {
                lat: 25.0112183, 
                lng: 121.52067570000001
            }
        };
        this.fetchNewLocation = this.fetchNewLocation.bind(this);
    }

    componentDidMount() {
        setInterval(this.fetchNewLocation, 5000);
    }

    fetchNewLocation() {
        console.log("Fetching new location...");
        this.props.shared.showLoader();
        coordsApi.latestCoordinates().then((res) => {
            if (res.data) {
                const marker = {
                    position: {
                        lat: parseFloat(res.data.lat),
                        lng: parseFloat(res.data.lng)
                    },
                    key: `${res.data.lat},${res.data.lng}`,
                    defaultAnimation: 2
                };

                const currentMarker = this.state.marker;

                if (currentMarker.key !== marker.key) {
                    this.setState({mapCenter: marker.position, marker: marker});
                    this.props.shared.showNotification(`New location found: ${marker.position.lat}, ${marker.position.lng}`);
                }
            }
            this.props.shared.hideLoader();
        }).catch((err) => {
            this.props.shared.showNotification("Something went wrong while fetching location.");
        });
    }
    
    render() {
        return (
            <section style={{height: "600px"}}>
                <GoogleMapLoader
                    containerElement={
                        <div
                            style={{
                                height: "100%"
                            }}
                        />
                    }
                    googleMapElement={
                        <GoogleMap
                            ref={(map) => console.log(map)}
                            defaultZoom={3}
                            center={this.state.mapCenter}
                        >
                            <Marker key={this.state.marker.key} {...this.state.marker} />
                        </GoogleMap>
                    }
                />
            </section>
        );
    }
}

TrackingMap.propTypes = {
    shared: React.PropTypes.object
};

export default TrackingMap;
