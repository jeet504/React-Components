import React, { useEffect, useRef, useState } from "react";

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
    width: '70%',
    height: '60%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#ffff',
    borderRadius: '0.5rem',
    padding: '15px 10px 20px 10px'
};
let buttonStyle = {
    border: 'none',
    backgroundColor: '#1F70B7',
    borderRadius: '5px',
    padding: '8px 10px',
    cursor: 'pointer',
}

const MySignaturePad = ({ closeModal, onSave }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'scroll'
        };
    }, []);

    const signaturecanvas = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [hasSignature, setHasSignature] = useState(false);

    const startDrawing = () => {
        const canvas = signaturecanvas.current;
        const context = canvas.getContext('2d');
        context.strokeStyle = '#OOO';
        context.lineWidth = 3;
        context.beginPath();
        setIsDrawing(true);
    };

    const endDrawing = () => {
        setIsDrawing(false);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = signaturecanvas.current;
        const context = canvas.getContext('2d');
        const { offsetX, offsetY } = e.nativeEvent;
        context.lineTo(offsetX, offsetY);
        context.stroke();
        if (!hasSignature)
            setHasSignature(true);
    }

    const save = () => {
        const canvas = signaturecanvas.current;
        const url = canvas.toDataURL('image/png');
        onSave(url);
        alert("Signature successfully saved!");
        closeModal();
    }

    const clear = () => {
        const canvas = signaturecanvas.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        setHasSignature(false);
    }

    return (
        <>
            <div style={modalWrapper}></div>
            <div style={modalContainer}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                    <button style={buttonStyle} onClick={save} disabled={!hasSignature}>SAVE</button>
                    <button style={buttonStyle} onClick={clear} disabled={!hasSignature}>CLEAR</button>
                    <button style={buttonStyle} onClick={closeModal}>CLOSE</button>
                </div>
                <hr />
                <canvas
                    ref={signaturecanvas}
                    onMouseDown={startDrawing}
                    onMouseUp={endDrawing}
                    onMouseMove={draw}
                    width={920}
                    height={350}
                    style={{ border: '1px solid black', cursor: 'crosshair' }}
                />
            </div>
        </>
    );
}
export default MySignaturePad;