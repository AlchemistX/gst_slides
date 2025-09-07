---
layout: top-title
hideInToc: true
---
:: title ::
# GStreamer 런타임 환경 둘러보기

:: content ::
<div class="highlight-box text-xs">
<strong>meson devenv -C build</strong>는 GStreamer를 시스템에 설치하지 않고 빌드 디렉토리에서 직접 실행할 수 있는 개발 환경을 제공합니다.
</div>

<div class="code-xs mt-3">

#### Development Environment
```bash
# 개발 환경 활성화
meson devenv -C build
# 환경 변수가 자동 설정된 서브셸 시작

# 즉시 GStreamer 도구 사용 가능
gst-launch-1.0 --version
gst-inspect-1.0 videotestsrc
```
</div>

<div class="flex flex-wrap">
<div class="w-1/2 code-xs mt-3">

#### Example
```bash
gst-launch-1.0 videotestsrc ! autovideosink
```
</div>

<div class="w-1/2 code-xs mt-3">
<figure class="text-center">
  <div class="w-full mx-auto">
    <img 
      src="./assets/04-runtime-00.png" 
      class="w-auto h-40 max-h-[75vh] object-contain mx-auto block shadow-md rounded-lg" 
    />
  </div>
</figure>
</div>
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# GStreamer 런타임 환경 둘러보기

:: content ::
<div class="highlight-box text-xs">
간단한 GStreamer 파이프라인을 실행하여 설치 없이도 GStreamer의 기능을 테스트할 수 있습니다.
</div>

<div class="code-xs mt-3">

#### Testing GStreamer #1
```bash
gst-launch-1.0 playbin uri=https://www.freedesktop.org/software/gstreamer-sdk/data/media/sintel_trailer-480p.webm
```
</div>

<div class="code-xs mt-3">
<figure class="text-center">
  <div class="w-full mx-auto">
    <img 
      src="./assets/04-runtime-01.png" 
      class="w-auto h-70 max-h-[75vh] object-contain mx-auto block shadow-md rounded-lg" 
    />
  </div>
</figure>
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# GStreamer 런타임 환경 둘러보기

:: content ::
<div class="code-xs code-dense">

#### Testing GStreamer #2
```bash
gst-launch-1.0 playbin \
  audio-sink="( \
    tee name=t \
    t. ! queue ! spacescope ! videoconvert ! autovideosink \
    t. ! queue ! spectrascope ! videoconvert ! autovideosink \
    t. ! queue ! goom ! videoconvert ! autovideosink)" \
  uri=https://www.freedesktop.org/software/gstreamer-sdk/data/media/sintel_trailer-480p.webm
```
</div>

<div class="code-xs mt-3">
<figure class="text-center">
  <div class="w-full mx-auto">
    <img 
      src="./assets/04-runtime-02.png" 
      class="w-auto h-70 max-h-[75vh] object-contain mx-auto block shadow-md rounded-lg" 
    />
  </div>
</figure>
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# GStreamer 런타임 환경 둘러보기

:: content ::
<div class="code-xs code-dense">

#### Testing GStreamer #3
```bash
gst-launch-1.0 \
  compositor name=c background=black \
    sink_0::xpos=0 sink_0::ypos=0 sink_0::width=320 sink_0::height=240 \
    sink_1::xpos=320 sink_1::ypos=0 sink_1::width=320 sink_1::height=240 \
    sink_2::xpos=0 sink_2::ypos=240 sink_2::width=320 sink_2::height=240 \
    sink_3::xpos=320 sink_3::ypos=240 sink_3::width=320 sink_3::height=240 \
  ! video/x-raw,width=640,height=480,framerate=30/1 ! autovideosink \
  \
  uridecodebin uri=https://www.freedesktop.org/software/gstreamer-sdk/data/media/sintel_trailer-480p.webm \
  ! queue ! videoconvert ! videorate ! videoscale \
  ! video/x-raw,width=320,height=240,framerate=30/1,format=I420 ! c.sink_0 \
  videotestsrc pattern=smpte ! video/x-raw,framerate=30/1 ! c.sink_1 \
  videotestsrc pattern=snow ! video/x-raw,framerate=30/1 ! c.sink_2 \
  videotestsrc pattern=checkers-1 ! video/x-raw,framerate=30/1 ! c.sink_3
```
</div>

<div class="code-xs mt-3">
<figure class="text-center">
  <div class="w-full mx-auto">
    <img 
      src="./assets/04-runtime-03.png" 
      class="w-auto h-50 max-h-[75vh] object-contain mx-auto block shadow-md rounded-lg" 
    />
  </div>
</figure>
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# GStreamer 런타임 환경 둘러보기

:: content ::
<div class="highlight-box text-xs">
<strong>gst-devtools</strong> 프로젝트는 dot graph 를 편리하게 확인할 수 있는 툴을 제공합니다.
</div>

<div class="code-xs code-dense mt-3">

