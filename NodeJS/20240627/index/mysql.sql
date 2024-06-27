CREATE DATABASE test4;

use test4;

-- full scans
SELECT * FROM student;

-- full scans
SELECT * FROM strdent WHERE name = "soon";
-- index가 되어 있지 않으면 모든 데이터를 조회하고 결과를 찾는다.

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    age int,
    class VARCHAR(10)
);

SHOW VARIABLES like "secure_file_priv";

DROP TABLE student;

LOAD DATA INFILE "/Users/mac/Desktop/DEVOPS/upload/student.csv" INTO
TABLE student FIELDS TERMINATED BY "," ENCLOSED BY "," ENCLOSED BY '"' LINES TERMINATED BY "\n" IGNORE 1 ROWS;

SELECT * FROM student WHERE class = "devops";

SELECT * FROM student WHERE name = "Audra_Smith";

# 인덱스 name
# 이걸 쓰고 SELECT * FROM student WHERE name = "Audra_Smith"; 하면 속도가 빨라짐
CREATE INDEX student_name ON student (name);

CREATE INDEX student_class ON student (class);

# 설정한 인덱스 확인
SHOW INDEX FROM student;

# 인덱스를 두개 이상

## index의 종류
# index
# 멀티 컬럼 index(unique);

# 두가지 이상의 컬럼으로 유니크 인덱스 생성
CREATE UNIQUE INDEX student_name_email ON student (name, email);
# 기준으로 선택된 컬럼만 인덱싱 된다.
# email은 인덱싱이 안됨

SELECT *
FROM student
WHERE
    name = "Morris66"
    AND email = "Micheal94@hotmail.com";

CREATE INDEX student_email ON student (email);

SELECT * FROM student WHERE email = "Dolly9@hotmail.com";

-- 두개 이상의 컬럼을 유니크 인덱스로 생성 (두 컬럼을 가지고 있는 유니크한 인덱스라는 뜻)

-- primary key는 자동으로 인덱스가 생성된다.

-- Non_unique : 유니크인지 아닌지 정보를 알려준다.
-- 0 : 유니크 중복값을 허용X
-- 1 : 반대 중복값을 허용 o

-- seq_in_index : 멀티 컬럼 인덱스 이면 1 2 이런식으로 멀티컬럼으로 지정한 컬럼을 순서대로 보여준다.
-- Column_name : 어떤 컬럼의 이름인지

## 쿼리문 호출을 할때 어떤 인덱스를 사용한건지 알아보자.

EXPLAIN SELECT * FROM student WHERE email = "Dolly9@hotmail.com";
## student_email
## DBMS는 옵티마이저 sql을 가장 효율적으로 실행할 수 있는 방법을 결정.
## 옵티마이저 오류가 발생할 수 있기때문에
## 인덱스를 설정했을때 실수를 하지 못하게 하기 위해서

-- 인덱스를 지정해서 테이블 조회
-- 실수해서 안쓸 경우가 있지만 우선순위를 높여줌
SELECT *
FROM student
USE INDEX (student_email)
WHERE
    email = "Dolly9@hotmail.com";

## USE INDEX (student_email) : 인덱스를 사용해달라고 요청을 하는 것.

-- 인덱스를 사용하는것을 강제로 > FORCE
-- 절대로 판단하지말고 무조건 사용해
SELECT *
FROM student FORCE INDEX (student_email)
WHERE
    email = "Dolly9@hotmail.com";

DROP INDEX student_email ON student;