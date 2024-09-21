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
    let saving = inputFieldWithId("savings");
    let totalExpense = (software + course + internet).toFixed(2);
    let balance = income - totalExpense;

    // document.getElementById('total-expenses').innerText = totalExpense;
    // summary section
    let totalExpenseSummery = (summary("total-expenses").innerText =
      totalExpense);
    let totalBalanceSummery = (summary("balance").innerText = balance);

    // section show

    showSection("results");
  });
// income
document.getElementById("income").addEventListener("input", function () {
  let income = inputFieldWithId("income");
  if (income <= 0 || isNaN(income)) {
    showSection("income-error");
  } else {
    hideSection("income-error");
  }
});
// software
document.getElementById("software").addEventListener("input", function () {
  let software = inputFieldWithId("software");
  if (software <= 0 || isNaN(software)) {
    showSection("software-error");
  } else {
    hideSection("software-error");
  }
});
// courses

document.getElementById("courses").addEventListener("input", function () {
  let course = inputFieldWithId("courses");
  if (course <= 0 || isNaN(course)) {
    showSection("courses-error");
  } else {
    hideSection("courses-error");
  }
});

// internet

document.getElementById("internet").addEventListener("input", function () {
  let internet = inputFieldWithId("internet");
  if (internet <= 0 || isNaN(internet)) {
    showSection("internet-error");
  } else {
    hideSection("internet-error");
  }
});

// saving

document.getElementById("savings").addEventListener("input", function () {
  let saving = inputFieldWithId("savings");
  if (saving <= 0 || isNaN(saving)) {
    showSection("savings-error");
  } else {
    hideSection("savings-error");
  }
});



