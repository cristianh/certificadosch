/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
export const Button = ({textos,onFilter}) => {
  const navigate = useNavigate();
  return (
    <>
        <div className="buttons">
                {
                    textos.map((texto, index) => (
                        <button key={index} className="elegant-button" onClick={() => onFilter(texto)}>{texto==""?"TODOS":texto.toUpperCase()}</button>
                    ))
                }
          <button className="elegant-button" onClick={() => navigate('/proyectos')}>PROYECTOS</button>
        </div>
    </>
  )
}
