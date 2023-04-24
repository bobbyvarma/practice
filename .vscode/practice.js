function main() {
  console.log("working");
  let result = "";
  for (let x = 0; x <= 9; x++) {
    for (let y = 0; y <= x; y++) {
      result += "#";
    }
    result += "\n";
  }
  console.log(result);

  console.log("block and const example");

//   const x = 2; // Allowed

  {
    const x = 3; // Allowed
    console.log(`i'm in side of 1 block : ${x}`);
  }

  {
    const x = 4; // Allowed
    console.log(`i'm oinut side of 2 block : ${x}`);
  }
  {
    console.log(`i'm in side of 3 block : ${x}`);
  }

  console.log(`i'm out side of blocks : ${x}`);
}

main();
