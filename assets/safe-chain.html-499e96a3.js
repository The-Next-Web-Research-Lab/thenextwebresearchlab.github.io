import{_ as t,M as e,p as o,q as c,R as s,t as n,N as p,a1 as l}from"./framework-96b046e1.js";const i={},u=s("h1",{id:"안전한-체이닝을-위한-safechain",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#안전한-체이닝을-위한-safechain","aria-hidden":"true"},"#"),n(" 안전한 체이닝을 위한 safeChain")],-1),r=s("h4",{id:"글의-목적",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#글의-목적","aria-hidden":"true"},"#"),n(" 글의 목적")],-1),k={href:"https://chodragon9.github.io/blog/es6/#default-value",target:"_blank",rel:"noopener noreferrer"},d={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>이번에 시도 해본 것은 안전하게 체이닝을 하기 위한 함수를 만들어봤다. 옵셔널 체이닝같은 문법을 미지원 하는 환경이나, 기본값 할당이나 분기문으로 가독성과 복잡성이 증가되는 것을 방지하기 위해 만들었다.</p><h4 id="순서" tabindex="-1"><a class="header-anchor" href="#순서" aria-hidden="true">#</a> 순서</h4><p>먼저 해당 함수를 어떤 형태로 사용하는 지와 구현 코드 순서로 정리했다. 그리고 실무에서 적용할 수 있는 케이스를 작성했다.</p><ul><li>사용 방법</li><li>코드</li><li>활용 케이스</li></ul><h4 id="사용-방법" tabindex="-1"><a class="header-anchor" href="#사용-방법" aria-hidden="true">#</a> 사용 방법</h4><p>일반적인 상황에서는 정상적인 값을 추출한다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> dot <span class="token operator">=</span> <span class="token function">safeChain</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c<span class="token punctuation">)</span>
<span class="token keyword">const</span> destruct <span class="token operator">=</span> <span class="token function">safeChain</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>c<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> c<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dot<span class="token punctuation">)</span> <span class="token comment">// c</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>destruct<span class="token punctuation">)</span> <span class="token comment">// c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>비정상적인 상황에서는 <code>undefined</code>를 반환한다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> dot <span class="token operator">=</span> <span class="token function">safeChain</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>c<span class="token punctuation">.</span>b<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
<span class="token keyword">const</span> destruct <span class="token operator">=</span> <span class="token function">safeChain</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>a<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dot<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>destruct<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약에 기본 문법으로 사용하면 이러한 에러가 발생할 것이다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>a<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">=</span> obj
<span class="token comment">// Uncaught TypeError: Cannot read property &#39;b&#39; of undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="코드" tabindex="-1"><a class="header-anchor" href="#코드" aria-hidden="true">#</a> 코드</h4><h5 id="safechain-메인-함수" tabindex="-1"><a class="header-anchor" href="#safechain-메인-함수" aria-hidden="true">#</a> safeChain 메인 함수</h5><ul><li>인자로 받은 상태를 프록시로 감싼다.</li><li>인자로 받은 mapper 함수를 실행한다.</li><li>mapper 함수의 결과가 감싸있으면(isPack) 풀어서(unpack)준다. <ul><li>그렇지 않으면 바로 반환한다.</li></ul></li><li>마지막으로 프록시를 모두 취소하고, 결과를 반환한다.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">safeChain</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> mapper</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> revokes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">toProxy</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> revokes<span class="token punctuation">)</span>
  <span class="token keyword">const</span> mappedResult <span class="token operator">=</span> <span class="token function">mapper</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">isPack</span><span class="token punctuation">(</span>mappedResult<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">unpack</span><span class="token punctuation">(</span>mappedResult<span class="token punctuation">)</span> <span class="token operator">:</span> mappedResult

  revokes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="헬퍼-코드" tabindex="-1"><a class="header-anchor" href="#헬퍼-코드" aria-hidden="true">#</a> 헬퍼 코드</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> symbol <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;safe&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">isNullish</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> value <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> value <span class="token operator">===</span> <span class="token keyword">null</span>
<span class="token keyword">const</span> <span class="token function-variable function">isPack</span> <span class="token operator">=</span> <span class="token parameter">pack</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> pack <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> symbol <span class="token keyword">in</span> pack

<span class="token keyword">const</span> <span class="token function-variable function">pack</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span>symbol<span class="token punctuation">]</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">unpack</span> <span class="token operator">=</span> <span class="token parameter">pack</span> <span class="token operator">=&gt;</span> pack<span class="token punctuation">[</span>symbol<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="코어-함수" tabindex="-1"><a class="header-anchor" href="#코어-함수" aria-hidden="true">#</a> 코어 함수</h5><ul><li>toProxy에서는 상태를 감싸고(pack) 프록시를 만들어준다.</li><li>trap에서는 상태를 조회할 때 처리를 한다. <ul><li>내부적으로 정의한 키(symbol)이면 값을 반환한다.</li><li>그렇지 않으면 <ul><li>undefined나 null 일 때, undefined를 프록시로 감싼다.</li><li>정상적인 값이면 정상적인 값을 프록시로 감싼다.</li></ul></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">toProxy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> revokes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> wrap <span class="token operator">=</span> <span class="token function">pack</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
  <span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">trap</span><span class="token punctuation">(</span>revokes<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>proxy<span class="token punctuation">,</span> revoke<span class="token punctuation">}</span> <span class="token operator">=</span> Proxy<span class="token punctuation">.</span><span class="token function">revocable</span><span class="token punctuation">(</span>wrap<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
  revokes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>revoke<span class="token punctuation">)</span>
  <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">trap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">revokes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> unpacked <span class="token operator">=</span> <span class="token function">unpack</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
      <span class="token keyword">return</span> key <span class="token operator">===</span> symbol <span class="token operator">?</span>
        <span class="token literal-property property">unpacked</span> <span class="token operator">:</span>
        <span class="token function">toProxy</span><span class="token punctuation">(</span><span class="token function">isNullish</span><span class="token punctuation">(</span>unpacked<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> unpacked<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> revokes<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="활용-케이스" tabindex="-1"><a class="header-anchor" href="#활용-케이스" aria-hidden="true">#</a> 활용 케이스</h4><p>백엔드 API 응답값을 API의 응답이 발생한 뒤 사용할 수 있다. 하지만 getter에 값을 조회하고 vue, angular 컴포넌트에서 사용하면 참조 오류가 발생한다. 이런 경우에 safeChain을 사용하면 오류를 방지할 수 있다.</p><p>백엔드 API를 사용을 가정한 코드이다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> backendApi <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">fetchResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>response <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Success&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token string">&#39;Ok&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">result</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>response <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">.</span>result
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>backendApi<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
backendApi<span class="token punctuation">.</span><span class="token function">fetchResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>backendApi<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token comment">// { message: &#39;Success&#39; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>safeChain 함수를 사용하면 분기문을 제거할 수 있다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> backendApi <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">fetchResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>response <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Success&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token string">&#39;Ok&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">result</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">safeChain</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>result<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>backendApi<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
backendApi<span class="token punctuation">.</span><span class="token function">fetchResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>backendApi<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token comment">// { message: &#39;Success&#39; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="끝" tabindex="-1"><a class="header-anchor" href="#끝" aria-hidden="true">#</a> 끝</h4>`,27);function m(b,y){const a=e("ExternalLinkIcon");return o(),c("div",null,[u,r,s("p",null,[n("객체와 배열을 안전하게 사용하기 위해서 다양한 기법이 사용된다. 방법으로는 "),s("a",k,[n("undefined일 때 기본값을 할당"),p(a)]),n("하거나 분기문을 사용하기도 한다. 그리고 최근에는 "),s("a",d,[n("옵셔널 체이닝"),p(a)]),n(" 문법을 사용하여 안전하게 체이닝을 하기도 한다.")]),v])}const f=t(i,[["render",m],["__file","safe-chain.html.vue"]]);export{f as default};
