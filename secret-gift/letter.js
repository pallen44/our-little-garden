const letterText = `
My love,

[WRITE YOUR LETTER HERE]

Merry Christmas, Ky.

— Parker
`;

let i = 0;
let speed = 35; // typing speed (ms)

function typeLetter() {
  if (i < letterText.length) {
    document.getElementById("letter").innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeLetter, speed);
  }
}

typeLetter();
