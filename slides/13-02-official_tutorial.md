---
layout: top-title
hideInToc: true
---
:: title ::
# GStreamer 공식 튜토리얼 개요

:: content ::
<div class="highlight-box text-xs">
<strong>참고 자료:</strong> https://gstreamer.freedesktop.org/documentation/tutorials/basic/index.html?gi-language=c
</div>

<div class="custom-table-xs mt-6">

| 튜토리얼 | 제목 | 주요 학습 내용 | 핵심 API/개념 |
|----------|------|----------------|---------------|
| **Basic #1** | Hello World! | 가장 기본적인 파이프라인 생성 | `gst_parse_launch()`,<br> `gst_element_set_state()` |
| **Basic #2** | GStreamer concepts | 엘리먼트 수동 생성 및 연결 | `gst_element_factory_make()`,<br> `gst_element_link()` |
| **Basic #3** | Dynamic pipelines | 런타임 패드 연결 처리 | `pad-added` 신호,<br> `gst_pad_link()` |
| **Basic #4** | Time management | 시간 관리 및 탐색 기능 | `gst_element_query_position()`,<br> `gst_element_seek_simple()` |
| **Basic #5** | GUI toolkit integration | GUI와 GStreamer 통합 | GTK+, 비디오 오버레이 |
| **Basic #6** | Media formats and Pad Capabilities | 미디어 포맷과 패드 capabilities | `GstCaps`, caps 협상 |
| **Basic #7** | Multithreading and Pad Availability | 멀티스레딩과 패드 가용성 | `queue`, `tee`, 동적 패드 |
| **Basic #8** | Short-cutting the pipeline | 파이프라인 단축 및 최적화 | `appsrc`, `appsink`, 커스텀 데이터 |
| **Basic #12** | Streaming | 네트워크 스트리밍 구현 | HTTP, RTSP, 스트리밍 프로토콜 |
| **Basic #13** | Playback speed | 재생 속도 제어 | `gst_event_new_step()`,<br> seek 이벤트 플래그 |
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Basic Tutorial #1: Hello World!

:: content ::
<div class="flex flex-wrap ns-c-tight text-sm">
<div class="w-1/2 pr-2">

#### 학습 목표
- GStreamer 초기화 방법
- 간단한 파이프라인 생성
- 파이프라인 실행 및 정리


</div>
<div class="w-1/2">

#### 주요 API
- `gst_init()`: GStreamer 초기화
- `gst_parse_launch()`: 문자열로 파이프라인 생성
- `gst_element_set_state()`: 상태 변경
- `gst_bus_timed_pop_filtered()`: 메시지 대기

#### 실습 포인트
- playbin 엘리먼트의 강력함 체험
- 상태 변경과 메시지 버스 개념 이해
- 리소스 정리의 중요성 학습

</div>
</div>

<div class="code-dense text-sm mt-3">

#### 핵심 코드
```c
// 가장 간단한 방법
GstElement *pipeline = gst_parse_launch(
    "playbin uri=https://www.freedesktop.org/software/"
    "gstreamer-sdk/data/media/sintel_trailer-480p.webm", 
    NULL);

gst_element_set_state(pipeline, GST_STATE_PLAYING);
```
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Basic Tutorial #2: GStreamer concepts

:: content ::
<div class="flex flex-wrap ns-c-tight text-sm">
<div class="w-1/2 pr-2">

#### 학습 목표
- 엘리먼트 개별 생성 및 연결
- Bin과 Pipeline 개념 이해
- 수동 파이프라인 구성법

</div>
<div class="w-1/2">

#### 주요 API
- `gst_element_factory_make()`: 팩토리로 엘리먼트 생성
- `gst_pipeline_new()`: 파이프라인 생성
- `gst_bin_add_many()`: 여러 엘리먼트 추가
- `gst_element_link()`: 엘리먼트 연결

#### 실습 포인트
- videotestsrc → autovideosink 파이프라인
- 엘리먼트 프로퍼티 설정
- 에러 처리 패턴

</div>
</div>

