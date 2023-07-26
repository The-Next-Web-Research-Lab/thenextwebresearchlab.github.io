const e=JSON.parse('{"key":"v-3740a76f","path":"/fe-dev/framework/vuex-in-composition-api.html","title":"Vuex 적용 경험 정리","lang":"ko-KR","frontmatter":{"title":"Vuex 적용 경험 정리","description":"초안작성일: 2020.03.02 useStore Options API와 Class-based API에서는 this 컨텍스트가 존재 하므로 this.$store를 사용한다. 그러나 Composition API는 this 컨텍스트가 없기 때문에 setup(props, context)의 두 번째 인자로 전달되는 conte...","head":[["meta",{"property":"og:url","content":"https://the-next-web-research-lab.github.io/fe-dev/framework/vuex-in-composition-api.html"}],["meta",{"property":"og:site_name","content":"더넥스트웹리서치랩"}],["meta",{"property":"og:title","content":"Vuex 적용 경험 정리"}],["meta",{"property":"og:description","content":"초안작성일: 2020.03.02 useStore Options API와 Class-based API에서는 this 컨텍스트가 존재 하므로 this.$store를 사용한다. 그러나 Composition API는 this 컨텍스트가 없기 때문에 setup(props, context)의 두 번째 인자로 전달되는 conte..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://the-next-web-research-lab.github.io/images/logo.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-06-21T12:02:21.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Vuex 적용 경험 정리"}],["meta",{"property":"article:modified_time","content":"2023-06-21T12:02:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vuex 적용 경험 정리\\",\\"image\\":[\\"https://the-next-web-research-lab.github.io/images/logo.png\\"],\\"dateModified\\":\\"2023-06-21T12:02:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"useStore","slug":"usestore","link":"#usestore","children":[]},{"level":2,"title":"state 이름 충돌","slug":"state-이름-충돌","link":"#state-이름-충돌","children":[]},{"level":2,"title":"state 접근","slug":"state-접근","link":"#state-접근","children":[]},{"level":2,"title":"useAction","slug":"useaction","link":"#useaction","children":[{"level":3,"title":"/use/useStoreAction.ts","slug":"use-usestoreaction-ts","link":"#use-usestoreaction-ts","children":[]}]},{"level":2,"title":"useGetter","slug":"usegetter","link":"#usegetter","children":[{"level":3,"title":"/use/useStoreGetter.ts","slug":"use-usestoregetter-ts","link":"#use-usestoregetter-ts","children":[]}]},{"level":2,"title":"useAction, useGetter 이점","slug":"useaction-usegetter-이점","link":"#useaction-usegetter-이점","children":[{"level":3,"title":"타입 추론","slug":"타입-추론","link":"#타입-추론","children":[]},{"level":3,"title":"IDE 지원","slug":"ide-지원","link":"#ide-지원","children":[]},{"level":3,"title":"재사용성 향상","slug":"재사용성-향상","link":"#재사용성-향상","children":[]}]},{"level":2,"title":"useStorePlugin","slug":"usestoreplugin","link":"#usestoreplugin","children":[{"level":3,"title":"/use/useStorePlugin.ts","slug":"use-usestoreplugin-ts","link":"#use-usestoreplugin-ts","children":[]},{"level":3,"title":"/store/auth.ts","slug":"store-auth-ts","link":"#store-auth-ts","children":[]}]},{"level":2,"title":"useStoreAction, useStoreGetter 간소화","slug":"usestoreaction-usestoregetter-간소화","link":"#usestoreaction-usestoregetter-간소화","children":[{"level":3,"title":"/use/useStoreAction.ts","slug":"use-usestoreaction-ts-1","link":"#use-usestoreaction-ts-1","children":[]}]}],"git":{"updatedTime":1687348941000},"filePathRelative":"fe-dev/framework/vuex-in-composition-api.md","autoDesc":true}');export{e as data};
