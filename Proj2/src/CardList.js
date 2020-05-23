import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({robot_list}) => {
    const cardArray = robot_list.map((user, i) =>{
        return <Card id = {robot_list[i].id} name = {robot_list[i].name} email = {robot_list[i].email} />
    })
    
    return(
        <Fragment>
            { cardArray }
        </Fragment>

    );

}


export default CardList;