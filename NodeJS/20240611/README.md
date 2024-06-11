# 데이터베이스 (DATABASE)
> 데이터 베이스라는 것은 정보를 저장하는 공간
> 쉽게 생각해서 폴더라고 생각하면 좋다.

## DBMS (DataBase Mangement system)
> 데이터베이스라는 말은 정보를 저장하는 공간을 말하고 
> DBMS는 특정 기능을 넣어서 데이터를 저장하고 조회하는것을 뜻한다.
> 데이터를 조작할 수 있는 기능 또는 시스템 프로그램을 DBMS

## SQL
> DBMS에서 구현된 기능을 실행시키기 위해서 특정한 언어로 실행해서 
> 데이터를 조작한다.
> 데이터를 보관할 공간을 만들거나, 데이터를 저장하거나 데이터를 삭제하거나
> SQL구문을 사용해서 삭제 수정 조회를 한다.
> SQL을 사용하는 것을 SQL이라고 하고 NO SQL이라고 한다.
> 데이터를 저장하는 형태가 관계형이냐 RDBMS가 맞냐? 아니냐 

## RDBMS
> 관계형 DBMS의 대표적 플랫폼
1. Oracle
2. Mysql
3. MariaDB
4. PostgreSQL
5. MSsql
등등 있다.

## 비관계형 DBMS
1. MongoDB

우리는 MySQL

## SQL의 개요
1. 데이터의 정의어 (DDL)(Data Definition Language)
2. 데이터의 조작어 (DML)(Data Manuplaion Language)
3. 데이터의 제어어 (DCL)(Data control Languge)

- 데이터 정의어(DDL)
> 테이블이나 관계의 구조를 생성하는데 사용하는 구문
  1. CREATE
  2. SHOW
  3. DROP
  4. ALTER

- 데이터 조작어 (DML)
> 테이블의 데이터 검색, 삽입, 수정, 삭제등을 하는데 사용한다.(CRUD)
> 우리가 많이 흔히 사용할 구문이 될거다.
  1. SELECT
  2. INSERT
  3. UPDATE
  4. DELETE

- 데이터 제어어(DCL)
> 데이터의 사용 권한을 관리하는데 사용
  1. GRANT
  2. REVOKE

## MYSQL 설치 (윈도우 기준)
> cmd에서 설치된 경로로 이동해서 mysql 접속
> C:\Program Files \MySQL \MySQL Server 8.0\bin 설치된 bin 폴더 경로까지 이동해서

```sh
# mysql 접속
mysql -u root -p
password 입력

나가는건 exit

# 데이터 정의어 (DDL)
# 스키마 생성
CREATE DATABASE [이름]
CREATE SCHME [이름]

# 기본값으로 스키마 생성
CREATE DATABASE 'MINJI' DEFAULT;

```

