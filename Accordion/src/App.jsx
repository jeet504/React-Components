import React from 'react'
import Data from './jsonData.json';
import Accordion from './Accordion.jsx';


let Header = {
  display: "flex",
  flexDirection: "column",
  marginTop: "18px",
  marginLeft:"10px",
  fontSize: "18px",
  color: "white",
  width: "300px",
  backgroundColor: "#1F70B7",
  border: "none",
  height: "auto",
  padding: "10px",
  fontFamily: "math",
  borderRadius:'8px',

}
let AccordionContainer = {
  backgroundColor: '#f7f9ff',
  width: "320px",
  height: "auto",
}

let SubMenuList = {
  display:'flex',
  flexDirection:"column",
  alignItems:"flexstart",
  gap:'10px',
  marginTop: "8px",
  border:"none",
  padding : "5px 30px 5px 30px",
  fontSize: "17px",
  fontFamily: "math"
}

let ListPosition =
{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '290px',
}

const App = () => {
  return (
    <div className='App'>
      <Accordion json={Data} accheader={Header} accordion={AccordionContainer} submenulist={SubMenuList} listposition={ListPosition} />
    </div>
  );
};
export default App;