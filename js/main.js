let arrayOfAuther=[
{auther:"_Oscar Wilde",
 quote:"Be yourself; everyone else is already taken."

},
{auther:"_Marilyn Monroe",
 quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."

},
{auther:"_rank Zappa",
 quote:"So many books, so little time."

},
{auther:"_Marcus Tullius Cicero",
 quote:"A room without books is like a body without a soul."

},
{auther:"_Mae West ",
 quote:"You only live once, but if you do it right, once is enough."

},
];


var rand ;
var Quote = function () {
    var index=Math.floor(Math.random()*arrayOfAuther.length)

    if(rand===index) {
        index =index+1 ;
      }
      rand=index;

    document.getElementById("quote").innerHTML=arrayOfAuther[index].quote;
    document.getElementById("auther").innerHTML=arrayOfAuther[index].auther;
   
}
