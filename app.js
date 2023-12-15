const información = async() => {
    try {
        const respuesta = await fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
        console.log(respuesta);

        if(respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos);  
        }else if(respuesta.status === 404){
            console.log('Hay un error muy grande');
        }else{
            console.log('Datos no encontrados');
        }
        
    }catch(error){
        console,log(error);
    }
}