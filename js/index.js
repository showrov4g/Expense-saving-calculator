

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

