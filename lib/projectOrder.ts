export const projectOrder = [
  'trash-collection-robot',
  'inverted-pendulum',
  'robot-vaccum-circuit',
  'electric-skateboard',
  'automated-chicken-coop',
  'cnc-flat-pack-chair',
  'mini-golf-robot'
];

export function getNextAndPreviousProjects(currentProject: string) {
  const currentIndex = projectOrder.indexOf(currentProject);
  const previousProject = currentIndex > 0 ? projectOrder[currentIndex - 1] : null;
  const nextProject = currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : null;
  return { previousProject, nextProject };
}
