import './style.scss';

const SubMenu = () => {
  return (
    <div className="sub-menu">
      <select>
        <option value="">show all</option>
      </select>
      <select>
        <option value="">All grades</option>
      </select>
      <select>
        <option value="">All classes</option>
      </select>
      <select>
        <option value="">Av.Score</option>
      </select>
      <select>
        <option value="">Av.Speed</option>
      </select>
      <select>
        <option value="">All Classes</option>
      </select>
      <button className="sub-menu__close-button">
        clear all
      </button>
    </div>
  );
};

export default SubMenu;
