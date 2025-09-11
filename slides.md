---
theme: neversink
background: https://cover.sli.dev
hideInToc: true
---

<style>
.section-header {
  @apply bg-gradient-to-br from-slate-600 to-slate-800 text-white drop-shadow-lg;
}

.section-center {
  @apply text-center bg-gradient-to-br from-slate-600 to-slate-800 text-white drop-shadow-lg;
}

.custom-table table th {
  text-align: center !important;
  font-weight: bold !important;
}

.custom-table-small table th,
.custom-table-small table td {
  font-size: 0.875rem !important; /* text-sm */
  padding: 8px !important; /* 작은 테이블에 맞는 패딩 */
}

.custom-table-small table th {
  text-align: center !important;
  font-weight: bold !important;
}

.custom-table-small table td {
  line-height: 1.4 !important; /* 가독성을 위한 줄 간격 */
}

.custom-table-xs table th,
.custom-table-xs table td {
  font-size: 0.75rem !important; /* text-xs */
  padding: 4px !important; /* 작은 테이블에 맞는 패딩 */
}

.custom-table-xs table th {
  text-align: center !important;
  font-weight: bold !important;
}

.custom-table-xs table td {
  line-height: 1.2 !important; /* 가독성을 위한 줄 간격 */
}

.custom-table-xxs table th,
.custom-table-xxs table td {
  font-size: 0.55rem !important; /* text-xs */
  padding: 2px !important; /* 작은 테이블에 맞는 패딩 */
}

.custom-table-xxs table th {
  text-align: center !important;
  font-weight: bold !important;
}

.custom-table-xxs table td {
  line-height: 1.0 !important; /* 가독성을 위한 줄 간격 */
}

.img-fit {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  margin: 0 auto;
  display: block;
}

.img-full {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.img-slide {
  max-width: 70%;
  max-height: 70vh;
  object-fit: contain;
  margin: 0 auto;
  display: block;
}

.img-small {
  max-width: 50%;
  height: auto;
  margin: 0 auto;
  display: block;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.info-box {
  @apply border-2 border-blue-500 bg-blue-50 p-4 rounded-lg shadow-md;
}

.warning-box {
  @apply border-2 border-yellow-500 bg-yellow-50 p-4 rounded-lg shadow-md;
}

.success-box {
  @apply border-2 border-green-500 bg-green-50 p-4 rounded-lg shadow-md;
}

.error-box {
  @apply border-2 border-red-500 bg-red-50 p-4 rounded-lg shadow-md;
}

.custom-box {
  @apply border-2 border-gray-300 bg-gray-50 p-6 rounded-xl shadow-lg;
}

.highlight-box {
  @apply bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-500 p-4 rounded-r-lg;
}

.slidev-code {
  font-size: 16px !important;
}

.code-xs .slidev-code {
  font-size: 10px !important;
}

.code-sm .slidev-code {
  font-size: 12px !important;
}

.code-lg .slidev-code {
  font-size: 18px !important;
}

code {
  font-size: 0.9em !important;
}

.code-dense .slidev-code {
  font-size: 11px !important;
  line-height: 1.2 !important;
}

.code-comfortable .slidev-code {
  font-size: 14px !important;
  line-height: 1.6 !important;
}

.code-scroll {
  max-height: 400px;
  overflow-y: auto;
  overflow-x: auto;
}

.code-scroll-sm {
  max-height: 300px;
  overflow-y: auto;
  overflow-x: auto;
}

.code-scroll-lg {
  max-height: 500px;
  overflow-y: auto;
  overflow-x: auto;
}

.mermaid-xxs .mermaid { transform: scale(0.4); transform-origin: top left; }
.mermaid-xs .mermaid { transform: scale(0.6); transform-origin: top left; }
.mermaid-sm .mermaid { transform: scale(0.8); transform-origin: top left; }
.mermaid-lg .mermaid { transform: scale(1.2); transform-origin: top left; }
.mermaid-xl .mermaid { transform: scale(1.4); transform-origin: top left; }
</style>


# GStreamer in Action

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# 목차

:: content ::
<Toc
  minDepth="1"
  maxDepth="1"
  columns="2"
/>

---
layout: top-title
---
:: title ::
# 학습 목표

:: content ::
본 강의를 통해 GStreamer의 핵심을 파악하고, 문제 해결에 필요한 학습 역량을 기를 수 있기를 바랍니다.

<div class="custom-table">

| 학습 항목 | 설명 |
|-----------------|------|
| GStreamer 설계 | GStreamer의 아키텍처와 핵심 개념을 이해합니다. |
| 개발 환경 구축 | GStreamer 빌드 시스템과 실행 환경을 이해하고 구성하는 방법을 익힙니다. |
| GLib/GObject 이해 | gstreamer 는 glib/gobject를 사용해 구현 되었습니다. <br> 이것에 대한 이해는 곧 gstreamer 설계 철학의 이해 입니다. |
| 애플리케이션 개발 | GLib/GObject 기반 멀티미디어 애플리케이션 개발의 핵심 패턴을 체득합니다.<br>애플리케이션과 GStreamer 가 어떻게 어울리는지 확인합니다. |
| 플러그인 개발 | GStreamer의 플러그인 시스템을 알아봅니다. <br> GLib/GObject 가 제공하는 런타임 타입 시스템에 대해 이해 합니다. |
</div>


---
layout: section
class: "section-center"
---

# 소개

GStreamer 에 대해 간단히 알아봅니다.

---
src: ./slides/01-introduction.md
---

---
layout: section  
class: "section-center"
---

# 학습을 위한 사전 지식

---
src: ./slides/02-prerequisites.md
---

---
layout: section  
class: "section-center"
---

# 빌드

---
src: ./slides/03-build.md
---


---
layout: section  
class: "section-center"
---

# 런타임

---
src: ./slides/04-runtime.md
---

---
layout: section  
class: "section-center"
---

# GStreamer Overview

---
src: ./slides/05-overview.md
---


---
layout: section  
class: "section-center"
---

# 애플리케이션 개발

---
src: ./slides/06-application.md
---


---
layout: section  
class: "section-center"
---

# 애플리케이션 개발 API

---
src: ./slides/07-application_api.md
---

---
layout: section  
class: "section-center"
---

# 플러그인 개발

---
src: ./slides/08-plugin.md
---

---
layout: section  
class: "section-center"
---

# 플러그인 개발 API

---
src: ./slides/09-plugin_api.md
---

---
layout: section  
class: "section-center"
---

# 플러그인 내부 구조

---
src: ./slides/10-plugin_internals.md
---

---
layout: section  
class: "section-center"
---

# GLib

---
layout: section  
class: "section-center"
---

# GObject

---
layout: section  
class: "section-center"
---

# GStreamer Tutorial

---
src: ./slides/13-tutorial.md
---

