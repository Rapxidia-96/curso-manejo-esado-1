import React from "react";
class Loading extends React.Component {
    componentDidMount(){
        console.log("componentDidMount")
    }

    render(){
        return(
            <p>Espere...</p>    
        )
    }
}


export {Loading}