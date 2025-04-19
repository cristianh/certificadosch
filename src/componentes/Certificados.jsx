/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react"
import { Certificado } from "./Certificado"
//import { useRef } from "react"
import { Button } from "./Button";


export const Certificados = () => {

    //const baseUrl = process.env.NODE_ENV == 'prod' ? "https://traditional-zonnya-devpcasa-280804bb.koyeb.app/" : "http://127.0.0.1:5001";
    const baseUrl = "https://traditional-zonnya-devpcasa-280804bb.koyeb.app/"
    console.log(baseUrl)
    const [certificados, setCertificados] = useState([])
    const [filterText, setFilterText] = useState('')

    //const inputRef = useRef(null);

    const dataCertificacos = () => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(dataApi => {
                const { data } = dataApi
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

            <h1>Certificados</h1>
            <hr />
            {
                /*<select onChange={onHandleFilter} ref={inputRef} name="categorias" id="categorias">
                    <option value="Seleccione" disabled selected>Seleccione</option>
                    <option value="qa">QA</option>
                    <option value="desa">Desarrollo</option>
                </select>*/
            }
            <div className="container-parent">
                <div className="buttonsMenu">
                    <Button onFilter={setFilterText} textos={['', 'qa', 'desarrollo']} />

                </div>
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
            </div>
        </>
    )
}
