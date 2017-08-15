// styles.js

function drawTree (treeHeight) {
  if (isNaN(treeHeight) || treeHeight <= 0) {
    alert('this aint a number (or right number in that matter) thickie, now hit reload button');
  } else {
    alert('wyrysuje drzewko jak ta lala');
  }

  for (var i = 0; i < treeHeight; i++) {
    var star = '';
    for (var j = -1; j < i; j++) {
      star += '*';
    }
    console.log(star);
  }
}

drawTree(2);