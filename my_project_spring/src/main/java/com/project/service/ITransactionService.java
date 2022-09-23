package com.project.service;

import com.project.dto.TransactionDto;
import com.project.model.Transaction;

import java.util.List;

public interface ITransactionService {
    void createTransaction(TransactionDto transactionDto);

    List<Transaction> findAll();
}
