-----------------------------

-- 날짜 : 2021/10/04
-- 작업자 : Gyu
-- 작업내용 : 유저 테이블 생성 

show databases;
create database zara;
use zara;

show tables;

CREATE TABLE TABLE_USER (

	user_no int NOT NULL AUTO_INCREMENT,
    user_id varchar(100),
    user_email varchar(100),
    user_state int,
    user_password varchar(100),
    user_name varchar(100),
    user_address varchar(100),
    user_phone varchar(100),
    user_gender varchar(100),
    user_birth varchar(100),
    user_c_date date,
    user_u_date date,
    uesr_d_date date,
    user_ll_date date,
    primary key (user_no)
    
);
    
show tables;

----------------------------------------------------
