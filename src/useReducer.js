
import React from "react";


const SEGURITY_CODE = 'paradigma';
function UseReducer({name}) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(()=>{
        console.log("Empezando efecto");
        if (!!state.loading) {
            setTimeout(()=>{
                console.log("Validando");

                if(state.value === SEGURITY_CODE){
                   dispatch({type: 'CONFIRM'})
                }else{
                    dispatch({Type: 'ERROR'})
                }
                console.log("Terminado validacion"); 
            },3000);
        }
        console.log("Termino el efecto"); 
    }, [state.loading]);

   if (!state.deleted && !state.confirmed) {
       return(
        <div>
            <h1>Eliminar {name}</h1>
            <p>Por favor, escriba el código de seguridad.</p>
            {state.error && (
                <p>Error: codigo error</p>
            )}
            {state.loading && (
                
                <p>Espere...</p>
            )}
            <input
                placeholder="Codigo de seguridad"
                value={state.value}
                onChange={(event)=>{
                    // console.log(event.target.value)
                    dispatch({Type: 'WRITE', payload: event.target.value})
                }} 
            />
            <button
                onClick={() => {
                    dispatch({Type: 'CHECK'})
                }}
            >Comprobar</button>
        </div>
       );
   }else if(!!state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <h2>Eliminar</h2>
                <p>Estas seguro que quieres eliminar?</p>
                <button
                    onClick={()=>{
                        dispatch({Type: 'DELETE'})
                    }}
                >Si, eliminar</button>
                <button
                    onClick={()=>{
                        dispatch({Type: 'RESET'})
                    }}
                >No, volver</button>
            </React.Fragment>
        );
   } else {
        return(
            <React.Fragment>
                <p>Eliminado con exito</p>
                <button
                    onClick={()=>{
                        dispatch({Type: 'RESET'})
                    }}
                >Eliminado con exito</button>
            </React.Fragment>
        ); 
   }
}


const initialState ={
    value: '',
    error: false,
    loading: false,

    deleted: false,
    confirmed: false,
};

const reducerObject = (state, payload) => (
    console.log(payload),
    {
    'CONFIRM':{
        ...state,
        error:false,
        loading: false,
        confirmed: true

    },
    'WRITE':{
        ...state,
        value: payload,
    },
    'DELETE':{
        ...state,
        deleted: true,
    },
    
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'CHECK': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    'RESET':{
        ...state,
        confirmed: false,
        deleted: false ,
        value: '',
    },
 })
 const reducer = (state, action) => {
    //  console.log(action.payload + ' payload' + state)
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state;
    }
 }

export {UseReducer};
