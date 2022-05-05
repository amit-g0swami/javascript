import React from 'react'
import PropTypes from "prop-types"

function reactPropsTypes({ name, age }) {
    return (
        `${name}  ${age}`
    )
}

reactPropsTypes.propTypes = {
    name: PropTypes.string,
    age: PropTypes.any,
    state: PropTypes.number.isRequired
}

export default reactPropsTypes;

 // <reactPropsTypes name="amit"  age=22 state="abc" />
 // npm i prop-types 