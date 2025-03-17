/* eslint-disable react/prop-types */
export const Button = ({textos,onFilter}) => {
  return (
    <>
        <div className="buttons">
                <button className="elegant-button" onClick={() => onFilter(textos[0])}>Todos</button>
                <button className="elegant-button" onClick={() => onFilter(textos[1])}>QA</button>
                <button className="elegant-button" onClick={() => onFilter(textos[2])}>Desarrollo</button>
        </div>
    </>
  )
}
