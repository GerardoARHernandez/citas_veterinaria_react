import { useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])//Se consulta cuando el argumento se modifica, sino se pasa nada solo lo hace una vez




  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = e => {
    e.preventDefault();

    //Validación del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay un campo vacio')

      setError(true)
    }else{
      setError(false)
    }

    //Objeto de Paciente
    const objetoPaciente ={
      nombre, propietario, email, fecha, sintomas
    }

    if(paciente.id ){
      // Editando el registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map( pacienteState =>
      pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else{
      // Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }
    

    //Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }

  
  return (
    <div className="md:w-1/2 lg:h-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {" "}
          <span className="text-indigo-500 font-bold">Administralos</span>
        </p>

        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            {error && <Error><p>Todos los campos son obligatorios</p></Error>  }
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre de la Mascota
            </label>
            <input 
              id="mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="text" 
              placeholder="Nombre de la Mascota"
              value={nombre}
              onChange={ (e) => setNombre(e.target.value) }
            />
          </div> {/* final del nombre de la mascota */}

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre del Propietario
            </label>
            <input 
              id="propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="text" 
              placeholder="Nombre del Propietario"
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value) }
            />
          </div> {/* final del nombre del propietario */}

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              email
            </label>
            <input 
              id="email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="email" 
              placeholder="Email Contacto Propietario"
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div> {/* final del nombre del email */}

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Alta
            </label>
            <input 
              id="alta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              type="date" 
              value={fecha}
              onChange={ (e) => setFecha(e.target.value) }
            />
          </div> {/* final del nombre de la fecha de alta */}

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Sintomas
            </label>
            <textarea name="" id="sintomas" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
            />
          </div> {/* final del nombre de los sintomas */}

          <input type="submit" 
          className="bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-600 cursor-pointer transition-all"
          value={ paciente.id ? 'Editar Paciente' : "Agregar Paciente"}
          />

          </form> {/* final del formulario */}
    </div>
  )
}

export default Formulario