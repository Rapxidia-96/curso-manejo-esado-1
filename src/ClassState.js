import React from "react";
import { Loading } from "./Loading";
const SEGURITY_CODE = '';

class ClassState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: false,
            loading: false,
            value: '',
        };
    }

    // UNSAFE_componentWillMount (){
    //     console.log("componentWillMount")
    // }

    // componentWillUnmount(){
    //     console.log("componentWillUnmount")
    // }
    
    componentDidUpdate(){
        console.log("Actualizacion")

        if (!!this.state.loading) {
            setTimeout(()=>{
                console.log("Validando");
                if (SEGURITY_CODE === this.state.value) {
                    this.setState({error: false,loading: false}); 
                }else{
                    this.setState({error: true, loading: false}); 
                }
                console.log("Terminado validacion"); 
            },3000);
        }
    }

    render(){
        return(
            <div>
                <h1>Eliminar {this.props.name}</h1>
                <p>Por favor, escriba el código de seguridad.</p>
                {(this.state.error && !this.state.loading) && (
                <p>Error: codigo error</p>
                )}
                {this.state.loading && (
                    <Loading/>
                )}
                <input
                    placeholder="Codigo de seguridad"
                    value={this.setState.value}
                    onChange={(event)=>{
                        this.setState({value: event.target.value})
                    }}
                />
                <button
                    onClick={()=> this.setState({loading:true})}
                >Comprobar</button>
            </div>
        )
    }
}


export {ClassState}