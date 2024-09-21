document
  .getElementById("assistant-tab")
  .addEventListener("click", function () {
    console.log("button click");
  });


  document.getElementById('calculate').addEventListener('click',function(event){
    event.preventDefault();
    let income = inputFieldWithId('income');
    console.log(income);
  })


//   calculate