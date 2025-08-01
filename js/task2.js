const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій

  transactions: [],
 /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
  let description = '';
  if (type === Transaction.DEPOSIT) {
    description = `+${amount}`;
  } else if (type === Transaction.WITHDRAW) {
    description = `-${amount}`;
  }
  return {
    id: this.transactions.length + 1,
    amount,
    type,
    description,
  };
},
    /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Зняття такої суми неможливо, недостатньо коштів.');
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },
   /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    return this.transactions.find(transaction => transaction.id === id);
  },
    /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;

    for (let i = 0; i < this.transactions.length; i++) {
      const transaction = this.transactions[i];

      if (transaction.type === type) {
        total += transaction.amount;
      }
    }

    return total;
  } 
};

account.deposit(14);
account.withdraw(5);
console.log(account.getBalance());
console.log(account.transactions.map(t => t.description).join(', '));