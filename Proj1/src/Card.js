import React from 'react';

// function Card() {        either this line or below one
const Card = () => {

    return(
        <div className = 'bg-light-green dib ma3 pa2 br3 grow' >
            <img src = 'https://robohash.org/test?200x200' alt='robots'/>
            <div>
                <h3> Jane Doe</h3>
                <p> janedoe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;