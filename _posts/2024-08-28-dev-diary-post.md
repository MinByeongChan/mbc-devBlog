---
title: "[개발일지] 2024-08-28(수)"
description: ""
date: "2024-08-28"
modified_date: "2024-08-28"
tags: [개발일지]
---

이번주 개발은 기획 수정과 관련된 것들을 개발했다. 기존 리스트 형태의 SNB table 형태로 변경(table 형태의 snb가 있었나…?)하는거라던지, UI 중 카드 섹션이 있는데, 그 가드 섹션에 액션이 무조건 들어가도록 기획이 재정의 된다던지 이런 개발건들이었다.

항상 기획 입장에서는 버튼을 단순히 하단에서 상단으로 올리는 작업이지만, 개발 입장에서는 특히 FE React 개발자로서는 그 작업 또한 만만한 것이 아니다. 기존 contents 영역에 감싸 놓은 form을 최 상단 카드섹션으로 올려야 하는 작업이고 즉, 비즈니스 로직을 최상단으로 올려야하는 이슈이다. 물론, react-hook-form을 사용해서 폼처리는 비교적 쉬웠지만, 비즈니스로직이 분산되는 이슈가 생긴다. 그렇게 되면 폼처리하는 컴포넌트가 하나 더 늘어난 셈이다. 유지보수 측면에서는 그리 반가운 소식은 아니다. 이전보다 사용자 경험이 좋아지고, 유의미한 성과를 이끌어낸 것에는 실 사용자가 직접 사용해봐야 알겠지만, 당장 해당 기획을 바라봤을땐 그리 달갑진 않았다. 굳이라는 생각이 계속 들었다. 뭐가 좋다 정답은 없지만, 하나 확실히 해야할건 이번에 수정한 건은 다른 로직에서도 동일하게 적용되야한다. 이번에 여기는 이렇게 처리했는데, 다른 메뉴에서는 다른 방식으로 처리한다면 개발자 입장에서도 현타가 올 것이다.

비즈니스 로직 관련된 이슈는 또 axios interceptor에서 문제가 생겼다. 이전에 만들어둔 interceptor가 있는데 하나는 tsx에 있고 하나는 유틸함수에 존재하여 두개의 파일에서 interceptor가 관리되는 상황이었다. 다른 개발자가 axios-auth-refresh 라이브러리를 사용한 부분이 좀 걸렸다. 굳이 저걸 사용할 필요가 있을까 하고 하나로 합치려고 시도를 했는데 무한으로 api 호출되는 이슈가 있었다. 이건 좀 더 지켜봐야할거 같다. 역시 마찬가지로 비슷한 로직인데 두개의 파일에서 관리되는 상황이다. 이런 로직은 확실히 줄어드는게 좋을 것 같다는 생각이 든다. 오늘은 여기까지...
