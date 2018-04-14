var mainState = {
  preload: function(){
    game.load.image('bg', 'assets/background-day.png')
    game.load.image('bird', 'assets/bluebird-downflap.png')
    game.load.image('pipe', 'assets/pipe-green.png')

  },
  create: function(){
    game.add.sprite(52, 0, 'bg')
    game.add.sprite(52, 0, 'bg')
    // Set the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.bird = game.add.sprite(100, 245, 'bird')

    // Add physics to the bird
    // Needed for: movements, gravity, collisions, etc.
    game.physics.arcade.enable(this.bird);

    // Add gravity to the bird to make it fall
    this.bird.body.gravity.y = 1000;

    // Call the 'jump' function when the spacekey is hit
    var spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);
  },
  update: function(){
    // If the bird is out of the screen (too high or too low)
    // Call the 'restartGame' function
    if (this.bird.y < 0 || this.bird.y > 490)
        this.restartGame();
  },
  jump: function(){
    // Add a vertical velocity to the bird
    this.bird.body.velocity.y = -350;
  },
  restartGame: function(){
    // Start the 'main' state, which restarts the game
   game.state.start('main');
  }
}

var game = new Phaser.Game(400, 530)
game.state.add('main', mainState)

game.state.start('main')
