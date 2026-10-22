

export const ListaNombres =()=>{
    //variables de estado para los nombres
    const[nombre,setNombre] = useState('');
    const[nombres,setNombres] = useState([]);
    //funcion para guardar
    const guardar = ()=>{
        setNombres([...nombres,nombre]);
        setNombre('');
    }
    return(
        <div>
            <p>Ingresa un Nombre:</p>
            <input  type="text" 
                    value={nomnre}
                    onchange={(e)=>setNombre(e.target.value)}
            />
            <button onClick={guardar}>Enviar</button>
            <ul>
                {
                    nombres.map((elemento,index)=>{
                        return(
                            <li key={index}>{elemento}</li>

                        )
                    })
                }
            </ul>
                    
        </div>
    )
}