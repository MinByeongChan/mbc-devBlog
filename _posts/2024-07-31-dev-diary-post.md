---
title: '[개발일지] 2024-07-31'
description: ''
date: '2024-07-31'
modified_date: '2024-07-31'
tags: [개발일지]
---

## 개발일지 2024-07-31(수)

edit 화면 분기처리에 대해 고민하다 리더님의 의견을 듣고 결정했다. create, modify 두 컴포넌트에서 서로 비슷한 형태인데, 비즈니스 로직이 서로 달라 고민하던차 리더님은 분리하는게 좋을것 같다는 의견을 주셔 반영했다.

또한, modify 화면에서는 기존 scene 데이터를 가져와야하는 이슈가 있었다. 이전에는 스토어에 저장되어있는 값을 가져와 useState default value에 세팅 해줬는데, 새로고침하면 데이터가 날라가는 이슈가 있었다. 임시로 만들어놓은 로직이라, 로직 부분에서 강화할 필요가있었다. 해결방안은 router param 값을 추가해 id를 통해서 api통신을 통해 값을 가져오는 형태로 변경했다. 이로써 queryString에 param (id)값을 갖고 있어 새로고침해도 데이터를 계속 불러와 셋팅해줄 수 있다.

기획에 대한 한탄

문제는… 여기부터인데… 기획이 너무 지저분하다. 오버스펙형태의 기능들이 너무 많다. 별 신경 안쓰고 개발하는 성격이고, 당장 급한 업무가 없어 개발 기간도 여유있어 이슈없이 그대로 기획 그대로 반영하겠다는 마인드로 개발을 착수했다. 하지만, 개발을 할때 무의미한 개발을 하므로써 의욕이 얼마나 저하되는지 몸소 깨닫게 되었다. 개발하기 전에도 의구심이 들었지만, 개발을 하면서 과연 이 기능을 진짜 사용할까? 라는 의구심이 점점 확신으로 차면서 개발에 대한 의욕도 떨어지고 있다. 팀장님은 로직을 좀 더 어렵게 만들면 개발자의 성취감도 올라갈 것이라고 생각하시는건지, 아님 정말 이게 최선의 기획이라고 판단하신건지 잘 모르겠다. 하지만 결과적으로 바라보면 개발자 선에서 좀 더 나은 기획으로 제안하는게 좋지않았을까싶다. 개발이 산으로 가지 않게끔, 중간에 컨트롤을 잘 했어야했는데, 항상 이러한 부분이 좀 부족한것 같다. API 연동까지 금요일에 끝내야하니, 목요일에는 야근을 해야할것 같다... 오늘은 여기까지...