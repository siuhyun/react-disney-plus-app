# [disney-plus-app](https://react-disney-plus-app-fd2dc.web.app)

## 🖥️ Summary
**React 프레임워크로 만든 디즈니 플러스 클로닝 앱, 웹 사이트** 입니다. 로그인 페이지, 메인페이지, 검색 페이지, 영화 상세 페이지로 구성되어 있으며, firebase를 이용한 구글 로그인을 통해 메인 페이지로 접근 가능하고,  TMDB API를 기반으로 영화 정보를 제공합니다.


## 🕰️ 개발 기간
* 24.02.22 - 24.03.22

##  📌 주요 기능
1. 로그인 / 로그아웃
    - firebase Authentication을  이용한 구글 로그인 및 로그 아웃
    - 로그인 성공 이후 메인 페이지 접근 가능
2. 메인 페이지
    - Axios HTTP 클라이언트 라이브러리를 사용하여 영화 정보를 가져왔습니다.
    - 상단 배너 : 비디오 정보가 있을 경우, Play  버튼 노출, 클릭 시 YouTube 동영상 재생
    - 장르 별 영화:
        - swiper를 이용하여 슬라이드를 구현했습니다.
        - 클릭 시, 모달 창으로 영화 정보 제공했습니다.
            - useRef, useOnClickOutside 훅을 사용하여 모달 창 바깥 영역 클릭 시, 창 닫기 구현 했습니다.
3. 검색 페이지
    - 검색 창 입력 시, Router 이동을 활용하여 검색 결과를 제공합니다.
    - 검색 결과 클릭 시, 상세 정보 페이지로 이동합니다.
4. 상세 정보 페이지
    - 영화 이미지, 상세 정보에 따른 메타 태그를 변경하여 팝업 화면을 제공합니다.

## 🤔 Background
**React 프레임워크로 만든 디즈니 플러스 앱, 웹 사이트** 입니다.  영화 보는걸 즐기는 사람의 입장에서 간편하게 영화를 찾도록 도와주는 앱을 구현해보고 싶은 마음으로 개발 했습니다. 

Firebase 서비스를 처음 사용해봤다는 것 만으로도 의미가 있었지만, 그 과정에서 Authentication 개념을 한 번 더 깊게 다지고 실제로 사용해볼 수 있었다는 점에서 더욱 의미가 있었습니다.

또한, React.js에 조금 더 익숙해진 계기가 되었을 뿐만 아니라, useEffect, useState, useNavigate 등 다양한 훅을 활용하고, Router에 조금 더 능숙해지는 계기가 되었습니다.

## 🔨 Technology Stack(s)
- React
- Javascript
- Next.js
- Redux
- CSS
- firebase deploy
- firebase authentication






---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# react-disney-plus-app
