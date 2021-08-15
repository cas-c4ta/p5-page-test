let angle = 0
const boxSize = 20
const magicAngle = Math.atan(1/Math.sqrt(2))
let maxD

function setup () {
  createCanvas(400, 400, WEBGL);
  // next up a stupid line, but could be
  // dynamic vlaue corresponding to viewport
  maxD = dist(0, 0, 200, 200)
}

function draw () {
  rotateX(-PI/5)
  rotateY(magicAngle)
  ortho(-400, 400, -400, 400, -300, 600)
  pointLight(255, 0, 255, 0, -300, 400);
  ambientLight(100, 255, 0, 0);
  ambientMaterial(255, 0, 0)
  background(0)

  for (let z = 0; z < height; z += boxSize) {
    for (let x = 0; x < width; x += boxSize) {
      push()
      translate(x - width/2, 0, z - height/2)
      const d = dist(x, z, width/2, height/2)
      const offset = map(d, 0, maxD, -PI , PI)
      const a = angle + offset
      const h = map(sin(a), -1, 1, 50, 300)
      box(boxSize - 5, h, boxSize - 5)
      pop()
    }
  }
  angle -= 0.06

}
