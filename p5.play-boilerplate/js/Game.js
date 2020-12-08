class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      car1 = createSprite(100,100);
      car2 = createSprite(300,100);
      car1.addImage (player1_image);
      //car3 = createSprite(500,500);
      //car4 = createSprite(700,500);
      //car5 = createSprite(700,500);
      cars = [car1, car2];
    }
    play(){
        form.hide();
    
        Player.getPlayerInfo();
        
        //player.getCarsAtEnd();
    
        if(allPlayers !== undefined){
          //var display_position = 100;
          
          background ("white");
          image (bg, 0, -displayHeight*5, displayWidth*5, displayHeight*5);
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x = 200;
          var y;
          var left_key=0;
          var right_key=0;
          var up_key=0;
          var down_key=0;

          if(keyIsDown(UP_ARROW) && player.index !== null){
            player.UPdistance +=20
            player.update();
            up_key=1;
            down_key=0;
            left_key=0;
            right_key=0;
          }
  
          if(keyIsDown(DOWN_ARROW) && player.index !== null){
            player.DOWNdistance +=20
            player.update();
            up_key=0;
            down_key=1;
            left_key=0;
            right_key=0;
          }
  
          if(keyIsDown(LEFT_ARROW) && player.index !== null){
            player.LEFTdistance +=20
            player.update();
            up_key=0;
            down_key=0;
            left_key=1;
            right_key=0;
          }
  
          if(keyIsDown(RIGHT_ARROW) && player.index !== null){
            player.RIGHTdistance +=20
            player.update();
            up_key=0;
            down_key=0;
            left_key=0;
            right_key=1;
          }

          for(var plr in allPlayers){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //use data form the database to display the cars in y direction
          if (up_key===1) {y = displayHeight - allPlayers[plr].UPdistance}
          if (left_key===1) {x = displayWidth - allPlayers[plr].LEFTdistance}
          if (down_key===1) {y = displayHeight + allPlayers[plr].DOWNdistance}
          if (right_key===1) {x = displayWidth + allPlayers[plr].RIGHTdistance}

            cars[index-1].x = x;
            cars[index-1].y = y;
    
            if (index === player.index){
              //fill ("green");
              //ellipse (x, y, 65, 65);
              cars[index - 1].shapeColor = "red";
              camera.position.x = cars[index-1].x
              camera.position.y = cars[index-1].y
            }
          
            //textSize(15);
            //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
    
        }
    
        drawSprites();
      }
 }