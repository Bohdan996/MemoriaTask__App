import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { getScoreColor, getSpeedColor } from '../../helpers/setColor';
import { Color } from '../../../../types/Color';
import { Test } from '../../../../types/Test';
import './style.scss';

type Props = {
  test: Test,
  index: number,
};

const StudentInfoTable: React.FC<Props> = ({ test, index }) => {
  const [chacked, setChacked] = useState(test.absent);
  const [color, setColor] = useState<Color | null>(null);

  useEffect(() => {
    if (test.score && test.speed && !test.absent) {
      setColor({
        scoreColor: getScoreColor(test.score.toString()),
        speedColor: getSpeedColor(test.speed),
      })
    }
  }, []);

  return (
    <div
      className={classnames('student-info__table-row student-table__item',
        {'student-info__table-row student-table__item absent': test.absent})}
    >
      <p
        className="student-table__number"
      >
        {index + 1}.
      </p>
      <div className="student-info__table-label">
        {test.label}
      </div>
      <div
        className="student-info__table-score"
        style={{
          color: color?.scoreColor
        }}
      >
        {test.score ? test.score : 'NiL'}
      </div>
      <div
        className="student-info__table-speed"
        style={{
          color: color?.speedColor
        }}
      >
        {test.speed ? test.speed : 'NiL'}
      </div>
      <div className="student-info__table-total">
        {test.total}
      </div>
      <div className="student-info__table-exp">
        {test.expSpeed}
      </div>
      <div className="student-info__table-concept">
        {test.concept}
      </div>
      <div className="student-info__table-date">
        {test.date}
      </div>
      <div className="student-info__table-absent student-table__checkbox">
        <input
          className="student-table__checkbox"
          type="checkbox"
          checked={chacked}
          onClick={() => setChacked(!chacked)}
        />
      </div>
      
    </div>
  );
};

export default StudentInfoTable;
