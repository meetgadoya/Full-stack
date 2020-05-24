import React from 'react';
import CardList from './CardList.js';
import {robots} from './robots.js';

const App = () => {
    return(
        <CardList robot_list = {robots}/>
    );
}

export default App;