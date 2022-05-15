# Zaritalk Community

<div align="center">
<img src="https://user-images.githubusercontent.com/87234410/168439590-4d79ad84-f48a-45ae-a4f4-177e118d56ec.png" width="300px">
</div>


### 개요
* 간단한 CR(Create-Read) 커뮤니티 프로젝트 개발

### 개발환경
#### 기술 스택
* 프론트엔드 : ReactJS with TypeScript, Next.js, @emotion
* 백엔드 : json-server 활용 (아래 명령어로 서버 실행. 포트는 **8080으로 접속** 바랍니다.)
```js
npm install -g json-server
npx json-server --watch database.json --port 8080
```

#### 개발 참여
* 개발자 : 손수철(개인)
* 개발기간 : 2022년 5월 11일 ~ 15일 (5일 간)

### 구현내용
#### 공통
* json-server로 가상의 Mock Server를 구현했습니다.
  * json-server 활용을 위해, 제공된 DB에서 ``pk``를 ``id``로 수정했습니다.
* HTTP Client 라이브러리인 Axios를 활용해, Server와 연결했습니다.
* 모바일에 적합하게 디자인된 점을 고려해 일정 width값 이상에서는 모바일 스타일의 레이아웃을 적용했습니다.

#### 리스트(피드)
* ```http://localhost:3000/community/list```
* 리스트는 최신순으로 정렬됩니다. 카테고리를 선택할 때도 최신순 정렬입니다.
* 카테고리의 좌우 슬라이드는 ``react-indiana-drag-scroll``를 활용했습니다.
* 유저의 편의를 고려하여 날짜 형식을 ``YYYY년 M월 D일 HH:MM:SS`` 형식으로 하였습니다.
* 디자인에 없었던 '글보기' 버튼을 추가했습니다.
* 디자인에 없었던 이미지 갯수 표시 요소를 추가했습니다. (+N 표시)

#### 글 보기
* ```http://localhost:3000/community/post/:id```
* ``dangerouslySetInnerHTML``과 정규표현식을 이용해, 글 내용에 URL이 있을 때 연결되도록 구현했습니다.
* 좋아요를 누르면 좋아요 수가 1 증가합니다.
* 글을 보면 조회수가 1 증가합니다.
* 디자인에 없었던 복수 이미지의 슬라이드 기능을 추가했습니다.

#### 글 작성
* ```http://localhost:3000/community/new```
* 이미지 미리보기의 좌우 슬라이드는 ```react-indiana-drag-scroll```를 활용했습니다.
* 제목과 내용이 입력될 때, 완료 버튼이 활성화됩니다.

### 스크린샷
<div align="center">
<img src="https://user-images.githubusercontent.com/87234410/168433037-3151476c-ab66-4263-bd7e-bd7eafddf334.png" width="300px">
<img src="https://user-images.githubusercontent.com/87234410/168436122-b13c8155-945f-47de-bb2e-0420805b2344.png" width="300px">
</div>

