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
```
test: sassRegex

use: getStyleLoaders({ importLoaders: 2 }).concat({
      loader: require.resolve('sass-loader'),
      options: {
        includePaths: [paths.appSrc + '/styles']
      }
    })
```
- 위의 코드는 sass-loader을 사용할 때 공통된 Sass 파일의 경로를 미리 잡아주는 것이다.