<div class="code-dense text-sm mt-3">

#### 핵심 코드
```c
// 개별 엘리먼트 생성
source = gst_element_factory_make("videotestsrc", "source");
sink = gst_element_factory_make("autovideosink", "sink");
pipeline = gst_pipeline_new("test-pipeline");

// 파이프라인에 추가 및 연결
gst_bin_add_many(GST_BIN(pipeline), source, sink, NULL);
gst_element_link(source, sink);
```
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Basic Tutorial #3: Dynamic pipelines

:: content ::
<div class="flex flex-wrap ns-c-tight text-sm">
<div class="w-1/2 pr-2">

#### 학습 목표
- 런타임 시 동적으로 패드 연결
- pad-added 신호 처리
- demuxer 엘리먼트 활용

</div>
<div class="w-1/2">

#### 주요 API
- `g_signal_connect()`: 신호 연결
- `gst_pad_get_current_caps()`: 패드 capabilities 조회
- `gst_caps_get_structure()`: caps 구조 분석
- `gst_element_get_static_pad()`: 정적 패드 조회

#### 실습 포인트
- uridecodebin 사용법
- 오디오/비디오 스트림 분리 처리
- 동적 파이프라인의 복잡성 이해

</div>
</div>

<div class="code-dense text-sm mt-3">

#### 핵심 코드
```c
// 신호 연결
g_signal_connect(source, "pad-added", 
                 G_CALLBACK(pad_added_handler), 
                 data);

// 패드 연결 핸들러
static void pad_added_handler(GstElement *src, 
                              GstPad *new_pad, 
                              CustomData *data) {
    // 패드 capabilities 확인 후 연결
}
```

</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Basic Tutorial #4: Time management

:: content ::
<div class="flex flex-wrap ns-c-tight text-sm">
<div class="w-1/2 pr-2">

#### 학습 목표
- 재생 시간 및 위치 쿼리
- 탐색(seek) 기능 구현
- 시간 관련 쿼리 처리

</div>
<div class="w-1/2">

#### 주요 API
- `gst_element_query_position()`: 현재 위치 쿼리
- `gst_element_query_duration()`: 총 시간 쿼리
- `gst_element_seek_simple()`: 간단한 탐색
- `GST_FORMAT_TIME`: 시간 포맷 상수

#### 실습 포인트
- 진행률 표시 구현
- 키보드 입력으로 탐색 제어
- 스트림 정보 표시

</div>
</div>

<div class="code-dense text-sm mt-1">

#### 핵심 코드
```c
// 위치 쿼리
if (gst_element_query_position(data.pipeline, 
                               GST_FORMAT_TIME, 
                               &current)) {
    // 현재 위치 출력
}

// 탐색
gst_element_seek_simple(data.pipeline, 
                        GST_FORMAT_TIME,
                        GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT,
                        30 * GST_SECOND);
```

</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Basic Tutorial #5: GUI toolkit integration

:: content ::
<div class="flex flex-wrap ns-c-tight text-sm">
<div class="w-1/2 pr-2">

#### 학습 목표
- GTK+와 GStreamer 통합
- 비디오 오버레이 사용법
- GUI 이벤트 처리

</div>
<div class="w-1/2">

#### 주요 API
- `gst_video_overlay_set_window_handle()`: 비디오 윈도우 설정
- `gst_bus_set_sync_handler()`: 동기 메시지 처리
- GTK+ 위젯 이벤트 연결

#### 실습 포인트
- 비디오 위젯 생성
- 재생 컨트롤 버튼
- 볼륨 슬라이더
- 진행률 표시바

</div>
</div>

<div class="code-dense text-sm mt-1">

#### 핵심 코드
```c
// GTK+ 윈도우에 비디오 출력
if (data.video_sink) {
    gst_video_overlay_set_window_handle(
        GST_VIDEO_OVERLAY(data.video_sink),
        GDK_WINDOW_XID(gtk_widget_get_window(data.video_window))
    );
}

// 재생/일시정지 토글
static void play_cb(GtkButton *button, CustomData *data) {
    gst_element_set_state(data->pipeline, GST_STATE_PLAYING);
}
```

