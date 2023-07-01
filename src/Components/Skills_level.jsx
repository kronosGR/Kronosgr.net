import classes from './Skills_level.module.css';

const SkillsLevel = (props) => {
  const size = () => {
    let tmp = 'size3';
    if (props.items[0].size === 2) tmp = 'size2';
    if (props.items[0].size === 1) tmp = 'size1';
    return tmp;
  };

  const skills = props.items.map((item, i) => {
    return (
      <li key={i} className={`${classes.item} ${size()}`}>
        {item.name}{' '}
      </li>
    );
  });
  return <>{skills}</>;
};

export default SkillsLevel;
