import React from "react";


const SEGURITY_CODE = 'paradigma';
function UseState({name}) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,

        deleted: false,
        confirmed: false,
    });

    const onConfirm = ()=>{
        setState({
            ...state,
            error:false,
            loading: false,
            confirmed: true

        })
    };
    const onError=()=>{
        setState({
            ...state,
            error:true,
            loading: false
        })
    };
    const onWrite=(newValue)=>{
        setState({
            ...state,
            value : newValue
        })
    };
    const onCheck=()=>{
        setState({
            ...state,
            loading: true,
        })
    };
    const onDeleted=()=>{
        setState({
            ...setState,
            deleted: true,
        })
    };
    const onReset=()=>{
        setState({
            ...setState,
            confirmed: false,
            deleted: false ,
            value: '',
        })
    };

    React.useEffect(()=>{
        console.log("Empezando efecto");
        if (!!state.loading) {
            setTimeout(()=>{
                console.log("Validando");

                if(state.value === SEGURITY_CODE){
                    onConfirm();
                }else{
                    onError();
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
                    onWrite(event.target.value);
                }}

                
            />
            <button
                onClick={() => {
                    onCheck();
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
                        onDeleted();
                    }}
                >Si, eliminar</button>
                <button
                    onClick={()=>{
                        onReset();
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
                        onReset();
                    }}
                >Eliminado con exito</button>
            </React.Fragment>
        ); 
   }
}

export {UseState};