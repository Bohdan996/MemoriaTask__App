import user from '../../images/user.png';
import './style.scss';

const MainMenu = () => {
  return (
    <div className="main-menu">
      <div className="main-menu__nav-section">
        <select className="main-menu__selector">
          <option value={''}>School 1</option>
        </select>
        <nav className="main-menu__navigation">
          <button className="main-menu__button" type="button">Analytics</button>
          <button className="main-menu__button" type="button">gradebooks</button>
          <button className="main-menu__button" type="button">Tests</button>
          <button className="main-menu__button" type="button">Students</button>
          <button className="main-menu__button" type="button">Teachers</button>
          <button className="main-menu__button" type="button">archive</button>
        </nav>
      </div>
      <div className="main-menu__user-section">
        <img src={user} alt="user" />
        <select className="main-menu__user-select">
          <option value={''}></option>
        </select>
      </div>
    </div>
  );
};

export default MainMenu;
