var txt;
var lines = [
  '               Episode IV',
  '             A NEW HOPE',
  'It is a period of civil war.',
  'Rebel spaceships, striking',
  'from a hidden base, have won',
  'their first victory against',
  'the evil Galactic Empire.',
  '',
  'During the battle, Rebel',
  'spies managed to steal secret',
  "plans to the Empire's",
  'ultimate weapon, the DEATH',
  'STAR, an armored space',
  'station with enough power to',
  'destroy an entire planet.',
  '',
  "Pursued by the Empire's",
  'sinister agents, Princess',
  'Leia races home aboard her',
  'starship, custodian of the',
  'stolen plans that can save',
  'her people and restore',
  'freedom to the galaxy.....'
];

var font;
var txtWidth;

function preload() {
  font = loadFont('https://fonts.gstatic.com/s/newscycle/v14/CSR54z1Qlv-GDxkbKVQ_dFsvWNRevA.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(font);
  textSize(width * 0.04);
  textAlign(LEFT, TOP);
  fill(238, 213, 75);

  txt = join(lines, '\n');

  txtWidth = 0;
  for (var i = 0; i < lines.length; i++) {
    txtWidth = max(txtWidth, textWidth(lines[i]));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  rotateX(1.2);
  text(txt, -txtWidth / 2, height / 2 - millis() / 30);
}



(function() {
  var script = document.createElement('script');
  script.onload = function() {
    var stats = new Stats();
    stats.domElement.style.cssText =
      'position:fixed;left:0;top:0;z-index:10000';
    document.body.appendChild(stats.domElement);
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop);
    });
  };
  script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
  document.head.appendChild(script);
})();
