import React from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import {robots} from './robots.js';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots : robots,
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(
            rob => { 
                return rob.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            }
        )
        return(
            <div className = "tc"> 
                <h1> ROBOFRIENDS </h1>
                <SearchBox searchchange = {this.onSearchChange}/>
                <br/>
                <CardList robot_list = {filteredRobots}/>
            </div>
        );
    }
}

export default App;