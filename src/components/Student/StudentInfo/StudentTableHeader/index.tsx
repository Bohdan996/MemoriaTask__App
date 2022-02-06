
const StudentTableHeader = () => {
  return (
    <div className="student-info__table-header">
      <div className="student-info__table-row">
        <p>#</p>
        <div className="student-info__table-label">
          Test Label
        </div>
        <div className="student-info__table-score">
          Score
        </div>
        <div className="student-info__table-speed">
          Speed
        </div>
        <div className="student-info__table-total">
          Total Q-ns
        </div>
        <div className="student-info__table-exp">
          Exp. Speed
        </div>
        <div className="student-info__table-concept">
          Concept
        </div>
        <button className="student-info__table-date student-info__table-date--bg">
          Date
        </button>
        <div className="student-info__table-absent">
          Absent
        </div>
      </div>
    </div>
  );
};

export default StudentTableHeader;
