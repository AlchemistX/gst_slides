---
layout: top-title
hideInToc: true
---
:: title ::
# gst-launch-1.0

:: content ::
<div class="highlight-box">
GStreamer 파이프라인을 명령줄에서 구성하고 실행할 수 있는 강력한 도구입니다.
</div>

<div class="custom-table">

| 기능 | 설명 | 활용도 |
|------|------|--------|
| **파이프라인 구성** | 엘리먼트들을 연결하여 미디어 처리 파이프라인 생성 | 필수 |
| **빠른 테스트** | 개발 중인 파이프라인의 빠른 프로토타이핑 | 필수 |
| **디버깅** | 파이프라인 동작 확인 및 문제 진단 | 중요 |
| **스크립팅** | 자동화된 미디어 처리 작업 | 유용 |

</div>

<div class="code-sm mt-6">

```bash
# 기본 사용법
gst-launch-1.0 [OPTIONS] PIPELINE-DESCRIPTION
```
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# gst-launch-1.0 : 명령어 옵션

:: content ::
<div class="code-xs code-dense">

```bash
❯ gst-launch-1.0 --help
Usage:
  gst-launch-1.0 [OPTION…] PIPELINE-DESCRIPTION

Help Options:
  -h, --help                        Show help options
  --help-all                        Show all help options
  --help-gst                        Show GStreamer Options

Application Options:
  -t, --tags                        Output tags (also known as metadata)
  -c, --toc                         Output TOC (chapters and editions)
  -v, --verbose                     Output status information and property notifications
  -q, --quiet                       Do not print any progress information
  -m, --messages                    Output messages
  -X, --exclude=PROPERTY-NAME       Do not output status information for the specified property \
                                    if verbose output is enabled (can be used multiple times)
  -p, --prog-name=PROGRAM-NAME      Set the name of the program
  -f, --no-fault                    Do not install a fault handler
  -e, --eos-on-shutdown             Force EOS on sources before shutting the pipeline down
  --version                         Print version information and exit
  --no-position                     Do not print current position of pipeline. \
                                    If this option is unspecified, the position will be printed when stdout is a TTY.\
                                    To enable printing position when stdout is not a TTY, use "force-position" option
  --force-position                  Allow printing current position of pipeline even if stdout is not a TTY.\
                                    This option has no effect if the "no-position" option is specified
```
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# gst-launch-1.0 : 주요 옵션 활용

:: content ::
<div class="custom-table-small">

| 옵션 | 설명 | 사용 예시 |
|------|------|-----------|
| `-v, --verbose` | 상세한 상태 정보 출력 | `gst-launch-1.0 -v videotestsrc ! autovideosink` |
| `-m, --messages` | 메시지 버스 정보 출력 | `gst-launch-1.0 -m playbin uri=file://test.mp4` |
| `-t, --tags` | 메타데이터 태그 출력 | `gst-launch-1.0 -t filesrc location=music.mp3 ! decodebin ! autoaudiosink` |
| `-q, --quiet` | 진행 정보 숨김 | `gst-launch-1.0 -q videotestsrc num-buffers=100 ! fakesink` |
| `-e, --eos-on-shutdown` | 종료 시 강제로 EOS 신호 전송 | `gst-launch-1.0 -e videotestsrc ! autovideosink` |

</div>

<div class="code-xs code-dense mt-6">

```bash
# 상세 정보와 함께 실행
gst-launch-1.0 -v videotestsrc ! autovideosink

# 메시지 정보 확인
gst-launch-1.0 -m filesrc location=test.mp4 ! decodebin ! autovideosink

# 조용한 모드로 실행
gst-launch-1.0 -q audiotestsrc ! autoaudiosink
```

</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# gst-launch-1.0 : 파이프라인 문법 기본

:: content ::
<div class="highlight-box">
gst-launch-1.0은 간단하면서도 강력한 도메인 특화 언어를 제공합니다.
</div>

<div class="custom-table-small">

