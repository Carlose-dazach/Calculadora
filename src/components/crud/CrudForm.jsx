export const CrudForm = ()=>{
    return(
        <div>
            <form classname="m-3">
                <label htmlFort="equipo">Equipo:</label>
                <input type="text" name="equipo" />

                <label htmlFort="equipo">Equipo:</label>
                <input type="text" name="país" />
        
                <input type="submit"
                       value="Agregar"
                       className="btn btn-primary mx-2"
                />

                <input type="submit"
                       value="Cancelar"
                       className="btn btn-danger mx-2" 
                />      


            </form>
        </div>
    )
}