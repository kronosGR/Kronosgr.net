import SkillsLevel from './Skills_level';

import classes from './Skills.module.css';
import { useEffect, useState } from 'react';
import { getSkills } from '../data/data';

const Skills = () => {
  const [skills, setSkills] = useState(null);
  const [level1, setLevel1] = useState(null);
  const [level2, setLevel2] = useState(null);
  const [level3, setLevel3] = useState(null);

  const getData = async () => {
    setSkills(await getSkills());
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (skills) {
      setLevel3(skills.filter((skill) => skill.size === 3));
      setLevel2(skills.filter((skill) => skill.size === 2));
      setLevel1(skills.filter((skill) => skill.size === 1));
    }
  }, [skills]);

  return (
    <div>
      <p className={classes.title}>Skills</p>
      <ul className={classes.level_container}>{<SkillsLevel items={level3} />}</ul>
      <ul className={classes.level_container}>{<SkillsLevel items={level2} />}</ul>
      <ul className={classes.level_container}>{<SkillsLevel items={level1} />}</ul>
    </div>
  );
};

export default Skills;
