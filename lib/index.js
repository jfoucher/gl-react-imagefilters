'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glReact = require('gl-react');

var _glReact2 = _interopRequireDefault(_glReact);

var _glReactNegative = require('gl-react-negative');

var _glReactHueRotate = require('gl-react-hue-rotate');

var _glReactContrastSaturationBrightness = require('gl-react-contrast-saturation-brightness');

var _glReactBlur = require('gl-react-blur');

var _glReactSepia = require('gl-react-sepia');

var _glReactSharpen = require('gl-react-sharpen');

var _glReactTemperature = require('gl-react-temperature');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _glReact2.default.createComponent(function (_ref) {
  var children = _ref.children,
      width = _ref.width,
      height = _ref.height,
      hue = _ref.hue,
      blur = _ref.blur,
      sepia = _ref.sepia,
      sharpen = _ref.sharpen,
      negative = _ref.negative,
      contrast = _ref.contrast,
      saturation = _ref.saturation,
      brightness = _ref.brightness,
      temperature = _ref.temperature,
      uBrightness = _ref.uBrightness,
      uTemperature = _ref.uTemperature,
      uSharpen = _ref.uSharpen;
  return _react2.default.createElement(
    _glReactSepia.Sepia,
    { sepia: sepia },
    _react2.default.createElement(
      _glReactHueRotate.HueRotate,
      { hue: hue },
      _react2.default.createElement(
        _glReactNegative.Negative,
        { factor: negative },
        _react2.default.createElement(
          _glReactTemperature.Temperature,
          { temp: temperature },
          _react2.default.createElement(
            _glReactContrastSaturationBrightness.ContrastSaturationBrightness,
            {
              contrast: contrast,
              saturation: saturation,
              brightness: brightness },
            _react2.default.createElement(
              _glReactBlur.Blur,
              {
                passes: 6,
                factor: blur,
                width: width,
                height: height },
              _react2.default.createElement(
                _glReactSharpen.Sharpen,
                {
                  factor: sharpen,
                  width: width,
                  height: height },
                children
              )
            )
          )
        )
      )
    )
  );
}, {
  displayName: "ImageFilter",
  defaultProps: {
    width: 300,
    height: 300,
    hue: 0,
    blur: 0,
    sepia: 0,
    sharpen: 0,
    negative: 0,
    contrast: 1,
    saturation: 1,
    brightness: 1,
    temperature: 6500,
    uBrightness: 1,
    uTemperature: 0,
    uSharpen: 0
  },
  propTypes: {
    children: _propTypes2.default.node.isRequired,
    width: _propTypes2.default.number.isRequired,
    height: _propTypes2.default.number.isRequired,
    hue: _propTypes2.default.number,
    blur: _propTypes2.default.number,
    sepia: _propTypes2.default.number,
    sharpen: _propTypes2.default.number,
    negative: _propTypes2.default.number,
    contrast: _propTypes2.default.number,
    saturation: _propTypes2.default.number,
    brightness: _propTypes2.default.number,
    temperature: _propTypes2.default.number
  }
});
//# sourceMappingURL=index.js.map