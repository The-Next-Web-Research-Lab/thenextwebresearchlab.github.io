const e=JSON.parse('{"key":"v-72aced9f","path":"/fe-dev/design-patterns/gof/behavioral.html","title":"GoF 디자인 패턴 | 행동패턴","lang":"ko-KR","frontmatter":{"title":"GoF 디자인 패턴 | 행동패턴","description":"출처: 에릭 감마 , 리처드 헬름 , 랄프 존슨 , 존 블리시디스. 『Gof의 디자인 패턴』. 김정아(역). 프로텍미디어, 2015.\\r어떤 처리의 책임을 어느 객체에 할당하는 것이 좋은지, 알고리즘은 어느 객체에 정의하는 것이 좋은지 다룹니다.; \\r객체들 간의 교류 방법에 대하여 정의한다.; \\r행동 클래스 패턴은 클...","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/design-patterns/gof/behavioral.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"GoF 디자인 패턴 | 행동패턴"}],["meta",{"property":"og:description","content":"출처: 에릭 감마 , 리처드 헬름 , 랄프 존슨 , 존 블리시디스. 『Gof의 디자인 패턴』. 김정아(역). 프로텍미디어, 2015.\\r어떤 처리의 책임을 어느 객체에 할당하는 것이 좋은지, 알고리즘은 어느 객체에 정의하는 것이 좋은지 다룹니다.; \\r객체들 간의 교류 방법에 대하여 정의한다.; \\r행동 클래스 패턴은 클..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/logo.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-07-17T03:45:56.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"GoF 디자인 패턴 | 행동패턴"}],["meta",{"property":"article:modified_time","content":"2023-07-17T03:45:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GoF 디자인 패턴 | 행동패턴\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/logo.png\\"],\\"dateModified\\":\\"2023-07-17T03:45:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"책임연쇄(Chain of responsibility)","slug":"책임연쇄-chain-of-responsibility","link":"#책임연쇄-chain-of-responsibility","children":[{"level":3,"title":"의도","slug":"의도","link":"#의도","children":[]},{"level":3,"title":"활용성","slug":"활용성","link":"#활용성","children":[]},{"level":3,"title":"구조 및 구현","slug":"구조-및-구현","link":"#구조-및-구현","children":[]},{"level":3,"title":"결과","slug":"결과","link":"#결과","children":[]}]},{"level":2,"title":"명령(Command)","slug":"명령-command","link":"#명령-command","children":[{"level":3,"title":"의도","slug":"의도-1","link":"#의도-1","children":[]},{"level":3,"title":"활용성","slug":"활용성-1","link":"#활용성-1","children":[]},{"level":3,"title":"구조 및 구현","slug":"구조-및-구현-1","link":"#구조-및-구현-1","children":[]}]},{"level":2,"title":"해석자(Interpreter)","slug":"해석자-interpreter","link":"#해석자-interpreter","children":[{"level":3,"title":"의도","slug":"의도-2","link":"#의도-2","children":[]},{"level":3,"title":"활용성","slug":"활용성-2","link":"#활용성-2","children":[]},{"level":3,"title":"해석자 정의 방법","slug":"해석자-정의-방법","link":"#해석자-정의-방법","children":[]},{"level":3,"title":"구조 및 구현","slug":"구조-및-구현-2","link":"#구조-및-구현-2","children":[]}]},{"level":2,"title":"반복자(Iterator)","slug":"반복자-iterator","link":"#반복자-iterator","children":[{"level":3,"title":"의도","slug":"의도-3","link":"#의도-3","children":[]},{"level":3,"title":"활용성","slug":"활용성-3","link":"#활용성-3","children":[]},{"level":3,"title":"구조 및 구현","slug":"구조-및-구현-3","link":"#구조-및-구현-3","children":[]}]},{"level":2,"title":"중재자(Mediator)","slug":"중재자-mediator","link":"#중재자-mediator","children":[{"level":3,"title":"의도","slug":"의도-4","link":"#의도-4","children":[]},{"level":3,"title":"활용성","slug":"활용성-4","link":"#활용성-4","children":[]},{"level":3,"title":"구조 및 구현","slug":"구조-및-구현-4","link":"#구조-및-구현-4","children":[]}]},{"level":2,"title":"메멘토(Memento)","slug":"메멘토-memento","link":"#메멘토-memento","children":[{"level":3,"title":"의도","slug":"의도-5","link":"#의도-5","children":[]},{"level":3,"title":"활용성","slug":"활용성-5","link":"#활용성-5","children":[]},{"level":3,"title":"구조 및 구현","slug":"구조-및-구현-5","link":"#구조-및-구현-5","children":[]}]},{"level":2,"title":"감시자(Observer)","slug":"감시자-observer","link":"#감시자-observer","children":[{"level":3,"title":"의도","slug":"의도-6","link":"#의도-6","children":[]},{"level":3,"title":"활용성","slug":"활용성-6","link":"#활용성-6","children":[]},{"level":3,"title":"구조 및 구현","slug":"구조-및-구현-6","link":"#구조-및-구현-6","children":[]}]},{"level":2,"title":"상태(State)","slug":"상태-state","link":"#상태-state","children":[{"level":3,"title":"의도","slug":"의도-7","link":"#의도-7","children":[]},{"level":3,"title":"활용성","slug":"활용성-7","link":"#활용성-7","children":[]},{"level":3,"title":"구조 및 구현","slug":"구조-및-구현-7","link":"#구조-및-구현-7","children":[]}]},{"level":2,"title":"전략(Strategy)","slug":"전략-strategy","link":"#전략-strategy","children":[{"level":3,"title":"의도","slug":"의도-8","link":"#의도-8","children":[]},{"level":3,"title":"활용성","slug":"활용성-8","link":"#활용성-8","children":[]},{"level":3,"title":"구조 및 구현","slug":"구조-및-구현-8","link":"#구조-및-구현-8","children":[]}]},{"level":2,"title":"탬플릿 메소드(Template Method)","slug":"탬플릿-메소드-template-method","link":"#탬플릿-메소드-template-method","children":[{"level":3,"title":"의도","slug":"의도-9","link":"#의도-9","children":[]},{"level":3,"title":"활용성","slug":"활용성-9","link":"#활용성-9","children":[]},{"level":3,"title":"구조 및 구현","slug":"구조-및-구현-9","link":"#구조-및-구현-9","children":[]}]},{"level":2,"title":"방문자(Visitor)","slug":"방문자-visitor","link":"#방문자-visitor","children":[{"level":3,"title":"의도","slug":"의도-10","link":"#의도-10","children":[]},{"level":3,"title":"활용성","slug":"활용성-10","link":"#활용성-10","children":[]},{"level":3,"title":"구조 및 구현","slug":"구조-및-구현-10","link":"#구조-및-구현-10","children":[]}]}],"git":{"updatedTime":1689565556000},"filePathRelative":"fe-dev/design-patterns/gof/behavioral.md","autoDesc":true}');export{e as data};
