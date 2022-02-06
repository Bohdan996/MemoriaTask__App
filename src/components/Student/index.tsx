import { useEffect, useState } from 'react';
import classnames  from 'classnames';
import { Data } from '../../types/Data';
import { getScoreColor, getSpeedColor } from './helpers/setColor';
import StudentInfo from './StudentInfo';
import { Color } from '../../types/Color';
import './style.scss';

type Props = {
  student: Data,
};

const Student: React.FC<Props> = ({ student }) => {
  const [color, setColor] = useState<Color | null>(null);
  const [studentInfo, setStudentInfo] = useState(false);

  useEffect(() => {
    setColor({
      scoreColor: getScoreColor(student.score),
      speedColor: getSpeedColor(student.speed),
    })
  }, [student]);

  return (
    <li className="student">
      <div className="table__row">
        <input
          className="table__row-checkbox"
          type="checkbox" />
        <div
          className="table__row-name"
        >
          {student.name}
        </div>
        <div
          className="table__row-id"
        >
          {student.id}
        </div>
        <div
          className="table__row-class table-info__class"
        >
          {student.class}
        </div>
        <div
          className="table__row-score table-info__score"
          style={{
            color: color?.scoreColor
          }}
        >
          {student.score}
        </div>
        <div
          className="table__row-speed"
          style={{
            color: color?.speedColor
          }}
        >
          {student.speed}
        </div>
        <div
          className="table__row-parents table-info__parents"
        >
          {student.parents[0] && student.parents[0]}, {student.parents[1] && student.parents[1]}
        </div>
        <button
          className={classnames('table-info__button',
            { 'table-info__button active': studentInfo })}
          type="button"
          onClick={() => setStudentInfo(!studentInfo)}
        >
        </button>
      </div>
      {(studentInfo && color) && (
        <StudentInfo
          student={student}
          color={color}
        />
      )}
    </li>
  );
};

export default Student;
