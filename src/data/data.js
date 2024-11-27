import { PROJECTS_URL, SKILLS_URL } from './constants';

export const getSkills = async () => {
  const response = await fetch(SKILLS_URL);
  return await response.json();
};

export const getProjects = async () => {
  const response = await fetch(PROJECTS_URL);
  return await response.json();
};
