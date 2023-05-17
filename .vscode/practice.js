const input = prompt("pick the number :");
if (!isNaN(input)) {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log("fizzbuzz" + " ");
  } else if (count % 3 == 0) {
    console.log("fizz" + " ");
  } else if (count % 5 == 0) {
    console.log("buzz" + " ");
  } else {
    console.log("number");
  }
} else {
  console.log("please select the number :");
}
