package com.prompt.crudchat;

import com.prompt.crudchat.entities.Employee;
import com.prompt.crudchat.repositories.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudChatApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudChatApplication.class, args);
	}

	@Bean
	public CommandLineRunner loadData(EmployeeRepository repository) {
		return (args) -> {
			repository.save(new Employee(null,"Bill", "Gates"));
			repository.save(new Employee(null,"Mark", "Zuckerberg"));
			repository.save(new Employee(null,"Sundar", "Pichai"));
			repository.save(new Employee(null,"Jeff", "Bezos"));
		};
	}

}
