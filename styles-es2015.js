(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\n/* required styles */\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        -ms-user-select: none;\r\n\t    user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\n/* Prevents IE11 from highlighting tiles in blue */\n.leaflet-tile::-moz-selection {\r\n\tbackground: transparent;\r\n}\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\n.leaflet-container.leaflet-touch-zoom {\r\n\ttouch-action: pan-x pan-y;\r\n\t}\n.leaflet-container.leaflet-touch-drag {\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\ttouch-action: none;\r\n}\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\n.leaflet-tile {\r\n\t-webkit-filter: inherit;\r\n\t        filter: inherit;\r\n\tvisibility: hidden;\r\n\t}\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tbox-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\n.leaflet-pane         { z-index: 400; }\n.leaflet-tile-pane    { z-index: 200; }\n.leaflet-overlay-pane { z-index: 400; }\n.leaflet-shadow-pane  { z-index: 500; }\n.leaflet-marker-pane  { z-index: 600; }\n.leaflet-tooltip-pane   { z-index: 650; }\n.leaflet-popup-pane   { z-index: 700; }\n.leaflet-map-pane canvas { z-index: 100; }\n.leaflet-map-pane svg    { z-index: 200; }\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\n/* control positioning */\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\n.leaflet-right {\r\n\tright: 0;\r\n\t}\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\n/* zoom and fade animations */\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1), -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t        transition: none;\r\n\t}\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\n/* cursors */\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:         grab;\r\n\t}\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\n/* visual tweaks */\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\n/* general typography */\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\n/* general toolbar styles */\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\n/* zoom control */\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\n/* layers control */\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url('maskmap/layers.png');\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url('maskmap/layers-2x.png');\r\n\tbackground-size: 26px 26px;\r\n\t}\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\n/* Default icon URLs */\n.leaflet-default-icon-path {\r\n\tbackground-image: url('maskmap/marker-icon.png');\r\n\t}\n/* attribution and scale controls */\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbox-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\n/* popup */\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\n/* div icon */\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\n/* Tooltip */\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\n/* Directions */\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\n.leaflet-cluster-anim .leaflet-marker-icon, .leaflet-cluster-anim .leaflet-marker-shadow {\r\n\t-webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\t-webkit-transition: opacity 0.3s ease-in, -webkit-transform 0.3s ease-out;\r\n\ttransition: opacity 0.3s ease-in, -webkit-transform 0.3s ease-out;\r\n\ttransition: transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\ttransition: transform 0.3s ease-out, opacity 0.3s ease-in, -webkit-transform 0.3s ease-out;\r\n}\n.leaflet-cluster-spider-leg {\r\n\t/* stroke-dashoffset (duration and function) should match with leaflet-marker-icon transform in order to track it exactly */\r\n\t-webkit-transition: -webkit-stroke-dashoffset 0.3s ease-out, -webkit-stroke-opacity 0.3s ease-in;\r\n\t-webkit-transition: stroke-dashoffset 0.3s ease-out, stroke-opacity 0.3s ease-in;\r\n\ttransition: stroke-dashoffset 0.3s ease-out, stroke-opacity 0.3s ease-in;\r\n}\n.marker-cluster-small {\r\n\tbackground-color: rgba(181, 226, 140, 0.6);\r\n\t}\n.marker-cluster-small div {\r\n\tbackground-color: rgba(110, 204, 57, 0.6);\r\n\t}\n.marker-cluster-medium {\r\n\tbackground-color: rgba(241, 211, 87, 0.6);\r\n\t}\n.marker-cluster-medium div {\r\n\tbackground-color: rgba(240, 194, 12, 0.6);\r\n\t}\n.marker-cluster-large {\r\n\tbackground-color: rgba(253, 156, 115, 0.6);\r\n\t}\n.marker-cluster-large div {\r\n\tbackground-color: rgba(241, 128, 23, 0.6);\r\n\t}\n/* IE 6-8 fallback colors */\n.leaflet-oldie .marker-cluster-small {\r\n\tbackground-color: rgb(181, 226, 140);\r\n\t}\n.leaflet-oldie .marker-cluster-small div {\r\n\tbackground-color: rgb(110, 204, 57);\r\n\t}\n.leaflet-oldie .marker-cluster-medium {\r\n\tbackground-color: rgb(241, 211, 87);\r\n\t}\n.leaflet-oldie .marker-cluster-medium div {\r\n\tbackground-color: rgb(240, 194, 12);\r\n\t}\n.leaflet-oldie .marker-cluster-large {\r\n\tbackground-color: rgb(253, 156, 115);\r\n\t}\n.leaflet-oldie .marker-cluster-large div {\r\n\tbackground-color: rgb(241, 128, 23);\r\n}\n.marker-cluster {\r\n\tbackground-clip: padding-box;\r\n\tborder-radius: 20px;\r\n\t}\n.marker-cluster div {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tmargin-left: 5px;\r\n\tmargin-top: 5px;\r\n\r\n\ttext-align: center;\r\n\tborder-radius: 15px;\r\n\tfont: 12px \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\n.marker-cluster span {\r\n\tline-height: 30px;\r\n\t}\n* {\n  box-sizing: border-box;\n}\nhtml, body {\n  font-family: \"Hiragino Sans CNS\", \"微軟正黑體\", \"Arial\";\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9EOlxcVGhlRjJFXzIwMTlcXHdlZWsxMC9zcmNcXHN0eWxlcy5zY3NzIiwibm9kZV9tb2R1bGVzL2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyIsIm5vZGVfbW9kdWxlcy9sZWFmbGV0Lm1hcmtlcmNsdXN0ZXIvZGlzdC9NYXJrZXJDbHVzdGVyLmNzcyIsIm5vZGVfbW9kdWxlcy9sZWFmbGV0Lm1hcmtlcmNsdXN0ZXIvZGlzdC9NYXJrZXJDbHVzdGVyLkRlZmF1bHQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiw4RUFBQTtBQ0FBLG9CQUFvQjtBQUVwQjs7Ozs7Ozs7OztDQVVDLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsTUFBTTtDQUNOO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7QUFDRDs7O0NBR0MseUJBQXlCO0lBQ3RCLHNCQUFzQjtTQUNqQixxQkFBaUI7S0FBakIsaUJBQWlCO0dBQ3ZCLHVCQUF1QjtDQUN6QjtBQUNELGtEQUFrRDtBQUNsRDtDQUNDLHVCQUF1QjtBQUN4QjtBQUZBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0EsbUZBQW1GO0FBQ25GO0NBQ0MsMENBQTBDO0NBQzFDO0FBQ0QscUVBQXFFO0FBQ3JFO0NBQ0MsYUFBYTtDQUNiLGNBQWM7Q0FDZCw2QkFBNkI7Q0FDN0I7QUFDRDs7Q0FFQyxjQUFjO0NBQ2Q7QUFDRCxnR0FBZ0c7QUFDaEcscUZBQXFGO0FBQ3JGOzs7Ozs7Q0FNQywwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCO0FBRUQ7Q0FFQyx5QkFBeUI7Q0FDekI7QUFDRDtDQUVDLHFEQUFxRDtDQUNyRCxrQkFBa0I7Q0FDbEIsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FFQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLHdDQUF3QztBQUN6QztBQUNBO0NBQ0Msb0RBQW9EO0FBQ3JEO0FBQ0E7Q0FDQyx1QkFBZTtTQUFmLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEI7QUFDRDtD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LHdFQUF3RTtBQUN6RTtBQ2JBO0NBQ0MsMENBQTBDO0NBQzFDO0FBQ0Q7Q0FDQyx5Q0FBeUM7Q0FDekM7QUFFRDtDQUNDLHlDQUF5QztDQUN6QztBQUNEO0NBQ0MseUNBQXlDO0NBQ3pDO0FBRUQ7Q0FDQywwQ0FBMEM7Q0FDMUM7QUFDRDtDQUNDLHlDQUF5QztDQUN6QztBQUVBLDJCQUEyQjtBQUM1QjtDQUNDLG9DQUFvQztDQUNwQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBRUQ7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUVEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxtQ0FBbUM7QUFDcEM7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGVBQWU7O0NBRWYsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix5REFBeUQ7Q0FDekQ7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQjtBSHJERDtFQUNFLHNCQUFBO0FEQUY7QUNHQTtFQUNFLGtEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBREFGIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgXCJ+bGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XG5AaW1wb3J0IFwifmxlYWZsZXQubWFya2VyY2x1c3Rlci9kaXN0L01hcmtlckNsdXN0ZXIuY3NzXCI7XG5AaW1wb3J0IFwifmxlYWZsZXQubWFya2VyY2x1c3Rlci9kaXN0L01hcmtlckNsdXN0ZXIuRGVmYXVsdC5jc3NcIjtcbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSGlyYWdpbm8gU2FucyBDTlNcIiwgXCLlvq7ou5/mraPpu5Hpq5RcIiwgXCJBcmlhbFwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgXCJ+bGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XG5AaW1wb3J0IFwifmxlYWZsZXQubWFya2VyY2x1c3Rlci9kaXN0L01hcmtlckNsdXN0ZXIuY3NzXCI7XG5AaW1wb3J0IFwifmxlYWZsZXQubWFya2VyY2x1c3Rlci9kaXN0L01hcmtlckNsdXN0ZXIuRGVmYXVsdC5jc3NcIjtcblxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCwgYm9keXtcbiAgZm9udC1mYW1pbHk6ICdIaXJhZ2lubyBTYW5zIENOUycsJ+W+rui7n+ato+m7kemrlCcsJ0FyaWFsJztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi8qIHJlcXVpcmVkIHN0eWxlcyAqL1xyXG5cclxuLmxlYWZsZXQtcGFuZSxcclxuLmxlYWZsZXQtdGlsZSxcclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3csXHJcbi5sZWFmbGV0LXRpbGUtY29udGFpbmVyLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnLFxyXG4ubGVhZmxldC1wYW5lID4gY2FudmFzLFxyXG4ubGVhZmxldC16b29tLWJveCxcclxuLmxlYWZsZXQtaW1hZ2UtbGF5ZXIsXHJcbi5sZWFmbGV0LWxheWVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG4ubGVhZmxldC10aWxlLFxyXG4ubGVhZmxldC1tYXJrZXItaWNvbixcclxuLmxlYWZsZXQtbWFya2VyLXNoYWRvdyB7XHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdCAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuXHR9XHJcbi8qIFByZXZlbnRzIElFMTEgZnJvbSBoaWdobGlnaHRpbmcgdGlsZXMgaW4gYmx1ZSAqL1xyXG4ubGVhZmxldC10aWxlOjpzZWxlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi8qIFNhZmFyaSByZW5kZXJzIG5vbi1yZXRpbmEgdGlsZSBvbiByZXRpbmEgYmV0dGVyIHdpdGggdGhpcywgYnV0IENocm9tZSBpcyB3b3JzZSAqL1xyXG4ubGVhZmxldC1zYWZhcmkgLmxlYWZsZXQtdGlsZSB7XHJcblx0aW1hZ2UtcmVuZGVyaW5nOiAtd2Via2l0LW9wdGltaXplLWNvbnRyYXN0O1xyXG5cdH1cclxuLyogaGFjayB0aGF0IHByZXZlbnRzIGh3IGxheWVycyBcInN0cmV0Y2hpbmdcIiB3aGVuIGxvYWRpbmcgbmV3IHRpbGVzICovXHJcbi5sZWFmbGV0LXNhZmFyaSAubGVhZmxldC10aWxlLWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDE2MDBweDtcclxuXHRoZWlnaHQ6IDE2MDBweDtcclxuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHR9XHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLFxyXG4ubGVhZmxldC1tYXJrZXItc2hhZG93IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbi8qIC5sZWFmbGV0LWNvbnRhaW5lciBzdmc6IHJlc2V0IHN2ZyBtYXgtd2lkdGggZGVjbGVyYXRpb24gc2hpcHBlZCBpbiBKb29tbGEhIChqb29tbGEub3JnKSAzLnggKi9cclxuLyogLmxlYWZsZXQtY29udGFpbmVyIGltZzogbWFwIGlzIGJyb2tlbiBpbiBGRiBpZiB5b3UgaGF2ZSBtYXgtd2lkdGg6IDEwMCUgb24gdGlsZXMgKi9cclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LW92ZXJsYXktcGFuZSBzdmcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1tYXJrZXItcGFuZSBpbWcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1zaGFkb3ctcGFuZSBpbWcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC10aWxlLXBhbmUgaW1nLFxyXG4ubGVhZmxldC1jb250YWluZXIgaW1nLmxlYWZsZXQtaW1hZ2UtbGF5ZXIsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC10aWxlIHtcclxuXHRtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuXHRtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtY29udGFpbmVyLmxlYWZsZXQtdG91Y2gtem9vbSB7XHJcblx0LW1zLXRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXk7XHJcblx0dG91Y2gtYWN0aW9uOiBwYW4teCBwYW4teTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lci5sZWFmbGV0LXRvdWNoLWRyYWcge1xyXG5cdC1tcy10b3VjaC1hY3Rpb246IHBpbmNoLXpvb207XHJcblx0LyogRmFsbGJhY2sgZm9yIEZGIHdoaWNoIGRvZXNuJ3Qgc3VwcG9ydCBwaW5jaC16b29tICovXHJcblx0dG91Y2gtYWN0aW9uOiBub25lO1xyXG5cdHRvdWNoLWFjdGlvbjogcGluY2gtem9vbTtcclxufVxyXG4ubGVhZmxldC1jb250YWluZXIubGVhZmxldC10b3VjaC1kcmFnLmxlYWZsZXQtdG91Y2gtem9vbSB7XHJcblx0LW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcclxuXHR0b3VjaC1hY3Rpb246IG5vbmU7XHJcbn1cclxuLmxlYWZsZXQtY29udGFpbmVyIHtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhIHtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoNTEsIDE4MSwgMjI5LCAwLjQpO1xyXG59XHJcbi5sZWFmbGV0LXRpbGUge1xyXG5cdGZpbHRlcjogaW5oZXJpdDtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG4ubGVhZmxldC10aWxlLWxvYWRlZCB7XHJcblx0dmlzaWJpbGl0eTogaW5oZXJpdDtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYm94IHtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdCAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR6LWluZGV4OiA4MDA7XHJcblx0fVxyXG4vKiB3b3JrYXJvdW5kIGZvciBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODgzMTkgKi9cclxuLmxlYWZsZXQtb3ZlcmxheS1wYW5lIHN2ZyB7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1wYW5lICAgICAgICAgeyB6LWluZGV4OiA0MDA7IH1cclxuXHJcbi5sZWFmbGV0LXRpbGUtcGFuZSAgICB7IHotaW5kZXg6IDIwMDsgfVxyXG4ubGVhZmxldC1vdmVybGF5LXBhbmUgeyB6LWluZGV4OiA0MDA7IH1cclxuLmxlYWZsZXQtc2hhZG93LXBhbmUgIHsgei1pbmRleDogNTAwOyB9XHJcbi5sZWFmbGV0LW1hcmtlci1wYW5lICB7IHotaW5kZXg6IDYwMDsgfVxyXG4ubGVhZmxldC10b29sdGlwLXBhbmUgICB7IHotaW5kZXg6IDY1MDsgfVxyXG4ubGVhZmxldC1wb3B1cC1wYW5lICAgeyB6LWluZGV4OiA3MDA7IH1cclxuXHJcbi5sZWFmbGV0LW1hcC1wYW5lIGNhbnZhcyB7IHotaW5kZXg6IDEwMDsgfVxyXG4ubGVhZmxldC1tYXAtcGFuZSBzdmcgICAgeyB6LWluZGV4OiAyMDA7IH1cclxuXHJcbi5sZWFmbGV0LXZtbC1zaGFwZSB7XHJcblx0d2lkdGg6IDFweDtcclxuXHRoZWlnaHQ6IDFweDtcclxuXHR9XHJcbi5sdm1sIHtcclxuXHRiZWhhdmlvcjogdXJsKCNkZWZhdWx0I1ZNTCk7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR9XHJcblxyXG5cclxuLyogY29udHJvbCBwb3NpdGlvbmluZyAqL1xyXG5cclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDgwMDtcclxuXHRwb2ludGVyLWV2ZW50czogdmlzaWJsZVBhaW50ZWQ7IC8qIElFIDktMTAgZG9lc24ndCBoYXZlIGF1dG8gKi9cclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcbi5sZWFmbGV0LXRvcCxcclxuLmxlYWZsZXQtYm90dG9tIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMTAwMDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvcCB7XHJcblx0dG9wOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtcmlnaHQge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtYm90dG9tIHtcclxuXHRib3R0b206IDA7XHJcblx0fVxyXG4ubGVhZmxldC1sZWZ0IHtcclxuXHRsZWZ0OiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG4ubGVhZmxldC1yaWdodCAubGVhZmxldC1jb250cm9sIHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0fVxyXG4ubGVhZmxldC10b3AgLmxlYWZsZXQtY29udHJvbCB7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJvdHRvbSAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtbGVmdCAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LXJpZ2h0IC5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHR9XHJcblxyXG5cclxuLyogem9vbSBhbmQgZmFkZSBhbmltYXRpb25zICovXHJcblxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtdGlsZSB7XHJcblx0d2lsbC1jaGFuZ2U6IG9wYWNpdHk7XHJcblx0fVxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtcG9wdXAge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuXHQgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcblx0fVxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtbWFwLXBhbmUgLmxlYWZsZXQtcG9wdXAge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWFuaW1hdGVkIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHQgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHQgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC16b29tLWFuaW1hdGVkIHtcclxuXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXpvb20tYW5pbWF0ZWQge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogICAgLW1vei10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjogICAgICAgICB0cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXRpbGUsXHJcbi5sZWFmbGV0LXBhbi1hbmltIC5sZWFmbGV0LXRpbGUge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuXHQgICAtbW96LXRyYW5zaXRpb246IG5vbmU7XHJcblx0ICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC16b29tLWhpZGUge1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cclxuLyogY3Vyc29ycyAqL1xyXG5cclxuLmxlYWZsZXQtaW50ZXJhY3RpdmUge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcbi5sZWFmbGV0LWdyYWIge1xyXG5cdGN1cnNvcjogLXdlYmtpdC1ncmFiO1xyXG5cdGN1cnNvcjogICAgLW1vei1ncmFiO1xyXG5cdGN1cnNvcjogICAgICAgICBncmFiO1xyXG5cdH1cclxuLmxlYWZsZXQtY3Jvc3NoYWlyLFxyXG4ubGVhZmxldC1jcm9zc2hhaXIgLmxlYWZsZXQtaW50ZXJhY3RpdmUge1xyXG5cdGN1cnNvcjogY3Jvc3NoYWlyO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtcGFuZSxcclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0Y3Vyc29yOiBhdXRvO1xyXG5cdH1cclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtZ3JhYixcclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtZ3JhYiAubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtbWFya2VyLWRyYWdnYWJsZSB7XHJcblx0Y3Vyc29yOiBtb3ZlO1xyXG5cdGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcclxuXHRjdXJzb3I6ICAgIC1tb3otZ3JhYmJpbmc7XHJcblx0Y3Vyc29yOiAgICAgICAgIGdyYWJiaW5nO1xyXG5cdH1cclxuXHJcbi8qIG1hcmtlciAmIG92ZXJsYXlzIGludGVyYWN0aXZpdHkgKi9cclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3csXHJcbi5sZWFmbGV0LWltYWdlLWxheWVyLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnIHBhdGgsXHJcbi5sZWFmbGV0LXRpbGUtY29udGFpbmVyIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1tYXJrZXItaWNvbi5sZWFmbGV0LWludGVyYWN0aXZlLFxyXG4ubGVhZmxldC1pbWFnZS1sYXllci5sZWFmbGV0LWludGVyYWN0aXZlLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnIHBhdGgubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuc3ZnLmxlYWZsZXQtaW1hZ2UtbGF5ZXIubGVhZmxldC1pbnRlcmFjdGl2ZSBwYXRoIHtcclxuXHRwb2ludGVyLWV2ZW50czogdmlzaWJsZVBhaW50ZWQ7IC8qIElFIDktMTAgZG9lc24ndCBoYXZlIGF1dG8gKi9cclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcblxyXG4vKiB2aXN1YWwgdHdlYWtzICovXHJcblxyXG4ubGVhZmxldC1jb250YWluZXIge1xyXG5cdGJhY2tncm91bmQ6ICNkZGQ7XHJcblx0b3V0bGluZTogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhIHtcclxuXHRjb2xvcjogIzAwNzhBODtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhLmxlYWZsZXQtYWN0aXZlIHtcclxuXHRvdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1ib3gge1xyXG5cdGJvcmRlcjogMnB4IGRvdHRlZCAjMzhmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuXHR9XHJcblxyXG5cclxuLyogZ2VuZXJhbCB0eXBvZ3JhcGh5ICovXHJcbi5sZWFmbGV0LWNvbnRhaW5lciB7XHJcblx0Zm9udDogMTJweC8xLjUgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdH1cclxuXHJcblxyXG4vKiBnZW5lcmFsIHRvb2xiYXIgc3R5bGVzICovXHJcblxyXG4ubGVhZmxldC1iYXIge1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLDAuNjUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhLFxyXG4ubGVhZmxldC1iYXIgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuXHR3aWR0aDogMjZweDtcclxuXHRoZWlnaHQ6IDI2cHg7XHJcblx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYSxcclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhOmZpcnN0LWNoaWxkIHtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhOmxhc3QtY2hpbGQge1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1ib3R0b206IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYS5sZWFmbGV0LWRpc2FibGVkIHtcclxuXHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuXHRjb2xvcjogI2JiYjtcclxuXHR9XHJcblxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIgYSB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIGE6Zmlyc3QtY2hpbGQge1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIGE6bGFzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XHJcblx0fVxyXG5cclxuLyogem9vbSBjb250cm9sICovXHJcblxyXG4ubGVhZmxldC1jb250cm9sLXpvb20taW4sXHJcbi5sZWFmbGV0LWNvbnRyb2wtem9vbS1vdXQge1xyXG5cdGZvbnQ6IGJvbGQgMThweCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIG1vbm9zcGFjZTtcclxuXHR0ZXh0LWluZGVudDogMXB4O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtem9vbS1pbiwgLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC16b29tLW91dCAge1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHR9XHJcblxyXG5cclxuLyogbGF5ZXJzIGNvbnRyb2wgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLDAsMCwwLjQpO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2xheWVycy5wbmcpO1xyXG5cdHdpZHRoOiAzNnB4O1xyXG5cdGhlaWdodDogMzZweDtcclxuXHR9XHJcbi5sZWFmbGV0LXJldGluYSAubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvbGF5ZXJzLTJ4LnBuZyk7XHJcblx0YmFja2dyb3VuZC1zaXplOiAyNnB4IDI2cHg7XHJcblx0fVxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdHdpZHRoOiA0NHB4O1xyXG5cdGhlaWdodDogNDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWxpc3QsXHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWxpc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIHtcclxuXHRwYWRkaW5nOiA2cHggMTBweCA2cHggNnB4O1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1zY3JvbGxiYXIge1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0cGFkZGluZy1yaWdodDogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtc2VsZWN0b3Ige1xyXG5cdG1hcmdpbi10b3A6IDJweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAxcHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycyBsYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1zZXBhcmF0b3Ige1xyXG5cdGhlaWdodDogMDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuXHRtYXJnaW46IDVweCAtMTBweCA1cHggLTZweDtcclxuXHR9XHJcblxyXG4vKiBEZWZhdWx0IGljb24gVVJMcyAqL1xyXG4ubGVhZmxldC1kZWZhdWx0LWljb24tcGF0aCB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9tYXJrZXItaWNvbi5wbmcpO1xyXG5cdH1cclxuXHJcblxyXG4vKiBhdHRyaWJ1dGlvbiBhbmQgc2NhbGUgY29udHJvbHMgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuXHRtYXJnaW46IDA7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uLFxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmUge1xyXG5cdHBhZGRpbmc6IDAgNXB4O1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbiBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIGE6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24sXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1jb250cm9sLXNjYWxlIHtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0fVxyXG4ubGVhZmxldC1sZWZ0IC5sZWFmbGV0LWNvbnRyb2wtc2NhbGUge1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0fVxyXG4ubGVhZmxldC1ib3R0b20gLmxlYWZsZXQtY29udHJvbC1zY2FsZSB7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lIHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjNzc3O1xyXG5cdGJvcmRlci10b3A6IG5vbmU7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRwYWRkaW5nOiAycHggNXB4IDFweDtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuXHRib3JkZXItdG9wOiAycHggc29saWQgIzc3NztcclxuXHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdG1hcmdpbi10b3A6IC0ycHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmU6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3Nzc7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbixcclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1sYXllcnMsXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciB7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLFxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIge1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG5cdH1cclxuXHJcblxyXG4vKiBwb3B1cCAqL1xyXG5cclxuLmxlYWZsZXQtcG9wdXAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlciB7XHJcblx0cGFkZGluZzogMXB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQge1xyXG5cdG1hcmdpbjogMTNweCAxOXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjQ7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50IHAge1xyXG5cdG1hcmdpbjogMThweCAwO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtdGlwLWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC10aXAge1xyXG5cdHdpZHRoOiAxN3B4O1xyXG5cdGhlaWdodDogMTdweDtcclxuXHRwYWRkaW5nOiAxcHg7XHJcblxyXG5cdG1hcmdpbjogLTEwcHggYXV0byAwO1xyXG5cclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcixcclxuLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRjb2xvcjogIzMzMztcclxuXHRib3gtc2hhZG93OiAwIDNweCAxNHB4IHJnYmEoMCwwLDAsMC40KTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhLmxlYWZsZXQtcG9wdXAtY2xvc2UtYnV0dG9uIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHBhZGRpbmc6IDRweCA0cHggMCAwO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0aGVpZ2h0OiAxNHB4O1xyXG5cdGZvbnQ6IDE2cHgvMTRweCBUYWhvbWEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICNjM2MzYzM7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIGEubGVhZmxldC1wb3B1cC1jbG9zZS1idXR0b246aG92ZXIge1xyXG5cdGNvbG9yOiAjOTk5O1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtc2Nyb2xsZWQge1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlciB7XHJcblx0em9vbTogMTtcclxuXHR9XHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLXRpcCB7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblxyXG5cdC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChNMTE9MC43MDcxMDY3OCwgTTEyPTAuNzA3MTA2NzgsIE0yMT0tMC43MDcxMDY3OCwgTTIyPTAuNzA3MTA2NzgpXCI7XHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KE0xMT0wLjcwNzEwNjc4LCBNMTI9MC43MDcxMDY3OCwgTTIxPS0wLjcwNzEwNjc4LCBNMjI9MC43MDcxMDY3OCk7XHJcblx0fVxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC10aXAtY29udGFpbmVyIHtcclxuXHRtYXJnaW4tdG9wOiAtMXB4O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LWNvbnRyb2wtem9vbSxcclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtY29udHJvbC1sYXllcnMsXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcixcclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG5cdH1cclxuXHJcblxyXG4vKiBkaXYgaWNvbiAqL1xyXG5cclxuLmxlYWZsZXQtZGl2LWljb24ge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuXHR9XHJcblxyXG5cclxuLyogVG9vbHRpcCAqL1xyXG4vKiBCYXNlIHN0eWxlcyBmb3IgdGhlIGVsZW1lbnQgdGhhdCBoYXMgYSB0b29sdGlwICovXHJcbi5sZWFmbGV0LXRvb2x0aXAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRwYWRkaW5nOiA2cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjb2xvcjogIzIyMjtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAubGVhZmxldC1jbGlja2FibGUge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wOmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b206YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQ6YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLXJpZ2h0OmJlZm9yZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0fVxyXG5cclxuLyogRGlyZWN0aW9ucyAqL1xyXG5cclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b20ge1xyXG5cdG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLXRvcCB7XHJcblx0bWFyZ2luLXRvcDogLTZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLWJvdHRvbTpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wOmJlZm9yZSB7XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC10b3A6YmVmb3JlIHtcclxuXHRib3R0b206IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogLTEycHg7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtYm90dG9tOmJlZm9yZSB7XHJcblx0dG9wOiAwO1xyXG5cdG1hcmdpbi10b3A6IC0xMnB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQge1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG59XHJcbi5sZWFmbGV0LXRvb2x0aXAtcmlnaHQge1xyXG5cdG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuLmxlYWZsZXQtdG9vbHRpcC1sZWZ0OmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodDpiZWZvcmUge1xyXG5cdHRvcDogNTAlO1xyXG5cdG1hcmdpbi10b3A6IC02cHg7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQ6YmVmb3JlIHtcclxuXHRyaWdodDogMDtcclxuXHRtYXJnaW4tcmlnaHQ6IC0xMnB4O1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodDpiZWZvcmUge1xyXG5cdGxlZnQ6IDA7XHJcblx0bWFyZ2luLWxlZnQ6IC0xMnB4O1xyXG5cdGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbiIsIi5sZWFmbGV0LWNsdXN0ZXItYW5pbSAubGVhZmxldC1tYXJrZXItaWNvbiwgLmxlYWZsZXQtY2x1c3Rlci1hbmltIC5sZWFmbGV0LW1hcmtlci1zaGFkb3cge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCwgb3BhY2l0eSAwLjNzIGVhc2UtaW47XHJcblx0LW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCBvcGFjaXR5IDAuM3MgZWFzZS1pbjtcclxuXHQtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCwgb3BhY2l0eSAwLjNzIGVhc2UtaW47XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIG9wYWNpdHkgMC4zcyBlYXNlLWluO1xyXG59XHJcblxyXG4ubGVhZmxldC1jbHVzdGVyLXNwaWRlci1sZWcge1xyXG5cdC8qIHN0cm9rZS1kYXNob2Zmc2V0IChkdXJhdGlvbiBhbmQgZnVuY3Rpb24pIHNob3VsZCBtYXRjaCB3aXRoIGxlYWZsZXQtbWFya2VyLWljb24gdHJhbnNmb3JtIGluIG9yZGVyIHRvIHRyYWNrIGl0IGV4YWN0bHkgKi9cclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtc3Ryb2tlLWRhc2hvZmZzZXQgMC4zcyBlYXNlLW91dCwgLXdlYmtpdC1zdHJva2Utb3BhY2l0eSAwLjNzIGVhc2UtaW47XHJcblx0LW1vei10cmFuc2l0aW9uOiAtbW96LXN0cm9rZS1kYXNob2Zmc2V0IDAuM3MgZWFzZS1vdXQsIC1tb3otc3Ryb2tlLW9wYWNpdHkgMC4zcyBlYXNlLWluO1xyXG5cdC1vLXRyYW5zaXRpb246IC1vLXN0cm9rZS1kYXNob2Zmc2V0IDAuM3MgZWFzZS1vdXQsIC1vLXN0cm9rZS1vcGFjaXR5IDAuM3MgZWFzZS1pbjtcclxuXHR0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAwLjNzIGVhc2Utb3V0LCBzdHJva2Utb3BhY2l0eSAwLjNzIGVhc2UtaW47XHJcbn1cclxuIiwiLm1hcmtlci1jbHVzdGVyLXNtYWxsIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MSwgMjI2LCAxNDAsIDAuNik7XHJcblx0fVxyXG4ubWFya2VyLWNsdXN0ZXItc21hbGwgZGl2IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExMCwgMjA0LCA1NywgMC42KTtcclxuXHR9XHJcblxyXG4ubWFya2VyLWNsdXN0ZXItbWVkaXVtIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjExLCA4NywgMC42KTtcclxuXHR9XHJcbi5tYXJrZXItY2x1c3Rlci1tZWRpdW0gZGl2IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTk0LCAxMiwgMC42KTtcclxuXHR9XHJcblxyXG4ubWFya2VyLWNsdXN0ZXItbGFyZ2Uge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCAxNTYsIDExNSwgMC42KTtcclxuXHR9XHJcbi5tYXJrZXItY2x1c3Rlci1sYXJnZSBkaXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAxMjgsIDIzLCAwLjYpO1xyXG5cdH1cclxuXHJcblx0LyogSUUgNi04IGZhbGxiYWNrIGNvbG9ycyAqL1xyXG4ubGVhZmxldC1vbGRpZSAubWFya2VyLWNsdXN0ZXItc21hbGwge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxODEsIDIyNiwgMTQwKTtcclxuXHR9XHJcbi5sZWFmbGV0LW9sZGllIC5tYXJrZXItY2x1c3Rlci1zbWFsbCBkaXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDIwNCwgNTcpO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LW9sZGllIC5tYXJrZXItY2x1c3Rlci1tZWRpdW0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIxMSwgODcpO1xyXG5cdH1cclxuLmxlYWZsZXQtb2xkaWUgLm1hcmtlci1jbHVzdGVyLW1lZGl1bSBkaXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE5NCwgMTIpO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LW9sZGllIC5tYXJrZXItY2x1c3Rlci1sYXJnZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMTU2LCAxMTUpO1xyXG5cdH1cclxuLmxlYWZsZXQtb2xkaWUgLm1hcmtlci1jbHVzdGVyLWxhcmdlIGRpdiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMTI4LCAyMyk7XHJcbn1cclxuXHJcbi5tYXJrZXItY2x1c3RlciB7XHJcblx0YmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdH1cclxuLm1hcmtlci1jbHVzdGVyIGRpdiB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRmb250OiAxMnB4IFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHR9XHJcbi5tYXJrZXItY2x1c3RlciBzcGFuIHtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHR9Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\TheF2E_2019\week10\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map