function bankAccount (accountNumber, name, type, balance){
    
    this.accountNumber = accountNumber,
    this.name = name,
    this.type = type,
    this.balance = balance,

    this.deposit = function(amount){
        balance += amount;
        console.log(balance)
    },

    this.withDraw = function(amount){
        if(amount < balance){
            balance -= amount;
            console.log(balance)
        }
        else console.log("balance insufficient");
    },

    this.checkBalance = function(){
        console.log(balance);
    }

    this.isActive = function(){
        if(balance) console.log("Account is active");
        else console.log("Account is inactive");
    }
}
let allData = [];
let BankAccount1 = new bankAccount(87654651313, "Shivandru", "Savings", 500)
let BankAccount2 = new bankAccount(89764513546, "Gyan", "Savings", 500);
let BankAccount3 = new bankAccount(8765435465431, "Saurav", "Saving", 0)
let BankAccount4 = new bankAccount(8745435641, "Ankit", "Current", 500)
allData.push(BankAccount1, BankAccount2, BankAccount3, BankAccount4)


function getTotalBalance(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
            sum += arr[i].balance;
    }
    return sum;
}

console.log(getTotalBalance(allData))


// console.log(allData)
// BankAccount1.deposit(5000)
// BankAccount1.withDraw(20000)
// BankAccount2.checkBalance()
// BankAccount3.isActive()