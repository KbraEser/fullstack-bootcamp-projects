package com.workintech.s18d4.service;

import com.workintech.s18d4.dto.CustomerResponse;
import com.workintech.s18d4.entity.Customer;
import com.workintech.s18d4.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{
    private CustomerRepository customerRepository;

    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }
    @Override
    public Customer find(Long id) {

        return customerRepository
                .findById(id)
                .orElseThrow(()-> new RuntimeException("Customer not found"));

    }

    @Override
    public Customer save(Customer customer) {
        if(customer.getAddress() !=null){
            customer.getAddress().setCustomer(customer);
        }
        return customerRepository.save(customer);

    }

    @Override
    public Customer delete(Long id) {
        return customerRepository.findById(id)
                .map(customer -> {
                    customerRepository.delete(customer);
                    return customer;
                })
                .orElse(null);
    }

    private CustomerResponse toResponse(Customer customer){
        return new CustomerResponse(customer.getId(),
                customer.getEmail(), customer.getSalary()
        );
    }
}
