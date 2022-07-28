/**
 * @param {number[][]} grid
 * @return {number}
 */

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

var maxAreaOfIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const starts = {};

  const withinBoundary = (i, j) => i >= 0 && j >= 0 && i < rows && j < cols;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        starts[`${i}_${j}`] = false;

        while (grid[i][j + 1] === 1) {
          j++;
        }
      }
    }
  }

  let visited = {};

  const markVisited = (row, col) => {
    visited[row] || (visited[row] = {});
    visited[row][col] = true;
    starts[`${row}-${col}`] = true;
  };

  function getArea(row, col) {
    if (
      !withinBoundary(row, col) ||
      visited[row]?.[col] ||
      grid[row][col] === 0
    ) {
      return 0;
    }

    markVisited(row, col);

    return DIRS.reduce(
      (area, [dx, dy]) => area + getArea(dx + row, dy + col),
      1
    );
  }

  let maxArea = 0,
    x,
    y;
  for (let key in starts) {
    if (starts[key]) {
      continue;
    }

    [x, y] = key.split("_");
    visited = {};
    maxArea = Math.max(maxArea, getArea(+x, +y));
  }

  return maxArea;
};
