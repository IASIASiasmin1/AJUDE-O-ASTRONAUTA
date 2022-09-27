var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3dba2b6b-87cf-4e34-8626-4f50f963734f","ca21f2f2-a67b-4596-a14b-223eb925b719","36683641-72ec-4dba-a828-21e7b55a8d89","e52b12c3-70c7-4d4b-80df-dd5a7295b9be","6510027a-fba7-45b2-b852-322547405bea","ec9c05cf-81c3-4069-96bd-62f4cb195f71","69eb25aa-2bcc-4f20-af4e-b338a342e358","4437d922-7884-4500-917e-c0c03e1e1a2f"],"propsByKey":{"3dba2b6b-87cf-4e34-8626-4f50f963734f":{"name":"alienBeige_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qrCR7O.po3guKfxv7w7acFi8DkZt735X/category_fantasy/alienBeige.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"qrCR7O.po3guKfxv7w7acFi8DkZt735X","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qrCR7O.po3guKfxv7w7acFi8DkZt735X/category_fantasy/alienBeige.png"},"ca21f2f2-a67b-4596-a14b-223eb925b719":{"name":"alienBeige_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_/category_fantasy/alienBeige_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":5,"version":"MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_/category_fantasy/alienBeige_walk.png"},"36683641-72ec-4dba-a828-21e7b55a8d89":{"name":"backgroundww","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ohyetPBbFxFpj2KexdtFsl4dARyGXj0U","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/36683641-72ec-4dba-a828-21e7b55a8d89.png"},"e52b12c3-70c7-4d4b-80df-dd5a7295b9be":{"name":"background_landscape11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"48WvIjYXVxyuCdt3Jah08koeLbeNGtRC","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png"},"6510027a-fba7-45b2-b852-322547405bea":{"name":"djabo1","sourceUrl":"assets/api/v1/animation-library/gamelab/GMAQuYTBESkvMxOSLy7vYpmZjN.0s9Za/category_emoji/emoji_26.png","frameSize":{"x":340,"y":312},"frameCount":1,"looping":true,"frameDelay":2,"version":"GMAQuYTBESkvMxOSLy7vYpmZjN.0s9Za","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":312},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GMAQuYTBESkvMxOSLy7vYpmZjN.0s9Za/category_emoji/emoji_26.png"},"ec9c05cf-81c3-4069-96bd-62f4cb195f71":{"name":"djabo2","sourceUrl":"assets/api/v1/animation-library/gamelab/GMAQuYTBESkvMxOSLy7vYpmZjN.0s9Za/category_emoji/emoji_26.png","frameSize":{"x":340,"y":312},"frameCount":1,"looping":true,"frameDelay":2,"version":"GMAQuYTBESkvMxOSLy7vYpmZjN.0s9Za","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":312},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GMAQuYTBESkvMxOSLy7vYpmZjN.0s9Za/category_emoji/emoji_26.png"},"69eb25aa-2bcc-4f20-af4e-b338a342e358":{"name":"djabo3","sourceUrl":"assets/api/v1/animation-library/gamelab/GMAQuYTBESkvMxOSLy7vYpmZjN.0s9Za/category_emoji/emoji_26.png","frameSize":{"x":340,"y":312},"frameCount":1,"looping":true,"frameDelay":2,"version":"GMAQuYTBESkvMxOSLy7vYpmZjN.0s9Za","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":312},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GMAQuYTBESkvMxOSLy7vYpmZjN.0s9Za/category_emoji/emoji_26.png"},"4437d922-7884-4500-917e-c0c03e1e1a2f":{"name":"nave.jpg_1","sourceUrl":null,"frameSize":{"x":474,"y":237},"frameCount":1,"looping":true,"frameDelay":12,"version":"vdGFZkOirDcVWQyk4YQxMZ4x.narCOzO","loadedFromSource":true,"saved":true,"sourceSize":{"x":474,"y":237},"rootRelativePath":"assets/4437d922-7884-4500-917e-c0c03e1e1a2f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200,400,400);
b.setAnimation("background_landscape11_1");
b.scale=1;

var nave = createSprite(200,200,400,400);
nave.visible = false;
nave.setAnimation("nave.jpg_1");
nave.scale=2;

var frederic = createSprite(200,345,200,345);

var soldado1 = createSprite(200,250,10,10);
soldado1.shapeColor="red";

var soldado2 = createSprite(200,150,10,10);
soldado2.shapeColor="red";

var soldado3 = createSprite(200,50,10,10);
soldado3.shapeColor="red";

var net = createSprite(200,5,200,20);
net.shapeColor="gray";

var goal = 0;
var death = 0;

frederic.setAnimation("alienBeige_1");
frederic.scale=.7;

soldado1.setAnimation ("djabo1");
soldado1.scale=.1;
soldado2.setAnimation ("djabo2");
soldado2.scale=.1;
soldado3.setAnimation ("djabo3");
soldado3.scale=.1;

soldado1.setVelocity(-10,0);
soldado2.setVelocity(10,0);
soldado3.setVelocity(-10,0);

playSound("assets/category_loops/misguided_rabbit_chase_minimal_loop.mp3", true);

var edges = createEdgeSprites ();
function draw() {
  background("#03031c");
 
frederic.bounceOff (edges);
soldado1.bounceOff(edges);
soldado2.bounceOff(edges);
soldado3.bounceOff(edges);

if(keyDown(UP_ARROW)){
  
  frederic.y=frederic.y-4
}

if(keyDown(DOWN_ARROW)){
  frederic.y=frederic.y+4
}

if(keyDown(LEFT_ARROW)){
  frederic.x=frederic.x-4
}

if(keyDown(RIGHT_ARROW)){
  frederic.x=frederic.x+4
}

if (frederic.isTouching(soldado1) || frederic.isTouching(soldado2) || frederic.isTouching (soldado3)){
  
 playSound("assets/category_explosion/playful_game_explosive_hit.mp3")
 
  frederic.x=200;
  frederic.y=350
  death = death+1  
}

if(frederic.isTouching(net)){
  background("nave");
playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3", false);
stopSound("assets/category_loops/misguided_rabbit_chase_minimal_loop.mp3");

nave.visible = true;
net.visible = false;

soldado1.setVelocity(0);
soldado2.setVelocity(0);
soldado3.setVelocity(0);

goal=goal+1

net.shapeColor="cyan";
 playSound ()
}

if (frederic.x == 0 || frederic.x == 400) {
  frederic.x=200;
  frederic.y=350
  death = death+1
}

textSize=30;
  textFont("Times New Roman");
  fill("red");
  text("Entre na NAVE! Rápido!", 54, 12, 50, 50);
  
drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
