// import './popUp.css'

// export default function PopUp({ isOpen, onClose }) {
//     if (!isOpen) return null;

//     return (
//         <div className="popup-overlay" onClick={onClose}>
//             <aside className="popup-container" onClick={(e) => e.stopPropagation()}>
//                 <div className="popup-button">
//                     <button onClick={onClose} aria-label="Fechar">
//                         <p>X</p>
//                     </button>
//                 </div>

//                 <div className="popup-text">
//                     <span className="firstText">"O jardim floresceu para você."</span>
//                     <h3>Conexão Estabelecida!</h3>
//                     <p className="secondText">
//                         Seu portal literário está pronto. Suas histórias favoritas, marcas de página e sonhos estão exatamente onde você os deixou.
//                     </p>
//                     <p className="lastText">PREPARE-SE PARA A LEITURA</p>
//                 </div>
//             </aside>
//         </div>
//     )
// }

import './popUp.css'

export default function PopUp({ 
    isOpen, 
    onClose, 
    firstText, 
    title, 
    secondText, 
    lastText,
    tryAgain,
    error,
    erroicon
}) {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <aside className="popup-container" onClick={(e) => e.stopPropagation()}>
                <div className="popup-button">
                    <button onClick={onClose} aria-label="Fechar">
                        <p>X</p>
                    </button>
                </div>
                <div className='popup-erroIcon'>
                {error && <img src={error} alt="Erro" className='erroicon' />}
                </div>
                <div className="popup-text">
                    {firstText && <span className="firstText">{firstText}</span>}
                    {title && <h3>{title}</h3>}
                    {secondText && <p className="secondText">{secondText}</p>}
                    <div className='buttonError-group'>
                    {tryAgain && <button className='btnAgain'>{tryAgain}</button>}
                    </div>
                    {lastText && <p className="lastText">{lastText}</p>}
                </div>
            </aside>
        </div>
    )
}