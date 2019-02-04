#GraphQL, Apollo로 웹앱 만들기

* 시작! 2019.2.4

### 1 Setup and project outline
* 필요한 모듈을 깔았다.
* router를 위한 react-router-dom
* react-apollo를 위한 apollo-boost/react-apollo/graphql-tag/graphql 4가지.

### 2 Setting up an Apollo Client
* 음.. create-react-app으로 받은 react파일들을 세팅하고 ```react-apollo```의 기본 세팅을 해주었다.
    1. css, logo 등을 다 삭제함
    1. ```apollo-boost```를 이용해 api서버와 연결하였다.
    1. react에서 ```apollo provider```를 이용하여 api서버와 연결하여 react에서 데이터를 받을 수 있도록 연동하였다.
    * chorme에서 apollo관련 추가 tool을 설치하였다.(https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)
    * 문제는 local으로 실행을 하면 서버가 연동이 안된다..아직 문제는 못찾았다.(진도나가기 바쁘다는 핑계~)

### 3 Setting up React Router
* 여기까지가 세팅이닷 - 제목에서 보듯이..
    * 첫번째는 페이지를 만들어줬다.(Home.js, Detail.js)
    * App.js에서는 react-router-dom으로 페이지 세팅을 진행함
        * react-router-dom은 예전에 강의 들었는데.. 이제 제대로 써봄..
        * 나중에 읽어봐야 할 문서(https://velopert.com/3417)
