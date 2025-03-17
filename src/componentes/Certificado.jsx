/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";



export const Certificado = ({ nombre, url }) => {

    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        console.log("inicio component", url)
        setLoading(true)
    }, [url])





    // Función para agregar la marca de agua y generar la URL modificada
    const agregarMarcaAgua = (urlImagen) => {
        const marcaAguaId = 'marca_agua:marca_agua_ch';  // ID de la marca de agua en Cloudinary
        const opacidad = 'o_30';  // Opacidad al 30%
        const ancho1 = 'w_0.4';  // Marca de agua ocupando el 70% del ancho
        const ancho2 = 'w_0.4';  // Marca de agua ocupando el 70% del ancho
        const ancho3 = 'w_0.4';  // Marca de agua ocupando el 70% del ancho
        const posicion1 = 'g_north';  // Posición en el centro
        const posicion3 = 'g_center';  // Posición en el centro
        const posicion2 = 'g_south';  // Posición en el centro

        // Crear la URL transformada
        const urlTransformada = `http://res.cloudinary.com/dl7oqoile/image/upload/l_${marcaAguaId},fl_relative,${ancho1},${opacidad},${posicion1}/l_${marcaAguaId},fl_relative,${ancho2},${opacidad},${posicion2}/l_${marcaAguaId},fl_relative,${ancho3},${opacidad},${posicion3}/${urlImagen.split('cloudinary.com/dl7oqoile/image/upload/')[1]}`;

        return urlTransformada
    };

    // Manejador para el clic derecho
    const manejarClicDerecho = (event) => {
        event.preventDefault();  // Evita el menú contextual predeterminado
        const nuevaURL = agregarMarcaAgua(url);  // Obtener la URL transformada
        window.open(nuevaURL, '_blank');  // Abrir en una nueva pestaña
    };

    return (
        <div className="certificado">
            <div className="certificado-info">
                {
                    isLoading ?
                        <>
                            <img alt={nombre.split("_")[0].replace(/-/g, ' ')} src={url} onContextMenu={manejarClicDerecho} />
                            <p className="certificado-name">{nombre.split("_")[0].replace(/-/g, ' ').toUpperCase()}</p>
                        </> :
                        <>
                            <div className="loading">

                            </div>
                            <span>Cargando...</span>
                        </>
                }
            </div>
        </div>
    )
}
