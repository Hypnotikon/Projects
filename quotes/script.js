
const arrayQ = [
{
    name: "Eleanor Roosvelt",
    quote: "A woman is like a tea bag - you cant tell how strong she is untill you put her in hot water"
},
{
    name:"George Carlin",
    quote:"Think off-center"
}
]


const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

btn.addEventListener("click", displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*arrayQ.length);
    author.innerHTML = arrayQ[number].name;
    quote.innerHTML = arrayQ[number].quote;

}