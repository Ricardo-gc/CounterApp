
export const CounterApp = ( { value } ) => {

    const handleApp = (event, newValue) => {
        console.log(event);
    }
    
    return (
        <>
            <h1>Counter App</h1>
            <h2>{ value }</h2>

            <button onClick={ handleApp }>
                +1    
            </button>
        </>
    );
}