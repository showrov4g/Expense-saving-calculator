document.getElementById("history-tab").addEventListener("click", function () {
  markSection("expense-form").classList.add("hidden");
  markSection("assistant-tab").classList.remove(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  markSection("history-tab").classList.remove("text-gray-600");
  markSection("history-tab").classList.add(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  showSection("results");
});

document
  .getElementById("calculate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let income = inputFieldWithId("income");
    let software = inputFieldWithId("software");
    let course = inputFieldWithId("courses");
    let internet = inputFieldWithId("internet");
    let totalExpense = (software + course + internet).toFixed(2);
    let balance = income - totalExpense;

    // document.getElementById('total-expenses').innerText = totalExpense;
    // summary section
    let totalExpenseSummery = (markSection("total-expenses").innerText =
      totalExpense);
    let totalBalanceSummery = (markSection("balance").innerText = balance);

    // section show

    showSection("results");
  });
// saving calculation
document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    let income = inputFieldWithId("income");
    let software = inputFieldWithId("software");
    let course = inputFieldWithId("courses");
    let internet = inputFieldWithId("internet");
    let saving = inputFieldWithId("savings");
    let totalExpense = (software + course + internet).toFixed(2);
    let balance = income - totalExpense;
    let savingAmount = (balance * saving) / 100;
    let remaining = balance - savingAmount;

    let totalBalanceSummery = (markSection("savings-amount").innerText =
      savingAmount);
    let totalRemainingBalance = (markSection("remaining-balance").innerText =
      remaining.toFixed(2));

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
