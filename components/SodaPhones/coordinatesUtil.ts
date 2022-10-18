const coordinatesToPathMap = new Map<string, string>([
  ['A1', '7.json'],
  ['A2', '8.json'],
  ['A3', '10.json'],
  ['A4', '9.json'],
  ['B1', '2.json'],
  ['B2', '0.json'],
  ['B3', '6.json'],
  ['B4', '5.json'],
  ['C1', '1.json'],
  ['C2', '4.json'],
  ['C3', '3.json'],
  ['C4', '11.json']
]);

const coordinatesToFileName = (coordinates: string): string | undefined => {
  return coordinatesToPathMap.get(coordinates.toUpperCase());
};

export { coordinatesToFileName, coordinatesToPathMap };
