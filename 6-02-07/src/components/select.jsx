import { useState, useRef, useEffect } from 'react';



const Select = () => {

    const [municipios, setMunicipios] = useState([]);

    const [uf, setUf] = useState('');



    const iptUf = useRef(null);



    function manipulaFormUf(e) {

        e.preventDefault();

        setUf(iptUf.current.value);        

    }



    useEffect(()=>{

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)

        .then((res)=>{

            return res.json();

        })

        .then((json)=>{

            setMunicipios(json);

        });

    }, [uf]);



    return (

        <div>

            <form onSubmit={manipulaFormUf}>

                <label>UF: </label>

                <input ref={iptUf}/>

                <button>Buscar</button>

            </form>

            <select>

                {

                    municipios.map((v, i) => {

                        return <option> {v.nome} </option>

                    })

                }

            </select>

        </div>

    );

};



export default Select;