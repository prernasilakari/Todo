package com.prerna.javafullstackjpa.todo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table
@Entity
public class TodoModel {

    @Id
    @GeneratedValue
    private  long id;
    private String username;
    private String description;
    private boolean completed;
    private Date target;
}
