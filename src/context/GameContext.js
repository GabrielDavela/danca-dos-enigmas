import React, { useEffect, useReducer } from "react";
import { io } from "socket.io-client";

// const socket = io("https://server-enigma-production.up.railway.app/", {
//     autoConnect: false
// })

const socket = io("http://localhost:4000", {
    autoConnect: false
})

const GameContext = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "CONNECTED":
            return {
                ...state,
                isConnected: action.payload
            }
        case "PLAYER":
            return {
                ...state,
                player: action.payload
            }
        case "PLAYERS":
            return {
                ...state,
                players: action.payload
            }
        case 'ROOM':
            return {
                ...state,
                room: action.payload
            }
        case 'ROOMS':
            return {
                ...state,
                rooms: action.payload
            }
        case 'MATCH':
            return {
                ...state,
                match: action.payload
            }
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case 'READY_PLAYERS':
            return {
                ...state,
                readyplayers: action.payload
            }
        case 'EVERYONE_IS_READY':
            return {
                ...state,
                everyoneIsReady: action.payload
            }
        case 'VERIFY_WORD':
            return {
                ...state,
                hit: action.payload
            }
        default:
            return state
    }

}

const initialState = {
    isConnected: false,
    player: {},
    players: {},
    room: {},
    rooms: {},
    match: {},
    messages: [],
    readyplayers: 0,
    everyoneIsReady: false,
    hit: false
}

const GameProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        // O usuário vai se conectar por aqui
        socket.on('connect', () => {
            dispatch({ type: 'CONNECTED', payload: true })
        })

        // O usuário vai se desconectar por aqui
        socket.on('disconnect', () => {
            dispatch({ type: 'CONNECTED', payload: false })
        })

        // O player vai ser modificado... payload também
        socket.on('PlayersRefresh', (players) => {
            dispatch({ type: 'PLAYERS', payload: players })
            dispatch({ type: 'PLAYER', payload: players[socket.id] })
        })

        // No primeiro, vai passar uma lista de salas, no segundo apenas uma sala
        socket.on('RoomsRefresh', (rooms) => {
            dispatch({ type: 'ROOMS', payload: rooms })
            dispatch({ type: 'ROOM', payload: socket.id })
        })

        // É tipo o match do tinder ksksks
        socket.on('MatchRefresh', (match) => {
            dispatch({ type: 'MATCH', payload: match })
        })

        // Vai receber a mensagem para colocar no chat desse cliente
        // Vale ressaltar que todos os clientes vão receber isso, assim criando aquela experiência de chat
        socket.on('ReceiveMessage', (receivedMessage) => {
            dispatch({ type: 'ADD_MESSAGE', payload: receivedMessage })
        })

        socket.on('ReadyPlayersRefresh', (contador) => {
            dispatch({ type: 'READY_PLAYERS', payload: contador })
        })

        socket.on('EveryoneIsReady', (bool) => {
            dispatch({ type: 'EVERYONE_IS_READY', payload: bool })
        })

        socket.on("FinishGame", (bool) => {
            dispatch({ type: "VERIFY_WORD", payload: bool })
        })

        // Vai fazer com que autoConnect se transforme em true
        socket.open()

        return () => {
            socket.removeAllListeners()
        }
    }, [])

    return (
        <GameContext.Provider value={state}>
            {props.children}
        </GameContext.Provider>
    )
}

const sendMessage = (message) => {
    socket.emit('SendMessage', message)
}

const createRoom = () => {
    socket.emit('CreateRoom')
}

const leaveRoom = () => {
    socket.emit('LeaveRoom')
}

const joinRoom = (roomId) => {
    socket.emit('JoinRoom', roomId)
}

const readyPlayer = () => {
    socket.emit('ReadyPlayer')
}

const verifyWord = (word,color) => {
    socket.emit('VerifyWord', {word,color})
}

export {
    GameContext,
    GameProvider,
    sendMessage,
    createRoom,
    leaveRoom,
    joinRoom,
    readyPlayer,
    verifyWord
}