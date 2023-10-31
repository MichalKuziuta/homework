let wysokosc = 5;

for (let i = 1; i <= wysokosc; i++) {
  let kratka = "";
  let spacja = "";

  for (let j = 0; j < i; j++) {
    kratka = kratka + "#";
  }

  for (let k = 0; k < wysokosc - i; k++) {
    spacja = spacja + " ";
  }
  console.log(spacja + kratka + " " + kratka);
}