| 문법 요소 | 설명 | 예시 |
|-----------|------|------|
| **엘리먼트** | 처리 단위 | `videotestsrc`, `autovideosink` |
| **!** | 엘리먼트 연결 | `videotestsrc ! autovideosink` |
| **프로퍼티** | 엘리먼트 설정 | `videotestsrc pattern=1` |
| **Caps** | 미디어 형식 지정 | `video/x-raw,width=640,height=480` |
| **패드명** | 특정 패드 지정 | `tee name=t t.src_0 !` |

</div>

<div class="code-sm code-dense mt-6">

```bash
# 기본 연결
element1 ! element2 ! element3

# 프로퍼티 설정
videotestsrc pattern=1 ! autovideosink

# Caps 필터 사용
videotestsrc ! video/x-raw,width=640,height=480 ! autovideosink
```
</div>

---
layout: top-title-two-cols
columns: is-5
hideInToc: true
---
:: title ::
# gst-launch-1.0 : 엘리먼트 프로퍼티 설정

:: left ::
<div class="ns-c-tight text-sm">

#### 프로퍼티 설정 문법
- `element property=value`
- 여러 프로퍼티: `element prop1=val1 prop2=val2`
- 문자열 값에 공백이 있을 경우 따옴표 사용

<div class="mt-10">

#### 데이터 타입별 설정
- **정수**: `pattern=1`
- **문자열**: `location="file name.mp4"`
- **부울**: `live=true`, `sync=false`
- **열거형**: `pattern=smpte`
</div>

</div>

:: right ::
<div class="code-dense">

```bash
# 정수 프로퍼티
videotestsrc pattern=1 num-buffers=100

# 문자열 프로퍼티
filesrc location=/path/to/file.mp4

# 부울 프로퍼티
audiotestsrc is-live=true

# 여러 프로퍼티 동시 설정
videotestsrc pattern=smpte width=320 height=240

# 공백이 포함된 문자열
filesrc location="my video file.mp4"
```

</div>

---
layout: top-title-two-cols
columns: is-5
hideInToc: true
---
:: title ::
# gst-launch-1.0 : Caps 필터 사용법

:: left ::
<div class="ns-c-tight text-sm">

#### Caps (Capabilities) 필터
- 엘리먼트 간 전달되는 미디어 형식을 명시적으로 지정
- 자동 협상을 제한하여 원하는 형식 강제
- MIME 타입과 속성들로 구성

<div class="mt-11">

#### 주요 MIME 타입
- `video/x-raw`: 압축되지 않은 비디오
- `audio/x-raw`: 압축되지 않은 오디오
- `video/x-h264`: H.264 압축 비디오
- `audio/mpeg`: MPEG 오디오

</div>
</div>

:: right ::
<div class="code-dense">

```bash
# 비디오 해상도 지정
videotestsrc ! video/x-raw,width=640,height=480 ! autovideosink

# 오디오 형식 지정
audiotestsrc ! audio/x-raw,rate=44100,channels=2 ! autoaudiosink

# 프레임레이트 지정
videotestsrc ! video/x-raw,framerate=30/1 ! autovideosink

# 여러 속성 조합
videotestsrc ! \
  video/x-raw,width=1920,height=1080,framerate=25/1,format=I420 ! \
  autovideosink
```

</div>

---
layout: top-title-two-cols
columns: is-5
hideInToc: true
---
:: title ::
# gst-launch-1.0 : 명명된 엘리먼트와 패드 지정

:: left ::
<div class="ns-c-tight text-sm">

#### 명명된 엘리먼트 (Named Elements)
- `name=이름` 속성으로 엘리먼트에 이름 부여
- 이후 `이름.` 형식으로 참조 가능
- 복잡한 파이프라인에서 분기 처리에 유용

<div class="mt-11">

#### 패드 지정
- `element.pad_name`: 특정 패드 지정
- `tee`나 `compositor` 같은 다중 패드 엘리먼트에서 활용
- 패드명은 `gst-inspect-1.0`으로 확인 가능

