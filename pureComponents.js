import React, { Component } from "react"

// avg class component
// export default class Test extends React.Component {
//     render() {
//         return <h1></h1>;
//     }
// }

export default class Test extends React.PureComponent {
    render() {
        return <h1></h1>;
    }
}

// diff is pure Component check the difference if the state is changed
// or not but only for simple data structure does not work for complex
// data stucture