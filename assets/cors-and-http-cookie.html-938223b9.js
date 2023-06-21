import{_ as n,p as s,q as e,a1 as a}from"./framework-96b046e1.js";const t={},o=a(`<h1 id="cors와-http-cookie" tabindex="-1"><a class="header-anchor" href="#cors와-http-cookie" aria-hidden="true">#</a> CORS와 HTTP Cookie</h1><h3 id="글의-목적" tabindex="-1"><a class="header-anchor" href="#글의-목적" aria-hidden="true">#</a> 글의 목적</h3><p>Cross-Origin Resource Sharing! 앞 글자만 따서 CORS라고 부른다. 내 경험상 CORS는 서로 다른 도메인을 사용하는 클라이언트와 API 서버가 통신할 때 발생하는 첫번째 현상이다.</p><p>최근에는 HTTP Cookie를 사용할 일이 생겼는 데, Cookie를 사용하면서 CORS에 대한 지식을 새롭게 알게되었다. 그래서 CORS와 HTTP Cookie를 처리하는 방법에 대한 내용을 정리했다.</p><h3 id="cors란" tabindex="-1"><a class="header-anchor" href="#cors란" aria-hidden="true">#</a> CORS란</h3><p>CORS는 다른 도메인을 사용하는 클라이언트가 서버에게 요청할 때 발생하는 보안 매커니즘이다. 클라이언트가 다른 도메인의 서버에 요청하면 <strong>Cross-Origin HTTP 요청</strong>에 의해 요청하게 된다. <strong>Cross-Origin HTTP 요청</strong>에 따른 HTTP 요청과 응답은 CORS 매커니즘으로 구성되야 한다.</p><p>서버에서는 다른 도메인을 사용하는 클라이언트의 요청이 왔을 때 허용/거부 여부를 설정한다. 허용/거부에 대한 설정은 HTTP Header 중 <strong>Access-Control-Allow-Origin</strong>을 통해서 한다.</p><p><strong>Access-Control-Allow-Origin</strong>에 허용할 도메인을 명시하거나 모든 도메인을 허용할 수 있는 와일드 카드(*)를 작성한다.</p><h4 id="예제-access-control-allow-origin-사용전-현상" tabindex="-1"><a class="header-anchor" href="#예제-access-control-allow-origin-사용전-현상" aria-hidden="true">#</a> [예제] Access-Control-Allow-Origin 사용전 현상</h4><blockquote><p>클라이언트(http://localhost:3000), 서버(http://localhost:4000)</p></blockquote><p><strong>Access-Control-Allow-Origin</strong>을 서버 응답 헤더에 설정하지 않으면 정책에 대한 오류를 발생한다.</p><h5 id="http-요청" tabindex="-1"><a class="header-anchor" href="#http-요청" aria-hidden="true">#</a> HTTP 요청</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:4000&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="chrome-개발자-도구-console" tabindex="-1"><a class="header-anchor" href="#chrome-개발자-도구-console" aria-hidden="true">#</a> Chrome 개발자 도구 &gt; Console</h5><p>Access to fetch at &#39;http://localhost:4000/&#39; from origin &#39;http://localhost:3000&#39; has been blocked by CORS policy: No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource. If an opaque response serves your needs, set the request&#39;s mode to &#39;no-cors&#39; to fetch the resource with CORS disabled.</p><h4 id="예제-access-control-allow-origin-사용후-현상" tabindex="-1"><a class="header-anchor" href="#예제-access-control-allow-origin-사용후-현상" aria-hidden="true">#</a> [예제] Access-Control-Allow-Origin 사용후 현상</h4><p><strong>Access-Control-Allow-Origin</strong>를 서버 응답 헤더에 설정하면 정상적으로 동작된다.</p><h5 id="http-요청-1" tabindex="-1"><a class="header-anchor" href="#http-요청-1" aria-hidden="true">#</a> HTTP 요청</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:4000&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="chrome-개발자-도구-network-response-headers" tabindex="-1"><a class="header-anchor" href="#chrome-개발자-도구-network-response-headers" aria-hidden="true">#</a> Chrome 개발자 도구 &gt; Network &gt; Response Headers</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Access-Control-Allow-Origin: *
Content-Length: 12
Content-Type: text/html; charset=utf-8
Date: Mon, 21 Oct 2019 21:56:47 GMT
ETag: W/&quot;c-Lve95gjOVATpfV8EL5X4nxwjKHE&quot;
X-Powered-By: Express
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http-cookie-사용을-위한-credentials-설정" tabindex="-1"><a class="header-anchor" href="#http-cookie-사용을-위한-credentials-설정" aria-hidden="true">#</a> HTTP Cookie 사용을 위한 Credentials 설정</h3><h4 id="http-cookie를-사용하게된-상황" tabindex="-1"><a class="header-anchor" href="#http-cookie를-사용하게된-상황" aria-hidden="true">#</a> HTTP Cookie를 사용하게된 상황</h4><p>먼저 HTTP Cookie를 사용하게 되었던 이유는 로그인과 로그인 여부를 판단하기 위해서다. 서비스 구성은 클라이언트 서비스, API 서버, 로그인 서비스가 세가지로 각각 다른 도메인을 사용하고 있다.</p><p>로그인 서비스에서 로그인 완료 후 Cookie에 로그인 완료 여부를 담아주고 클라이언트 서비스로 Redirect를 해준다. Cookie를 클라이언트 서비스에서 접근할 수 없게 Cookie는 HttpOnly로 설정되어 있다.</p><blockquote><p>Cookie가 HttpOnly로 설정되면 Javascript의 <code>document.cookie</code>로 접근할 수 없다.</p></blockquote><p>클라이언트 서비스에서는 <strong>로그인 여부를 판단</strong>하기 위해서 API 서버에 요청하게 된다. 이때 API 서버에서 Cookie를 사용하기 위해서 <strong>클라이언트와 서버의 Credentials</strong> 설정이 필요하다.</p><h4 id="credentials-설정" tabindex="-1"><a class="header-anchor" href="#credentials-설정" aria-hidden="true">#</a> Credentials 설정</h4><p>클라이언트와 서버에서는 모두 Credentials를 활성화 해야 한다.</p><h5 id="클라이언트-credentials-설정" tabindex="-1"><a class="header-anchor" href="#클라이언트-credentials-설정" aria-hidden="true">#</a> 클라이언트 Credentials 설정</h5><p>클라이언트에서는 Javascript API 에 따라 다르게 설정할 수 있다. 대표적으로 사용하는 fetch, XMLHttpRequest 예시이다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:4000&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">&#39;include&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;http://localhost:4000&#39;</span><span class="token punctuation">;</span>

xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="서버-credentials-설정" tabindex="-1"><a class="header-anchor" href="#서버-credentials-설정" aria-hidden="true">#</a> 서버 Credentials 설정</h5><p>서버에서 Credentials은 응답 헤더에 설정한다. <strong>Access-Control-Allow-Credentials</strong> 명의 헤더에 true로 설정하면 된다.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Credentials&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Credentials</strong>를 활성화 후 HTTP 요청을 하게되면 아래와 같은 에러가 발생한다.</p><p>Access to fetch at &#39;http://localhost:4000/&#39; from origin &#39;http://localhost:3000&#39; has been blocked by CORS policy: The value of the &#39;Access-Control-Allow-Origin&#39; header in the response must not be the wildcard &#39;*&#39; when the request&#39;s credentials mode is &#39;include&#39;.</p><p><strong>Credentials</strong> 활성화 후에는 <strong>Access-Control-Allow-Origin</strong>에 와일드 카드(*)를 사용할 수 없기 때문이다.</p><p>여기서 주의할 점은 Credentials를 활성화하는 것으로 클라이언트와 서버의 상황이 다르다. 서버에서는 Credentials를 활성화하는 것으로 Cookie를 접근할 수 있기 때문에 정상동작처럼 보인다. 하지만 클라이언트에서는 CORS 정책으로 HTTP 응답을 확인할 수 없다.</p><h4 id="credentials와-access-control-allow-origin-설정" tabindex="-1"><a class="header-anchor" href="#credentials와-access-control-allow-origin-설정" aria-hidden="true">#</a> Credentials와 Access-Control-Allow-Origin 설정</h4><p>서버 HTTP 응답 헤더 중 <strong>Access-Control-Allow-Origin</strong>에 허용할 클라이언트의 도메인을 작성한다. 설정 후 클라이언트 응답 헤더를 확인하면 정상 동작을 확인 할 수 있다.</p><h5 id="서버-http-응답-헤더-설정" tabindex="-1"><a class="header-anchor" href="#서버-http-응답-헤더-설정" aria-hidden="true">#</a> 서버 HTTP 응답 헤더 설정</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:3000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Credentials&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="chrome-개발자-도구-network-response-headers-1" tabindex="-1"><a class="header-anchor" href="#chrome-개발자-도구-network-response-headers-1" aria-hidden="true">#</a> Chrome 개발자 도구 &gt; Network &gt; Response Headers</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: http://localhost:3000
Content-Length: 12
Content-Type: text/html; charset=utf-8
Date: Mon, 21 Oct 2019 22:46:47 GMT
ETag: W/&quot;c-Lve95gjOVATpfV8EL5X4nxwjKHE&quot;
X-Powered-By: Express
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h3><p>클라이언트와 API 서버가 서로 다른 도메인을 사용하는 것은 현업에서 자주 사용되는 패턴이다. 이 패턴에서 서비스 초기 개발 시 한번쯤은 발생하게 된다. 단순히 CORS 정책을 따르면 해결 가능하다. CORS에 대한 이슈는 클라이언트와 서버 담당자 어느 한쪽에서만 숙지하는 게 아니라 모두 이해가 필요하다. 이와 같은 이슈는 CORS 정책을 따름으로서 매끄럽게 해결하고 비즈니스 개발에 집중하는 게 좋다고 생각한다.</p>`,48),i=[o];function r(c,l){return s(),e("div",null,i)}const d=n(t,[["render",r],["__file","cors-and-http-cookie.html.vue"]]);export{d as default};