</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Basic Tutorial #6: Media formats and Pad Capabilities

:: content ::
<div class="flex flex-wrap ns-c-tight text-sm">
<div class="w-1/2 pr-2">

#### 학습 목표
- Pad Capabilities 시스템 이해
- 미디어 포맷 협상 과정
- caps 필터링 및 변환

</div>
<div class="w-1/2">

#### 주요 API
- `gst_pad_get_current_caps()`: 현재 caps 조회
- `gst_caps_to_string()`: caps를 문자열로 변환
- `gst_caps_from_string()`: 문자열에서 caps 생성
- `GST_PAD_PROBE_TYPE_BUFFER`: 패드 프로브

#### 실습 포인트
- 다양한 미디어 포맷 처리
- caps 협상 과정 모니터링
- 포맷 변환 파이프라인

</div>
</div>

<div class="code-dense text-sm">

#### 핵심 코드
```c
// Caps 쿼리 및 출력
GstCaps *caps = gst_pad_get_current_caps(pad);
if (caps) {
    gchar *caps_str = gst_caps_to_string(caps);
    g_print("Caps: %s\n", caps_str);
    g_free(caps_str);
    gst_caps_unref(caps);
}

// Caps 필터 사용
GstElement *capsfilter = gst_element_factory_make("capsfilter", NULL);
GstCaps *filtercaps = gst_caps_from_string("video/x-raw,width=320,height=240");
g_object_set(capsfilter, "caps", filtercaps, NULL);
```

</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Basic Tutorial #7: Multithreading and Pad Availability

:: content ::
<div class="flex flex-wrap ns-c-tight text-sm">
<div class="w-1/2 pr-2">

#### 학습 목표
- 멀티스레딩 파이프라인 구성
- queue 엘리먼트 활용
- tee를 통한 스트림 분기

</div>
<div class="w-1/2">

#### 주요 API
- `gst_element_get_request_pad()`: 요청 패드 생성
- `gst_element_release_request_pad()`: 요청 패드 해제
- `queue` 엘리먼트: 스레드 경계 생성

#### 실습 포인트
- 오디오/비디오 동시 출력
- 스레딩 모델 이해
- 패드 가용성 타입 학습

</div>
</div>

<div class="code-dense text-sm mt-3">

#### 핵심 코드
```c
// tee로 스트림 분기
tee = gst_element_factory_make("tee", "tee");
audio_queue = gst_element_factory_make("queue", "audio_queue");
video_queue = gst_element_factory_make("queue", "video_queue");

// 동적 패드 요청
GstPad *tee_audio_pad = gst_element_get_request_pad(tee, "src_%u");
GstPad *queue_audio_pad = gst_element_get_static_pad(audio_queue, "sink");
gst_pad_link(tee_audio_pad, queue_audio_pad);
```

</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Basic Tutorial #8: Short-cutting the pipeline

:: content ::
<div class="flex flex-wrap ns-c-tight text-sm">
<div class="w-1/2 pr-2">

#### 학습 목표
- appsrc/appsink 활용
- 커스텀 데이터 주입/추출
- 파이프라인 단축 기법

</div>
<div class="w-1/2">

#### 주요 API
- `appsrc`: 애플리케이션에서 데이터 공급
- `appsink`: 애플리케이션으로 데이터 추출
- `gst_app_src_push_buffer()`: 버퍼 푸시
- `need-data`, `enough-data` 신호

#### 실습 포인트
- 사인파 오디오 생성
- 실시간 데이터 스트리밍
- 백프레셔(backpressure) 처리

</div>
</div>

<div class="code-dense text-sm">

