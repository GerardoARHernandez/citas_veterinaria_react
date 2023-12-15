import {useState, useEffect} from 'react' 
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {
  // Para obtener lo que haya en localStorage y se quede guardado, se manda al useState la const inicial
  const inicial = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  
  const [pacientes, setPacientes] = useState(inicial);
  // Para editar el paciente
  const [paciente, setPaciente] = useState({});

  
  // Para almecenar en el localStorage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]) //Solo se ejecuta cuando hay un cambio en pacientes


  // Para eliminar el paciente
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }
  return (
    <div className="container mx-auto mt-20">
      <Header 
        
      />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
