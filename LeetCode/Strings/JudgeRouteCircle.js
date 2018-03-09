//Judge Route circle

/* Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.*/

const JudgeRouteCircle = () => {
  //input = string
  //output = bool
  //constraints = i/p is always string upper case

  //let position = [0, 0];
  //split moves into array;
  //forEach item in array
    //if move is R increment position[0] by 1
    //if move is L decrement position[0] by 1
    //if move is U increment position[1] by 1
    //if move is D decrement position[1] by 1
  //check if position is [0, 0]
    //return true if equal
    //else false

  let position = [0, 0];
  let movs = moves.split('');
  movs.forEach((move) => {
    if(move === 'R') position[0] += 1;
    if(move === 'L') position[0] -= 1;
    if(move === 'U') position[1] += 1;
    if(move === 'D') position[1] -= 1;
  });

  return position[0] === 0 && position[1] === 0;
};


