import './form.css'

function Form () {


    const handleSubmit = (event) => {
        event.preventDefault(); 
        
      };

    return(
        <form className='formContact' onSubmit={handleSubmit}>
            <div className='dataForm'>
                <label className='form1'><span>Nombre: </span><input onChange={handleSubmit} type="text" id="name" placeholder="Ingrese aquí su Nombre (Ej. Alberto)" required /></label>
                <label><span className='form1'>Apellido: </span><input onChange={handleSubmit} type="text" id="surname" placeholder="Ingrese aquí su Apellido (Ej. Gómez)" required /></label><br/>
                <label><span className='form1'>Email: </span><input onChange={handleSubmit} type="text" id="email" placeholder="Ingrese aquí su Email (Ej. 123@gmail.com)" required /></label><br/>
                <label><span className='form1'>Telefono: </span><input onChange={handleSubmit} type="number" id="phone" placeholder="Ingrese celular sin 0 ni 15" required /></label>    
            </div>
            <div className='dataForm'>
                <label className='form1'><span>Motivo: </span><input onChange={handleSubmit} type="text" id="reason" placeholder="Ingrese aquí Motivo de Consulta (Ej. Pedido 6874)"/></label><br/>
                <label><span className='form1'>Comentario: </span><textarea onChange={handleSubmit} name='textarea' rows='10' cols='30' placeholder="Ingrese aquí su comentario..." required/></label><br/>
            </div>
            <div className='dataForm'><br/>
                <label className='formText'><input onChange={handleSubmit} type="checkbox" id="acceptTerms" name="acceptTerms" value="1" /><span className='term'>Aceptar Terminos y Condiciones.</span></label>
            </div><br/>
            <div className='dataForm'>
                <input type="submit"/>
            </div>
        </form>
    )
}

export default Form