package com.project.service.impl;

import com.project.dto.TransactionDto;
import com.project.model.Transaction;
import com.project.repository.TransactionRepository;
import com.project.service.ITransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService implements ITransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public void createTransaction(TransactionDto transactionDto) {
        transactionRepository.createTransaction(transactionDto.getPayment(),transactionDto.getPaymentMethod(),transactionDto.getStartDate(),transactionDto.getCustomer().getId());
    }

    @Override
    public Page<Transaction> findAll(Pageable pageable) {
        return transactionRepository.findAll(pageable);
    }
}
