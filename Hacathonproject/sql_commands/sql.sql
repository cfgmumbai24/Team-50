CREATE TABLE student_tab (
	stu_id SERIAL PRIMARY KEY,
	stu_name VARCHAR(100) NOT NULL,
    category char(4) not null,
    class int not null
);
create table student_marks (
	s_id  serial,
    sub_type integer,
    exam_date date,
    test_no integer,
    score integer,
    primary key(s_id,sub_type,test_no)
);

create table socio_test(
	qid  serial primary key,
    class_id int,
    ques varchar(200)
);

INSERT INTO student_tab (stu_name, category, class)
VALUES ('ajay', 'A', 1), ('ram', 'C', 5), ('renne', 'D', 3);

-- Inserting sample data into student_marks table
INSERT INTO student_marks (sub_type, exam_date, test_no, score) 
VALUES (1, '2024-06-01', 1, 85),
       (1, '2024-06-15', 2, 78),
       (2, '2024-06-02', 1, 92),
       (2, '2024-06-16', 2, 88),
       (3, '2024-06-03', 1, 79),
       (3, '2024-03-17', 2, 81);

