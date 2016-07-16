import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MasterAppContainer from './app/main_routes/master/master_app_container';
// Statics
import TrackingMap from './app/static_pages/tracking_map';
import NotFoundPage from './app/static_pages/not_found_page';

export default (
    <Route path="/" component={MasterAppContainer}>
        <IndexRoute component={TrackingMap} />
        <Route path="map" component={TrackingMap} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);
