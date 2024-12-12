console.log("Hello world !");

function table_multiplication(number) {
  for (let i = 0; i < 11; i++) {
    console.log(number + "x" + i + " = " + number * [i]);
  }
}

table_multiplication(2);

function average(array) {
  let somme = 0;

  array.forEach((nombre) => {
    somme = somme + nombre;
  });

  return somme / array.length;
}

console.log("moyenne = " + average([10, 10, 10]));

function sapin(a) {
  let etoile = "*";

  for (let index = 0; index < a; index++) {
    let ligne = "";
    for(let j = 0; j < a - index; j++){
        ligne += " "
    }
    console.log(ligne + etoile);
    etoile = etoile + "**";
  }
}
sapin(30);