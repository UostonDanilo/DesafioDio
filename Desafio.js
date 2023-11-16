let nomedoHeroi = "Danilo" 
let xpdoHeroi = 55000

if (xpdoHeroi < 1000){
  niveldoHeroi = "Ferro"
 
}else if (xpdoHeroi >= 1001 && xpdoHeroi <= 2000){
  niveldoHeroi="Bronze"
 
}else if (xpdoHeroi >= 2001 && xpdoHeroi <= 5000){
  niveldoHeroi = "Prata"

}else if (xpdoHeroi >= 6001 && xpdoHeroi <= 7000){
  niveldoHeroi = "Ouro"

}else if (xpdoHeroi >= 7001 && xpdoHeroi <= 8000){
  niveldoHeroi = "Platina"

}else if (xpdoHeroi >= 8001 && xpdoHeroi <= 9000){
  niveldoHeroi = "Ascendente"

}else if (xpdoHeroi >= 9001 && xpdoHeroi <= 10000){
  niveldoHeroi = "Imortal"

} else {
  niveldoHeroi = "Radiante"
}

console.log("O Heroi de nome " + "Danilo" + " esta no nivel de " + niveldoHeroi)