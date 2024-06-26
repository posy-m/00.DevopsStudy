USE test;

CREATE TABLE student (
    id INT,
    name VARCHAR(20),
    class VARCHAR(20)
);

CREATE TABLE student_class (
    class_id INT,
    class VARCHAR(20),
    study VARCHAR(20)
);

INSERT INTO
    student
VALUES (1, "soon", "devops"),
    (2, "soon2", "story"),
    (3, "soon3", "game");

INSERT INTO
    student_class
VALUES (1, "devops", "full"),
    (2, "story", "story1"),
    (3, "game", "game1");

SELECT * FROM student;

SELECT * FROM student_class;

SELECT *
FROM student
    INNER JOIN student_class ON student.id = student_class.class_id;

SELECT student.class, student.name, student_class.study
FROM student
    INNER JOIN student_class ON student.class = student_class.class
WHERE
    student.class = "devops";

# story 수업을 듣고 있는 사람의 수업명과 수업 내용이 필요하다.

SELECT student.class, student_class.study
FROM student
    INNER JOIN student_class ON student.class = student_class.class
WHERE
    student.class = "story";

## 사용자 (id, name)
## 주문 테이블 (id, name, order_id)
## 사용자 테이블이 있고 주문을 받는 테이블이 있다.
## 사용자 테이블에 값을 넣고
## 주문 테이블에 값을 넣고
## 모든 사용자의 주문 내용을 조회
## 해당 사용자의 주문 내용을 조회
DROP TABLE userorder;

CREATE TABLE user (id INT, name VARCHAR(20));

CREATE TABLE userorder (
    id INT,
    name VARCHAR(20),
    #상품의 이름
    order_id INT
    #유저의 아이디
);

INSERT INTO
    user
VALUES (1, "민지"),
    (2, "은조"),
    (3, "조은"),
    (4, "지민");

INSERT INTO
    userorder
VALUES (1, "바지", 1),
    (2, "셔츠", 1),
    (3, "치마", 3),
    (4, "하의실종", 4);

SELECT * FROM user;

SELECT * FROM userorder;

SELECT *
FROM user
    INNER JOIN userorder ON user.id = userorder.id;

SELECT *
FROM user
    INNER JOIN userorder ON user.id = userorder.order_id
WHERE
    user.id = 1;

#########
CREATE TABLE user ( id VARCHAR(20) PRIMARY KEY, name VARCHAR(20) );

## 아이디가 없는 주문이 들어올 수 없도록 _ 테이블 값이 추가가 안되게 제한 하는거
CREATE TABLE userorder (
    id INT,
    name VARCHAR(20),
    order_id VARCHAR(20),
    constraint fk_order_id FOREIGN KEY (order_id) REFERENCES user (id)
);

USE test;

INSERT INTO user VALUES ("두근두근", "두준");

INSERT INTO userorder VALUES (3, "맥북", "jojo");

CREATE TABLE user_table (uid VARCHAR(10), name)
## as 별칭을 정해주는 것. / 잠시 볼때만 변경 
SELECT user.id as mame
FROM user
    LEFT JOIN userorder on user.id = userorder.order_id;

CREATE TABLE test (
    name VARCHAR(20),
    name2 VARCHAR(20),
    name3 VARCHAR(20)
);

CREATE TABLE test2 (
    name VARCHAR(20),
    name2 VARCHAR(20),
    name3 VARCHAR(20)
);

INSERT INTO
    test
VALUES ("1", "2", "안녕1"),
    ("2", "2", "안녕2"),
    ("3", "2", "안녕4"),
    ("3", "2", "안녕3");

INSERT INTO
    test2
VALUES ("2", "1", "바이1"),
    ("2", "2", "바이2"),
    ("2", "3", "바이4"),
    ("3", "4", "바이3");

DROP TABLE test

SELECT * FROM test LEFT JOIN test2 on test.name = test2.name;

### full join
UNION (합집합);

(
    SELECT *
    FROM test
        LEFT JOIN test2 on test.name2 = test2.name2
)
UNION
(
    SELECT *
    FROM test
        RIGHT JOIN test2 on test.name2 = test2.name2
);

### cross join (카타잔 곱)
# 두 테이블의 곱을 나타낸다.
# 내가 어떤 데이터를 가져올때 경우의 수를 사용하고 싶을때
SELECT * FROM test CROSS JOIN test2;

### self join
# 난의도 많음.........
# 테이블이 본인을 참조하는 것.
# as testname 실제로 사용 하는것이 아니라 조회 용도로만 별칭을 정해준것.
SELECT * FROM test CROSS JOIN test as testname;
## 댓글 대댓글 만들때

## 회사테이블
## 직원테이블

### 회사의 랎을 추가
### 직원의 값을 추가
### 회사의 소속 컬럼이 있을때 직원이 뽑힐 수 있다.

### 모든 직원의 부소를 조회
### 해당 직원이 속해있는 부서 조히
### 모든 직원을 조회하면서 직원이 속하지 않은 부서도 조회 (텅빈부서)

## 사용자가 테이블 (uid, name, phone)
## 비디오가게 테이블 (name, order_id)
## 사용자 값 추가
## 비디오 빌리는 사람 값 추가(제약 조건 : 외래키 사용해서 사용자가 잇는 경우에만 데이터 추가)
## 전체 사용자 비디오 조회
## 해당 사용자 비디오 조회