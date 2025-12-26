
import React, { useState } from 'react';
 
const Accordion = ({ json, accheader, accordion, submenulist, listposition }) => {
 
  const header = json.AccordionHeader;
  const headerKey = Object.keys(header[0]);
  const [selectedHeader, setSelectedHeader] = useState('');
 
  const toggleAccordion = (accordionData) => {
    setSelectedHeader(selectedHeader === accordionData ? '' : accordionData);
  };
 
  return (
    <div style={accordion}>
      {headerKey.map((accordionData) => (
        <div key={accordionData}>
          <button style={accheader} onClick={() => toggleAccordion(accordionData)}>
            <div style={{display:"flex",flexDirection:"row"}}>
            <div>{header[0][accordionData]} </div>
            <div style={{marginLeft:"260px",position:"absolute"}}>{accordionData === selectedHeader ? '▲' : '▼'}</div>
            </div>
          </button>
          {accordionData === selectedHeader && (
            <div>
              {Object.entries(json.AccordionSummary[0]).map(([key, [...value]]) => (
                <div key={key}>
                  {key === selectedHeader && (
                    <div style={listposition}>
                      <ul>{value.map((val, i) => <li style={submenulist} key={i}>{val}</li>)}</ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
 
export default Accordion;
