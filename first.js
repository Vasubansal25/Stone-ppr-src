 let userscore =0;
 let compscore =0;

 const choices =document.querySelectorAll(".choice");
 const msg =document.querySelector("#msg");
 const uscore =document.querySelector("#me");
 const coscore =document.querySelector("#com");


 //computer choice
 const comchoice =()=>{
    let options =["stone","paper","scissors"];
     const random =Math.floor(Math.random()*3);//random number generate
    return options[random];
 }

 const fundraw=()=>{
    console.log("game drawn");
    msg.innerText="game draw"
    msg.style.backgroundColor= "#081b31";
 }


 const  showwinner = (userwin,comptchoice,my)=>{
    if(userwin){
        console.log("you win");
        msg.innerText= ' you win';
        msg.style.backgroundColor="green";
        userscore++;
        uscore.innerText= userscore;

    }
    else{
        console.log("you lose");
        msg.innerText="you lost";
        msg.style.backgroundColor="red";
        compscore++;
        coscore.innerText= compscore;
    }
 }

  const playgame = (my)=>{

    console.log("user choice",my);
    let comptchoice=  comchoice();
    console.log("computer choice is", comptchoice);
    if(comptchoice===my){
        fundraw();
   
    }
   
    else{
        let userwin =true;
        if( my === "rock"){
         userwin =  (comptchoice === "paper") ? false: true;

        }
        else if(  my ==="paper"){
          userwin = ( comptchoice === "scissors" ) ? false:true; 

        }
        else {
           userwin =( comptchoice ==="paper")? true:false;
        }
        showwinner(userwin,comptchoice,my);

    }


  
   

    
 }
 choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const my =choice.getAttribute("id");
        playgame(my);
        

    });

 });
 