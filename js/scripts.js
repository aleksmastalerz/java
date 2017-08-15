// styles.js

var
  text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
  dinosaur = 'triceratops',
  largeDinosaur = dinosaur.toUpperCase(),
  text1 = '';

// console.log(dinosaur, largeDinosaur);

if (text.toLowerCase().indexOf('velociraptor') !== -1) {
  text1 = text.replace('Velociraptor', largeDinosaur);
}

console.log(text1.slice(0, text1.length / 2));