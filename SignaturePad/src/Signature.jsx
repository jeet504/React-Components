import React, { useState } from "react";
import MySignaturePad from "./Pad";


let openButton = {
    border: 'none',
    backgroundColor: '#1F70B7',
    padding: '10px 8px',
    display: 'block',
    margin: '0 auto',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '15px'
}

let downloadButton = {
    display: 'flex',
    marginLeft: '63%',
    border: 'none',
    backgroundColor: '#1F70B7',
    borderRadius: '5px',
    padding: '10px 8px',
    cursor: 'pointer',
    fontSize: '15px',
}

let image = {
    width: '500px',
    height: '200px'
}

let imagePosition = {
    height: '200px',
    width: '500px',
    backgroundColor: 'lightgray',
    border: '1px solid black',
    margin: '0 auto',
}

const SignaturePad = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    const [imageURL, setImageURL] = useState(null);
    const handleSave = (url) => setImageURL(url);
    const download = () => {
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = 'signature.png';
        link.click();
    }

    return (
        <div>
            <div>
                <button onClick={() => setShowModal(true)} style={openButton}>Open Signature Pad</button>
                {showModal && <MySignaturePad closeModal={closeModal} onSave={handleSave} />}
            </div>

            <br />

            <div style={imagePosition}>
                {imageURL ? (<img src={imageURL} alt="MySignature" style={image} />) : null}
            </div>

            <br />

            <div>
                <button style={downloadButton} onClick={download} disabled={!imageURL}>Download</button>
            </div>

        </div>

    );
}
export default SignaturePad;