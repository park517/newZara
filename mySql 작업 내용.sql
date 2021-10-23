3-----------------------------

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
    user_nice varchar(100),
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

-- 날짜 : 2021/10/11
-- 작업자 : Sungmi
-- 작업내용 : 커뮤니티 테이블 생성

CREATE TABLE table_board (
	
	board_no INT NOT NULL AUTO_INCREMENT,
	category_no INT NOT NULL,
	board_title VARCHAR(100),
	board_contents BLOB,
	user_no INT NOT NULL,
	board_like INT,
	board_hit INT,
	board_c_date date,
	board_u_date date,
	board_d_date date,
	PRIMARY KEY (board_no)
	
)

