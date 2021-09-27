var ele=document.querySelector(".dragon")

var dragonsHealth=10;
var playersHealth=5;

while(dragonsHealth > 0 && playersHealth > 0){
    var damageAmount = Number(prompt("How many times are you gonna attack the dragon? You can only attack up to 5 times."))
    randomDamageAmount = Math.floor(Math.random()*damageAmount)+1;
        if (randomDamageAmount > 5){
            dragonsHealth = dragonsHealth -1;
        }else {
            dragonsHealth = dragonsHealth - randomDamageAmount;
        }
        if (dragonsHealth > 0){
            randomDragonDamage = Math.floor(Math.random()*2)+1;
            playersHealth = playersHealth - randomDragonDamage;
        }
}
if (playersHealth <= 0){
    playersHealth=0;
    ele.innerHTML = "HA the dragon won :P   " + "Final Players Health: " + playersHealth + " Final Dragons Health: " + dragonsHealth;
}else {
    ele.innerHTML = "NICE you won!!   " + "Final Players Health: " + playersHealth + " Final Dragons Health: " + dragonsHealth
}