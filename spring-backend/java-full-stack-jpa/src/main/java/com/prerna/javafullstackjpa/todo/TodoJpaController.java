package com.prerna.javafullstackjpa.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
@CrossOrigin("*")
@RestController
public class TodoJpaController {

    @Autowired
    private TodoJpaRepository repository;

    @GetMapping("/todos/{username}")
    public List<TodoModel> getAllTodos(@PathVariable String username) {

        return  repository.findByUsername(username);
        //return repository.findByUsername(username);
    }

    @DeleteMapping("/todos/{username}/{id}")
    public ResponseEntity<Void> deteleTodo(@PathVariable long id){
        repository.deleteById(id);
        return ResponseEntity.notFound().build();
    }

    @GetMapping("todos/{username}/{id}")
    public TodoModel getTodobyId(@PathVariable long id){
        return repository.findById(id).get();
    }

    @PutMapping("/todos/{username}/{id}")
    public ResponseEntity<TodoModel> updateTodo(
            @PathVariable String username,
            @PathVariable long id, @RequestBody TodoModel todo){

        TodoModel todoUpdated = repository.save(todo);

        return new ResponseEntity<TodoModel>(todo, HttpStatus.OK);
    }

    @PostMapping("/todos/{username}")
    public ResponseEntity<Void> saveTodo(
            @PathVariable String username, @RequestBody TodoModel todo){
    todo.setUsername(username);
        TodoModel createdTodo = repository.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

}
