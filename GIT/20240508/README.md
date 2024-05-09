# git 브랜치

브랜치는 가지
즉 우리가 했던 커밋의 상황은 한줄로만 작업을 한거고

이제 여러줄을 만들어줄 수가 있다.
예를 들어서 잘 돌아가는 코드의 내용은 master브랜치에서 진행하고
리펙터링을 진행할때

잘 돌아가는 코드의 내용을 가지고 있는 master브랜치에서 작업하지 않고
새로운 브랜치를 만들어서 작업한다.

## branch만들기

```sh
git branch 브런치 이름

#git 저장소 초기화
git init

//글로벌로 하는 방법
git config --global user.name "posy-m"
git config --global user.email "https://github.com/posy-m"

//계속 하는 방법
git config user.name "posy-m"
git config user.email "https://github.com/posy-m"

#github commit을 하게 되면 잔디가 심어짐ㅎ

# staging에 추가
git add .

# 커밋
git commit -m "커밋 메시지" 예시 : [feat] user에 내용 추가

# 브랜치 생성
git branch 브랜치 이름
git branch develop

#checkout 이전에 사용하시던 분들이... 2.23부터 switch restore

# 브랜치 생성과 이동
git switch -c 브랜치 이름

# 브랜치 확인
git branch

# 브랜치 이동
git switch 브랜치 이름

# 브랜치 삭제
git branch -d 브랜치 이름

#브랜치 삭제가 안되는 경우가 발생할 경우
git branch -D 브랜치 이름

#브랜치를 만들고 이름을 바꿀 경우
git branch -m 기존브랜치이름 바꿀브랜치이름

```

## master (다른내용의 브랜치를 병합한 후 사용)

회사 가면 직접 다룰일은 거의 없당.
버전관리를 하는 브랜치

팀장 나머지 팀원분들의 개개인의 브랜치를 만들어서
팀장이 본인 브랜치에 팀원 한분한분 브랜치를 병합해서
최종적으로 master 브랜치에 병합

브랜치 부터 만들고 모두 공유하는 시점이 중요

## 브랜치 합치기

```sh
git switch master

#master의 위치로 해더를 이동시키고 해더의 위치에
#merge의 뒤에 작성한 브랜치를 병합하겠다.

#브랜치 병합
git merge 브랜치 이름

<<<<<<< Updated upstream
  "city2" : "경기도"
}
=======
  "city2" : "서울"
}
>>>>>>> Stashed changes

## 머지 컴플릿

#작업을 할때 같은 파일을 수정하면 안된다.
#무슨 내용이 맞는지 확인해서 수정하고 커밋까지 진행이 오류 처리다.

# 이후에 잠시 사용하는 브랜치들 hotfix
git branch -D hotfix

# pull했을때도 같은 파일의 수정 내용이 겹치면 충돌이 발생할 수 있다.
#코드의 내용을 가져오고 병합까지 진행한다.
```

### 이전의 커밋 내용 변경하기

# rebase 숙련되고 사용하는게 좋음

```sh
git rebase -i 해시값
```

명령어
pick : 커밋을 그대로 두기
reword : 커밋 메시지 변경
edit : 수정을 위해 정지
drop : 커밋 삭제
squash : 이전 커밋에 합치기

# 작업을 브랜치에서 하다가 혹시 만약에 다른 브랜치로 이동해서 hotfix를 처리해야하는 경우

```sh
# 잠시 작업하던 결과물을 스택에 보관한다.
git stash

# 다시 돌아와서 내 작업물 스택에서 꺼내온다.
git stash pop

```

## 원격 저장소

> 로컬 저장소와 다른 친구
> 원격 저장소와 로컬 저장소는 다른 저장소다.
> 원격 저장소에 로컬 저장소에 있는 기록을 배포 및 다운로드를나 복제가 가능하다.

github에 접속해서 원격 저장소 하나 만들고
원격 저장소 https url 가져오고

```sh
#원격 저장소 값을 경로로 쓰는것 보다 별칭을 정하고 사용
# origin이라는 별칭에 https://github.com/posy-m/project.git 원격 저장소 경로를 지칭하고
#origin이라는 별칭을 써서 원격 저장소 내용을 구분해라
git remote add origin https://github.com/posy-m/project.git

#첫 커밋 내용을 주자
git push -u origin master
```

# github 사용자 인증 정보

제어판/ 사용자계정 / 자격 증명 관리자 / 일반 자격 증명 편집
이 경로에 자격증명이 생성되고
깃허브에 접근하면 이 자격증명을 가지고 조회한다.
내가 다른 컴퓨터에서 작업하는 경우 이 작격증명이 이미 있으면
편집을 하거나 삭젤르 해서 새로 자격증명을 받으면 된다.

# 기존 원격 저장소

```sh
git init
git remote add origin https://github.com/posy-m/project.git
git pull origin main
```

# 다른 사람이 만든 저장소를 fork해서 내 저장소로 가져오고

내 저장소의 주소도 있고

```sh
git init
git remote add origin 가져올 사이트
git pull origin main
git push origin main

pr 날려서 작업

실 저장소 소유자가 버전 관리를 하는 원격 저장소를 가지고 있고
내가 포크뜬 저장소는 커밋내용을 확인하면서 우너성 작업이 잘 동작하면 push로 pr 날라서 검증 받을 수 있다.

내 깃허브에도 잔디를 남길 수 있다.
```

