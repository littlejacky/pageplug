import { RecaptchaTypes } from "components/constants";
import IconSVG from "./icon.svg";
import Widget from "./widget";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "表单按钮",
  iconSVG: IconSVG,
  hideCard: true,
  isDeprecated: true,
  searchTags: ["form button"],
  replacement: "BUTTON_WIDGET",
  needsMeta: true,
  defaults: {
    rows: 4,
    columns: 12,
    widgetName: "FormButton",
    text: "提交",
    isDefaultClickDisabled: true,
    recaptchaType: RecaptchaTypes.V3,
    version: 1,
    animateLoading: true,
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(),
    default: Widget.getDefaultPropertiesMap(),
    meta: Widget.getMetaPropertiesMap(),
    config: Widget.getPropertyPaneConfig(),
    stylesheetConfig: Widget.getStylesheetConfig(),
  },
};

export default Widget;
