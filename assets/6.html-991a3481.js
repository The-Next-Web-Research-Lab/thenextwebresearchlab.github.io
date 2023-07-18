import{_ as n,o as s,c as a,e}from"./app-73d15a96.js";const t={},l=e(`<h1 id="도서-리뷰-시리즈-손에-잡히는-정규표현식" tabindex="-1"><a class="header-anchor" href="#도서-리뷰-시리즈-손에-잡히는-정규표현식" aria-hidden="true">#</a> 도서 리뷰 시리즈 - 손에 잡히는 정규표현식</h1><h2 id="출처" tabindex="-1"><a class="header-anchor" href="#출처" aria-hidden="true">#</a> 출처</h2><p>벤 포터. 『손에 잡히는 정규 표현식』. 김경수(역). 인사이트, 2009.</p><h2 id="한-줄-리뷰" tabindex="-1"><a class="header-anchor" href="#한-줄-리뷰" aria-hidden="true">#</a> 한 줄 리뷰</h2><p>한 권에 자바스크립트 정규표현식을 끝낼 수 있습니다.</p><h2 id="_8장-역참조-사용하기" tabindex="-1"><a class="header-anchor" href="#_8장-역참조-사용하기" aria-hidden="true">#</a> 8장 역참조 사용하기</h2><p>역참조는 정규 표현식 패턴으로, 앞서 일치한 부분을 다시 가리킵니다.</p><h3 id="검색" tabindex="-1"><a class="header-anchor" href="#검색" aria-hidden="true">#</a> 검색</h3><p>시작태그와 종료태그를 찾을 때 역참조를 사용하면 유용합니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;body&gt;
&lt;h1&gt;Welcome to my Website&lt;/h1&gt;
&lt;h2&gt;ColdFusion&lt;/h1&gt;
&lt;H3&gt;Wireless&lt;/h3&gt;
&lt;/body&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;[hH][1-6]&gt;.*?&lt;\\/[hH][1-6]&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>시작태그와 종료태그가 다른이름인데도 일치되어 검색되었습니다. 하지만 종료태그가 다른 태그를 찾는 것은 의도와 다를 것입니다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
  &quot;&lt;h1&gt;Welcome to my Website&lt;/h1&gt;&quot;,
  &quot;&lt;h2&gt;ColdFusion&lt;/h1&gt;&quot;,
  &quot;&lt;H3&gt;Wireless&lt;/h3&gt;&quot;
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>역참조를 사용하면 하위표현식에 일치한 부분을 찾아 사용할 수 있습니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
&lt;body&gt;
&lt;h1&gt;Welcome to my Website&lt;/h1&gt;
&lt;h2&gt;ColdFusion&lt;/h1&gt;
&lt;H3&gt;Wireless&lt;/h3&gt;
&lt;/body&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;([hH][1-6])&gt;.*?&lt;\\/\\1&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;&lt;h1&gt;Welcome to my Website&lt;/h1&gt;&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="치환" tabindex="-1"><a class="header-anchor" href="#치환" aria-hidden="true">#</a> 치환</h3><p>치환을 할 때도 역참조를 사용할 수 있습니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, ben@forta.com is my email address.</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\w+\\@\\w+\\.\\w+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&lt;a href=&quot;mailto:$1&quot;&gt;$1&lt;/a&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;Hello, &lt;a href=&quot;mailto:ben@forta.com&quot;&gt;ben@forta.com&lt;/a&gt; is my email address.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9장-전방탐색과-후방탐색" tabindex="-1"><a class="header-anchor" href="#_9장-전방탐색과-후방탐색" aria-hidden="true">#</a> 9장 전방탐색과 후방탐색</h2><h3 id="전방탐색-앞으로-찾기" tabindex="-1"><a class="header-anchor" href="#전방탐색-앞으로-찾기" aria-hidden="true">#</a> 전방탐색 - 앞으로 찾기</h3><p>전방탐색(lookahead) 패턴은 일치 영역을 발견해도 그 값을 반환하지 않는 패턴을 말합니다. 전방탐색은 실제로는 하위 표현식이며, 하위 표현식과 같은 형식으로 작성합니다. 전방탐색 패턴의 구문은 ?=로 시작하고 등호(=) 다음에 일치할 텍스트가 오는 하위 표현식힙니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
http://www.google.com
https://www.naver.com
ftp://file.net
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+(?=:)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>
<span class="token comment">// [&#39;http&#39;, &#39;https&#39;, &#39;ftp&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="후방탐색-뒤로-찾기" tabindex="-1"><a class="header-anchor" href="#후방탐색-뒤로-찾기" aria-hidden="true">#</a> 후방탐색 - 뒤로 찾기</h3><p>후방탐색(lookbehind) 패턴의 구문은 ?&lt;=로 시작하고 등호(=) 다음에 일치할 텍스트가 오는 하위 표현식입니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
Apple : $3.45
Orange : $2.63
Banana : $6.33
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=\\$)[0-9.]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>
<span class="token comment">// [&quot;3.45&quot;, &quot;2.63&quot;, &quot;6.33&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="전방탐색과-후방탐색-함께-사용하기" tabindex="-1"><a class="header-anchor" href="#전방탐색과-후방탐색-함께-사용하기" aria-hidden="true">#</a> 전방탐색과 후방탐색 함께 사용하기</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;body&gt;
&lt;h1&gt;Welcome to my Website&lt;/h1&gt;
&lt;h2&gt;ColdFusion&lt;/h2&gt;
&lt;h3&gt;Wireless&lt;/h3&gt;
&lt;/body&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=\\&lt;h1\\&gt;).*?(?=\\&lt;\\/h1\\&gt;)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;Welcome to my Website&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),i=[l];function p(c,o){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","6.html.vue"]]);export{d as default};
