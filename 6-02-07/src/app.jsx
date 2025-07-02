// import Hello from "./components/hello";
// import List from "./components/list";
// import Table from "./components/table";

// import './app.css';

// const pessoas = ['Antonio', 'Joao', 'Caio', 'Gustavo', 'Antonella'];

// const titles = ['ID', 'NOME', 'IDADE'];

// const clients = [

//     { id: 1, nome: "Lucas", idade: 45 },

//     { id: 2, nome: "Ana", idade: 78 },

//     { id: 3, nome: "Bia", idade: 14 },

//     { id: 4, nome: "Faulo", idade: 69 }

// ];

// const App = () => {
//     return (
//         <div>
//             <h1>Prática React</h1>
//             <Hello/>
//             <List 
//                 items={['Cruzeiro', 'Barcelona', 'Liverpool']}
//             />
//             <List items={pessoas}/>
//             <Table titles={titles} data={clients}/>
//         </div>
//     );
// };

// export default App;
import { useState, useRef } from 'react';

import List from './components/list.jsx';

import Select from './components/select.jsx';


const App = () => {

    // const [nome, setNome] = useState(valor_inicial);

    const [felinos, setFelinos] = useState(['Gato', 'Leopardo']);

    const iptFelino = useRef(null);

    function manipulaFormFelinos(e) {

        e.preventDefault();

        setFelinos([...felinos, iptFelino.current.value]);

    }

    return (

        <div>

            <h3>Felinos</h3>

            <form onSubmit={manipulaFormFelinos}>

                <label>Novo </label>

                <input ref={iptFelino} />

                <button>+</button>
            </form>
            <List items={felinos} />
            <h3>Municípios</h3>
            <Select />
        </div>
    );
};

export default App;
