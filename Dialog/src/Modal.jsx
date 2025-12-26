import React, { useState } from "react";
import MyTitleFooter from "./Dialog/showTitleInfoFooter";
import MyInfo from "./Dialog/showInfo";
import MyTitleInfo from "./Dialog/showTitleInfo";

let modalButton = {
    width:100,
    padding: 8,
    fontSize: 14,
    border: 'none',
    borderRadius: 10,
    backgroundColor: '#1F70B7',
    color: '#fff',
    cursor: 'pointer',
    fontFamily: '"Work Sans",sans-serif',
    transform: 'scale(0.9)',
    ':hover': {
        backgroundColor: '#fff',
        color: '#212121',
        border: '#212121',
        transform: 'scale(1)',
        transition: 'all 0.1s'
    }
};
let dialogButton={
    display:"flex",
    alignItems:"centre",
    justifyContent:"centre",
    textAlign:"centre"
}
const Modal = ({json}) => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => { setShowModal(false); }

    return (
        <div style={dialogButton}>
            {json.type.toLowerCase()== "dialog"? <><button style={modalButton} onClick={() => setShowModal(true)}>Dialog</button>
            {showModal && <MyInfo closeModal={closeModal} data={json} />}</>:
            json.type.toLowerCase()== "dialogwithtitle"? <><button style={modalButton} onClick={() => setShowModal(true)}>Dialog</button>
            {showModal && <MyTitleInfo closeModal={closeModal} data={json} />}</>: 
            <><button style={modalButton} onClick={() => setShowModal(true)}>Dialog</button>
            {showModal && <MyTitleFooter  closeModal={closeModal} data={json}/>}</>}
        </div>

    )
}
export default Modal;

