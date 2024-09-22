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
  
  });
//   assistant-tab function 
  document.getElementById("assistant-tab").addEventListener("click", function () {
    markSection("expense-form").classList.remove("hidden");
    markSection("assistant-tab").classList.add(
      "text-white",
      "font-semibold",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
    markSection("history-tab").classList.add("text-gray-600");
    markSection("history-tab").classList.remove(
      "text-white",
      "font-semibold",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
  
  });