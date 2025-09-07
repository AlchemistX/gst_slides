---
layout: top-title
hideInToc: true
---
:: title ::
# Command Line Arguments

:: content ::
<div class="highlight-box text-xs ns-c-tight">
<strong>참고 자료:</strong>

- https://gstreamer.freedesktop.org/documentation/gstreamer/running.html?gi-language=c
- https://gstreamer.freedesktop.org/documentation/tutorials/basic/debugging-tools.html?gi-language=c
</div>

<div class="ns-c-tight mt-7">

#### Command line argument
- --gst-debug=LIST : “카테고리:레벨” 쌍의 쉼표로 구분된 목록에 지정된 카테고리의 디버그 레벨 설정.
    - 와일드카드 사용 가능.
    - 예: --gst-debug=oggdemux:5
- --gst-debug-help : 유효한 디버그 카테고리를 출력하고 종료 한다.
- --gst-debug-level=LEVEL : 기본 디버그 레벨을 설정한다. (0 ~ 9 사이의 값)
- --gst-debug-no-color : 디버그 메시지의 색상을 표시하지 않는다.
- --gst-debug-color-mode=MODE :디버그 로그 색상 표시 모드 변경. on, off, auto, disable, unix 중 하나.
- --gst-debug-disable : 디버깅 기능을 비활성화 한다.
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Environment Variables

:: content ::
<div class="ns-c-tight">

#### Environment variables
- **GST_DEBUG**
    - 쉼표로 구분된 category_name:level 쌍 목록을 사용하여 개별 카테고리의 디버깅 레벨 설정
    - ERROR : 코어 또는 엘리먼트가 요청된 작업을 수행할 수 없을 때 출력하는 에러 로그.
    - WARNING : 치명적이지는 않지만 사용자가 볼 수 있는 문제가 발생할 것으로 예상할 때 출력.
    - FIXME : 실행된 코드 경로의 무언가가 아직 완전히 구현되거나 처리되지 않았음을 출력.
    - INFO : 일반적으로 한 번만 발생하거나 이 수준에서 기록될 만큼 중요하고 드문 시스템 이벤트 출력.
    - DEBUG : 객체의 수명 동안 제한된 횟수만 발생하는 이벤트에 대한 일반적인 디버그 메시지.
    - LOG : 객체의 수명 동안 반복적으로 발생하는 이벤트에 대한 메시지.
    - TRACE : ref/unref 주기와 같이 객체의 수명 동안 반복적으로 발생하는 이벤트에 대한 메시지.
    - MEMDUMP : 데이터 청크를 메모리 덤프로 기록하는 데 사용. ASCII 문자가 있는 hexdump로 표시.
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Environment Variables

:: content ::
<div class="ns-c-tight text-sm">

#### Environment variables
<div class="flex flex-wrap">
<div class="w-1/2">

- **GST_DEBUG**
    - category_name은 와일드카드로 "*"를 포함할 수 있다.
        - GST_DEBUG=GST_AUTOPLUG:6,GST_ELEMENT_*:4
    - GStreamer 1.2 이후 이름으로 디버그 레벨 지정
        - GST_DEBUG=*:WARNING,audio:LOG
    - 왼쪽에서 오른쪽으로 평가
        - GST_DEBUG=decodebin:LOG,:INFO
        - GST_DEBUG=:INFO,decodebin:LOG
- **GST_DEBUG_DUMP_DOT_DIR**
    - 이 변수가 지정하는 경로에 dot 파일 기록.
    - GST_DEBUG_BIN_TO_DOT_FILE, GST_DEBUG_BIN_TO_DOT_FILE_WITH_TS
</div>
<div class="w-1/2">

- **GST_TRACE**
    - 메모리 할당 추적 활성화.
    - 대부분의 GStreamer 객체는 해제되지 않은 객체의 수와 해당 메모리 포인터 추적 지원.
    - 옵션
        - live : 활성 객체를 계산하고 프로그램 종료 시 해제되지 않은 객체 수에 대한 개요 덤프.
        - mem-live :
            - 해제되지 않은 메모리 포인터 추적, 프로그램 종료 시 해제되지 않은 모든 메모리의 개요 덤프
            - 레벨 9 디버그 로그와 함께 누수된 객체의 수명 주기 추적-> 누수된 위치 추적
            - valgrind와 같은 도구를 사용할 수 없거나 옵션이 없는 상황에서 메모리 누수 디버깅
        - all : 모든 옵션 활성화.
</div>
</div>
</div>

---
layout: top-title
hideInToc: true
---
:: title ::
# Environment Variables

:: content ::
<div class="ns-c-tight">

#### Environment variables
- **GST_DEBUG_FILE**
    - 디버그 메시지를 이 변수에 지정한 파일로 리디렉션
- **G_DEBUG**
    - G_DEBUG=fatal_warnings를 설정하여 assertion 실패와 같은 critical warning 발생할 때 GStreamer 프로그램이 abort 되도록 한다.
- **G_SLICE**
    - valgrind에서 GStreamer 프로그램을 실행하거나 다른 도구로 메모리 누수를 디버깅할 때 G_SLICE=always-malloc을 설정한다. 
- **GST_PLUGIN_FEATURE_RANK**
    - 1.18 부터 제공
    - 변수는 쉼표로 구분된 plugin_feature:rank 쌍 목록을 사용하여 개별 플러그인 피쳐에 특정 랭크를 설정.
    - 예: GST_PLUGIN_FEATURE_RANK=foo:PRIMARY,bar:primary,foobar:128
</div>
