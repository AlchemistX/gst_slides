---
layout: top-title
hideInToc: true
---
:: title ::
# gst-inspect-1.0

:: content ::
<div class="highlight-box">
GStreamer 개발에서 가장 중요한 도구 중 하나로, 엘리먼트와 플러그인의 상세 정보를 조회할 수 있습니다.
</div>

<div class="custom-table">

| 기능 | 설명 | 활용도 |
|------|------|--------|
| **엘리먼트 검사** | 프로퍼티, 패드, 신호 등 상세 정보 조회 | 필수 |
| **플러그인 탐색** | 설치된 플러그인 목록 및 기능 확인 | 필수 |
| **Caps 확인** | 지원하는 미디어 형식과 제약사항 조회 | 중요 |
| **호환성 검증** | 엘리먼트 간 연결 가능성 확인 | 중요 |

</div>

<div class="code-sm mt-6">

```bash
# 기본 사용법
gst-inspect-1.0 [OPTIONS] [ELEMENT|PLUGIN]
```
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# gst-inspect-1.0 : 명령어 옵션

:: content ::
<div class="code-xs code-dense">

```bash
> gst-inspect-1.0 --help
Usage:
  gst-inspect-1.0 [OPTION…] [ELEMENT-NAME | PLUGIN-NAME]

Help Options:
  -h, --help                           Show help options
  --help-all                           Show all help options
  --help-gst                           Show GStreamer Options

Application Options:
  -a, --print-all                      Print all elements
  -b, --print-blacklist                Print list of blacklisted files
  --print-plugin-auto-install-info     Print a machine-parsable list of features the specified plugin or all plugins provide.
                                       Useful in connection with external automatic plugin installation mechanisms
  --plugin                             List the plugin contents
  -t, --types                          A slashes ('/') separated list of types of elements (also known as klass) to list. (unordered)
  --exists                             Check if the specified element or plugin exists
  --atleast-version                    When checking if an element or plugin exists, also check that its version is at least the version specified
  -u, --uri-handlers                   Print supported URI schemes, with the elements that implement them
  --no-colors                          Disable colors in output. You can also achieve the same by setting 'GST_INSPECT_NO_COLORS' environment variable to any value.
  --sort=<sort-key>                    Sort plugins and features. Sorting keys: name (default), none.
  -C, --color                          Color output, even when not sending to a tty.
  --version                            Print version information and exit
```
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# gst-inspect-1.0 : 명령어 옵션 활용

:: content ::
<div class="custom-table-small">

| 옵션 | 설명 | 사용 예시 |
|------|------|-----------|
| `-a, --print-all` | 모든 엘리먼트 나열 | `gst-inspect-1.0 -a` |
| `--plugin` | 특정 플러그인의 엘리먼트들 | `gst-inspect-1.0 --plugin=coreelements` |
| `-t, --types` | 특정 타입의 엘리먼트만 | `gst-inspect-1.0 -t Source/Video` |
| `-u, --uri-handlers` | URI 스킴 핸들러 목록 | `gst-inspect-1.0 -u` |
| `--exists` | 엘리먼트 존재 여부 확인 | `gst-inspect-1.0 --exists h264parse` |

</div>

<div class="code-xs code-dense mt-6">

```bash
# 소스 엘리먼트만 찾기
gst-inspect-1.0 -t Source

# URI 핸들러 확인
gst-inspect-1.0 -u | grep http

# 엘리먼트 존재 확인
if gst-inspect-1.0 --exists x264enc; then
  echo "x264enc available"
fi

# 버전 정보 확인
gst-inspect-1.0 --version
```

</div>

---
layout: top-title-two-cols
columns: is-5
hideInToc: true
---
:: title ::
# gst-inspect-1.0 : 기본 사용법

:: left ::
<div class="text-sm code-xs code-dense">

#### 모든 플러그인 확인
```bash
# 설치된 모든 플러그인 나열
gst-inspect-1.0
```

#### 특정 키워드로 검색
```bash
# 비디오 관련 플러그인 찾기
gst-inspect-1.0 | grep -i video

# 오디오 관련 플러그인 찾기  
gst-inspect-1.0 | grep -i audio

# 코덱 관련 플러그인 찾기
gst-inspect-1.0 | grep -i codec
```

#### 플러그인 개수 확인
```bash
# 총 플러그인 수
gst-inspect-1.0 | awk -F: '{print $1}' | uniq | wc -l
```

</div>

:: right ::
<div class="code-xs code-dense mt-11">

