import React from 'react';

// function Card() {        either this line or below one
const Card = ({email, id, name}) => {
    
    return(
        <div className = 'tc ba bg-light-green dib ma3 pa2 br3 grow bw2 shadow-5' >
            <img src = {`https://robohash.org/${id}?size=200x200`} alt='robots'/>
            <div>
                <h3> {name}</h3>
                <p> {email}</p>
            </div>
        </div>
    );
}

export default Card;