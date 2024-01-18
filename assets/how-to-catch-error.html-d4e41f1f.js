const e=JSON.parse('{"key":"v-6b14a366","path":"/essay/how-to-catch-error.html","title":"에러 처리 정리","lang":"ko-KR","frontmatter":{"title":"에러 처리 정리","description":"에러 처리 정리 2019년 5월 23일에 진행 중인 프로젝트에서 에러 처리 방법을 고민하면서 정리한 포스트입니다. 글의 목적 에러 처리는 소프트웨어의 비정상적인 동작에 대한 큰 사고로 이어지지 않도록 예방하는 것이다. 서비스 운영에 있어서는 사용자들이 서비스를 비정상적으로 사용하는 부분이 있는 지 감지를 할 수 있다. 오랜 시간동안 에러 처리에 대한 연구가 계속 되었고 지금까지 발전이 되어왔다. 어떠한 과정을 통해서 지금의 에러 처리 방법을 가지게 되었는 지 정리한 포스트이다.","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://the-next-web-research-lab.github.io/en/essay/how-to-catch-error.html"}],["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/essay/how-to-catch-error.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"에러 처리 정리"}],["meta",{"property":"og:description","content":"에러 처리 정리 2019년 5월 23일에 진행 중인 프로젝트에서 에러 처리 방법을 고민하면서 정리한 포스트입니다. 글의 목적 에러 처리는 소프트웨어의 비정상적인 동작에 대한 큰 사고로 이어지지 않도록 예방하는 것이다. 서비스 운영에 있어서는 사용자들이 서비스를 비정상적으로 사용하는 부분이 있는 지 감지를 할 수 있다. 오랜 시간동안 에러 처리에 대한 연구가 계속 되었고 지금까지 발전이 되어왔다. 어떠한 과정을 통해서 지금의 에러 처리 방법을 가지게 되었는 지 정리한 포스트이다."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/og_image.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-22T07:50:41.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"에러 처리 정리"}],["meta",{"property":"article:modified_time","content":"2023-06-22T07:50:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"에러 처리 정리\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/og_image.png\\"],\\"dateModified\\":\\"2023-06-22T07:50:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"글의 목적","slug":"글의-목적","link":"#글의-목적","children":[]},{"level":2,"title":"목차","slug":"목차","link":"#목차","children":[]},{"level":2,"title":"실패를 전달하는 방법","slug":"실패를-전달하는-방법","link":"#실패를-전달하는-방법","children":[{"level":3,"title":"반환값으로 실패 전달","slug":"반환값으로-실패-전달","link":"#반환값으로-실패-전달","children":[]},{"level":3,"title":"try-catch 에러 처리","slug":"try-catch-에러-처리","link":"#try-catch-에러-처리","children":[]},{"level":3,"title":"throw 명시적 선언","slug":"throw-명시적-선언","link":"#throw-명시적-선언","children":[]}]},{"level":2,"title":"어떻게 에러 처리를 해야 할까","slug":"어떻게-에러-처리를-해야-할까","link":"#어떻게-에러-처리를-해야-할까","children":[{"level":3,"title":"컨테이너","slug":"컨테이너","link":"#컨테이너","children":[]},{"level":3,"title":"같은 타입 반환","slug":"같은-타입-반환","link":"#같은-타입-반환","children":[]},{"level":3,"title":"async 함수로 에러 처리","slug":"async-함수로-에러-처리","link":"#async-함수로-에러-처리","children":[]}]},{"level":2,"title":"종합적인 결론","slug":"종합적인-결론","link":"#종합적인-결론","children":[]},{"level":2,"title":"끝","slug":"끝","link":"#끝","children":[{"level":3,"title":"참고자료","slug":"참고자료","link":"#참고자료","children":[]}]}],"git":{"createdTime":1687351424000,"updatedTime":1687420241000,"contributors":[{"name":"ChoDragon9","email":"04whdydrn30@gmail.com","commits":2}]},"readingTime":{"minutes":1.21,"words":363},"filePathRelative":"essay/how-to-catch-error.md","localizedDate":"2023년 6월 21일","excerpt":"<h1> 에러 처리 정리</h1>\\n<blockquote>\\n<p>2019년 5월 23일에 진행 중인 프로젝트에서 에러 처리 방법을 고민하면서 정리한 포스트입니다.</p>\\n</blockquote>\\n<h2> 글의 목적</h2>\\n<p><strong>에러 처리</strong>는 소프트웨어의 비정상적인 동작에 대한 큰 사고로 이어지지 않도록 <strong>예방</strong>하는 것이다.\\n서비스 운영에 있어서는 사용자들이 서비스를 비정상적으로 사용하는 부분이 있는 지 감지를 할 수 있다.</p>\\n<p>오랜 시간동안 에러 처리에 대한 연구가 계속 되었고 지금까지 발전이 되어왔다.\\n어떠한 과정을 통해서 지금의 에러 처리 방법을 가지게 되었는 지 정리한 포스트이다.</p>","autoDesc":true}');export{e as data};
