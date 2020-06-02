import React from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => {return response.json()})
    //         .then(users => {this.setState({robots:users})})
    //     // this.setState({robots : robots});
    // }

    // Either this or above works, this is just added to show
    //  how can we make async calls
    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
            .then(data => { return data.json()});
        this.setState({robots : data})
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});
    }

    render(){
        const {robots , searchfield} =  this.state;

        const filteredRobots = robots.filter(rob => { 
            return rob.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        if(!robots.length){
            return(<h1>Loading</h1>);
        }
        else {
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
                    <br/>
                    <Scroll>
                        <CardList robot_list = {filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }

    
}

export default App;