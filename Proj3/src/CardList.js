import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({robot_list}) => {
    const cardArray = robot_list.map((user, i) =>{
        // return <Card key = {i} id = {robot_list[i].id} name = {robot_list[i].name} email = {robot_list[i].email} />
        return <Card key = {i} id = {user.id} name = {user.name} email = {user.email} />
    })
    
    return(
        <Fragment>
            { cardArray }
        </Fragment>

    );

}


export default CardList;