#### 핵심 코드
```c
// appsrc 설정
app_source = gst_element_factory_make("appsrc", "audio_source");
g_object_set(app_source, 
             "caps", gst_caps_new_simple("audio/x-raw", 
                                         "format", G_TYPE_STRING, "S16LE",
                                         "layout", G_TYPE_STRING, "interleaved",
                                         "rate", G_TYPE_INT, SAMPLE_RATE,
                                         "channels", G_TYPE_INT, 1, NULL),
             "format", GST_FORMAT_TIME, NULL);

// 데이터 푸시
g_signal_connect(app_source, "need-data", G_CALLBACK(start_feed), &data);
g_signal_connect(app_source, "enough-data", G_CALLBACK(stop_feed), &data);
```

</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Basic Tutorial #12: Streaming

:: content ::
<div class="flex flex-wrap ns-c-tight text-sm">
<div class="w-1/2 pr-2">

#### 학습 목표
- 네트워크 스트리밍 구현
- HTTP/RTSP 프로토콜 활용
- 스트리밍 서버/클라이언트 구성

#### 실습 포인트
- 다양한 프로토콜별 파이프라인 구성
- 네트워크 버퍼링 및 지연 처리
- 스트리밍 품질 모니터링
- 방화벽 및 NAT 고려사항

</div>
<div class="w-1/2">

#### 주요 API
- `souphttpsrc`: HTTP 소스 엘리먼트
- `rtspsrc`: RTSP 소스 엘리먼트  
- `udpsrc`/`udpsink`: UDP 네트워크 엘리먼트
- `rtpbin`: RTP 세션 관리

</div>
</div>

<div class="code-dense text-sm">

#### 핵심 코드
```c
// HTTP 스트리밍
pipeline = gst_parse_launch(
    "souphttpsrc location=http://docs.gstreamer.com/media/sintel_trailer-480p.webm ! "
    "matroskademux ! vp8dec ! videoconvert ! autovideosink", NULL);
// RTSP 스트리밍  
pipeline = gst_parse_launch(
    "rtspsrc location=rtsp://wowzaec2demo.streamlock.net/vod-multitrack/_definst_/mp4:ElephantsDream/ElephantsDream.mp4 ! "
    "decodebin ! autovideosink", NULL);
// UDP 스트리밍
pipeline = gst_parse_launch(
    "udpsrc port=5000 ! application/x-rtp,payload=96 ! rtpjitterbuffer ! "
    "rtph264depay ! avdec_h264 ! autovideosink", NULL);
```

</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Basic Tutorial #13: Playback speed

:: content ::
<div class="flex flex-wrap ns-c-tight text-sm">
<div class="w-1/2 pr-2">

#### 학습 목표
- 재생 속도 동적 제어
- Step 프레임 단위 재생
- 빨리감기/슬로우모션 구현

#### 실습 포인트
- 정방향/역방향 재생 구현
- 키보드 단축키로 속도 제어
- 프레임 정확도 vs 성능 트레이드오프
- 오디오 동기화 이슈 해결

</div>
<div class="w-1/2">

#### 주요 API
- `gst_element_seek()`: seek 이벤트로 속도 제어
- `gst_event_new_step()`: 프레임 단위 이동
- `GST_SEEK_FLAG_TRICKMODE`: 트릭모드 플래그
- `GST_SEEK_FLAG_TRICKMODE_KEY_UNITS`: 키프레임만 재생

</div>
</div>

<div class="code-dense text-sm">

#### 핵심 코드
```c
// 2배속 재생
gst_element_seek(data.pipeline, 2.0, GST_FORMAT_TIME,
    GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_ACCURATE,
    GST_SEEK_TYPE_NONE, GST_CLOCK_TIME_NONE,
    GST_SEEK_TYPE_NONE, GST_CLOCK_TIME_NONE);
// 역방향 재생 (0.5배속)
gst_element_seek(data.pipeline, -0.5, GST_FORMAT_TIME,
    GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_ACCURATE,
    GST_SEEK_TYPE_NONE, GST_CLOCK_TIME_NONE,
    GST_SEEK_TYPE_NONE, GST_CLOCK_TIME_NONE);
// 프레임 단위 이동
GstEvent *step_event = gst_event_new_step(GST_FORMAT_BUFFERS, 1, 1.0, TRUE, FALSE);
gst_element_send_event(data.pipeline, step_event);
```

</div>
