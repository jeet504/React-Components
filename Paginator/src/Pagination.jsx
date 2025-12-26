import React from 'react';
import classnames from 'classnames'
import { usePagination} from './usePagination';

const Pagination=props=>{
    const {changeCurrentPage,dataSize,sibling=1,currentPage,pageSize,className}=props;

    const paginationRange=usePagination({dataSize,pageSize,sibling,currentPage});  
    
    if(currentPage===0 || paginationRange.length <2){
        return null;
    }

    const nextPage=()=>{
        changeCurrentPage(currentPage+1);
    };

    const prevPage=()=>{
        changeCurrentPage(currentPage-1);
    };

    const lastPage=paginationRange[paginationRange.length-1];
    return (
        <ul className={classnames('pagination-container', { [className]: className })}>
          
           {/* Left navigation arrow */}
          <li className={classnames('pagination-item', {disabled: currentPage === 1})} onClick={prevPage}>
             <div className="arrow left" /> 
          </li>

          {paginationRange.map(pageNumber => {
            if (pageNumber === '...') {
              return <li className="pagination-item dots">&#8230;</li>;
            }
            
            // Render our Page Pills
            return (
              <li className={classnames('pagination-item', {selected: pageNumber === currentPage})}
                onClick={() =>  changeCurrentPage(pageNumber)}>
                {pageNumber}
              </li>
            );
          })}

          {/*  Right Navigation arrow */}
          <li className={classnames('pagination-item', {disabled: currentPage === lastPage})} onClick={nextPage}>
            <div className="arrow right" />
          </li>
        </ul>
      );
    };
    
    export default Pagination;
