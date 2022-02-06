import { useSearchParams, useNavigate } from 'react-router-dom';

const SortedPanel = () => {
  const [searchParams] = useSearchParams() || '';
  const sortDir = searchParams.get('sortDir') || '';

  const navigate = useNavigate();

  const handleClick = (target: string) => {
    searchParams.set('sortBy', target);
    searchParams.set('sortDir', 'asc');

    if (sortDir === 'desc') {
      searchParams.set('sortDir', 'asc');
    } else {
      searchParams.set('sortDir', 'desc');
    }

    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  return (
    <div className="table__row">
      <input
        className="table__row-checkbox"
        type="checkbox"
        disabled
      />
      <button
        className="table__row-name row--name-icon"
        type="button"
        id="name"
        onClick={(e) => handleClick(e.currentTarget.id)}
      >
        Name
      </button>
      <div
        className="table__row-id row--arrow-icon"
      >
        ID
      </div>
      <button
        type="button"
        className="table__row-class"
        id="class"
        onClick={(e) => handleClick(e.currentTarget.id)}
      >
        Class
      </button>
      <button
        className="table__row-score row--arrow-icon"
        type="button"
        id="score"
        onClick={(e) => handleClick(e.currentTarget.id)}
      >
        Av. Score, %
      </button>
      <button
        className="table__row-speed row--arrow-icon"
        type="button"
        id="speed"
        onClick={(e) => handleClick(e.currentTarget.id)}
      >
        Av. Speed
      </button>
      <div className="table__row-parents">
        Parents
      </div>
    </div>
  );
};

export default SortedPanel;