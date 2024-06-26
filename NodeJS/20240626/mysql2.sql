## 회사테이블 (부서 )
## 직원테이블 (직원 이름, 속한 부서, 직급)
# 직원을 추가하기 위해서 있는 부서가 존재해야한다.

### 회사의 값을 추가
### 직원의 값을 추가
### 회사의 소속 컬럼이 있을때 직원이 뽑힐 수 있다.

### 모든 직원의 부소를 조회
### 해당 직원이 속해있는 부서 조회
### 모든 직원을 조회하면서 직원이 속하지 않은 부서도 조회 (텅빈부서)
USE TABLE test;

DROP TABLE company;

DROP TABLE employee;

CREATE TABLE company ( department VARCHAR(20) PRIMARY KEY );

CREATE TABLE employee (
    department_in VARCHAR(10),
    constraint department_on FOREIGN KEY (department_in) REFERENCES company (department),
    name_ VARCHAR(10),
    rank_ VARCHAR(10)
);

## 컬럼명 변경
ALTER TABLE test CHANGE DEVfrontend DEV_frontend VARCHAR(20);

INSERT INTO
    company
VALUES ("design"),
    ("marketing"),
    ("frontend"),
    ("backend"),
    ("planner"),
    ("engineer");

INSERT INTO
    employee
VALUES ("frontend", "김민지", "사원"),
    ("design", "김은조", "팀장"),
    ("frontend", "이경재", "팀장"),
    ("backend", "안중현", "팀장"),
    ("planner", "이민혁", "팀장"),
    ("marketing", "김기현", "팀장"),
    ("marketing", "이종석", "사원"),
    ("planner", "백종혁", "사원");

SELECT * FROM company;

SELECT * FROM employee;

SELECT *
FROM company
    INNER JOIN employee ON company.department = employee.department_in;

SELECT employee.department_in, employee.name_, company.department
FROM company
    INNER JOIN employee ON company.department = employee.department_in
WHERE
    employee.name_ = "김은조";

## 이건 물어보기
SELECT employee.department_in, employee.name_, company.department
FROM company
    LEFT JOIN employee ON company.department = employee.department_in;