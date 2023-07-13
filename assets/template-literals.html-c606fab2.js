import{_ as n,o as s,c as a,e as t}from"./app-92ce0f9d.js";const p={},o=t(`<h2 id="서사" tabindex="-1"><a class="header-anchor" href="#서사" aria-hidden="true">#</a> 서사</h2><p>컴포넌트 Props에 tailwindcss의 클래스명을 받을 때가 있다. 타입 선언할 때 단순하게 string으로만 정의하기도 하는데, string으로 정의해서 의도하지 않게 버그가 발생하는 경우가 있었다. 예를 들어서 아이콘 컴포넌트에서 w-*, h-*를 함께 받아야 하는데, string으로만 정의하면 컴파일 타임에 알 수 없다.</p><p>타입스크립트의 탬플릿 리터럴과 infer를 활용하면 사용하면 안되는 클래스명과 쌍으로 사용해야 하는 클래스명을 타입을 통해 알 수 있다.</p><h2 id="tailwind-classname-fill-대신-text-사용하도록-처리" tabindex="-1"><a class="header-anchor" href="#tailwind-classname-fill-대신-text-사용하도록-처리" aria-hidden="true">#</a> Tailwind ClassName <code>fill-*</code> 대신 <code>text-</code> 사용하도록 처리</h2><p>fill-*를 사용하면 text-*로 사용하라고 알려준다.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">fill</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">text</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token constant">T</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pair-classname" tabindex="-1"><a class="header-anchor" href="#pair-classname" aria-hidden="true">#</a> Pair ClassName</h2><p>항상 쌍으로 사용해야하는 클래스명의 타입을 정의할 때 사용하는 타입니다.</p><h3 id="타입-정의" tabindex="-1"><a class="header-anchor" href="#타입-정의" aria-hidden="true">#</a> 타입 정의</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">SizeClass<span class="token operator">&lt;</span>
  <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token constant">V</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Size <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Left <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Right <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Right<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">CheckPair<span class="token operator">&lt;</span>
  <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token constant">V</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Size <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Left <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Right <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Right<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> SizeClass<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span>
  <span class="token operator">:</span> SizeClass<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RequirePair<span class="token operator">&lt;</span>
  <span class="token constant">T</span><span class="token punctuation">,</span>
  Left <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Right <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> CheckPair<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Right<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">V</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> CheckPair<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> SizeClass<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span>
  <span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Right<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> Size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> SizeClass<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> Size<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right<span class="token operator">&gt;</span>
  <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="사용-예제" tabindex="-1"><a class="header-anchor" href="#사용-예제" aria-hidden="true">#</a> 사용 예제</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Props<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> 
    className<span class="token operator">:</span> RequirePair<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token string">&#39;w-&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;h-&#39;</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">something</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> className <span class="token punctuation">}</span><span class="token operator">:</span> Props<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// w-, h- 둘 중 하나를 사용하지 않아 에러 미발생</span>
<span class="token function">something</span><span class="token punctuation">(</span><span class="token punctuation">{</span>className<span class="token operator">:</span> <span class="token string">&#39;text-lg&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// w- 하나만 사용해서 에러 발생</span>
<span class="token comment">// Type &#39;&quot;text-lg w-10&quot;&#39; is not assignable to type &#39;&quot;text-lg w-10 h-10&quot;&#39;.</span>
<span class="token function">something</span><span class="token punctuation">(</span><span class="token punctuation">{</span>className<span class="token operator">:</span> <span class="token string">&#39;text-lg w-10&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tailwind-classname-prefix-filter" tabindex="-1"><a class="header-anchor" href="#tailwind-classname-prefix-filter" aria-hidden="true">#</a> Tailwind ClassName Prefix Filter</h2><h3 id="타입-정의-1" tabindex="-1"><a class="header-anchor" href="#타입-정의-1" aria-hidden="true">#</a> 타입 정의</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FilterString<span class="token operator">&lt;</span>
  <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Target <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token string">&quot;&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> <span class="token constant">S</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Split<span class="token operator">&lt;</span>
  <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Prefix <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token string">&quot;&quot;</span>
  <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token operator">:</span> <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">T</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">D</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">U</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>FilterString<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Prefix<span class="token operator">&gt;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token operator">...</span>Split<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">D</span><span class="token punctuation">,</span> Prefix<span class="token operator">&gt;</span><span class="token punctuation">]</span>
  <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>FilterString<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> Prefix<span class="token operator">&gt;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Join<span class="token operator">&lt;</span><span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token punctuation">[</span>
  <span class="token keyword">infer</span> Head<span class="token punctuation">,</span>
  <span class="token operator">...</span><span class="token keyword">infer</span> Tail<span class="token punctuation">,</span>
<span class="token punctuation">]</span>
  <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Head <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">?</span> Head <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Head <span class="token keyword">extends</span> <span class="token string">&quot;&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> <span class="token constant">D</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Join<span class="token operator">&lt;</span>
      Tail <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">?</span> Tail <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token constant">D</span>
    <span class="token operator">&gt;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">TrimRight<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">infer</span> <span class="token constant">R</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>TrimRight<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="사용-예제-1" tabindex="-1"><a class="header-anchor" href="#사용-예제-1" aria-hidden="true">#</a> 사용 예제</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">DisallowClassName<span class="token operator">&lt;</span>
  <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  Prefix <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> TrimRight<span class="token operator">&lt;</span>Join<span class="token operator">&lt;</span>Split<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> Prefix<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// h-10 w-10 m-10 p-10</span>
<span class="token keyword">type</span> <span class="token class-name">FilteredClassName0</span> <span class="token operator">=</span> DisallowClassName<span class="token operator">&lt;</span>
  <span class="token string">&quot;h-10 w-10 m-10 p-10 fill-black&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;fill&quot;</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">FilteredClassName1</span> <span class="token operator">=</span> DisallowClassName<span class="token operator">&lt;</span>
  <span class="token string">&quot;h-10 w-10 fill-black m-10 p-10&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;fill&quot;</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">FilteredClassName2</span> <span class="token operator">=</span> DisallowClassName<span class="token operator">&lt;</span>
  <span class="token string">&quot;fill-black h-10 w-10 m-10 p-10&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;fill&quot;</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// fill-black m-10 p-10</span>
<span class="token keyword">type</span> <span class="token class-name">FilteredClassName3</span> <span class="token operator">=</span> DisallowClassName<span class="token operator">&lt;</span>
  <span class="token string">&quot;fill-black h-10 w-10 m-10 p-10&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;h&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;w&quot;</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),e=[o];function i(c,l){return s(),a("div",null,e)}const r=n(p,[["render",i],["__file","template-literals.html.vue"]]);export{r as default};
