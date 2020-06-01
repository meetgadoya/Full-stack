import React, { Fragment } from 'react';

const SearchBox = ({searchchange}) => {
    return (
        <Fragment>
            <input className = "pa3 ba b--green bg-lightest-blue"
            type = 'search' placeholder = 'search robots'
            onChange = {searchchange}/>
        </Fragment>
    );
}

export default SearchBox;