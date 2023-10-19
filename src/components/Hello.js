import React from 'react'

const Hello = props => {
    console.log(props)
    return <h1>Hello {props.name} aka {props.superhero}</h1>
}

/*
function Hello() {
    return <h1>Hello World</h1>
}
*/

//const Hello = () => <h1>Hello World</h1>

export default Hello;