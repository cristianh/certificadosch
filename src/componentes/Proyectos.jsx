
export const Proyectos = () => {

    const links = [
        {

            nombre: "ColombianGame.S.A",
            url: "https://res.cloudinary.com/dl7oqoile/image/upload/v1745080448/proyectos/proyecto1.png",
            urlView: "https://modulodicacticocircuitos.netlify.app/",
            descripcion: "Proyecto realizado para la empresa ColombianGame.S.A"
        },
        {
            nombre: "ColombianGame.S.A",
            url: "https://res.cloudinary.com/dl7oqoile/image/upload/v1745080448/proyectos/proyecto2.png",
            urlView: "https://gamepiedrapapeltijeradev.netlify.app/",
            descripcion: "Proyecto realizado para la empresa ColombianGame.S.A"
        },
        {
            nombre: "ColombianGame.S.A",
            url: "https://res.cloudinary.com/dl7oqoile/image/upload/v1745080448/proyectos/proyecto3.png",
            urlView: "https://colombiasimbolospatrios.netlify.app/",
            descripcion: "Proyecto realizado para la empresa ColombianGame.S.A"
        },
        {
            nombre: "ColombianGame.S.A",
            url: "https://res.cloudinary.com/dl7oqoile/image/upload/v1745080448/proyectos/proyecto4.png",
            urlView: "https://peligrodelasminassubterraneas.netlify.app/",
            descripcion: "Proyecto realizado para la empresa ColombianGame.S.A"
        },
        {
            nombre: "ColombianGame.S.A",
            url: "https://res.cloudinary.com/dl7oqoile/image/upload/v1745080448/proyectos/proyecto5.png",
            urlView: "https://sistemasolarinfo.netlify.app/",
            descripcion: "Proyecto realizado para la empresa ColombianGame.S.A"
        },
        {
            nombre: "Ingeotecnia",
            url: "https://res.cloudinary.com/dl7oqoile/image/upload/v1745080448/proyectos/proyecto6.png",
            urlView: "https://ingeotecniaconstructora.com/",
            descripcion: "Proyecto realizado para la empresa INGEOTECNIA.S.A"
        },
        {
            nombre: "Sismicayestructural",
            url: "https://res.cloudinary.com/dl7oqoile/image/upload/v1745080448/proyectos/proyecto7.png",
            urlView: "https://sismicayestructural.com/",
            descripcion: "Proyecto realizado para la empresa ColombianGame.S.A"
        },
        {
            nombre: "Orizonmobile",
            url: "https://res.cloudinary.com/dl7oqoile/image/upload/v1745080448/proyectos/proyecto8.png",
            urlView: "https://orizonmobile-56b43.web.app/",
            descripcion: "Proyecto realizado para la empresa SEOIMPACTO.S.A.S"
        },
        {
            nombre: "Naturalwayu",
            url: "https://res.cloudinary.com/dl7oqoile/image/upload/v1745080448/proyectos/proyecto9.png",
            urlView: "https://naturalwayu.com/",
            descripcion: "Proyecto realizado para la empresa STONEWEB"
        },
        {
            nombre: "QUALITYFINISHERS",
            url: "https://res.cloudinary.com/dl7oqoile/image/upload/v1745080448/proyectos/proyecto10.png",
            urlView: "https://sistemasolarinfo.netlify.app/",
            descripcion: "Proyecto realizado para la empresa SEOIMPACTO.S.A.S"
        },
        {
            nombre: "RHRQUALITY",
            url: "https://res.cloudinary.com/dl7oqoile/image/upload/v1745080448/proyectos/proyecto11.png",
            urlView: "https://plastering.firebaseapp.com/",
            descripcion: "Proyecto realizado para la empresa SEOIMPACTO.S.A.S"
        }
    ]


    return (
        <>
            <h1>Proyectos</h1>
            <hr />
            <div className="container-parent">
                <div className="buttonsMenu">
                    <button className="elegant-button" onClick={() => window.history.back()}>HOME</button>
                </div>
                <hr />
                <div className="container">
                    <div className="container-proyectos">
                        {
                            links.map((link, index) => (
                                <div className="item" key={index}>
                                    <div className="proyectos">
                                        <div className="proyecto-info">
                                            <img src={link.url} alt={link.nombre} />
                                        </div>
                                        <div className="proyecto-descripcion">
                                            <h2>{link.nombre}</h2>
                                            <summary>{link.descripcion}</summary>
                                            <hr />
                                            <button className="elegant-button" type="button"> <a href={link.urlView} target="_blank">Ver</a></button>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
