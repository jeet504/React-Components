import { useMemo } from "react"
const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => i + start);
  };
export const usePagination = ({
    dataSize, pageSize, sibling = 1, currentPage }) => {
    const paginationRange = useMemo(() => {
        const totalpage = Math.ceil(dataSize / pageSize);
        const totalPageNumbers = sibling + 5;

        if (totalPageNumbers >= totalpage) {
            return range(1, totalpage);
        }
        const leftSiblingIndex = Math.max(currentPage - sibling, 1);
        const rightSiblingIndex = Math.min(currentPage + sibling, totalpage);

        const showLeftDots = leftSiblingIndex > 2;
        const showRightDots = rightSiblingIndex < totalpage - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalpage;

        //No left dots but right dots
        if (!showLeftDots && showRightDots) {
            const leftcount = 3 + 2 * sibling;
            const leftRange = range(1, leftcount);
            return [...leftRange, '...', totalpage];
        }

        //No right dots but left dots
        if (showLeftDots && !showRightDots) {
            const rightCount = 3 + 2 * sibling;
            const rightRange = range(totalpage - rightCount + 1, totalpage);
            return [firstPageIndex, '...', ...rightRange];
        }

        //Both left and right dots
        if (showLeftDots && showRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
        }
    }, [dataSize, pageSize, sibling, currentPage]);

    return paginationRange;
};