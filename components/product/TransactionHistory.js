"use client";
import React, { useState } from 'react';
import { Collapse } from '@chakra-ui/react';

const TransactionHistory = ({ transactionHistory }) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="border rounded-lg shadow-lg p-4 mt-4 bg-gradient-to-r from-blue-900 to-black text-white">
      <button
        onClick={() => setShowHistory(!showHistory)}
        className={`w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ${
          showHistory ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"
        }`}
      >
        {showHistory ? "Hide" : "Show"} Transaction History
      </button>
      <Collapse in={showHistory}>
        <div className="mt-4 bg-gray-800 p-4 rounded-lg transition-all duration-300">
          {transactionHistory && Array.isArray(transactionHistory) && transactionHistory.length > 0 ? (
            transactionHistory.map(tx => (
              <div key={tx.id} className="border-b py-2 border-gray-600">
                <p className="text-gray-300">Sale Price: <span className="font-bold text-blue-300">{tx.price} ETH</span> on {tx.date}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No transaction history available for this product.</p>
          )}
        </div>
      </Collapse>
    </div>
  );
};

export default TransactionHistory;