#### GStreamer Pipeline Visualization #1
```bash
worker in 🌐 seoungil-kang-gst-in-action in gstreamer on  main [?] is 📦 v1.27.1.1 via 🐍 v3.10.18 (venv) via ⬢ gstreamer-full
⬢ [Docker] ❯ cd build/subprojects/gst-devtools/dots-viewer
worker in 🌐 seoungil-kang-gst-in-action in subprojects/gst-devtools/dots-viewer on  main [?] via 🐍 v3.10.18 (venv) via ⬢ gstreamer-full
⬢ [Docker] ❯ ./gst-dots-viewer
2025-09-06T07:04:29.771134Z  INFO gst_dots_viewer: Instance gstdots-0.0.0.0-3000 is single: true
2025-09-06T07:04:29.771279Z  INFO gst_dots_viewer: Watching dot files in "/home/worker/.cache/gstreamer-dots"
2025-09-06T07:04:29.771454Z  INFO gst_dots_viewer: Starting server on http://0.0.0.0:3000
```
</div>

<div class="code-xs mt-3">
<figure class="text-center">
  <div class="w-full mx-auto">
    <img 
      src="./assets/04-runtime-04.png" 
      class="w-auto h-50 max-h-[75vh] object-contain mx-auto block shadow-md rounded-lg" 
    />
  </div>
</figure>
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# GStreamer 런타임 환경 둘러보기

:: content ::
<div class="code-xs code-dense">

#### GStreamer Pipeline Visualization #2
```bash
export GST_DEBUG_DUMP_DOT_DIR=$HOME/.cache/gstreamer-dots
gst-launch-1.0 videotestsrc ! autovideosink
```
</div>

<div class="code-xs mt-3">
<figure class="text-center">
  <div class="w-full mx-auto">
    <img 
      src="./assets/04-runtime-05.png" 
      class="w-auto h-70 max-h-[75vh] object-contain mx-auto block shadow-md rounded-lg" 
    />
  </div>
</figure>
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# GStreamer 런타임 환경 둘러보기

:: content ::
<div class="code-xs code-dense">

#### GStreamer Pipeline Visualization #3
```bash
export GST_DEBUG_DUMP_DOT_DIR=$HOME/.cache/gstreamer-dots
gst-launch-1.0 playbin uri=https://www.freedesktop.org/software/gstreamer-sdk/data/media/sintel_trailer-480p.webm
```
</div>

<div class="code-xs mt-3">
<figure class="text-center">
  <div class="w-full mx-auto">
    <img 
      src="./assets/04-runtime-06.png" 
      class="w-auto h-50 max-h-[75vh] object-contain mx-auto block shadow-md rounded-lg" 
    />
  </div>
</figure>
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# GStreamer 런타임 환경 둘러보기

:: content ::
<div class="code-xs code-dense">

#### GStreamer Pipeline Visualization #4
```bash
export GST_DEBUG_DUMP_DOT_DIR=$HOME/.cache/gstreamer-dots
gst-launch-1.0 playbin \
  audio-sink="( \
    tee name=t \
    t. ! queue ! spacescope ! videoconvert ! autovideosink \
    t. ! queue ! spectrascope ! videoconvert ! autovideosink \
    t. ! queue ! goom ! videoconvert ! autovideosink)" \
  uri=https://www.freedesktop.org/software/gstreamer-sdk/data/media/sintel_trailer-480p.webm
```
</div>

<div class="code-xs mt-3">
<figure class="text-center">
  <div class="w-full mx-auto">
    <img 
      src="./assets/04-runtime-07.png" 
      class="w-auto h-50 max-h-[75vh] object-contain mx-auto block shadow-md rounded-lg" 
    />
  </div>
</figure>
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# GStreamer 런타임 환경 둘러보기

:: content ::
<div class="code-xs code-dense">

#### GStreamer Pipeline Visualization #5
```bash
export GST_DEBUG_DUMP_DOT_DIR=$HOME/.cache/gstreamer-dots
gst-launch-1.0 \
  compositor name=c background=black \
    sink_0::xpos=0 sink_0::ypos=0 sink_0::width=320 sink_0::height=240 \
    sink_1::xpos=320 sink_1::ypos=0 sink_1::width=320 sink_1::height=240 \
    sink_2::xpos=0 sink_2::ypos=240 sink_2::width=320 sink_2::height=240 \
    sink_3::xpos=320 sink_3::ypos=240 sink_3::width=320 sink_3::height=240 \
  ! video/x-raw,width=640,height=480,framerate=30/1 ! autovideosink \
  \
  uridecodebin uri=https://www.freedesktop.org/software/gstreamer-sdk/data/media/sintel_trailer-480p.webm \
  ! queue ! videoconvert ! videorate ! videoscale \
  ! video/x-raw,width=320,height=240,framerate=30/1,format=I420 ! c.sink_0 \
  videotestsrc pattern=smpte ! video/x-raw,framerate=30/1 ! c.sink_1 \
  videotestsrc pattern=snow ! video/x-raw,framerate=30/1 ! c.sink_2 \
  videotestsrc pattern=checkers-1 ! video/x-raw,framerate=30/1 ! c.sink_3
```
</div>

<div class="code-xs mt-3">
<figure class="text-center">
  <div class="w-full mx-auto">
    <img 
      src="./assets/04-runtime-08.png" 
      class="w-auto h-50 max-h-[75vh] object-contain mx-auto block shadow-md rounded-lg" 
    />
  </div>
</figure>
</div>


---
src: ./04-01-gst-inspect.md
---

---
src: ./04-02-gst-launch.md
---

---
src: ./04-03-environment_variable.md
---
