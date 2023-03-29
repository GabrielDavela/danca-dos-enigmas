import React, { useEffect, useReducer } from "react";
import { io } from "socket.io-client";

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
    }

}

const initialState = {
    isConnected: false,
    player: {},
    players: {},
    room: {},
    rooms: {},
    match: {}
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

        socket.on('MatchRefresh', (match) => {
            dispatch({ type: 'MATCH', payload: match })
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

const createRoom = () => {
    socket.emit('CreateRoom')
}

const leaveRoom = () => {
    socket.emit('LeaveRoom')
}

const joinRoom = () => {
    socket.emit('JoinRoom')
}

export {
    GameContext,
    GameProvider,
    createRoom,
    leaveRoom,
    joinRoom
}