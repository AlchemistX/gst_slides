---
layout: top-title
hideInToc: true
---
:: title ::
# GStreamer 학습을 위한 사전 지식

:: content ::
<div class="highlight-box">
GStreamer를 효과적으로 학습하고 활용하기 위해 다음과 같은 기초 지식이 필요합니다.
</div>

<div class="custom-table-small">

| 영역 | 핵심 요소 | 중요도 |
|------|-----------|--------|
| **프로그래밍 기초** | C 언어, 포인터, 메모리 관리 | 필수 |
| **GLib/GObject** | 객체 모델, 신호, 속성 | 필수 |
| **시스템 운용** | Linux, 빌드/배포, 환경 변수 | 필수 |
| **멀티미디어 기초** | 코덱, 포맷, 동기화 | 권장 |
| **개발 도구** | 빌드 시스템, 디버깅 도구 | 권장 |
| **네트워킹** | 프로토콜, 스트리밍 개념 | 선택 |

</div>

---
layout: top-title-two-cols
columns: is-8
hideInToc: true
---
:: title ::
# 1. 프로그래밍 기초

:: left ::
<div class="ns-c-tight">
<div class="info-box">

**C 언어 핵심 개념**
- 기본 문법과 데이터 타입
- 포인터와 포인터 연산
- 구조체와 공용체
- 메모리 할당/해제 (malloc, free)
- 함수 포인터 개념

</div>
</div>

:: right ::
<div class="code-sm">

```c
// GStreamer에서 자주 보는 C 패턴들
typedef struct _GstElement GstElement;
typedef struct _GstElementClass GstElementClass;

// 포인터와 캐스팅
GstElement *element = gst_element_factory_make("videotestsrc", "source");
GObject *object = G_OBJECT(element);

// 구조체와 함수 포인터
struct _GstElementClass {
  GstObjectClass parent_class;
  
  /* virtual methods for subclasses */
  GstStateChangeReturn (*change_state) (GstElement *element, 
                                        GstStateChange transition);
};
```
</div> 

::default ::
<div class="highlight-box">
C++ 스타일의 객체지향보다는 C 기반의 구조적 프로그래밍 이해가 중요
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# 2. GLib/GObject 시스템 - 핵심 개념

:: content ::
<div class="custom-table-small">

| 개념 | 설명 | GStreamer에서의 활용 |
|------|------|---------------------|
| **GType** | 런타임 타입 시스템 | 모든 GStreamer 객체의 기반 |
| **GObject** | 기본 객체 모델 | 모든 엘리먼트가 GObject 상속 |
| **Properties** | 객체 속성 시스템 | 엘리먼트 설정 및 조회 |
| **Signals** | 비동기 통신 메커니즘 | 이벤트 처리 및 콜백 |
| **Reference Counting** | 자동 메모리 관리 | 객체 생명주기 관리 |
| **Main Loop** | 이벤트 루프 시스템 | 비동기 처리 및 메시지 처리 |

</div>

<div class="highlight-box mt-6">
GStreamer는 GObject의 객체지향 기능을 C 언어로 구현합니다.
</div>

---
layout: top-title-two-cols
columns: is-9
hideInToc: true
---
:: title ::
# 2. GLib/GObject - 실제 사용 패턴

:: left ::
<style>
/* 기존 스타일들... */

</style>

<div class="text-sm code-xs code-dense">

**Properties (속성) 사용**
```c
// 속성 설정
g_object_set(G_OBJECT(element), 
             "pattern", 1,
             "width", 640,
             NULL);

// 속성 조회
gint pattern;
g_object_get(G_OBJECT(element), 
             "pattern", &pattern, 
             NULL);
```

**Signals (신호) 연결**
```c
// 신호 연결
g_signal_connect(pipeline, "about-to-finish",
                 G_CALLBACK(on_about_to_finish), 
                 user_data);
```

</div>

:: right ::
<div class="text-sm code-xs code-dense">

**Reference Counting**
```c
// 참조 증가
gst_object_ref(element);

// 참조 감소 (0이 되면 자동 해제)
gst_object_unref(element);
```

**Casting과 Type Checking**
```c
// 안전한 캐스팅
if (GST_IS_ELEMENT(object)) {
  GstElement *element = GST_ELEMENT(object);
}

// 타입 확인
if (G_TYPE_CHECK_INSTANCE_TYPE(object, GST_TYPE_PIPELINE)) {
  // pipeline 관련 작업
}
```

</div>

:: default ::

<div class="success-box text-sm">
<strong>학습 팁:</strong> GTK+ 애플리케이션 개발 경험이 있다면 이미 익숙한 패턴들입니다.
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# 3. Linux/Unix 시스템 운용 지식

:: content ::
<div class="custom-table-small">

