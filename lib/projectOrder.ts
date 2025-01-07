export const projectOrder = [
  'inverted-pendulum',
  'mini-golf-robot',
  'automated-chicken-coop',
  'cnc-flat-pack-chair',
  'electric-skateboard'
];

export function getNextAndPreviousProjects(currentProject: string) {
  const currentIndex = projectOrder.indexOf(currentProject);
  const previousProject = currentIndex > 0 ? projectOrder[currentIndex - 1] : null;
  const nextProject = currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : null;
  return { previousProject, nextProject };
}

