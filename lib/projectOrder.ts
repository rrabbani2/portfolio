export const projectOrder = [
  'fully-3d-printable-umi',
  'trash-collection-robot',
  'inverted-pendulum',
  'robot-vaccum-circuit',
  'electric-skateboard',
  'automated-chicken-coop',
  'cnc-flat-pack-chair',
  'mini-golf-robot'
];

export const projectTitles: Record<string, string> = {
  'fully-3d-printable-umi': 'Fully 3D Printable UMI',
  'trash-collection-robot': 'Trash Collection Robot',
  'inverted-pendulum': 'Inverted Pendulum',
  'robot-vaccum-circuit': 'Robot Vacuum Circuit',
  'electric-skateboard': 'Electric Skateboard',
  'automated-chicken-coop': 'Automated Chicken Coop',
  'cnc-flat-pack-chair': 'CNC Flat Pack Chair',
  'mini-golf-robot': 'Mini-Golf Robot',
};

export function getNextAndPreviousProjects(currentProject: string) {
  const currentIndex = projectOrder.indexOf(currentProject);
  const previousProject = currentIndex > 0 ? projectOrder[currentIndex - 1] : null;
  const nextProject = currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : null;
  return { previousProject, nextProject };
}
