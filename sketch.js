function setup() {
  createCanvas(400, 400);
  
  //Um string do tipo de dados
  name = "Hermoine";
  
  //Um número do tipo de dados
  num = 31;
  
  //Uma matriz do tipo de dados
  newArray = ["Item1", 32, name, num];
  
  //acessando o 1º item na matriz e colocando-o no console
  console.log(newArray[0]);
  
  //acessando o 3º item na matriz e colocando-o no console
  console.log(newArray[2]);

  //encontrando o comprimento da matriz
  console.log(newArray.length);

}

function draw() {
  background(220);
  
}