/*
  Welcome to Blot!

  To get started with learning Blot's toolkit,
  you can find a handful of guides here: https://blot.hackclub.com/guides

  You can find full documentation on Blot's toolkit by clicking the button at the top!

 Before you make a submission, there are a couple *mandatory* requirements for your PR:

 - It must be drawable in Blot! This means keeping the dimensions at 125x125 or smaller
 - It must change based on different parameters; it cannot be hardcoded.

*/
const width = 125;
const height = 125;

setDocDimensions(width, height);

const finalLines = []; // we will put our shapes here

const starShape = (size) => {
  const t = new bt.Turtle()
  t.right(36)
  t.forward(size)
  t.left(108)
  t.forward(size)
  t.right(36)
  t.forward(size)
  t.left(108)
  t.forward(size)
  t.right(36)
  t.forward(size)
  t.left(108)
  t.forward(size)
  t.right(36)
  t.forward(size)
  t.left(108)
  t.forward(size)
  t.right(36)
  t.forward(size)
  t.left(108)
  t.forward(size)
  return t.lines()
}

const heartShape = (sizeHeart) => {
  const wholeHeart = []
  // draw left heart
  const leftHeart = [
    bt.nurbs([
      [35.0, 70],
      [24.0, 83.8],
      [10.2, 60],
      [35.0, 47]
    ])
  ];
  bt.join(wholeHeart, leftHeart);
  const rightHeart = bt.copy(leftHeart);
  bt.scale(rightHeart, [-1, 1], [35, 0]);
  bt.join(wholeHeart, rightHeart);
  bt.scale(wholeHeart, [sizeHeart * 0.25, sizeHeart * 0.25], [0,0]);
  return wholeHeart
}

const heartLine = [];
const starLine = [];

const gridWidth = 15
const gridHeight = 15
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    const star = starShape(2)
    const heart = heartShape(.7)
    const randNum = bt.randIntInRange(1, 10);
    if (randNum % 2 === 0) {
      bt.translate(star, [gridWidth * i, gridHeight * j])
      bt.join(starLine, star);
    } else {
      bt.translate(heart, [gridWidth * i, gridHeight * j])
      bt.join(heartLine, heart);
    }
  }
}

// this moves the center of our drawing to the center of our doc
bt.translate(
  starLine,
  [ width / 2, height / 2 ], 
  bt.bounds(starLine).cc
); 

bt.translate(
  heartLine,
  [ width / 2, height / 2 ], 
  bt.bounds(heartLine).cc
); 

drawLines(starLine,{ fill:"pink"});
drawLines(heartLine,{ fill:"red"});
