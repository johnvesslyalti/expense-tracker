let totalAmount = 0;
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function updateUI() {
    document.getElementById('expenseList').innerHTML = "";
    totalAmount = 0;
    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${expense.name} : $${expense.amount.toFixed(2)} <button onclick="removeExpense(${index})">Delete</button>`;
        document.getElementById("expenseList").appendChild(listItem);
        totalAmount += expense.amount;
    });
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
    localStorage.setItem("expenses", JSON.stringify(expenses));
}
function addExpense() {
    const name = document.getElementById("expensesName").value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    expenses.push({name, amount});
    updateUI();
    
    document.getElementById('expensesName').value = "";
    document.getElementById('expenseAmount').value = "";
}
function removeExpense(index) {
    expenses.splice(index, 1);
    updateUI();
}
updateUI();