# 데이터베이스 관계형
- 1 : 1
- 1 : N
- N : 1
- N : M

# index
> 데이터를 조회하는데 최적화 

# 데이터베이스 테이블
> 관계형의 용어 `entity`(데이터베이스에 저장할 데이터 집합)
> 사용자, 물건, 행위, 장소 이러한 명사를 데이터로 집합화 한것.
> table === entity
> table에 저장되는 데이터의 내용이 엔티티

### 관계성
> 비디오 가게 -> 사용자 === 비디오를 빌리는 테이블에 값을 추가할 수 있다.
> 관계성을 시각화해주는 프로그램이 등등의 ERD(entity ralationship diaram)
> entity간의 관계성을 시각화 그림으로 표현해서 확인할 수 있다.

### 관계의 종류
1. 1:1 : 관계
2. 1:n : 관계
3. N:M : 관계

# 1:1 : 관계
> 두 개 이상의 entity 데이터 집합을 하나씩만 관계를 주는 것
> 유저가 회원가입을 진행했을때 name age city가 있다고 가정했을때 
> 유저 테이블과 유저의 주소를 저장하는 테이블
> 사용자가 있어야 주소 테이블에 값을 젖아할 수 있다.

## 1:N : 관계
> 한 entity에 다른 컬럼(데이터)들이 여러개의 entity에 관계를 주는 것.
> 유저가 게시판에 댓글을 여러개 달수 있는 것.

## N:M : 관계
> entity에 여러가지의 데이터를 한 entity에 데이터로 관걔를 주는것.
> 유저가 상품을 구매하고 상품의 상세페이지에 여러명의 유저가 리뷰를 달 수 있다. 여러병의 다른 유저도 구매요청을 할수 있는 구조

## 관계형 구조
> 사용자가 있고 여권을 발급 받을것.
> 여권에는 사용자의 데이터가 포함되어야 저장이 가능하다.

## 1:1 관계
```sql
CREATE TABLE user (
  user_id INT PRIMARY KEY, 
  name VARCHAR(50),
);

CREATE TABLE passport(
  passport_id INT PRIMARY KEY,
  user_id int unique, -- 고유한 값으로 중복되면 안되는 데이터
  passport_num VARCHAR(100),
  FOREIGN KEY (user_id) rdferences user(user_id)
);
```

## 1:N 관계
```sql
CREATE TABLE adress(
  adress_id INT PRIMARY KEY,
  user_id INT,
  adress VARCHAR(255),
  foreign key (user_id) references user(user_id)
);
```

## N:M 관계
> 학생이 수강하고 있는 반
> 반의 과목의 내용을 저장할 수 있다.

``` sql
CREATE TABLE student(
  student_id int primary key,
  name VARCHAR(50)
);

CREATE TABLE couress (
  couress_id INT PRIMARY KEY,
  title VARCHAR(50)
);


CREATE TABLE linkCouress(
  student_id INT,
  couress_id INT,
  primary key (student_id,couress_id),
  foreign key(student_id) references student(student_id)
  foreign key(couress_id) references couress(couress_id)
);


```