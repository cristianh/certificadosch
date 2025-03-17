/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react"
import { Certificado } from "./Certificado"
//import { useRef } from "react"
import { Button } from "./Button";


export const Certificados = () => {

    const baseUrl = process.env.NODE_ENV == 'prod' ? "https://traditional-zonnya-devpcasa-280804bb.koyeb.app/" : "http://127.0.0.1:5001";
    //const baseUrl = "https://obvious-jacinda-devpcasa-e80207c6.koyeb.app/"
    console.log(baseUrl)
    const [certificados, setCertificados] = useState([])
    const [filterText, setFilterText] = useState('qa')

    //const inputRef = useRef(null);

    const dataCertificacos = () => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                setCertificados(data)
            })

    }

    useEffect(() => {
        console.log('Certificados')
        dataCertificacos()
    }, [])

    /*const onHandleFilter = (event) => {
        event.preventDefault()
        setFilterText(inputRef.current.value)
    }*/

    const filteredCertificados = certificados.filter(certificado =>
        certificado.nombre.toLowerCase().includes(filterText.toLowerCase())
    )


    return (
        <>
            <h2>Certificados</h2>
            <hr />
            {
                /*<select onChange={onHandleFilter} ref={inputRef} name="categorias" id="categorias">
                    <option value="Seleccione" disabled selected>Seleccione</option>
                    <option value="qa">QA</option>
                    <option value="desa">Desarrollo</option>
                </select>*/
            }

            <Button onFilter={setFilterText} textos={['', 'qa', 'desa']} />


            <hr />
            <div className="container">
                <div className="certificado-container">
                    {
                        filteredCertificados.map((certificado) => (
                            <Certificado key={certificado.nombre} {...certificado} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}
