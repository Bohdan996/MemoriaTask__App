import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { RootState } from "../../reducer/rootReducer";
import { studentsLoad } from '../../reducer/action';
import { Data } from '../../types/Data';
import TableHeader from "./Header";
import TableInfo from "./TableInfo";
import TableFooter from "./Footer";
import './style.scss';

const Table = () => {
  const [searchParams] = useSearchParams() || '';
  const size = searchParams.get('size') || '';
  const page = searchParams.get('page') || '';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const students: Data[] = useSelector((state: RootState) => {
    const { studentsReducer } = state;

    return studentsReducer.data;
  });

  useEffect(() => {
    !size && searchParams.set('size', '5' );
    !page && searchParams.set('page', '1');
    
    navigate(`?${searchParams.toString()}`, { replace: true });
  }, [])

  useEffect(() => {
    dispatch(studentsLoad(page, size));
  }, [size, page]);

  return (
    <div
      className="table"
    >
      <TableHeader students={students} />
      <TableInfo students={students} />
      <TableFooter />
    </div>
  );
};

export default Table;
