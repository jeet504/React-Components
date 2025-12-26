import React from "react";

export const Table = ({records=[]}) => {
    return (
          <table style={{ margin:'0 auto'}}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>TITLE</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>PRICE</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>DESCRIPTION</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>CATEGORY</th>

          </tr>
        </thead>
        <tbody>
          {records.map(item => {
            return (
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{item.id}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{item.title}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{item.price}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{item.description}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{item.category}</td>

              </tr>
            );
          })}
        </tbody>
      </table>
        
    )
}