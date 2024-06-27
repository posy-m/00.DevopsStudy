use test3;

CREATE TABLE user ( user_id INT PRIMARY KEY, name VARCHAR(50) );

CREATE TABLE passport (
    passport_id INT PRIMARY KEY,
    user_id int unique, -- 고유한 값으로 중복되면 안되는 데이터
    passport_num VARCHAR(100),
    FOREIGN KEY (user_id) references user (user_id)
);

CREATE TABLE adress (
    adress_id INT PRIMARY KEY,
    user_id INT,
    adress VARCHAR(255),
    foreign key (user_id) references user (user_id)
);

CREATE TABLE student (
    student_id int primary key,
    name VARCHAR(50)
);

CREATE TABLE couress (
    couress_id INT PRIMARY KEY,
    title VARCHAR(50)
);

CREATE TABLE linkCouress (
    student_id INT,
    couress_id INT,
    primary key (student_id, couress_id),
    foreign key (student_id) references student (student_id),
    foreign key (couress_id) references couress (couress_id)
);