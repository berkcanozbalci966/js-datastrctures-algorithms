/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const oldColor = image[sr][sc];

  if (oldColor != color) {
    fill(image, sr, sc, color, oldColor);
  }

  return image;
};

function fill(image, sr, sc, color, oldColor) {
  if (image[sr][sc] == oldColor) {
    image[sr][sc] = color;

    if (sr >= 1) {
      fill(image, sr - 1, sc, color, oldColor);
    }
    if (sr + 1 < image.length) {
      fill(image, sr + 1, sc, color, oldColor);
    }
    if (sc >= 1) {
      fill(image, sr, sc - 1, color, oldColor);
    }

    if (sc + 1 < image[0].length) {
      fill(image, sr, sc + 1, color, oldColor);
    }
  }
}
