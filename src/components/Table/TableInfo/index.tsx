import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from "../../../reducer/rootReducer";
import SortedPanel from "./SortedPanel";
import { Oval } from 'react-loader-spinner';
import { Data } from '../../../types/Data';
import './style.scss';
import Student from "../../Student";

type Props = {
  students: Data[],
};

export const TableInfo: React.FC<Props> = ({ students }) => {
  const [searchParams] = useSearchParams() || '';
  const sortBy = searchParams.get('sortBy') || '';
  const sortDir = searchParams.get('sortDir') || '';
  const search = searchParams.get('search') || '';

  const spinner = useSelector((state: RootState) => state.appReducer.loading);

  const toNumber = (str: string) => {
    return +(str.replace('%', ''));
  };

  const getSortedStudents = (students: Data[]) => {
    const sortedStudents = students.sort((a: Data, b: Data) => {
      if (sortBy) {
        switch (sortBy) {
          case 'name':
            if (sortDir === 'asc') {
              return a.name.localeCompare(b.name)
            } else {
              return b.name.localeCompare(a.name)
            }

          case 'class':
            if (sortDir === 'asc') {
              return a.class.localeCompare(b.class)
            } else {
              return b.class.localeCompare(a.class)
            }

          case 'score':
            if (sortDir === 'asc') {
              return toNumber(a.score) - toNumber(b.score);
            } else {
              return toNumber(b.score) - toNumber(a.score);
            }

          default:
            if (sortDir === 'asc') {
              return a.speed.localeCompare(b.speed)
            } else {
              return b.speed.localeCompare(a.speed)
            }
        }
      }

      return 0;
    })

    return sortedStudents.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <section>
      <SortedPanel />
      <ul className="table-info">
        {spinner ? (
          <div
            className="spinner"
          >
            <Oval
              height="100"
              width="100"
              color='white'
              ariaLabel='loading'
            />
          </div> 
        ) : (students && getSortedStudents(students).map((student, i) => (
          <Student key={i} student={student} />
        )))}
      </ul>
    </section>
  );
};

export default TableInfo;