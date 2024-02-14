import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as h}from"./app-b74e304f.js";const i="/assets/49ad34ad-35e8-4691-93ee-31dd8b8c2fbe-d81b48cd.png",t="/assets/18fd172e-a0fa-4e48-8ce5-88c98f83d0d3-560fd2d5.png",d="/assets/22d1f653-c8c3-481c-b5f1-e2dead8d5617-70d86724.png",p="/assets/cdea304e-aa25-423b-8be2-75d7b3ef3eed-4819b4d6.png",o="/assets/ae37e0fa-68e0-44d3-8111-37d0b618fcfd-4b4c59e0.png",r={},c=h('<h1 id="lighthouse-deep-dive-모바일-장치-이해-ft-성능-탭의-측정-결과와-다른-이유" tabindex="-1"><a class="header-anchor" href="#lighthouse-deep-dive-모바일-장치-이해-ft-성능-탭의-측정-결과와-다른-이유" aria-hidden="true">#</a> {Lighthouse Deep Dive} 모바일 장치 이해 (ft. 성능 탭의 측정 결과와 다른 이유)</h1><p>저는 주로 웹 페이지의 성능을 측정할 때 Lighthouse를 사용합니다. Lighthouse는 웹 페이지 품질 개선 도구로 Google Chrome에서 공개한 오픈소스이고, Chrome 개발자 도구에서 쉽게 사용할 수 있습니다.</p><p>Lighthouse에서는 모바일 장치를 선택할 수 있는 데요. 모바일 장치를 선택해서 성능을 측정하면 화면 크기 뿐만 아니라 CPU, 네트워크 성능도 조정되는 것을 알고 계셨나요?</p><p><img src="'+i+'" alt="라이트하우스 장치 구분"></p><p>이번에는 Lighthouse에서 모바일 장치를 데스크톱과 비교해서 Lighthouse 모바일 장치 이해에 대해서 알아보겠습니다.</p><p>목차</p><ul><li><ol><li>장치 화면</li></ol></li><li><ol start="2"><li>장치 성능</li></ol></li><li>부록) 성능 탭의 측정 결과와 다른 이유</li></ul><h2 id="_1-장치-화면" tabindex="-1"><a class="header-anchor" href="#_1-장치-화면" aria-hidden="true">#</a> 1. 장치 화면</h2><p><img src="'+t+'" alt="데스크톱과 모바일 화면"></p><p>Lighthouse는 모바일 화면과 데스크톱 화면을 각자 다른 방식으로 표시합니다.</p><p>모바일 화면은 장치 애뮬레이션으로 조절해서 보여집니다. 그래서 브라우저 사이즈를 아무리 조절해도 모바일 화면은 변경되지 않고 항상 같은 화면으로 보여집니다.</p><p>데스크톱 화면은 현재 보여지고 있는 화면을 기준으로 보여집니다. 그래서 브라우저 사이즈를 조절하면 데스크톱 화면도 변경됩니다.</p><h2 id="_2-장치-성능" tabindex="-1"><a class="header-anchor" href="#_2-장치-성능" aria-hidden="true">#</a> 2. 장치 성능</h2><p><img src="'+d+'" alt="성능 비교"></p><p>Lighthouse는 모바일과 데스크톱의 성능인 CPU와 네트워크 성능을 다르게 설정합니다.</p><p>모바일의 경우는 CPU는 4배 저하시키고, 네트워크 지연 시간을 늘리고, 네트워크 통신 속도를 느리게 합니다. 정확히는 지연 시간은 150ms, 다운로드 속도는 1.6Mbps, 업로드 속도는 750Kbps로 고정 값으로 조절합니다.</p><p>데스크톱은 측정하는 PC의 성능을 그대로 사용합니다. 그래서 고사양 컴퓨터일 수록 웹 페이지의 성능은 좋게 측정됩니다.</p><h2 id="부록-성능-탭의-측정-결과와-다른-이유" tabindex="-1"><a class="header-anchor" href="#부록-성능-탭의-측정-결과와-다른-이유" aria-hidden="true">#</a> 부록) 성능 탭의 측정 결과와 다른 이유</h2><p>Lighthouse의 모바일 장치는 CPU와 네트워크를 저하 시킨 뒤 성능을 측정하기 때문에 성능 탭의 측정 결과와 다를 수 있습니다.</p><p>성능 탭에서 CPU, 네트워크 성능을 조절하면 Lighthouse에서 측정한 결과와 유사한 결과를 얻을 수 있습니다.</p><h3 id="cpu-성능-조절" tabindex="-1"><a class="header-anchor" href="#cpu-성능-조절" aria-hidden="true">#</a> CPU 성능 조절</h3><p><img src="'+p+'" alt="CPU 성능 조절"></p><p>성능 탭에서 톱니바퀴를 클릭하면 성능 조절 패널이 노출되며, CPU는 선택 박스로 바로 조절할 수 있습니다.</p><h3 id="네트워크-성능-조절" tabindex="-1"><a class="header-anchor" href="#네트워크-성능-조절" aria-hidden="true">#</a> 네트워크 성능 조절</h3><p><img src="'+o+'" alt="네트워크 성능 조절"></p><p>네트워크는 추가 버튼을 클릭해서 Lighthouse의 모바일 성능과 같은 성능으로 설정 후 사용합니다.</p><p>이상으로 Lighthouse 모바일 장치 이해에 대해서 알아봤습니다. 감사합니다.</p>',27),l=[c];function n(u,_){return a(),s("div",null,l)}const m=e(r,[["render",n],["__file","lighthouse-mobile.html.vue"]]);export{m as default};
