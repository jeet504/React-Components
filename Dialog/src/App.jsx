import React from "react";
import Modal from "./Modal";
import json from './dialog.json'
const App=()=>{
  return(
    <div>
      <Modal json={json}/>
    </div>
  )
}
export default App;