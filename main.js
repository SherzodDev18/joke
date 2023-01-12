const btn=document.getElementById("btn");
let text=document.getElementById("text");

function getJoke(){
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,explicit&type=single")
    .then(data=>data.json())
    .then(item=>{
        text.textContent=`${item.joke}`;
    });
}

btn.addEventListener("click",getJoke);
getJoke();