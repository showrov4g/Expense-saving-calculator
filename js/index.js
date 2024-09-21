document.getElementById("assistant-tab").addEventListener("click", function () {
  console.log("button click");
});

document
  .getElementById("calculate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let income = inputFieldWithId("income");
    let software = inputFieldWithId("software");
    let course = inputFieldWithId("courses");
    let internet = inputFieldWithId("internet");

    // section show
    showSection("results");
  });

document.getElementById("income").addEventListener("input", function () {
  let income = inputFieldWithId("income");
  let software = inputFieldWithId("software");
  let course = inputFieldWithId("courses");
  let internet = inputFieldWithId("internet");
  if (income <= 0 || isNaN(income)) {
    showSection("income-error");
  } else {
    hideSection("income-error");
  }
});
