
import "./ChooseTeam.css"

const ChooseTeam = ({ player, handleCloseModal }) => {
    

    const handleChooseTeam = (color) => {
        player.color = color
        localStorage.setItem("user", JSON.stringify(player))
        handleCloseModal()
    }   

    
    return (
        <div className="container__modal-chooseteam">
            <div className="modal-chooseteam">
                <h2 className="title__modal-chooseteam">Escolha uma cor para <br />seu time:</h2>
                <div className="container__buttons-chooseteam">
                    <div>
                        <button className="button__modal-chooseteam" onClick={() => handleChooseTeam('Vermelho')} id="red">Vermelho</button>
                        <button className="button__modal-chooseteam" onClick={() => handleChooseTeam('Amarelo')} id="yellow">Amarelo</button>
                    </div>
                    <div>
                        <button className="button__modal-chooseteam" onClick={() => handleChooseTeam('Verde')} id="green">Verde</button>
                        <button className="button__modal-chooseteam" onClick={() => handleChooseTeam('Azul')} id="blue">Azul</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseTeam