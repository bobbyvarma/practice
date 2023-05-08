let letter, sentence;
function getCount() {
  const result = document.getElementById("result");

  /* start */
  let count = 0;
  // looping through the items
  for (let i = 0; i < sentence.length; i++) {
    // check if the character is at that position
    if (sentence.charAt(i) == letter) {
      count += 1;
    }
  }

  /* End */
  result.innerHTML = count;
}

// displaying the result

function readData(event, type) {
  if (type === "char") letter = event?.target?.value;
  if (type === "string") sentence = event?.target?.value;
}

function main() {
  const input = prompt("give input as example => l,hello");
  console.log(input);
  let output;
  //input : l,hello

  // output
  /* 
        {
            count : 2,
            positions : [2,3]
        }
     */

  /* start */
  const [char, sentence] = input.split(",");

  let result = { count: 0, positions: [] };

  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) == char) {
      result.count += 1;
      result.positions.push(i);
    }
  }
  console.log("result", result);

  const index = input.indexOf("position", "l");
  /* End */

  console.log(output);
}

main();
