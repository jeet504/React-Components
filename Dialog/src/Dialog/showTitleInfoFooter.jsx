import { React,useEffect } from 'react'

let modalWrapper = {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(189,189,189,0.9)'
};
let modalContainer = {
    textAlign: 'centre',
    position: 'fixed',
    width: '20%',
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    padding: '15px 10px 20px 10px'
};
let buttonPosition = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
};
let modalButton = {
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


const MyTitleFooter = ({ closeModal, data }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'scroll'
        };
    }, []);
    return (
        <>
            <div style={modalWrapper} onClick={closeModal}></div>
            <div style={modalContainer}>
                <span style={{ fontSize: '14px',color:'black' }}>{data.typeinfo.title}</span>
                <hr />
                <span style={{ fontSize: '12px' }}>{data.typeinfo.info}</span>
                <hr />
                <div style={buttonPosition}>
                    <button style={modalButton} onClick={closeModal}>{data.typeinfo.buttons.button1}</button>
                    <button style={modalButton} onClick={closeModal}>{data.typeinfo.buttons.button2}</button>
                </div>
            </div>
        </>

    );
}

export default MyTitleFooter;