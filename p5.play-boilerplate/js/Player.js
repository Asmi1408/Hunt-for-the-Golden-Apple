class Player {
    constructor(){
        this.index = null;
        this.collection = 0;
        this.name = null;
        this.UPdistance = 0;
        this.DOWNdistance = 0;
        this.LEFTdistance = 0;
        this.RIGHTdistance = 0;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    updateCount(count){
        database.ref('/').update({
        playerCount: count
        });
      }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            collection:this.collection, 
            UPdistance:this.UPdistance,
            DOWNdistance:this.DOWNdistance,
            LEFTdistance:this.LEFTdistance,
            RIGHTdistance:this.RIGHTdistance
        });
      }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
  }