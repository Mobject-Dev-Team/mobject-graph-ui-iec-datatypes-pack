/**
 * MIT License
 *
 * Copyright (c) 2024 benhar-dev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('mobject-graph-ui')) :
  typeof define === 'function' && define.amd ? define(['exports', 'mobject-graph-ui'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MobjectGraphUiIecDatatypesPack = {}, global.MobjectGraphUi));
})(this, (function (exports, mobjectGraphUi) { 'use strict';

  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var BooleanDisplayWidget = /*#__PURE__*/function (_DisplayWidget) {
    function BooleanDisplayWidget(name, parent, options) {
      var _options$content, _options$content2;
      var _this;
      _classCallCheck(this, BooleanDisplayWidget);
      _this = _callSuper(this, BooleanDisplayWidget, [name, parent, options]);
      var defaultValue = (options === null || options === void 0 || (_options$content = options.content) === null || _options$content === void 0 ? void 0 : _options$content.defaultValue) || false;
      var type = (options === null || options === void 0 || (_options$content2 = options.content) === null || _options$content2 === void 0 || (_options$content2 = _options$content2.datatype) === null || _options$content2 === void 0 ? void 0 : _options$content2.typeName) || "";
      var colorPallet = new mobjectGraphUi.ColorGenerator(type);
      _this.ledComponent = new mobjectGraphUi.LedComponent(name, defaultValue, colorPallet);
      return _this;
    }
    _inherits(BooleanDisplayWidget, _DisplayWidget);
    return _createClass(BooleanDisplayWidget, [{
      key: "onContentUpdate",
      value: function onContentUpdate(value) {
        this.ledComponent.isActive = value;
      }
    }, {
      key: "computeSize",
      value: function computeSize() {
        return this.ledComponent.computeSize();
      }
    }, {
      key: "draw",
      value: function draw(ctx, node, widget_width, y, H) {
        this.ledComponent.draw(ctx, node, widget_width, y, H);
      }
    }]);
  }(mobjectGraphUi.DisplayWidget);
  var BooleanControlWidget = /*#__PURE__*/function (_ControlWidget) {
    function BooleanControlWidget(name, parent, options) {
      var _options$parameter, _options$parameter2;
      var _this2;
      _classCallCheck(this, BooleanControlWidget);
      _this2 = _callSuper(this, BooleanControlWidget, [name, parent, options]);
      var defaultValue = (options === null || options === void 0 || (_options$parameter = options.parameter) === null || _options$parameter === void 0 ? void 0 : _options$parameter.defaultValue) || false;
      var type = (options === null || options === void 0 || (_options$parameter2 = options.parameter) === null || _options$parameter2 === void 0 || (_options$parameter2 = _options$parameter2.datatype) === null || _options$parameter2 === void 0 ? void 0 : _options$parameter2.typeName) || "";
      var colorPallet = new mobjectGraphUi.ColorGenerator(type);
      _this2.checkboxComponent = new mobjectGraphUi.CheckboxComponent(name, defaultValue, colorPallet);
      _this2.checkboxComponent.on("onChange", function (isChecked) {
        _this2.setValue(isChecked);
      });
      return _this2;
    }
    _inherits(BooleanControlWidget, _ControlWidget);
    return _createClass(BooleanControlWidget, [{
      key: "computeSize",
      value: function computeSize() {
        return this.checkboxComponent.computeSize();
      }
    }, {
      key: "mouse",
      value: function mouse(event, pos, node) {
        this.checkboxComponent.onMouse(event, pos);
      }
    }, {
      key: "draw",
      value: function draw(ctx, node, widget_width, y, H) {
        this.checkboxComponent.draw(ctx, node, widget_width, y, H);
      }
    }]);
  }(mobjectGraphUi.ControlWidget);

  var NumericContent = /*#__PURE__*/function () {
    function NumericContent(content) {
      var _content$metadata;
      _classCallCheck(this, NumericContent);
      this.content = content;
      this.metadata = new Map(((_content$metadata = content.metadata) !== null && _content$metadata !== void 0 ? _content$metadata : []).map(function (m) {
        return [m.name.toLowerCase(), m.value];
      }));
      this.datatype = content.datatype || {};
    }
    return _createClass(NumericContent, [{
      key: "precision",
      get: function get() {
        return this.getMetadataOrDefault("precision", this.datatype.isFloat ? 2 : 0);
      }
    }, {
      key: "defaultValue",
      get: function get() {
        var _this$content;
        return ((_this$content = this.content) === null || _this$content === void 0 ? void 0 : _this$content.defaultValue) || 0;
      }
    }, {
      key: "getMetadataOrDefault",
      value: function getMetadataOrDefault(key, defaultValue) {
        return this.metadata.get(key.toLowerCase()) || defaultValue;
      }
    }]);
  }();

  var NumericParameter = /*#__PURE__*/function () {
    function NumericParameter(parameter) {
      var _parameter$metadata;
      _classCallCheck(this, NumericParameter);
      this.parameter = parameter;
      this.metadata = new Map(((_parameter$metadata = parameter.metadata) !== null && _parameter$metadata !== void 0 ? _parameter$metadata : []).map(function (m) {
        return [m.name.toLowerCase(), m.value];
      }));
      this.datatype = parameter.datatype || {};
    }
    return _createClass(NumericParameter, [{
      key: "minimumValue",
      get: function get() {
        return this.getMetadataOrDefault("minimumValue", this.datatype.minValue || 0);
      }
    }, {
      key: "maximumValue",
      get: function get() {
        return this.getMetadataOrDefault("maximumValue", this.datatype.maxValue || 0);
      }
    }, {
      key: "precision",
      get: function get() {
        return this.getMetadataOrDefault("precision", this.datatype.isFloat ? 2 : 0);
      }
    }, {
      key: "onlyOdd",
      get: function get() {
        return this.getMetadataOrDefault("onlyOdd", false);
      }
    }, {
      key: "onlyEven",
      get: function get() {
        return this.getMetadataOrDefault("onlyEven", false);
      }
    }, {
      key: "defaultValue",
      get: function get() {
        return this.parameter.defaultValue;
      }
    }, {
      key: "getMetadataOrDefault",
      value: function getMetadataOrDefault(key, defaultValue) {
        return this.metadata.get(key.toLowerCase()) || defaultValue;
      }
    }, {
      key: "getNumberLimiter",
      value: function getNumberLimiter() {
        // Determine the number constraint based on metadata flags
        var constraint = null;
        if (this.onlyOdd) {
          constraint = "odd";
        } else if (this.onlyEven) {
          constraint = "even";
        }

        // Create and return the NumberLimiter with calculated properties
        return new mobjectGraphUi.NumberLimiter(this.minimumValue, this.maximumValue, this.defaultValue, constraint, this.precision);
      }
    }]);
  }();

  var NumericDisplayWidget = /*#__PURE__*/function (_DisplayWidget) {
    function NumericDisplayWidget(name, parent, options) {
      var _options$content;
      var _this;
      _classCallCheck(this, NumericDisplayWidget);
      _this = _callSuper(this, NumericDisplayWidget, [name, parent, options]);
      var numericContent = new NumericContent(options.content);
      var defaultValue = numericContent.defaultValue;
      var precision = numericContent.precision;
      var type = (options === null || options === void 0 || (_options$content = options.content) === null || _options$content === void 0 || (_options$content = _options$content.datatype) === null || _options$content === void 0 ? void 0 : _options$content.typeName) || "";
      var colorPallet = new mobjectGraphUi.ColorGenerator(type);
      _this.numericDisplayComponent = new mobjectGraphUi.NumericDisplayComponent(name, defaultValue, precision, colorPallet);
      return _this;
    }
    _inherits(NumericDisplayWidget, _DisplayWidget);
    return _createClass(NumericDisplayWidget, [{
      key: "onContentUpdate",
      value: function onContentUpdate(value) {
        this.numericDisplayComponent.value = value;
      }
    }, {
      key: "computeSize",
      value: function computeSize() {
        return this.numericDisplayComponent.computeSize();
      }
    }, {
      key: "draw",
      value: function draw(ctx, node, widget_width, y, H) {
        this.numericDisplayComponent.draw(ctx, node, widget_width, y, H);
      }
    }]);
  }(mobjectGraphUi.DisplayWidget);
  var NumericControlWidget = /*#__PURE__*/function (_ControlWidget) {
    function NumericControlWidget(name, parent, options) {
      var _options$parameter;
      var _this2;
      _classCallCheck(this, NumericControlWidget);
      _this2 = _callSuper(this, NumericControlWidget, [name, parent, options]);
      var numericParameter = new NumericParameter(options.parameter);
      var defaultValue = numericParameter.defaultValue;
      var precision = numericParameter.precision;
      var limiter = numericParameter.getNumberLimiter();
      var type = (options === null || options === void 0 || (_options$parameter = options.parameter) === null || _options$parameter === void 0 || (_options$parameter = _options$parameter.datatype) === null || _options$parameter === void 0 ? void 0 : _options$parameter.typeName) || "";
      var colorPallet = new mobjectGraphUi.ColorGenerator(type);
      _this2.numericInputComponent = new mobjectGraphUi.NumericInputComponent(name, defaultValue, precision, limiter, colorPallet);
      _this2.numericInputComponent.on("onChange", function (value) {
        _this2.setValue(value);
      });
      return _this2;
    }
    _inherits(NumericControlWidget, _ControlWidget);
    return _createClass(NumericControlWidget, [{
      key: "computeSize",
      value: function computeSize() {
        return this.numericInputComponent.computeSize();
      }
    }, {
      key: "mouse",
      value: function mouse(event, pos, node) {
        this.numericInputComponent.onMouse(event, pos, node);
      }
    }, {
      key: "draw",
      value: function draw(ctx, node, widget_width, y, H) {
        this.numericInputComponent.draw(ctx, node, widget_width, y, H);
      }
    }]);
  }(mobjectGraphUi.ControlWidget);

  var StringDisplayWidget = /*#__PURE__*/function (_DisplayWidget) {
    function StringDisplayWidget(name, parent, options) {
      var _options$content, _options$content2;
      var _this;
      _classCallCheck(this, StringDisplayWidget);
      _this = _callSuper(this, StringDisplayWidget, [name, parent, options]);
      var defaultValue = (options === null || options === void 0 || (_options$content = options.content) === null || _options$content === void 0 ? void 0 : _options$content.defaultValue) || "";
      var type = (options === null || options === void 0 || (_options$content2 = options.content) === null || _options$content2 === void 0 || (_options$content2 = _options$content2.datatype) === null || _options$content2 === void 0 ? void 0 : _options$content2.typeName) || "";
      var colorPallet = new mobjectGraphUi.ColorGenerator(type);
      _this.textDisplayComponent = new mobjectGraphUi.SingleLineTextDisplayComponent(name, defaultValue, colorPallet);
      return _this;
    }
    _inherits(StringDisplayWidget, _DisplayWidget);
    return _createClass(StringDisplayWidget, [{
      key: "onContentUpdate",
      value: function onContentUpdate(value) {
        this.textDisplayComponent.text = value;
      }
    }, {
      key: "computeSize",
      value: function computeSize() {
        return this.textDisplayComponent.computeSize();
      }
    }, {
      key: "draw",
      value: function draw(ctx, node, widget_width, y, H) {
        this.textDisplayComponent.draw(ctx, node, widget_width, y, H);
      }
    }]);
  }(mobjectGraphUi.DisplayWidget);
  var StringControlWidget = /*#__PURE__*/function (_ControlWidget) {
    function StringControlWidget(name, parent, options) {
      var _options$parameter, _options$parameter2;
      var _this2;
      _classCallCheck(this, StringControlWidget);
      _this2 = _callSuper(this, StringControlWidget, [name, parent, options]);
      var defaultValue = (options === null || options === void 0 || (_options$parameter = options.parameter) === null || _options$parameter === void 0 ? void 0 : _options$parameter.defaultValue) || "";
      var type = (options === null || options === void 0 || (_options$parameter2 = options.parameter) === null || _options$parameter2 === void 0 || (_options$parameter2 = _options$parameter2.datatype) === null || _options$parameter2 === void 0 ? void 0 : _options$parameter2.typeName) || "";
      var colorPallet = new mobjectGraphUi.ColorGenerator(type);
      _this2.textInputComponent = new mobjectGraphUi.SingleLineTextInputComponent(name, defaultValue, colorPallet);
      _this2.textInputComponent.on("onChange", function (text) {
        _this2.setValue(text);
      });
      return _this2;
    }
    _inherits(StringControlWidget, _ControlWidget);
    return _createClass(StringControlWidget, [{
      key: "computeSize",
      value: function computeSize() {
        return this.textInputComponent.computeSize();
      }
    }, {
      key: "mouse",
      value: function mouse(event, pos, node) {
        this.textInputComponent.onMouse(event, pos);
      }
    }, {
      key: "draw",
      value: function draw(ctx, node, widget_width, y, H) {
        this.textInputComponent.draw(ctx, node, widget_width, y, H);
      }
    }]);
  }(mobjectGraphUi.ControlWidget);

  var EnumDisplayWidget = /*#__PURE__*/function (_DisplayWidget) {
    function EnumDisplayWidget(name, parent, options) {
      var _options$content, _options$content2;
      var _this;
      _classCallCheck(this, EnumDisplayWidget);
      _this = _callSuper(this, EnumDisplayWidget, [name, parent, options]);
      var defaultValue = (options === null || options === void 0 || (_options$content = options.content) === null || _options$content === void 0 ? void 0 : _options$content.defaultValue) || "";
      var type = (options === null || options === void 0 || (_options$content2 = options.content) === null || _options$content2 === void 0 || (_options$content2 = _options$content2.datatype) === null || _options$content2 === void 0 ? void 0 : _options$content2.typeName) || "";
      var colorPallet = new mobjectGraphUi.ColorGenerator(type);
      _this.textDisplayComponent = new mobjectGraphUi.SingleLineTextDisplayComponent(name, defaultValue, colorPallet);
      return _this;
    }
    _inherits(EnumDisplayWidget, _DisplayWidget);
    return _createClass(EnumDisplayWidget, [{
      key: "onContentUpdate",
      value: function onContentUpdate(value) {
        this.textDisplayComponent.text = value;
      }
    }, {
      key: "computeSize",
      value: function computeSize() {
        return this.textDisplayComponent.computeSize();
      }
    }, {
      key: "draw",
      value: function draw(ctx, node, widget_width, y, H) {
        this.textDisplayComponent.draw(ctx, node, widget_width, y, H);
      }
    }]);
  }(mobjectGraphUi.DisplayWidget);
  var EnumControlWidget = /*#__PURE__*/function (_ControlWidget) {
    function EnumControlWidget(name, parent, options) {
      var _options$parameter, _options$parameter2, _options$parameter3;
      var _this2;
      _classCallCheck(this, EnumControlWidget);
      _this2 = _callSuper(this, EnumControlWidget, [name, parent, options]);
      var defaultValue = (options === null || options === void 0 || (_options$parameter = options.parameter) === null || _options$parameter === void 0 ? void 0 : _options$parameter.defaultValue) || "";
      var enumerations = (options === null || options === void 0 || (_options$parameter2 = options.parameter) === null || _options$parameter2 === void 0 || (_options$parameter2 = _options$parameter2.datatype) === null || _options$parameter2 === void 0 ? void 0 : _options$parameter2.enumerations) || [];
      var type = (options === null || options === void 0 || (_options$parameter3 = options.parameter) === null || _options$parameter3 === void 0 || (_options$parameter3 = _options$parameter3.datatype) === null || _options$parameter3 === void 0 ? void 0 : _options$parameter3.typeName) || "";
      var colorPallet = new mobjectGraphUi.ColorGenerator(type);
      _this2.comboboxComponent = new mobjectGraphUi.ComboboxComponent(name, defaultValue, enumerations, colorPallet);
      _this2.comboboxComponent.on("onChange", function (selection) {
        _this2.setValue(selection);
      });
      return _this2;
    }
    _inherits(EnumControlWidget, _ControlWidget);
    return _createClass(EnumControlWidget, [{
      key: "computeSize",
      value: function computeSize() {
        return this.comboboxComponent.computeSize();
      }
    }, {
      key: "mouse",
      value: function mouse(event, pos, node) {
        this.comboboxComponent.onMouse(event, pos);
      }
    }, {
      key: "draw",
      value: function draw(ctx, node, widget_width, y, H) {
        this.comboboxComponent.draw(ctx, node, widget_width, y, H);
      }
    }]);
  }(mobjectGraphUi.ControlWidget);

  var IecDatatypesPack = /*#__PURE__*/function () {
    function IecDatatypesPack() {
      _classCallCheck(this, IecDatatypesPack);
    }
    return _createClass(IecDatatypesPack, [{
      key: "install",
      value: function install() {
        var graphFramework = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new mobjectGraphUi.GraphFramework();
        var options = arguments.length > 1 ? arguments[1] : undefined;
        this.registerWidgets(graphFramework, options);
      }
    }, {
      key: "registerWidgets",
      value: function registerWidgets(graphFramework, options) {
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
    }]);
  }();

  exports.IecDatatypesPack = IecDatatypesPack;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