| 영역 | 핵심 내용 | GStreamer 연관성 |
|------|-----------|------------------|
| **파일시스템 구조** | /usr/lib, /usr/include, /usr/share | 플러그인과 라이브러리 위치 |
| **빌드 시스템** | Make, CMake, Meson | GStreamer 빌드 및 플러그인 개발 |
| **라이브러리 관리** | 동적/정적 링킹, LD_LIBRARY_PATH | 플러그인 로딩 메커니즘 |
| **패키지 관리** | apt, yum, pacman | 개발 환경 구성 |
| **환경 변수** | PATH, PKG_CONFIG_PATH | 빌드 및 런타임 설정 |

</div>

<div class="highlight-box mt-6">

**중요한 환경 변수들**
```bash
# GStreamer 관련 주요 환경 변수
export GST_PLUGIN_PATH=/usr/local/lib/gstreamer-1.0
export GST_DEBUG=3
export GST_DEBUG_DUMP_DOT_DIR=/tmp
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
```

</div>

---
layout: top-title-two-cols
columns: is-7
hideInToc: true
---
:: title ::
# 4. 멀티미디어 기초 지식

:: left ::
<div class="info-box ns-c-tight text-base">

**오디오 기본 개념**
- 샘플링 레이트 (44.1kHz, 48kHz)
- 비트 깊이 (16bit, 24bit, 32bit)
- 채널 구성 (모노, 스테레오, 5.1)
- PCM, 압축 포맷

**비디오 기본 개념**
- 해상도와 픽셀 포맷
- 프레임레이트 (fps)
- 컬러스페이스 (RGB, YUV)
- Progressive vs Interlaced

**동기화 개념**
- PTS (Presentation Time Stamp)
- 오디오-비디오 동기화

</div>

:: right ::
<div class="code-sm">

```bash
# GStreamer에서 포맷 지정 예제
gst-launch-1.0 \
  audiotestsrc ! \
  "audio/x-raw,format=S16LE,rate=44100,channels=2" ! \
  autoaudiosink

gst-launch-1.0 \
  videotestsrc ! \
  "video/x-raw,format=I420,width=640,height=480,framerate=30/1" ! \
  autovideosink
```
</div>

---
layout: top-title-two-cols
columns: is-6
hideInToc: true
---
:: title ::
# 5. 개발 도구 및 빌드 시스템

:: left ::

<div class="info-box ns-c-tight text-base">

**Meson 빌드 시스템**
- GStreamer 1.x의 메인 빌드 시스템
- 크로스 컴파일 지원
- 빠른 빌드 성능

**pkg-config 시스템**
- 라이브러리 의존성 관리
- 컴파일 플래그 자동 생성

**디버깅 도구**
- gdb: 기본 디버거
- Valgrind: 메모리 누수 검사
- GST_DEBUG: GStreamer 전용 로깅

</div>

:: right ::
```bash
# Meson 빌드 예제
meson setup builddir
meson compile -C builddir

# pkg-config 사용법
pkg-config --cflags gstreamer-1.0
pkg-config --libs gstreamer-1.0

# GStreamer 디버깅
export GST_DEBUG=category:level
export GST_DEBUG="GST_STATES:4,GST_PADS:3"

# 파이프라인 시각화
export GST_DEBUG_DUMP_DOT_DIR=/tmp
gst-launch-1.0 videotestsrc ! autovideosink
dot -Tpng /tmp/*.dot -o pipeline.png
```

---
layout: top-title-two-cols
columns: is-8
hideInToc: true
---
:: title ::
# 6. 네트워킹 및 스트리밍 (선택사항)

:: left ::
<div class="info-box ns-c-tight text-base">

**프로토콜 기초**
- HTTP: 기본 웹 프로토콜
- RTSP: 실시간 스트리밍 프로토콜
- RTP/RTCP: 실시간 전송 프로토콜
- WebRTC: 웹 기반 실시간 통신

**네트워크 개념**
- TCP vs UDP 특성
- 지연(Latency)과 버퍼링
- 대역폭과 비트레이트

**스트리밍 아키텍처**
- 서버-클라이언트 모델
- P2P 통신
- 적응적 스트리밍

</div>

:: right ::
```bash
# GStreamer 네트워크 스트리밍 예제

# HTTP 스트리밍
gst-launch-1.0 \
  souphttpsrc location=http://example.com/stream.m3u8 ! \
  decodebin ! autovideosink

# RTSP 스트리밍
gst-launch-1.0 \
  rtspsrc location=rtsp://example.com/stream ! \
  decodebin ! autovideosink

# UDP 스트리밍 (송신)
gst-launch-1.0 \
  videotestsrc ! x264enc ! rtph264pay ! \
  udpsink host=192.168.1.100 port=5000

# UDP 스트리밍 (수신)  
gst-launch-1.0 \
  udpsrc port=5000 ! rtph264depay ! \
  h264parse ! decodebin ! autovideosink
```

