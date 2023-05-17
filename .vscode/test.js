class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const mycar1 = new car("ford", 2014);
const mycar2 = new car("audi", 2019);

console.log(mycar1.name + "" + mycar2.name);
