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

const Menu = () => {

    const backgroundPattern = "#FAD683";
    const backgroundClicked = "#662401";

    const [insertWord, setInsertWord] = useState({ "img": insertWordMenu, "background": backgroundPattern })
    const [tip, setTip] = useState({ "img": tipMenu, "background": backgroundPattern })
    const [scanner, setScanner] = useState({ "img": scannerMenu, "background": backgroundPattern })
    const [chat, setChat] = useState({ "img": chatMenu, "background": backgroundPattern })

    function reload(){
        setInsertWord({ "img": insertWordMenu, "background": backgroundPattern })
        setChat({ "img": chatMenu, "background": backgroundPattern })
        setScanner({ "img": scannerMenu, "background": backgroundPattern })
        setTip({ "img": tipMenu, "background": backgroundPattern });
    }

    function componentClicked(index) {
        if (index === 0) {
            reload();
            setInsertWord({ "img": insertWordMenuY, "background": backgroundClicked })
        } else if (index === 1) {
            reload();
            setTip({ "img": tipMenuY, "background": backgroundClicked })
        } else if (index === 2) {
            reload();
            setScanner({ "img": scannerMenuY, "background": backgroundClicked })
        } else {
            reload();
            setChat({ "img": chatMenuY, "background": backgroundClicked })
        }
    }


    return (
        <div className="container__principal__menu">

            <div className="container__insert__word__menu"
                style={{ backgroundColor: insertWord.background}}
                onClick={() => componentClicked(0)}>
                <img src={insertWord.img} />
            </div>

            <div className="container__tip__menu"
                style={{ backgroundColor: tip.background }}
                onClick={() => componentClicked(1)}>
                <img src={tip.img} />
            </div>

            <div className="container__scanner__menu"
                style={{ backgroundColor: scanner.background }}
                onClick={() => componentClicked(2)}>
                <img src={scanner.img} />
            </div>

            <div className="container__chat__menu"
                style={{ backgroundColor: chat.background }}
                onClick={() => componentClicked(3)}>
                <img src={chat.img} />
            </div>
        </div>
    )
}

export default Menu;