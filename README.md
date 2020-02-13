# 코멘토 프론트엔드 개발자 사전과제

[https://khwan-comento.netlify.com/](https://khwan-comento.netlify.com/)

## ✔ 특이사항

1. 상세화면 > 답변의 title이 api에 없어서 임의의 텍스트를 넣었습니다.

## 👍 고객센터 의견 반영

고객센터의견에 올라온 이슈 중 반영한 내용

1. 필터, 정렬을 localStorage에 저장하여 초기에 불러오도록 반영
2. 우측 위 숫자가 무엇인지 알도록 '글번호' 텍스트 추가
3. 상세화면 하단 이메일 추가
4. loading 이미지 추가
5. 광고끄기 기능 추가
6. N개씩 보기 기능 추가

## 👀 반응형

요구사항에는 PC와 모바일(480px)이라고 적혀있어 중간 사이즈는 생략하고

- PC: 1140px
- mobild: 480px

기준으로 두 화면만 작업하였습니다.

## 🔨 프로젝트 구성

- vue
  - vue-cli 3
  - vuex
- scss
- 디자인프레임워크
  - bootstrap-vue
- HTTP 통신
  - axios
  - VueAxios
- 무한스크롤
  - vue-infinite-scroll
- etc
  - eslint
  - prettier
