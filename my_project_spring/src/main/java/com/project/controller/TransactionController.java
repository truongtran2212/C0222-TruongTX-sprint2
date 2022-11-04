package com.project.controller;

import com.project.dto.TransactionDto;
import com.project.service.ITransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/transaction")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TransactionController {
    @Autowired
    private ITransactionService transactionService;

    @PostMapping("/create")
    public ResponseEntity<?> createTransaction(@RequestBody TransactionDto transactionDto) {
        transactionService.createTransaction(transactionDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<?> showListTransaction (@RequestParam(defaultValue = "0") Integer page,
                                                    @RequestParam(defaultValue = "") Integer customerId) {
        return new ResponseEntity<>(this.transactionService.findAllByCustomerName(PageRequest.of(page,5),customerId), HttpStatus.OK);
    }

    @GetMapping("/listTransaction")
    public ResponseEntity<?> showList () {
        return new ResponseEntity<>(this.transactionService.findAllTransaction(), HttpStatus.OK);
    }
}
