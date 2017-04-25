var powerPelletEaten = false
var ghosts = 4;

while (true) {
  console.log ('Ghosts remainig ' + ghosts);

  if ( powerPelletEaten == false) {
    console.log ('Pac-Man eats the pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log ('Pac-Man eats a ghots.');
    ghosts--;
  } else {
    break;
  }
}
console.log("Pac-Man returns home after a log day in the maze.");
