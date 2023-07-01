import SkillsLevel from './Skills_level';

import classes from './Skills.module.css';
import { skills } from '../data/skills';

const Skills = () => {
  const level3 = skills.filter((skill) => skill.size === 3);
  const level2 = skills.filter((skill) => skill.size === 2);
  const level1 = skills.filter((skill) => skill.size === 1);

  return (
    <div>
      <p className={classes.title}>Skills</p>
      <ul className={classes.level_container}>
        <SkillsLevel items={level3} />
      </ul>
      <ul className={classes.level_container}>
        <SkillsLevel items={level2} />
      </ul>
      <ul className={classes.level_container}>
        <SkillsLevel items={level1} />
      </ul>
    </div>
  );
};

export default Skills;
