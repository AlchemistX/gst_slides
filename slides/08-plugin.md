---
layout: top-title
hideInToc: true
---
:: title ::
# Plugin 구조

:: content ::
<div class="code-xs code-dense code-scroll">

````md magic-move
```c
#pragma once
#include <gst/gst.h>

G_BEGIN_DECLS

#define GST_TUTORIAL_TYPE_FILTER gst_tutorial_filter_get_type ()
G_DECLARE_FINAL_TYPE (GstTutorialFilter, gst_tutorial_filter,
                      GST_TUTORIAL, FILTER, GstElement)

G_END_DECLS
```
```c
#include "gsttutorial_filter.h"

struct _GstTutorialFilter
{
  GstElement element;
  GstPad *sinkpad, *srcpad;
};

#define gst_tutorial_filter_parent_class parent_class
G_DEFINE_TYPE(GstTutorialFilter, gst_tutorial_filter, GST_TYPE_ELEMENT)

static void
gst_tutorial_filter_class_init (GstTutorialFilterClass * klass)
{
  GstElementClass *gstelement_class;
  gstelement_class = (GstElementClass *) klass;

  gst_element_class_set_details_simple (gstelement_class,
      "Tutorial filter element",
      "Filter/Converter/Tutorial",
      "This filter is for tutorial.", "Seoungil.kang seoungil.kang@lge.com");
}

static void
gst_tutorial_filter_init (GstTutorialFilter * filter)
{
  filter->sinkpad = NULL;
  filter->srcpad = NULL;
}
```
```c
#ifdef HAVE_CONFIG_H
  #include <config.h>
#else
  #define GST_API_VERSION "1.0"
  #define GST_LICENSE "LGPL"
  #define GST_PACKAGE_NAME "GStreamer tutorial plugins"
  #define GST_PACKAGE_ORIGIN "TUTORIAL"
  #define PACKAGE "gst_lab"
  #define PACKAGE_VERSION "1.24"
#endif

#include "gsttutorial_filter.h"

static gboolean
plugin_init(GstPlugin *plugin)
{
  return gst_element_register(plugin, "tutorial_filter", GST_RANK_NONE, GST_TUTORIAL_TYPE_FILTER);
}

GST_PLUGIN_DEFINE(GST_VERSION_MAJOR, GST_VERSION_MINOR,
                  tutorial, "GStreamer Plugin Tutorial", plugin_init,
                  PACKAGE_VERSION, GST_LICENSE, GST_PACKAGE_NAME, GST_PACKAGE_ORIGIN)
```
```c
### macro `GST_PLUGIN_DEFINE`  
provided by `"gst/gstplugin.h"`  

#define GST_PLUGIN_DEFINE(major, minor, name, description, init, version, license, package, origin) \
  G_BEGIN_DECLS                                                                                     \
  GST_PLUGIN_EXPORT const GstPluginDesc *G_PASTE (gst_plugin_, G_PASTE (name, _get_desc)) (void);   \
  GST_PLUGIN_EXPORT void G_PASTE (gst_plugin_, G_PASTE (name, _register)) (void);                   \
                                                                                                    \
  static const GstPluginDesc gst_plugin_desc = {                                                    \
    major,                                                                                          \
    minor,                                                                                          \
    G_STRINGIFY (name),                                                                             \
    (gchar *) description,                                                                          \
    init,                                                                                           \
    version,                                                                                        \
    license,                                                                                        \
    PACKAGE,                                                                                        \
    package,                                                                                        \
    origin,                                                                                         \
    __GST_PACKAGE_RELEASE_DATETIME,                                                                 \
    GST_PADDING_INIT                                                                                \
  };                                                                                                \
                                                                                                    \
  const GstPluginDesc *                                                                             \
  G_PASTE (gst_plugin_, G_PASTE (name, _get_desc)) (void)                                           \
  {                                                                                                 \
    return &gst_plugin_desc;                                                                        \
  }                                                                                                 \
                                                                                                    \
  void                                                                                              \
  G_PASTE (gst_plugin_, G_PASTE (name, _register)) (void)                                           \
  {                                                                                                 \
    gst_plugin_register_static (major, minor, G_STRINGIFY (name),                                   \
                                description, init, version, license,                                \
                                PACKAGE, package, origin);                                          \
  }                                                                                                 \
  G_END_DECLS

// Expands to
__attribute__ ((visibility ("default"))) const GstPluginDesc *gst_plugin_tutorial_get_desc (void);
__attribute__ ((visibility ("default"))) void gst_plugin_tutorial_register (void);

static const GstPluginDesc gst_plugin_desc = {
  (1),
  (26),
  "tutorial",
  (gchar *) "GStreamer Plugin Tutorial",
  plugin_init,
  "1.0",
  "LGPL",
  "gst_lab",
  "GStreamer tutorial plugins",
  "TUTORIAL",
  ((void *) 0),
  { ((void *) 0) }
};

const GstPluginDesc *
gst_plugin_tutorial_get_desc (void)
{
  return &gst_plugin_desc;
}

void
gst_plugin_tutorial_register (void)
{
  gst_plugin_register_static ((1), (26), "tutorial", "GStreamer Plugin Tutorial",
                              plugin_init, "1.0", "LGPL", "gst_lab",
                              "GStreamer tutorial plugins", "TUTORIAL");
}
```
```bash
08.gst_plugins/00.boiler_plate/build on  master via C v13.3.0-gcc via 🐍 v3.10.18 (venv) via ⬢ gstreamer-full
⬢ [Docker] ❯ nm -g -C libgsttutorial.so | grep "T"
00000000000012ae T gst_plugin_tutorial_get_desc
00000000000012bf T gst_plugin_tutorial_register
000000000000136f T gst_tutorial_filter_get_type

08.gst_plugins/00.boiler_plate/build on  master via C v13.3.0-gcc via 🐍 v3.10.18 (venv) via ⬢ gstreamer-full
⬢ [Docker] ❯ nm -g -C ~/GStreamer/gstreamer/build/subprojects/gstreamer/plugins/elements/libgstcoreelements.so | grep "T"
000000000001b240 T gst_plugin_coreelements_get_desc
000000000001b250 T gst_plugin_coreelements_register

08.gst_plugins/00.boiler_plate/build on  master via C v13.3.0-gcc via 🐍 v3.10.18 (venv) via ⬢ gstreamer-full
⬢ [Docker] ❯ nm -g -C ~/GStreamer/gstreamer/build/subprojects/gst-plugins-base/gst/adder/libgstadder.so | grep "T"
000000000000b4a0 T gst_plugin_adder_get_desc
000000000000b4b0 T gst_plugin_adder_register
```
````
</div>
