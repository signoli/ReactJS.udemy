export const HelloWorldApp = () => {
    let hora = new Date;
    return (
        <h5>
           Fecha: { JSON.stringify( hora ) }
        </h5>
    )
}
