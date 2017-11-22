//MONSTERS
class Monster {
  constructor(name,healthPoints,attackPoints,type,image){
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.type = type;
    this.image = image;
  }
}


//MONSTER STATS!!!!

var fireraga = new Monster('FireRaga',640,55,'fire','images/FireRaga-Dragon.png');

var treefighter = new Monster('TreeFighter',660,100,'grass','images/TreeFighter.png');

var waltervortex = new Monster('WalterVortex',700,40,'water','images/Walter-Vortex.png');


//Array of monsters
var monsterList = [fireraga,treefighter,waltervortex];
var r = Math.floor(Math.random()*3);
//randomizer
var randomMonster = monsterList[r];
// console.log(r); //testing out random


//Text for the ai
var aiText = ['Welcome to the world of Monsters, what is your name?',
              'Thank you!',
              'Choose your companion!',
              'You chose ',
              'You pet your companion, it smiles ^_^. You gave him + MORALE. WATCH OUT FOR THE MONSTER!!'];

//variables for userinput
var speachBox = document.querySelector('#speachBox');
var userInput = document.querySelector('#userInput');
var btn = document.querySelector('#btn');

// if these ids are active on the screen do this
if(speachBox && userInput && btn){

//intro screen
speachBox.textContent = aiText[0];
btn.addEventListener('click', function(){

  var userName = userInput.value;  //[VAR FOR USERNAME!!!!!!!]
  console.log(userName);
  userInput.value = '';

  speachBox.textContent = aiText[1]
                          + ' '
                          + userName
                          + '!';


  userInput.classList.add('remove');
  btn.classList.add('remove');
  //collects the username information ABOVE
  //SELECTS AND LOCATES THE START BATTLE BUTTON
    var proceedBtn = document.querySelector('#proceed');
    //REMOVES THE CLASS THAT HAS DISPLAY NONE AND MAKES THE BUTTON APPEAR
    proceedBtn.classList.remove('remove');

      //ADDS THE CLICK FUNCTION TO ACTIVATE THE AI SPEACH
      proceedBtn.addEventListener('click',function(){
        speachBox.textContent = aiText[2] + ' ' + userName + '.';

        proceedBtn.addEventListener('click',function(){


          //add more here later
          //MONSTER DISPLAY
            document.querySelector('#monster1').src = fireraga.image;
            document.querySelector('#monster2').src = waltervortex.image;
            document.querySelector('#monster3').src = treefighter.image;
            //removesBUTTON
            proceedBtn.classList.add('remove');

            var playerMonster = undefined;
            var attackButton = document.querySelector('#attackButton');
            //variables for displaying the monster
            var monster1 = document.querySelector('#monster1');
            var monster2 = document.querySelector('#monster2');
            var monster3 = document.querySelector('#monster3');
              //if choose monster1 THIS WILL HAPPEN
              document.querySelector('#monster1').addEventListener('click',function(){

                var playermonster = fireraga;
                console.log(fireraga);
                speachBox.textContent = aiText[3] + playermonster.name;
                monster2.classList.add('remove');
                monster3.classList.add('remove');
        //NEXT EVENT
                document.querySelector('#monster1').addEventListener('click',function(){
                  speachBox.textContent = aiText[4];
                  attackButton.classList.remove('remove');
                  //BATTLE START
                  document.querySelector('#rival').src = randomMonster.image;

                    attackButton.addEventListener('click',function(){

                      speachBox.textContent = userName + 's monster ' + playermonster.name + ' attacks ' + randomMonster.name + '. ' + randomMonster.name + ' also attacks!!' ;

                      document.querySelector('#stats').textContent = '[' + userName + 's ' + playermonster.name + ':' + playermonster.healthPoints + ']' + '['+ 'Wild ' + randomMonster.name + ':' + randomMonster.healthPoints + ']';
                      //ATTACK DAMAGE
                      playermonster.healthPoints -= Math.floor(Math.random(randomMonster.attackPoints)*10);
                      randomMonster.healthPoints -= Math.floor(Math.random(playermonster.attackPoints)*10);

                      if(playermonster.healthPoints <= 0){
                        document.querySelector('#stats').textContent = playermonster.name + ' has died....' + ' GAME OVER';
                        playermonster.healthPoints = 0;
                        speachBox.classList.add('remove');
                        attackButton.classList.add('remove');

                      }//ded

                      if(randomMonster.healthPoints <= 0){
                        document.querySelector('#stats').textContent = playermonster.name + ' YOU WON!!!! ^_^ '  + userName + ' and ' + playermonster.name + ' become best friends....THE END CONGRATULATIONS!!!';
                        randomMonster.healthPoints = 0;
                        speachBox.classList.add('remove');

                        attackButton.classList.add('remove');
                      }//you win

                    })


                });

              });

              //if choose monster2 THIS WILL HAPPEN
              document.querySelector('#monster2').addEventListener('click',function(){

                var playermonster = waltervortex;
                console.log(waltervortex);
                speachBox.textContent = aiText[3] + playermonster.name;
                monster1.classList.add('remove');
                monster3.classList.add('remove');


        //NEXT EVENT
                document.querySelector('#monster2').addEventListener('click',function(){
                  speachBox.textContent = aiText[4];
                  attackButton.classList.remove('remove');
                  //BATTLE START
                  document.querySelector('#rival').src = randomMonster.image;
                  attackButton.addEventListener('click',function(){
                    speachBox.textContent = userName + 's Monster attacks ' + randomMonster.name;

                    speachBox.textContent = userName + 's monster ' + playermonster.name + ' attacks ' + randomMonster.name + '. ' + randomMonster.name + ' also attacks!!' ;

                    document.querySelector('#stats').textContent = '[' + userName + 's ' + playermonster.name + ':' + playermonster.healthPoints + ']' + '['+ 'Wild ' + randomMonster.name + ':' + randomMonster.healthPoints + ']';
                    //ATTACK DAMAGE
                    playermonster.healthPoints -= Math.floor(Math.random(randomMonster.attackPoints)*10);
                    randomMonster.healthPoints -= Math.floor(Math.random(playermonster.attackPoints)*10);

                    if(playermonster.healthPoints <= 0){
                      document.querySelector('#stats').textContent = playermonster.name + ' has died....' + ' GAME OVER';
                      playermonster.healthPoints = 0;
                      speachBox.classList.add('remove');
                      attackButton.classList.add('remove');

                    }//ded

                    if(randomMonster.healthPoints <= 0){
                      document.querySelector('#stats').textContent = playermonster.name + ' YOU WON!!!! ^_^ '  + userName + ' and ' + playermonster.name + ' become best friends....THE END CONGRATULATIONS!!!';
                      randomMonster.healthPoints = 0;
                      speachBox.classList.add('remove');

                      attackButton.classList.add('remove');
                    }//you win



                  })


                });
              });

              //if choose monster3 THIS WILL HAPPEN
              document.querySelector('#monster3').addEventListener('click',function(){

                var playermonster = treefighter;
                console.log(treefighter);
                speachBox.textContent = aiText[3] + playermonster.name;
                monster1.classList.add('remove');
                monster2.classList.add('remove');

        //NEXT EVENT
                document.querySelector('#monster3').addEventListener('click',function(){
                  speachBox.textContent = aiText[4];
                  attackButton.classList.remove('remove');
                  //BATTLE START
                  document.querySelector('#rival').src = randomMonster.image;

                  attackButton.addEventListener('click',function(){
                    speachBox.textContent = userName + 's Monster attacks ' + randomMonster.name;

                    speachBox.textContent = userName + 's monster ' + playermonster.name + ' attacks ' + randomMonster.name + '. ' + randomMonster.name + ' also attacks!!' ;

                    document.querySelector('#stats').textContent = '[' + userName + 's ' + playermonster.name + ':' + playermonster.healthPoints + ']' + '['+ 'Wild ' + randomMonster.name + ':' + randomMonster.healthPoints + ']';
                    //ATTACK DAMAGE
                    playermonster.healthPoints -= Math.floor(Math.random(randomMonster.attackPoints)*10);
                    randomMonster.healthPoints -= Math.floor(Math.random(playermonster.attackPoints)*10);

                    if(playermonster.healthPoints <= 0){
                      document.querySelector('#stats').textContent = playermonster.name + ' has died....' + ' GAME OVER';
                      playermonster.healthPoints = 0;
                      speachBox.classList.add('remove');
                      attackButton.classList.add('remove');

                    }//ded

                    if(randomMonster.healthPoints <= 0){
                      document.querySelector('#stats').textContent = playermonster.name + ' YOU WON!!!! ^_^ '  + userName + ' and ' + playermonster.name + ' become best friends....THE END CONGRATULATIONS!!!';
                      randomMonster.healthPoints = 0;
                      speachBox.classList.add('remove');

                      attackButton.classList.add('remove');
                    }//you win


                  })
                });
              });



    });//END
   });//END
  });//add event listener end
}// if statment end
