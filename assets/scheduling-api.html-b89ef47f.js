import{_ as t,r as p,o as e,c as o,a as n,b as c,d as i,e as s}from"./app-de68466b.js";const l={},u=s('<h1 id="메인-스레드-최적화를-위한-scheduling-api" tabindex="-1"><a class="header-anchor" href="#메인-스레드-최적화를-위한-scheduling-api" aria-hidden="true">#</a> 메인 스레드 최적화를 위한 Scheduling API</h1><h2 id="스케줄링이란" tabindex="-1"><a class="header-anchor" href="#스케줄링이란" aria-hidden="true">#</a> 스케줄링이란?</h2><p>메인 스레드는 렌더링, 네트워트 응답, GC 등 다양한 역할을 수행합니다. 메인 스레드에 많은 작업들이 예약되며 웹 사이트의 성능과 사용성 경험이 저하됩니다. 그래서 우선순위가 다른 작업을 효율적으로 등록하고 제어하기 위해 스케줄링을 합니다.</p><h2 id="브라우저-지원-범위" tabindex="-1"><a class="header-anchor" href="#브라우저-지원-범위" aria-hidden="true">#</a> 브라우저 지원 범위</h2>',4),r=n("li",null,"지원 브라우저: Chrome / Edge / Opera",-1),d=n("li",null,"미지원 브라우저: Firefox / Safari",-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#browser_compatibility",target:"_blank",rel:"noopener noreferrer"},v=s(`<h2 id="native-scheduling-api가-필요한-이유" tabindex="-1"><a class="header-anchor" href="#native-scheduling-api가-필요한-이유" aria-hidden="true">#</a> Native Scheduling API가 필요한 이유?</h2><h3 id="_1-메인-스레드에서-협력하는-행위자들-간의-조정" tabindex="-1"><a class="header-anchor" href="#_1-메인-스레드에서-협력하는-행위자들-간의-조정" aria-hidden="true">#</a> 1. 메인 스레드에서 협력하는 행위자들 간의 조정</h3><p>애플리케이션은 1st-party, 1st-party 라이브러리, 3rd-party 라이브러리 및 프레임워크 스크립트로 구성될 수 있습니다. 동시에 브라우저는 <code>fetch()</code> 및 GC, 렌더링 같은 메인 스레드에 실행할 작업들이 있습니다.</p><p>Native Scheduling API를 통해 공유된 우선순위 개념을 갖는 것은 브라우저가 더 효율적인 스케줄링 결정을 내리는 데 도움이 되고 사용자 경험을 향상시키는데 도움이 될 수 있습니다.</p><h3 id="_2-서로-다른-scheduling-api" tabindex="-1"><a class="header-anchor" href="#_2-서로-다른-scheduling-api" aria-hidden="true">#</a> 2. 서로 다른 Scheduling API</h3><p>스크립트 청크를 스케줄링해야 함에도 불구하고 플랫폼에는 통합 API가 부족합니다. 개발자는 작업을 스케줄링할 때 <code>setTimeout</code>, <code>requestAnimationFrame</code>, <code>requestIdleCallback</code>, <code>postMessage</code>을 선택할 수 있습니다.</p><p>이러한 다른 Scheduling API는 개발자가 스케줄링 코드를 작성하는 것을 더욱 어렵게 하며 이를 위해서는 브라우저의 이벤트 루프에 대한 지식이 필요합니다.</p><h3 id="_3-브라우저에-양보할-시기-결정" tabindex="-1"><a class="header-anchor" href="#_3-브라우저에-양보할-시기-결정" aria-hidden="true">#</a> 3. 브라우저에 양보할 시기 결정</h3><p>사용성을 위해서 브라우저에게 적절하게 메인 스레드를 양보해야 합니다. 하지만 양보에는 오버헤드가 있습니다. 작업 등록 및 컨텍스트 전환에 따른 오버헤드, 제어권 획득 비용이 등으로 인해 작업 지연 시간이 증가할 수 있습니다.</p><p>Native Scheduling API에서는 <code>isInputPending()</code> 및 <code>isFramePending()</code>으로 양보할 시기를 체크할 수 있습니다. 또한 <code>scheduler.yield()</code>로 양보하고 제어권을 찾을 수 있습니다.</p><h2 id="scheduling-api-기능" tabindex="-1"><a class="header-anchor" href="#scheduling-api-기능" aria-hidden="true">#</a> Scheduling API 기능</h2><p>웹 사이트 개발자 코드 또는 3rd-party 라이브러리 및 프레임워크처럼 애플리케이션에 속한 모든 작업의 우선순위를 지정하는 표준화된 방법을 제공합니다.</p><p>API는 Promise 기반이며 작업 우선순위를 설정 및 변경하고, 스케줄러에 추가되는 작업을 지연하고, 작업을 중단하고, 우선순위 변경 및 중단 이벤트를 모니터링하는 기능을 지원합니다.</p><h3 id="기능-체크" tabindex="-1"><a class="header-anchor" href="#기능-체크" aria-hidden="true">#</a> 기능 체크</h3><p>현재 스코프에 노출된 global <code>this</code>에서 <code>scheduler</code> 속성을 테스트하여 API가 이 브라우저에서 지원되는 경우 아래 코드는 <strong>Feature: Supported</strong>을 출력합니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;scheduler&quot;</span> <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Feature: Supported&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Feature: Not Supported&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="우선-순위" tabindex="-1"><a class="header-anchor" href="#우선-순위" aria-hidden="true">#</a> 우선 순위</h3><p>두 번째 인자 옵션에서 <code>priority</code> 프로퍼티를 사용하여 작업 우선순위를 설정할 수 있습니다. 우선순위는 <code>user-blocking</code>, <code>user-visible</code>, <code>background</code>로 자세한 실행 시점은 다음과 같습니다:</p><ul><li><code>user-blocking</code><ul><li>사용자의 페이지와 상호 작용하는 것을 중지하는 작업</li><li>페이지를 사용할 수 있는 지점까지 렌더링 하거나 사용자 입력에 응답하는 작업이 포함됨</li></ul></li><li><code>user-visible</code><ul><li>기본 우선순위</li><li>사용자가 볼 수 있지만 사용자 작업을 반드시 차단할 필요는 없는 작업</li><li>페이지의 이 필수적인 이미지 또는 애니메이션을 렌더링 하는 작업이 포함됨</li></ul></li><li><code>background</code><ul><li>시간이 중요하지 않는 작업</li><li>렌더링에 필요하지 않는 로그 처리 또는 3rd-party 라이브러리 초기화가 포함됨</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token parameter">txt</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;scheduler&quot;</span> <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  scheduler<span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;background 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token string">&quot;background&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scheduler<span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user-visible 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token string">&quot;user-visible&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scheduler<span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user-blocking 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token string">&quot;user-blocking&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  scheduler<span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;background 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token string">&quot;background&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scheduler<span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user-visible 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token string">&quot;user-visible&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scheduler<span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user-blocking 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token string">&quot;user-blocking&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  scheduler<span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;user-visible 3 (default)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래 로그는 위 작업의 출력을 보여줍니다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user-blocking 1
user-blocking 2
user-visible 1
user-visible 2
user-visible 3 (default)
background 1
background 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="작업-지연" tabindex="-1"><a class="header-anchor" href="#작업-지연" aria-hidden="true">#</a> 작업 지연</h3><p>두 번째 인자 옵션에서 <code>delay</code> 프로퍼티에 정수 밀리초를 지정하여 작업을 지연시킬 수 있습니다. 이렇게 하면 <code>setTimeout()</code>를 사용하여 생성될 수 있는 것처럼 시간 초과 시에 작업이 우선순위 큐에 효과적으로 추가됩니다. <code>delay</code>은 작업이 스케줄러에 추가되기 전까지의 최소 시간이므로 시간이 더 길 수도 있습니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;scheduler&quot;</span> <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  scheduler
    <span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;Task delayed by 2000ms&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">2000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">taskResult</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>taskResult<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scheduler
    <span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;Next task should complete in about 2000ms&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">taskResult</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>taskResult<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>두 번째 문자열은 약 2초 후에 로그에 표시됩니다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Next task should complete in about 2000ms
Task delayed by 2000ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="작업-중단" tabindex="-1"><a class="header-anchor" href="#작업-중단" aria-hidden="true">#</a> 작업 중단</h3><p><code>TaskController</code> 또는 <code>AbortController</code>를 사용하여 정확히 같은 방식으로 작업을 중단할 수 있습니다. 차이점은 작업 우선 순위도 설정하려면 <code>TaskController</code>를 사용해야 합니다.</p><p>아래 코드는 <code>TaskController</code>를 생성하고 <code>signal</code>에 전달합니다. <code>abortTaskController.abort()</code>를 실행하면 <code>Promise</code>가 거부되고 <code>catch</code> 블록에 걸려 기록됩니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;scheduler&quot;</span> <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> abortTaskController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TaskController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  scheduler
    <span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Task executing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">signal</span><span class="token operator">:</span> abortTaskController<span class="token punctuation">.</span>signal<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">taskResult</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>taskResult<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  abortTaskController<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래 로그에는 작업 중단 로그가 표시됩니다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Error: AbortError: signal is aborted without reason
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="우선순위-변경" tabindex="-1"><a class="header-anchor" href="#우선순위-변경" aria-hidden="true">#</a> 우선순위 변경</h3><p>두 번째 인자 옵션에서 <code>signal</code> 프로퍼티에 <code>TaskController</code>를 지정할 수 있으며 초기 우선순위를 설정할 수 있습니다.</p><p>그런 다음 <code>addEventListener()</code>을 사용해서 우선순위 변경의 이벤트를 받을 수 있고, <code>setPriority()</code>을 호출하여 우선순위를 변경할 수 있습니다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;scheduler&quot;</span> <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TaskController</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token string">&quot;user-blocking&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  controller<span class="token punctuation">.</span>signal<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;prioritychange&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> previousPriority <span class="token operator">=</span> event<span class="token punctuation">.</span>previousPriority<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newPriority <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>priority<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Priority changed from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>previousPriority<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newPriority<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  scheduler<span class="token punctuation">.</span><span class="token function">postTask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Task&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  controller<span class="token punctuation">.</span><span class="token function">setPriority</span><span class="token punctuation">(</span><span class="token string">&quot;background&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래 출력은 우선순위가 <code>user-blocking</code>에서 <code>background</code>로 변경되었음을 보여줍니다.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Priority changed from user-blocking to background.
Task
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,39);function g(h,b){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("ul",null,[r,d,n("li",null,[n("a",k,[c("Browser compatibility"),i(a)])])]),v])}const y=t(l,[["render",g],["__file","scheduling-api.html.vue"]]);export{y as default};
