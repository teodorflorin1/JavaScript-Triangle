document.querySelector(".btn").addEventListener("click", function () {
  const sideA = Number(document.getElementById("input1").value);
  const sideB = Number(document.getElementById("input2").value);
  const sideC = Number(document.getElementById("input3").value);

  const semiPerimeter = (sideA + sideB + sideC) / 2;

  const area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - sideA) *
      (semiPerimeter - sideB) *
      (semiPerimeter - sideC)
  );
  alert(
    `The area of a triangle with the sides ${sideA}, ${sideB} and ${sideC} is ${area.toFixed(
      2
    )}.`
  );
});
