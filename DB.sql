DROP database staffs;
CREATE database staffs;
USE staffs;
CREATE table staffs(
id int primary key auto_increment,
name varchar(50),
city varchar(50),
exp int,
salary int

);

UPDATE staffs SET name = 'Viet', city ='HN', exp = 123123, salary = 123123 WHERE id = 2;
SELECT count(id) as totalStaff FROM staffs