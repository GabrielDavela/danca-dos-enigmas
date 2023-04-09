import React from 'react'
import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import "./Scanner.css"

import { targets } from '../../assets/target'
import GroupScanners01 from './groupScanners/GroupScanners01'
import GroupScanners02 from './groupScanners/GroupScanners02'
import GroupScanners03 from './groupScanners/GroupScanners03'
import GroupScanners04 from './groupScanners/GroupScanners04'
import FirstCards from './groupScanners/FirstCards'

const Scanner = ({ player }) => {

    const { everyoneIsReady } = useContext(GameContext)

    return (
        <div className='container__scanner'>

            {player.color.toLowerCase() === "vermelho" && everyoneIsReady &&
                <GroupScanners01 target={targets.target_group01} />
            }

            {player.color.toLowerCase() === "azul" && everyoneIsReady &&
                <GroupScanners02 target={targets.target_group02} />
            }

            {player.color.toLowerCase() === "amarelo" && everyoneIsReady &&
                <GroupScanners03 target={targets.target_group03} />
            }

            {player.color.toLowerCase() === "verde" && everyoneIsReady &&
                <GroupScanners04 target={targets.target_group04} />
            }

            <FirstCards target={targets.first_cards} player={player} />

        </div>
    )
}

export default Scanner
