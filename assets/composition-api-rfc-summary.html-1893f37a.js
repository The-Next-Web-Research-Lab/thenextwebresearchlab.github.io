import{_ as l,M as i,p as r,q as p,R as n,N as s,V as c,t as e,a1 as o}from"./framework-96b046e1.js";const u={},d=n("h1",{id:"composition-api-rfc-요약-및-자료-정리",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#composition-api-rfc-요약-및-자료-정리","aria-hidden":"true"},"#"),e(" Composition API RFC 요약 및 자료 정리")],-1),h=n("blockquote",null,[n("p",null,"초안작성일: 2020.02.29")],-1),m={class:"custom-container tip"},_=n("p",{class:"custom-container-title"},"TIP",-1),v={href:"https://www.vuemastery.com/",target:"_blank",rel:"noopener noreferrer"},f=o(`<h2 id="composition-api란" tabindex="-1"><a class="header-anchor" href="#composition-api란" aria-hidden="true">#</a> Composition API란</h2><p>Composition API는 Vue 컴포넌트의 로직을 유연하고 구성하기 위한 API입니다. Vue 2.x에 추가 가능하고, Vue 3.0에서는 내장으로 제공할 함수기반 API 세트입니다. 가장 기본이 되는 API는 <code>ref</code>와 <code>reactive</code>입니다.</p><p>먼저 <code>ref</code>는 프리미티브 타입을 반응형 상태로 만들 수 있습니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 0</span>

count<span class="token punctuation">.</span>value<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 <code>reactive</code>는 객체를 반응형 상태로 만들 수 있습니다. <code>watchEffect</code> 함수를 통해 변경 감지를 할 수 있습니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; 0</span>

state<span class="token punctuation">.</span>count<span class="token operator">++</span> <span class="token comment">// -&gt; 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k={href:"https://www.vuemastery.com/conferences/connect-tech-2019/composing-functionality-with-the-new-vue-apis/",target:"_blank",rel:"noopener noreferrer"},b=o('<h2 id="동기-부여" tabindex="-1"><a class="header-anchor" href="#동기-부여" aria-hidden="true">#</a> 동기 부여</h2><p>Composition API를 만들게 된 동기 부여는 Vue 2의 한계입니다. Vue를 대규모 프로젝트에서 사용되면서 코드 재사용과 TypeScript 지원이 필요했지만 Vue 2는 코드 재사용이 깔끔하게 제공되지 않고 TypeScript를 적용하기에 부적합했습니다. 그러므로 실험과 논의를 통해 현재의 Composition API를 설계하게 되었습니다.</p><h3 id="로직-재사용-코드-구성" tabindex="-1"><a class="header-anchor" href="#로직-재사용-코드-구성" aria-hidden="true">#</a> 로직 재사용 &amp; 코드 구성</h3><ul><li>복잡한 컴포넌트는 기능이 증가함에 따라 추론하기 더 어려워짐 <ul><li>특히 개발자 본인이 작성하지 않은 코드를 읽을 때 발생</li></ul></li><li>여러 컴포넌트간에 논리를 추출하고 재사용하기 위한 깨끗하고 비용이 들지 않는 매커니즘이 없음</li><li>Composition API는 특정 기능을 처리하는 함수로 구성 가능</li><li>컴포넌트 간에 또는 외부 컴포넌트 사이의 논리를 추출하고 재사용하는 것이 더 간단함</li></ul><h3 id="더-좋은-타입-추론" tabindex="-1"><a class="header-anchor" href="#더-좋은-타입-추론" aria-hidden="true">#</a> 더 좋은 타입 추론</h3>',5),g=n("li",null,[e("현재의 Vue는 "),n("code",null,"this"),e(" 컨텍스트를 의존하기 때문에 TypeScript와의 통합이 힘듬 "),n("ul",null,[n("li",null,[e("예를 들어 "),n("code",null,"methods"),e("의 "),n("code",null,"this"),e("는 "),n("code",null,"methods"),e(" 객체가 아닌 Vue 컴포넌트 인스턴스를 가리키고 있음")])])],-1),A=n("code",null,"vue-class-component",-1),C={href:"https://github.com/tc39/proposal-decorators",target:"_blank",rel:"noopener noreferrer"},x=n("li",null,[e("Composition API는 대부분 자연스럽게 "),n("strong",null,"친숙한 일반 변수와 함수"),e("를 사용함")],-1),I=n("li",null,"메뉴얼 타입 힌트가 거의 필요없는 완전한 타입 추론을 사용 가능",-1),P={href:"https://www.vuemastery.com/courses/vue-3-essentials/why-the-composition-api/",target:"_blank",rel:"noopener noreferrer"},y=o('<h2 id="문제점" tabindex="-1"><a class="header-anchor" href="#문제점" aria-hidden="true">#</a> 문제점</h2><h3 id="refs-도입의-오버헤드" tabindex="-1"><a class="header-anchor" href="#refs-도입의-오버헤드" aria-hidden="true">#</a> Refs 도입의 오버헤드</h3><ul><li>참조값과 일반값 및 객체를 지속적으로 구분해야 되기 때문에 정신적 부담이 증가시킴 <ul><li><code>xxxRef</code> 형태로 명명규칙 또는 TypeScript를 사용하여 정신적인 부담 줄일 수 있음</li></ul></li><li><code>ref</code>을 읽고 변경하는 것은 <code>.value</code>가 필요하기 때문에 일반값을 작업하는 것보다 더 장황함</li></ul><h3 id="ref와-reactive" tabindex="-1"><a class="header-anchor" href="#ref와-reactive" aria-hidden="true">#</a> <code>ref</code>와 <code>reactive</code></h3>',4),w=n("li",null,[e("Composition API를 효율적으로 사용하려면 "),n("code",null,"ref"),e("와 "),n("code",null,"reactive"),e("를 모두 이해해야 함")],-1),V=n("li",null,"하나를 독점적으로 사용하면 난해한 해결 방법이 될 가능성이 높음",-1),E=n("code",null,"reactive",-1),R={href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",target:"_blank",rel:"noopener noreferrer"},S={href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax",target:"_blank",rel:"noopener noreferrer"},T=n("ul",null,[n("li",null,[e("이 제약 조건을 처리하기 위해 "),n("code",null,"toRefs"),e(" API가 제공됨")])],-1),j=n("li",null,[e("프리미티브 타입 변수은 "),n("code",null,"ref"),e(", 객체 변수는 "),n("code",null,"reactive"),e("을 사용하는 것 권고함")],-1),B=n("li",null,[n("code",null,"reactive"),e("을 사용하고 "),n("code",null,"toRefs"),e("을 사용하는 것을 권고함")],-1),N=o('<h3 id="유연성이-높을수록-더-많은-훈련이-필요" tabindex="-1"><a class="header-anchor" href="#유연성이-높을수록-더-많은-훈련이-필요" aria-hidden="true">#</a> 유연성이 높을수록 더 많은 훈련이 필요</h3><ul><li>Composition API는 코드 품질의 상한선을 높이는 동시에 하한선을 낮췄음 <ul><li>하한선의 손실보다 상한선의 이득이 크다는 판단을 함</li><li>적절한 문서나 커뮤니티 지침을 통해 코드 구성 문제를 효과적으로 해결 할 수 있음</li></ul></li><li>Composition API는 <strong>컨텍스트에 의존하지 않기 때문에</strong> JavaScript 코드 구성의 핵심 매커니즘인 논리를 <strong>별도의 함수로 훨씬 쉽게 분리</strong>할 수 있음</li></ul><h2 id="적용-전략" tabindex="-1"><a class="header-anchor" href="#적용-전략" aria-hidden="true">#</a> 적용 전략</h2>',3),F=n("li",null,"Composition API는 순전히 부가적이며 기존 2.x API에 영향을 미치거나 어디에도 사용되지 않음",-1),L={href:"https://github.com/vuejs/composition-api",target:"_blank",rel:"noopener noreferrer"},W=n("li",null,"라이브러리의 주요 목표는 API를 실험하고 피드백을 수집하는 방법을 제공하는 것임",-1),J=n("li",null,[e("이 제안이 업데이트 될 때 브레이크 체인지가 될 수 있으므로 "),n("strong",null,"이 단계에서는 프로덕션에서 사용하지 않는 것이 좋음")],-1),M=n("h2",{id:"끝",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#끝","aria-hidden":"true"},"#"),e(" 끝")],-1),q=n("p",null,[n("a",{href:"#%EC%A0%81%EC%9A%A9-%EC%A0%84%EB%9E%B5"},"적용 전략"),e("에서 "),n("strong",null,"이 단계에서는 프로덕션에서 사용하지 않는 것이 좋음"),e("을 확인할 수 있습니다. RFC가 진행되어 변경 가능성이 높기 때문에 프로덕션으로 사용하지 않기를 권고하는 것으로 추측됩니다. 하지만 이런한 부분은 구조 설계를 통해서 해결할 수 있을 것으로 보입니다.")],-1);function z(O,D){const t=i("RouterLink"),a=i("ExternalLinkIcon");return r(),p("div",null,[d,h,n("div",m,[_,n("p",null,[s(t,{to:"/blog/composition-api-rfc/"},{default:c(()=>[e("Composition API RFC 번역")]),_:1}),e("에 작성된 내용 요약과 "),n("a",v,[e("Vue Mastery"),s(a)]),e("에서 확인할 수 있는 Composition API 관련 영상을 정리한 내용입니다.")])]),f,n("p",null,[e("Composition API의 내부 동작원리는 "),s(t,{to:"/blog/composition-api-rfc/#%EC%83%81%EC%84%B8-%EC%84%A4%EA%B3%84-detailed-design"},{default:c(()=>[e("상세 설계")]),_:1}),e("에서 확인할 수 있습니다. 라이브 코딩을 확인하고 싶다면 "),n("a",k,[e("Connect.Tech 2019: Composing Functionality With The New Vue APIs"),s(a)]),e("에서 확인 할 수 있습니다.")]),b,n("ul",null,[g,n("li",null,[e("TypeScript 클래스로 제작할 수 있는 라이브러리인 "),A,e("를 사용해도 불안정한 제안 단계인 "),n("a",C,[e("2단계의 데코레이터"),s(a)]),e("를 의존해야함")]),x,I]),n("p",null,[e("Vue 2의 설계 한계에 대한 내용은 "),n("a",P,[e("Vue 3 Essentials: Why the Composition API - Vue Mastery"),s(a)]),e("에서 확인할 수 있습니다.")]),y,n("ul",null,[w,V,n("li",null,[E,e(" 사용 시 반응성을 유지하기 위해 "),n("a",R,[e("구조 분해"),s(a)]),e("나 "),n("a",S,[e("전개 구문"),s(a)]),e("을 할 수 없음 "),T]),j,B]),N,n("ul",null,[F,n("li",null,[n("a",L,[e("@vue/composition-api"),s(a)]),e(" 라이브러리를 통해 2.x 플러그인으로 제공됨")]),W,J]),M,q])}const H=l(u,[["render",z],["__file","composition-api-rfc-summary.html.vue"]]);export{H as default};
