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
