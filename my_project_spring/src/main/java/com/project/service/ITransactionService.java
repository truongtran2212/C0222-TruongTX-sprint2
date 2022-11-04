package com.project.service;

import com.project.dto.TransactionDto;
import com.project.model.Transaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ITransactionService {
    void createTransaction(TransactionDto transactionDto);

    Page<Transaction> findAllByCustomerName(Pageable pageable, Integer customerId);

    List<Transaction> findAllTransaction();
}
