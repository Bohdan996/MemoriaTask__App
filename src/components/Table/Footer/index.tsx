import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './style.scss';

type Click = 'next' | 'prev' | 'load';

const TableFooter = () => {
  const [pageCounter, setPageCounter] = useState(1);
  const [startItemIndex, setStartItemIndex] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const savedIndex = +(localStorage.getItem('startItemIndex') || 1);
  const pageSize = +(searchParams.get('size') || '');

  console.log(typeof savedIndex);
  console.log(typeof startItemIndex);

  const navigate = useNavigate();

  const handleSelectorChange = (e: any) => {
    searchParams.set('size', e.target.value);

    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  const handleButtonClick = (click: Click) => {
    const maxStudentsLength = 20;
    const maxPage = maxStudentsLength / pageSize;

    if (click === 'prev') {
      if (pageCounter > 1) {
        const updateItemIndex = startItemIndex - pageSize;
        setPageCounter(pageCounter - 1);
        setStartItemIndex(updateItemIndex);
        localStorage.setItem('startItemIndex', updateItemIndex.toString());
      }
    } else if (click === 'next') {
      if (pageCounter < maxPage) {
        const updateItemIndex = startItemIndex + pageSize;
        setPageCounter(pageCounter + 1);
        setStartItemIndex(updateItemIndex);
        localStorage.setItem('startItemIndex', updateItemIndex.toString());
      }
    } else {
      setStartItemIndex(savedIndex);
    }
  };

  useEffect(() => {
    handleButtonClick('load')
  }, []);

  useEffect(() => {
    searchParams.set('page', pageCounter.toString());

    navigate(`?${searchParams.toString()}`, { replace: true });
  }, [pageCounter]);

  useEffect(() => {
    setPageCounter(1);
    setStartItemIndex(1);
    searchParams.set('page', `${pageCounter}`);

    navigate(`?${searchParams.toString()}`, { replace: true });
  }, [pageSize]);

  return (
    <div className="table-footer">
      <div
        className="table-footer__selector-wrap"
      >
        <p className="table-footer__label">
          Rows per page:
        </p>
        <select
          value={pageSize}
          className="table-footer__selector"
          onChange={e => handleSelectorChange(e)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <p
        className="table-footer__pages-count"
      >
        {`${startItemIndex}-${startItemIndex + (+pageSize - 1)} of 100`}
      </p>
      <div>
        <button
          className="table-footer__button table-footer__button--left"
          type="button"
          onClick={() => handleButtonClick('prev')}
        >
        </button>
        <button
          className="table-footer__button table-footer__button--right"
          type="button"
          onClick={() => handleButtonClick('next')}
        >
        </button>
      </div>
    </div>
  );
};

export default TableFooter;
