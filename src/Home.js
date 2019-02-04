import React from "react";
import Query from 'react-apollo';
import {HOME_PAGE} from './Queries';

const Home = () => <Query query={HOME_PAGE}>{}</Query>;

export default Home;