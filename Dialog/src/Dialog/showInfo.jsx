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
    textAlign: 'center',
    position: 'fixed',
    width: '30%',
    height: '20%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    padding: '80px 10px 0px 10px'
};

const MyInfo = ({ closeModal,data }) => {
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
                <span style={{fontSize: '20px'}}>{data.typeinfo.info}</span>
            </div>
        </>

    )
}
export default MyInfo;
