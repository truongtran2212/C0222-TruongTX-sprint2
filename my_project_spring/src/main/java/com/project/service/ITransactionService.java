package com.project.service;

import com.project.dto.TransactionDto;
import com.project.model.Transaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ITransactionService {
    void createTransaction(TransactionDto transactionDto);

    Page<Transaction> findAll(Pageable pageable);
}
