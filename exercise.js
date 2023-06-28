// Your code goes here
function getItemById(list, id) {
  return list[id - 1];
}

function buildTransactions(sales, items) {
  transaction = [];

  for (i = 0; i < sales.length; i++) {
    transaction.push({
      description: items[sales[i].itemId - 1].description,
      itemId: sales[i].itemId,
      price: items[sales[i].itemId - 1].price,
      quantity: sales[i].quantity,
    });
  }

  return transaction;
}

function getTransactionsByItemDescription(transactions, description) {
  matches = [];

  for (i = 0; i < transactions.length; i++) {
    if (transactions[i].description === description) {
      matches.push(transactions[i]);
    }
  }

  return matches;
}

module.exports = {
  // Uncomment these as you write them
  getItemById,
  buildTransactions,
  getTransactionsByItemDescription,
};
