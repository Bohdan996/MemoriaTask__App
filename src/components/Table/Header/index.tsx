import { useState } from "react";
import { CSVLink } from "react-csv";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Data } from "../../../types/Data";
import './style.scss';

type Props = {
  students: Data[],
}

const TableHeader: React.FC<Props> = ({ students }) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [searchParams] = useSearchParams() || '';

  const navigate = useNavigate();

  const handleInputFilterChange = (e: any) => {
    e.preventDefault()
    
    if (filterQuery.trim()) {
      searchParams.set('search', filterQuery);
    } else {
      searchParams.delete('search');
    }

    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  return (
    <div className="table-header">
      <h1 className="table-header__title">Students</h1>
      <form
        className="table-header__form"
        onSubmit={e => handleInputFilterChange(e)}
      >
        <input
          type="text"
          placeholder="Enter Student Name, Parent or ID here"
          className="table-header__input"
          value={filterQuery}
          onChange={e => setFilterQuery(e.currentTarget.value)}
        />
        <input type="submit" hidden />
      </form>
      <CSVLink
        className="table-header__button"
        data={students}>
      </CSVLink>
    </div>
  );
};

export default TableHeader;