```bash
> gst-inspect-1.0 | head -20
accurip:  accurip: AccurateRip(TM) CRC element
adaptivedemux2:  dashdemux2: DASH Demuxer
adaptivedemux2:  hlsdemux2: HLS Demuxer
adaptivedemux2:  mssdemux2: Smooth Streaming demuxer (v2)
adder:  adder: Adder
adpcmdec:  adpcmdec: ADPCM decoder
adpcmenc:  adpcmenc: ADPCM encoder
aes:  aesdec: aesdec
aes:  aesenc: aesenc
aiff:  aiffmux: AIFF audio muxer
aiff:  aiffparse: AIFF audio demuxer
alaw:  alawdec: A Law audio decoder
alaw:  alawenc: A Law audio encoder
alpha:  alpha: Alpha filter
alphacolor:  alphacolor: Alpha color filter
analyticsoverlay:  objectdetectionoverlay: Object Detection Overlay
apetag:  apedemux: APE tag demuxer
app:  appsink: AppSink
app:  appsrc: AppSrc
asf:  asfdemux: ASF Demuxer
```

</div>

---
layout: top-title-two-cols
columns: is-6
hideInToc: true
---
:: title ::
# gst-inspect-1.0 : 특정 엘리먼트 상세 검사

:: left ::
<div class="ns-c-tight text-sm code-xs code-dense">

#### videotestsrc 엘리먼트 분석
```bash
gst-inspect-1.0 videotestsrc
```

#### 주요 정보 섹션들
- **Factory Details**: 엘리먼트 팩토리 기본정보
- **Plugin Details**: 플러그인 메타데이터와 버전정보
- **Implemented Interfaces**: 구현된 GStreamer 인터페이스들
- **Element Flags**: 엘리먼트 동작 특성플래그
- **Pad Templates**: 패드 템플릿과 캡스
- **Pads**: 실제 생성된 패드들
- **Element Properties**: 설정가능한 프로퍼티 목록

#### 특정 섹션만 확인
```bash
# 프로퍼티만 확인
gst-inspect-1.0 videotestsrc | grep -A 50 "Element Properties"

# 패드 템플릿만 확인
gst-inspect-1.0 videotestsrc | grep -A 20 "Pad Templates"
```

</div>

:: right ::
<div class="code-xs code-dense">

```bash
Factory Details:
  Rank                     none (0)
  Long-name                Video test source
  Klass                    Source/Video
  Description              Creates a test video stream
  Author                   David A. Schleef <ds@schleef.org>
  Documentation            [truncated....]

Plugin Details:
  Name                     videotestsrc
  Description              Creates a test video stream
  Filename                 [truncated....] 
  Version                  1.27.1.1
  License                  LGPL
  Source module            gst-plugins-base
  Documentation            [truncated....]  
  Binary package           GStreamer Base Plug-ins git
  Origin URL               Unknown package origin

GObject
 +----GInitiallyUnowned
       +----GstObject
             +----GstElement
                   +----GstBaseSrc
                         +----GstPushSrc
                               +----GstVideoTestSrc

Element Flags:
  - SOURCE

Pad Templates:
  SRC template: 'src'
    Availability: Always
```

</div>

---
layout: top-title-two-cols
columns: is-6
hideInToc: true
---
:: title ::
# gst-inspect-1.0 : Pad Templates 와 Capabilities 이해

:: left ::
<div class="ns-c-tight text-xs">

#### Pad Templates 구조
- **Direction**: 패드 방향 (SRC/SINK)
- **Name**: 패드 이름 (src, sink 등)
- **Availability**: 패드 가용성 (Always/Sometimes/On request) 
- **Capabilities**: 지원하는 미디어 형식

<div class="mt-10">

#### Capabilities 정보
- **Name**: MIME type (video/x-raw, audio/x-raw 등)
- **Properties**
  - GstValueList 타입 : format, multiview-mode
  - GstValueRange 타입 : width, height
  - GstFractionRange 타입 : framerate


</div>
</div>

:: right ::
<div class="code-xs code-dense mt-20">

```bash
# videotestsrc의 출력 패드 확인
Pad Templates:
  SRC template: 'src'
    Availability: Always
    Capabilities:
      video/x-raw
                 format: { [truncated...] } (GstValueList)
                  width: [ 1, 2147483647 ] (GstIntRange)
                 height: [ 1, 2147483647 ] (GstIntRange)
              framerate: [ 0/1, 2147483647/1 ] (GstFractionRange)
         multiview-mode: { (string)mono, (string)left, (string)right } (GstValueList)
      video/x-bayer
                 format: { [truncated...] } (GstValueList)
                  width: [ 1, 2147483647 ] (GstIntRange)
                 height: [ 1, 2147483647 ] (GstIntRange)
              framerate: [ 0/1, 2147483647/1 ] (GstFractionRange)
         multiview-mode: { (string)mono, (string)left, (string)right } (GstValueList)
```

</div>
