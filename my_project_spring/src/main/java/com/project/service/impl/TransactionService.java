package com.project.service.impl;

import com.project.dto.TransactionDto;
import com.project.model.Transaction;
import com.project.repository.TransactionRepository;
import com.project.service.ITransactionService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }


}
