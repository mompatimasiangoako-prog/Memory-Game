let boardLocked = false;

let arr5 = [];
function derangedShuffle(arr) {
let r = arr.slice(), n = r.length;

do {
    for(let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [r[i],r[j] = r[j], r[i]];

    } 


} while(r.some((x,i) => x === arr[i]));
return r;
}
let arr1 = [1,2,3,4,5,6,7,8];
const deranged1 = derangedShuffle(arr1)
console.log(deranged1)
//document.querySelector("body").innerHTML = deranged;

let arrOfIds = ["card1","card2","card3","card4","card5","card6","card7","card8"];
let arrOfSrcs = [
  "5293bd86-b9a0-4b8a-bb98-13d50f8d183a.jpeg",
  "5293bd86-b9a0-4b8a-bb98-13d50f8d183a.jpeg",
  "549f664d-51ee-4594-997b-3c243ffafbfc.jpeg",
  "549f664d-51ee-4594-997b-3c243ffafbfc.jpeg",
  "file:///Users/mompatimasiangoako/Desktop/Memory%20game%201.0/54dafbf2-c0df-4948-bc0e-0ec3b017e689.jpeg",
  "file:///Users/mompatimasiangoako/Desktop/Memory%20game%201.0/54dafbf2-c0df-4948-bc0e-0ec3b017e689.jpeg",
  "file:///Users/mompatimasiangoako/Desktop/Memory%20game%201.0/eb9c9d40-945e-41cc-a294-f22aa98bc58b.jpeg",
  "file:///Users/mompatimasiangoako/Desktop/Memory%20game%201.0/eb9c9d40-945e-41cc-a294-f22aa98bc58b.jpeg"
];

let gameStarted = false;
let cardFace = "Screenshot 2025-10-06 at 13.54.37.png";

function derangedShuffle(arr) {
  let r = arr.slice(), n = r.length;
  do {
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
  } while (r.some((x, i) => x === arr[i]));
  return r;
}

let deranged = derangedShuffle([0,1,2,3,4,5,6,7]);
let arr2 = [];
let take30;
function startGame() {
  document.getElementById("main").style.display = 'block';
  document.getElementById("top").style.display = 'block';
 document.getElementById("start").style.display = 'none';
  gameStarted = false;
  arr2 = [];

  deranged = derangedShuffle([0,1,2,3,4,5,6,7]);
let check = false
  // Reveal all briefly
  for (let i = 0; i < arrOfIds.length; i++) {
    const img = document.getElementById(arrOfIds[i]);
    img.src = arrOfSrcs[deranged[i]];
    arr2.push(arrOfSrcs[deranged[i]]);
  }

  // Hide after 1 second, then enable game
  setTimeout(() => {
    for (let i = 0; i < arrOfIds.length; i++) {
      document.getElementById(arrOfIds[i]).src = cardFace;
    }
    
    gameStarted = true
    check = true;
    boardLocked = false;
  }, 1000);

  let counter5 = 0;

  take30 = setInterval(() => {
          counter5++;
          document.getElementById("time").innerHTML = counter5;
          document.getElementById("sound").currentTime = 0;
          document.getElementById("sound").play()
          document.getElementById("time1").innerHTML = "You took" + " " + counter5 + " " + "seconds";
      },1000);
    
}

// Add event listeners ONCE

let counter2 = -1;
let counter7 = 0;
let take25;
let current_index;
let current_index_arr = []
let current_index2;
let current_index3_arr = []
arrOfIds.forEach((id, index) => {
  const card = document.getElementById(id);
  card.addEventListener("click", () => {
    if (!gameStarted) return; // Don’t flip before start
    if (card.src === cardFace) {
      card.src = arr2[index];

       
        
      
      console.log(current_index2)
      gameStarted = false

     console.log(index)
      setTimeout(() => {

          card.src = cardFace;
            gameStarted = true;

           
        
      },1000)

    

      counter2++
      current_index = arr2[index];
      current_index2 = index;
      arr5.push(index)
      current_index_arr.push(arr2[index]);
      current_index3_arr.push(current_index2);
      if(current_index_arr.length >= 2 && arr5.length >= 2) {
        for(let i = 0; i < current_index_arr.length; i++) {
          if(current_index_arr[i] === current_index_arr[i-1] && arr5[i] !== arr5[i-1]) {
            take25 = setTimeout(() => { 

            
              document.getElementById(arrOfIds[current_index2]).style.display = "none";
              current_index_arr.splice(0, current_index_arr.length);
              arr5.splice(0,arr5.length);
              document.getElementById(arrOfIds[current_index3_arr[i-1]]).style.display = "none";
              current_index3_arr.splice(0,current_index3_arr.length)
              counter7++;
                  boardLocked = false;
             
               console.log("Y" + counter7);
                 if(counter7 === 4){
                  clearTimeout(take25)
                  clearTimeout(take30)
              document.getElementById("closing").style.display = "block"
              document.querySelector("section").style.display = "none";
              document.getElementById("time").style.display = "none";
              document.getElementById("top").style.display = "none";
              document.getElementById("main").style.display = "none";
              document.getElementById("sound").pause()
              
               }
              
            },1000);
           if(check === true) {
           
           }
          }


        }

      }
      console.log(current_index3);
    } else {
      //card.src = cardFace;
      boardLocked = false;

    }
  });
});

// Refresh / Start button
document.querySelector("button").addEventListener("click", startGame);



//console.log("Original:", original);
//console.log("Deranged:", deranged);

let counter = 0;

// Run something every 100 ms
const interval = setInterval(() => {
  console.log("Running...", counter++);
}, 100);

// Stop after 1 second
setTimeout(() => {
  clearInterval(interval);
  console.log("Stopped after 1 second!");
}, 1000);

document.getElementById("restart").addEventListener("click", () => {
    location.reload();
});