</div>
</div>

:: right ::
<div class="code-xs code-dense">

```bash
# tee 엘리먼트로 분기
videotestsrc ! tee name=t \
  t. ! queue ! autovideosink \
  t. ! queue ! fakesink

# compositor 패드 지정
videotestsrc ! compositor name=c \
  sink_0::xpos=0 sink_0::ypos=0 \
  sink_1::xpos=320 sink_1::ypos=0 \
  ! autovideosink \
  \
  videotestsrc pattern=1 ! c.sink_0 \
  videotestsrc pattern=2 ! c.sink_1

# 특정 패드로 연결
multiqueue name=mq \
  filesrc location=input.mkv ! demux.video_0 \
  demux.audio_0 ! mq.sink_0
```

</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# gst-launch-1.0 : 파이프라인 문법 고급

:: content ::
<div class="custom-table-small">

| 문법 요소 | 설명 | 예시 |
|-----------|------|------|
| **괄호 ()** | Bin 생성 (여러 엘리먼트를 하나로 묶음) | `( queue ! videoconvert ! sink )` |
| **백슬래시 \\** | 줄 연결 (긴 파이프라인) | `element1 ! \`<br>`  element2` |
| **공백** | 병렬 파이프라인 분리 | `pipeline1 pipeline2` |
| **세미콜론 ;** | Caps 옵션 나열 | `video/x-raw,format=I420;video/x-raw,format=YV12` |
| **패드 프로퍼티** | 특정 패드의 속성 설정 | `element.pad::property=value` |

</div>

<div class="flex flex-wrap">
<div class="w-1/2 code-dense mt-6">

```bash
# 괄호를 이용한 bin 생성
videotestsrc ! tee name=t \
  t. ! ( queue ! videoconvert ! autovideosink ) \
  t. ! ( queue ! theoraenc ! oggmux ! filesink location=output.ogv )

# 병렬 파이프라인 실행 (공백으로 분리)
videotestsrc ! autovideosink audiotestsrc ! autoaudiosink

# 여러 caps 옵션을 세미콜론으로 구분
videotestsrc ! video/x-raw,format=I420,width=640,height=480; \
               video/x-raw,format=YV12,width=320,height=240 ! \
               autovideosink

```
</div>
<div class="w-1/2 code-dense mt-6">

```bash
# 패드 프로퍼티 설정
compositor name=comp \
  sink_0::xpos=0 sink_0::ypos=0 sink_0::width=320 sink_0::height=240 \
  sink_1::xpos=320 sink_1::ypos=0 sink_1::width=320 sink_1::height=240 \
  ! autovideosink \
  videotestsrc ! comp.sink_0 \
  videotestsrc pattern=1 ! comp.sink_1
```
</div>
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# gst-launch-1.0 : 실행 제어 및 종료

:: content ::
<div class="custom-table-small">

| 키보드 단축키 | 동작 | 설명 |
|---------------|------|------|
| **Ctrl+C** | 파이프라인 중단 | 안전한 종료 (EOS 신호 전송 후 정리) |
| **Ctrl+\\** | 강제 종료 | 즉시 종료 (비상시 사용) |
| **q** | 대화형 종료 | 일부 엘리먼트에서 지원 |

</div>

<div class="code-xs code-dense mt-6">

```bash
# 제한된 횟수만 실행
gst-launch-1.0 videotestsrc num-buffers=100 ! autovideosink

# 무한 루프 방지 (테스트용)
gst-launch-1.0 audiotestsrc num-buffers=1000 ! autoaudiosink

# EOS 신호로 안전한 종료 강제
gst-launch-1.0 -e videotestsrc ! autovideosink
```

</div>

<div class="highlight-box mt-6">
<strong>주의사항:</strong> Ctrl+C는 파이프라인을 안전하게 종료하려고 시도하지만, 
일부 엘리먼트가 응답하지 않으면 강제 종료가 필요할 수 있습니다.
</div>
