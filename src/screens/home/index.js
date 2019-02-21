import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => <div>
    <h1>Home Page</h1>
    <Link to='/activity/id'> go to the activity</Link>
</div>

export default Home;