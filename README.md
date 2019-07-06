# 리액트 To-Do-List MVC 설계

## 01. 프로젝트 개요

### (01) 프로젝트 스택

- Language : HTML5, CSS3, Javascript
- Framework: React
- CSS in JS : SASS

### (02) 프로젝트 설정

- ``` create-react-app $projectName``` 으로 프로젝트 생성

- ``` yarn eject ``` 를 통해서 리액트 프로젝트의 환경 설정 파일들을 프로젝트 루트 경로로 이동시킵니다.

- yarn eject로 만들어진 config 폴더의 환경 설정 파일들에 SASS-Loader 설정을 변경

- ``` yarn add sass-loader node-sass classnames ``` 로 프로젝트에 필요한 패키지 설치

- ``` yarn add open-color ``` open-color 라이브러리의 색상들을 참조하면서 컴포넌트를 디자인

#### 01) SASS-Loader 설정

- webpack.config.js 부분의 sassRegex 부분을 다음과 같이 바꿔준다.
```javascript
test: sassRegex

use: getStyleLoaders({ importLoaders: 2 }).concat({
      loader: require.resolve('sass-loader'),
      options: {
        includePaths: [paths.appSrc + '/styles']
      }
    })
```
- 위의 코드는 sass-loader을 사용할 때 공통된 Sass 파일의 경로를 미리 잡아주는 것이다.

### (03) 프로젝트 학습

#### 01) 프로젝트 진행 방식 | To Do List Project

01. 프로젝트 생성 및 환경 설정

    - create-react-app 을 통한 프로젝트 생성

    - yarn eject 를 통한 환경 설정

    - 필요한 패키지 설치

02. UI 디자인 및 구성 계획

    - 와이어 프레임을 통한 기본 구성 디자인

    - 컴포넌트 계획 수립

03. 상태 관리 계획

    - 상태 관리 라이브러리 선택

    - 각 컴포넌트의 상태 정의

04. Dev Tool을 통한 테스트 및 최적화

    - Dev Tool을 통한 기능 테스트

    - 컴포넌트 분리를 통한 성능 최적화


#### 02) 컴포넌트 설계 방식

01. 디렉터리 만들기

02. 자바스크립트 파일 만들기

03. SASS 파일 만들기

04. index.js 파일 만들기

    - index.js 파일은 나중에 해당 컴포넌트를 호출할 때 ./components/PageTemplate/PageTemplate와 같이 중복되는 주소가 아닌 ./components/PageTemplate로 입력하기 위해 만든다.