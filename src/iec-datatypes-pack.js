import { GraphFramework } from "mobject-graph-ui";
import {
  BooleanControlWidget,
  BooleanDisplayWidget,
} from "./widgets/boolean-widget.js";
import {
  NumericControlWidget,
  NumericDisplayWidget,
} from "./widgets/numeric-widget.js";
import {
  StringControlWidget,
  StringDisplayWidget,
} from "./widgets/string-widget.js";
import { EnumControlWidget, EnumDisplayWidget } from "./widgets/enum-widget.js";

export class IecDatatypesPack {
  install(graphFramework = new GraphFramework(), options) {
    this.registerWidgets(graphFramework, options);
  }

  registerWidgets(graphFramework, options) {
    graphFramework.registerWidgetType(BooleanControlWidget, "BOOL");
    graphFramework.registerWidgetType(BooleanDisplayWidget, "BOOL");
    graphFramework.registerWidgetType(NumericControlWidget, "BYTE");
    graphFramework.registerWidgetType(NumericDisplayWidget, "BYTE");
    graphFramework.registerWidgetType(NumericControlWidget, "WORD");
    graphFramework.registerWidgetType(NumericDisplayWidget, "WORD");
    graphFramework.registerWidgetType(NumericControlWidget, "DWORD");
    graphFramework.registerWidgetType(NumericDisplayWidget, "DWORD");
    graphFramework.registerWidgetType(NumericControlWidget, "LWORD");
    graphFramework.registerWidgetType(NumericDisplayWidget, "LWORD");
    graphFramework.registerWidgetType(NumericControlWidget, "INT");
    graphFramework.registerWidgetType(NumericDisplayWidget, "INT");
    graphFramework.registerWidgetType(NumericControlWidget, "LINT");
    graphFramework.registerWidgetType(NumericDisplayWidget, "LINT");
    graphFramework.registerWidgetType(NumericControlWidget, "DINT");
    graphFramework.registerWidgetType(NumericDisplayWidget, "DINT");
    graphFramework.registerWidgetType(NumericControlWidget, "SINT");
    graphFramework.registerWidgetType(NumericDisplayWidget, "SINT");
    graphFramework.registerWidgetType(NumericControlWidget, "USINT");
    graphFramework.registerWidgetType(NumericDisplayWidget, "USINT");
    graphFramework.registerWidgetType(NumericControlWidget, "UINT");
    graphFramework.registerWidgetType(NumericDisplayWidget, "UINT");
    graphFramework.registerWidgetType(NumericControlWidget, "UDINT");
    graphFramework.registerWidgetType(NumericDisplayWidget, "UDINT");
    graphFramework.registerWidgetType(NumericControlWidget, "ULINT");
    graphFramework.registerWidgetType(NumericDisplayWidget, "ULINT");
    graphFramework.registerWidgetType(NumericControlWidget, "REAL");
    graphFramework.registerWidgetType(NumericDisplayWidget, "REAL");
    graphFramework.registerWidgetType(NumericControlWidget, "LREAL");
    graphFramework.registerWidgetType(NumericDisplayWidget, "LREAL");
    graphFramework.registerWidgetType(StringControlWidget, "STRING");
    graphFramework.registerWidgetType(StringDisplayWidget, "STRING");
    graphFramework.registerWidgetType(EnumControlWidget, "ENUM", "*");
    graphFramework.registerWidgetType(EnumDisplayWidget, "ENUM", "*");
  }
}
