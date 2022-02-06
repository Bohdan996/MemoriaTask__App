import './style.scss';
import { Data } from '../../../../types/Data';
import { Color } from '../../../../types/Color';

type Props = {
  student: Data,
  color: Color,
}

export const StudentTableFooter: React.FC<Props> = ({ student, color }) => {
  return (
    <div className="student-table-footer">
      <h2 className="student-table-footer__title">Average</h2>
      <p
        className="student-table-footer__score"
        style={{
          color: color.scoreColor
        }}
      >
        {student.score}
      </p>
      <p
        className="student-table-footer__speed"
        style={{
          color: color.speedColor
        }}
      >
        {student.speed}
      </p>
    </div>
  );
};

export default StudentTableFooter;