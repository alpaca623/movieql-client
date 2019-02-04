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

### 4 Getting data from the GraphQL API part One
* graphql서버와 연동하기 시작함
* react-apollo에서 Query 컴포넌트를 가져와서 Home컴포넌트에서 사용함.
    * 이로서 Queries.js에서 정의한 query를 이용해 데이터를 받아올 수 있다.
* Home.js에서는 gql이라는 graphql-tag를 사용하였다.
    * 이건.. query를 어떻게 해주는거같은데(https://github.com/apollographql/graphql-tag)를 참고하자.
    * graphql queries를 파싱해주기 위한 유용한 유틸.

### 5 Getting data from the GraphQL API part Two
* api 서버(grqphql) 연동을 해봄
* Query를 사용하는 방법을 아주 쉽게 해놨다. stateless방식이고, prop 같은 것들을 다 해줄 수 있다고 한다.. 아직 props, state등을 제대로 써본적이 없어서 편한건 알겠는데 와닿지는 않는다.
* 아주 쉽긴 하다. loading, error부분을 처리해주는방식이 아주 마음에 든다.

### 6 Details Route with params
* 디자인을 입히고 route시킨 id 값들을 Detail view에 전달할 준비를 함
    * **Home**
        * Home 화면에 style를 입혔다.(Styled-components : https://www.styled-components.com/)
        * Movie 컴포넌트에 props를 전달함
    * **Movie** component를 추가함
        * 전달받은 props를 이용해 Movie카드를 만들었다.
        * prop-types를 이용하여 타입을 고정시킴
        * 아직 잘 모름(https://reactjs.org/docs/typechecking-with-proptypes.html)
    