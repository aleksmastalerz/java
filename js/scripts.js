function getTriangleArea (a, h) {
  if (a <= 0 || h <= 0) {
    console.log('wrong values');
    return 'podałeś błędne dane';
  } else {
    return (a * h / 2);
  }
}

var triangle1Area = getTriangleArea(5, 10);
var triangle2Area = getTriangleArea(-5, 20);
var triangle3Area = getTriangleArea(17, 26);

console.log(triangle1Area, triangle2Area, triangle3Area)