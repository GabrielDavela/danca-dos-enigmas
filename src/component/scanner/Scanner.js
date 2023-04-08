import React, { useContext, useEffect, useState } from 'react'
import { GameContext, readyPlayer } from '../../context/GameContext'
import "./Scanner.css"

import { targets } from '../../assets/target'
import GroupScanners01 from './groupScanners/GroupScanners01'
import GroupScanners02 from './groupScanners/GroupScanners02'
import GroupScanners03 from './groupScanners/GroupScanners03'
import GroupScanners04 from './groupScanners/GroupScanners04'
import FirstCards from './groupScanners/FIrstCards'


const Scanner = ({ player }) => {

    console.log(player.color)
    return (
        <div className='container__scanner'>

            {false &&
                <GroupScanners01 target={targets.target_group01} />
            }
            {false &&
                <GroupScanners02 target={targets.target_group02} />
            }
            {false &&
                <GroupScanners03 target={targets.target_group03} />
            }
            {false &&
                <GroupScanners04 target={targets.target_group04} />
            }
            <FirstCards target={targets.first_cards} player={player} />

        </div>
    )
}

export default Scanner
