import React from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import {robots} from './robots.js';
import './App.css';


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
                <h1 className = 'f1'> ROBOFRIENDS </h1>

                {/*  EVEN FOLLOWING CODE WORKS INSTEAD OF HAVING SEARCHBOX 
                <input className = "pa3 ba b--green bg-lightest-blue"
            type = 'search' placeholder = 'search robots'
            onChange = {this.onSearchChange}/>
                 */}
                <SearchBox searchchange = {this.onSearchChange}/>
                <br/>
                <CardList robot_list = {filteredRobots}/>
            </div>
        );
    }
}

export default App;