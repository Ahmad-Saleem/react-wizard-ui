import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Activity = () => <div>
    <h1>Activity Page</h1>
    <Link to='/activity/add'>Add New Activity</Link>
</div>

export default withRouter(Activity);