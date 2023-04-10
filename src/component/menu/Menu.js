import React, { startTransition, useState } from "react";
import "./Menu.css"

import insertWordMenu from "../../assets/screens/insertWordMenu.svg";
import insertWordMenuY from "../../assets/screens/insertWordMenuY.svg";

import tipMenu from "../../assets/screens/tipMenu.svg";
import tipMenuY from "../../assets/screens/tipMenuY.svg";

import scannerMenu from "../../assets/screens/scannerMenu.svg";
import scannerMenuY from "../../assets/screens/scannerMenuY.svg";

import chatMenu from "../../assets/screens/chatMenu.svg";
import chatMenuY from "../../assets/screens/chatMenuY.svg";
import { useNavigate } from "react-router-dom";

const Menu = ({ onScannerClick, onTipClick, onInsertWordClick }) => {

    const navigate = useNavigate();

    const backgroundClicked = "#662401";

    const [insertWord, setInsertWord] = useState({ "img": insertWordMenu, "background": "" })
    const [tip, setTip] = useState({ "img": tipMenu, "background": "" })
    const [scanner, setScanner] = useState({ "img": scannerMenu, "background": "" })
    const [chat, setChat] = useState({ "img": chatMenu, "background": "" })

    function reload() {
        setInsertWord({ "img": insertWordMenu, "background": "" })
        setChat({ "img": chatMenu, "background": "" })
        setScanner({ "img": scannerMenu, "background": "" })
        setTip({ "img": tipMenu, "background": "" });
    }

    function componentClicked(index) {
        reload();
        // Insert Word
        if (index === 0) {
            setInsertWord({ "img": insertWordMenuY, "background": backgroundClicked })
            // navigate('/insertWord')
            onInsertWordClick()
            // Tip
        } else if (index === 1) {
            setTip({ "img": tipMenuY, "background": backgroundClicked })
            // navigate('/tip')
            onTipClick()
            // Scanner
        } else if (index === 2) {
            setScanner({ "img": scannerMenuY, "background": backgroundClicked })
            onScannerClick()
            // Chat
        } else {
            setChat({ "img": chatMenuY, "background": backgroundClicked })
        }
    }


    return (
        <div className="container__principal__menu">
            <div className="container__clicked__menu"
                style={{ backgroundColor: insertWord.background }}
                onClick={() => componentClicked(0)}>
                <img src={insertWord.img} />
            </div>

            <div className="container__clicked__menu"
                style={{ backgroundColor: tip.background }}
                onClick={() => componentClicked(1)}>
                <img src={tip.img} />
            </div>

            <div className="container__clicked__menu"
                style={{ backgroundColor: scanner.background }}
                onClick={() => componentClicked(2)}>
                <img src={scanner.img} />
            </div>

            <div className="container__clicked__menu"
                style={{ backgroundColor: chat.background }}
                onClick={() => componentClicked(3)}>
                <img src={chat.img} />
            </div>
        </div>
    )
}

export default Menu;