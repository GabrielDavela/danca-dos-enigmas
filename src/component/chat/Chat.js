import { useEffect, useState } from 'react'
import Menu from '../menu/Menu'

const Chat = (props) => {

    const [messageToSend, setMessageToSend] = useState('')

    const sendMessage = () => {
        props.sendMessage(messageToSend)
        setMessageToSend('')
    }

    // Isso está impedindo da tela aumentar conforme mais mensagens forem adicionadas
    // Assim, a tela do chat vai ser a mesma, com um scroll do lado ai
    useEffect(() => {
        const elem = document.getElementById('chat__content')
        elem.scrollTop = elem.scrollHeight
    }, [props.messages])

    return (
        <div className='chat__container'>
            <div id='chat__content'>{props.messages.join('\n\n')}</div>
            <div>
                <input type="text" value={messageToSend} onChange={(e) => setMessageToSend(e.target.value)} />
                <button
                    disabled={!messageToSend.trim()}
                    // Essa classe seria disabled quando a validação for true
                    // Dai no css é só deixar com uma coloração diferente para mostrar que está desabilitado
                    // Dai no '' coloca o className que quiser para deixar o botão do seu jeito
                    className={!messageToSend.trim() ? 'disabled' : ''}
                    onClick={sendMessage}
                >Enviar</button>
            </div>
            <Menu/>
        </div>
    )
}

export default Chat