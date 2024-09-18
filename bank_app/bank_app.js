class BankAccount {
    constructor(accountNumber, ownerName, balance = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} deposited successfully. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else if (amount > 0) {
            this.balance -= amount;
            console.log(`${amount} withdrawn successfully. Remaining balance: $${this.balance}`);
        } else {
            console.log("Withdrawal amount must be greater than zero.");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

const account1 = new BankAccount(1001, "John Doe", 500);
const account2 = new BankAccount(1002, "Jane Smith", 1000);


console.log("Account 1 Information:");
account1.displayAccountInfo();
console.log("\nAccount 2 Information:");
account2.displayAccountInfo();

console.log("\nDepositing $200 to Account 1:");
account1.deposit(200);
console.log("\nDepositing $500 to Account 2:");
account2.deposit(500);

console.log("\nWithdrawing $100 from Account 1:");
account1.withdraw(100);
console.log("\nWithdrawing $2000 from Account 2:");
account2.withdraw(2000);

console.log("\nUpdated Account 1 Information:");
account1.displayAccountInfo();
console.log("\nUpdated Account 2 Information:");
account2.displayAccountInfo();