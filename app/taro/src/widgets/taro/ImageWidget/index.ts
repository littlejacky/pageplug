import Widget from "./widget";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "图片",
  iconSVG: null,
  needsMeta: false,
  isCanvas: false,
  isMobile: true,
  defaults: {
    widgetName: "image",
    rows: 24,
    columns: 32,
    src: "https://img.yzcdn.cn/vant/cat.jpeg",
    mode: "aspectFit",
    version: 1,
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(),
    default: Widget.getDefaultPropertiesMap(),
    meta: Widget.getMetaPropertiesMap(),
    config: Widget.getPropertyPaneConfig(),
  },
};

export default Widget;
