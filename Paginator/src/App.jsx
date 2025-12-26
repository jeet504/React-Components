import React,{ useState, useMemo } from 'react'
import './style.css'
import data from './testingData/employee.json'
import Pagination from './Pagination'


const paginationStyle = {
  paginationBar: {
    display: 'flex',
    justifyContent: 'center'
  },
  paginationContainer: {
    display: 'flex',
    listStyleType: 'none',
    '.pagination-item': {
      padding: '0 12px',
      height: '32px',
      textAlign: 'center',
      margin: 'auto 4px',
      color: 'rgba(0, 0, 0, 0.87)',
      display: 'flex',
      boxSizing: 'border-box',
      alignItems: 'center',
      letterSpacing: '0.01071em',
      borderRadius: '16px',
      lineHeight: '1.43',
      fontSize: '15px',
      minWidth: '32px',
      '&.dots:hover': {
        backgroundColor: 'transparent',
        cursor: 'default'
      },
      ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        cursor: 'pointer'
      },
      '&.selected': {
        backgroundColor: '#1F70B7'
      },
      '.arrow': {
        '&::before': {
          position: 'relative',
          content: '',
          display: 'inline-block',
          width: '0.4em',
          height: '0.4em',
          borderRight: '0.12em solid rgba(0, 0, 0, 0.87)',
          borderTop: '0.12em solid rgba(0, 0, 0, 0.87)'
        },
        '&.left': {
          transform: 'rotate(-135deg) translate(-50%)'
        },
        '&.right': {
          transform: 'rotate(45deg)'
        }
      },
      '&.disabled': {
        pointerEvents: 'none',
        '.arrow::before': {
          borderRight: '0.12em solid rgba(0, 0, 0, 0.43)',
          borderTop: '0.12em solid rgba(0, 0, 0, 0.43)'
        },
        ':hover': {
          backgroundColor: '#1F70B7',
          cursor: 'default'
        }
      }
    }
  }
};
function App({ json,Component }) {
  let PageSize = json.pageSize
  const [currentPage, setCurrentPage] = useState(1);
  const records = useMemo(() => {
    const lastIndex = currentPage * PageSize;
    const firstIndex = lastIndex - PageSize;
    return data.slice(firstIndex, lastIndex);
  }, [currentPage])
  return (
    <>
      <Component records={records} />
      <Pagination
        changeCurrentPage={page => setCurrentPage(page)}
        dataSize={data.length}
        currentPage={currentPage}
        pageSize={PageSize}
        className="pagination-bar" />
    </>
  )
}
export default App
