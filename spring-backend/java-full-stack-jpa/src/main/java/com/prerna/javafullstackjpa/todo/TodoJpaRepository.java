package com.prerna.javafullstackjpa.todo;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoJpaRepository extends JpaRepository<TodoModel, Long> {

    public List<TodoModel> findByUsername(String username);
}
