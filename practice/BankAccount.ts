class BankAccount {
  #balance: number = 0;
  #times: number = 0;

  #checkLocked() {
    if (this.#times === 3) {
      return `Account Locked Because attempt ${this.#times}`;
    }
  }

  /**存款 */
  deposit(amount: number): string {
    const lockMsg = this.#checkLocked();
    if (lockMsg) return lockMsg;

    if (amount < 0) {
      return "amount cannot be negative";
    } else {
      this.#balance += amount;

      return "deposit successful !";
    }
  }

  /**提款 */
  withdraw(amount: number): string {
    const lockMsg = this.#checkLocked();
    if (lockMsg) return lockMsg;

    if (this.#balance < amount) {
      this.#times++;
      return "withdraw exceed!";
    } else {
      this.#balance -= amount;
      return `withdraw NTD ${amount} succesful, balance: NTD${this.getBalance()} `;
    }
  }

  getBalance(): number | string {
    const lockMsg = this.#checkLocked();
    if (lockMsg) return lockMsg;
    return this.#balance;
  }
}

const account = new BankAccount();
console.log(account.deposit(1000)); // ✅ "Deposit successful!"
console.log(account.withdraw(500)); // ✅ "Withdraw NTD 500 successful, balance: NTD 500"
console.log(account.withdraw(600)); // ✅ "Withdraw exceeded!"
console.log(account.withdraw(600)); // ✅ "Withdraw exceeded!"
console.log(account.withdraw(600)); // ✅ "Withdraw exceeded!"
console.log(account.withdraw(300)); // ✅ "Withdraw exceeded!"
console.log("Balance:", account.getBalance()); // ✅ 500
// console.log(account.#balance); // ❌ 錯誤：無法存取私有屬性

const account2 = new BankAccount();
console.log("Balance:", account2.getBalance()); // ✅ 500
