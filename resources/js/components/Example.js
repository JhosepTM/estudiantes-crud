import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios, {get} from 'axios';

function Example() {

    const [listaEstudiantes, setListaEstudiantes] = useState([])
    useEffect(()=>{
        getEstudiantes();
    },[])

    const getEstudiantes = async () => {
        const res = await get('http://localhost:8000/estudiantes')
        setListaEstudiantes(res.data)
        console.log(res.data)
    }

    return (
        <div className="container">
            <h1>Componente de ejemplo jjjjj</h1>
            { listaEstudiantes.map(estudiante =>(
                <div key={estudiante.id}>
                    {estudiante.nombres}
                </div>
            ))}
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
