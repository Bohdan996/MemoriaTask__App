import { Data } from "../../../types/Data";
import StudentInfoTable from "./StudentInfoTable";
import StudentTableHeader from './StudentTableHeader';
import StudentTableFooter from "./StudentTableFooter";
import { Color } from "../../../types/Color";
import './style.scss';

type Props = {
  student: Data,
  color: Color,
};

const StudentInfo: React.FC<Props> = ({ student, color }) => {
  return (
    <div className="student-info">
      <div className="student-info__name">
        <p>Student: <span>{student.name}</span></p>
        <p>id: <span>{student.id}</span></p>
      </div>
      <div className="student-info__sorting">
        <select className="student-info__selector">
          <option value="">
            All concepts
          </option>
        </select>
        <select className="student-info__selector">
          <option value="">
            All score
          </option>
        </select>
        <select className="student-info__selector">
          <option value="">
            All speed
          </option>
        </select>
        <input
          className="student-info__date"
          type="date"
        />
        <button
          type="button"
          className="student-info__refresh-button"
        >
        </button>
      </div>
      <div className="student-info__main-section">
        <div className="student-info__main-descriptions">
          <div className="student-info__score">
            <p className="student-info__word">Score:</p>
            <div className="student-info__score-wrap blue-font">
              <div className="circle blue">
              </div>
              90%+ accuracy
            </div>
            <div className="student-info__score-wrap green-font">
              <div className="circle green">
              </div>
              80 - 89% accuracy
            </div>
            <div className="student-info__score-wrap yellow-font">
              <div className="circle yellow">
              </div>
              50 - 79% accuracy
            </div>
            <div className="student-info__score-wrap red-font">
              <div className="circle red">
              </div>
              below 50% accuracy
            </div>
          </div>
          <div className="student-info__speed">
            <p className="student-info__word">speed:</p>
            <div className="student-info__score-wrap blue-font">
              <div className="circle blue">
              </div>
              above expected
            </div>
            <div className="student-info__score-wrap green-font">
              <div className="circle green">
              </div>
              as expected
            </div>
            <div className="student-info__score-wrap red-font">
              <div className="circle red">
              </div>
              below expected
            </div>
          </div>
        </div>
        <StudentTableHeader />
        <div className="student-table">
          {student.tests && student.tests.map((test, index) => (
            <StudentInfoTable
              key={index}
              test={test}
              index={index}
            />
          ))}
        </div>
        <StudentTableFooter
          student={student}
          color={color}
        />
      </div>
    </div>
  );
};

export default StudentInfo;
