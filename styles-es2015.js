(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\n/* required styles */\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        -ms-user-select: none;\r\n\t    user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\n/* Prevents IE11 from highlighting tiles in blue */\n.leaflet-tile::-moz-selection {\r\n\tbackground: transparent;\r\n}\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\n.leaflet-container.leaflet-touch-zoom {\r\n\ttouch-action: pan-x pan-y;\r\n\t}\n.leaflet-container.leaflet-touch-drag {\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\ttouch-action: none;\r\n}\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\n.leaflet-tile {\r\n\t-webkit-filter: inherit;\r\n\t        filter: inherit;\r\n\tvisibility: hidden;\r\n\t}\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tbox-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\n.leaflet-pane         { z-index: 400; }\n.leaflet-tile-pane    { z-index: 200; }\n.leaflet-overlay-pane { z-index: 400; }\n.leaflet-shadow-pane  { z-index: 500; }\n.leaflet-marker-pane  { z-index: 600; }\n.leaflet-tooltip-pane   { z-index: 650; }\n.leaflet-popup-pane   { z-index: 700; }\n.leaflet-map-pane canvas { z-index: 100; }\n.leaflet-map-pane svg    { z-index: 200; }\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\n/* control positioning */\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\n.leaflet-right {\r\n\tright: 0;\r\n\t}\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\n/* zoom and fade animations */\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1), -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t        transition: none;\r\n\t}\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\n/* cursors */\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:         grab;\r\n\t}\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\n/* visual tweaks */\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\n/* general typography */\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\n/* general toolbar styles */\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\n/* zoom control */\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\n/* layers control */\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url('maskmap/layers.png');\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url('maskmap/layers-2x.png');\r\n\tbackground-size: 26px 26px;\r\n\t}\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\n/* Default icon URLs */\n.leaflet-default-icon-path {\r\n\tbackground-image: url('maskmap/marker-icon.png');\r\n\t}\n/* attribution and scale controls */\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbox-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\n/* popup */\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\n/* div icon */\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\n/* Tooltip */\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\n/* Directions */\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\n.leaflet-cluster-anim .leaflet-marker-icon, .leaflet-cluster-anim .leaflet-marker-shadow {\r\n\t-webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\t-webkit-transition: opacity 0.3s ease-in, -webkit-transform 0.3s ease-out;\r\n\ttransition: opacity 0.3s ease-in, -webkit-transform 0.3s ease-out;\r\n\ttransition: transform 0.3s ease-out, opacity 0.3s ease-in;\r\n\ttransition: transform 0.3s ease-out, opacity 0.3s ease-in, -webkit-transform 0.3s ease-out;\r\n}\n.leaflet-cluster-spider-leg {\r\n\t/* stroke-dashoffset (duration and function) should match with leaflet-marker-icon transform in order to track it exactly */\r\n\t-webkit-transition: -webkit-stroke-dashoffset 0.3s ease-out, -webkit-stroke-opacity 0.3s ease-in;\r\n\t-webkit-transition: stroke-dashoffset 0.3s ease-out, stroke-opacity 0.3s ease-in;\r\n\ttransition: stroke-dashoffset 0.3s ease-out, stroke-opacity 0.3s ease-in;\r\n}\n.marker-cluster-small {\r\n\tbackground-color: rgba(181, 226, 140, 0.6);\r\n\t}\n.marker-cluster-small div {\r\n\tbackground-color: rgba(110, 204, 57, 0.6);\r\n\t}\n.marker-cluster-medium {\r\n\tbackground-color: rgba(241, 211, 87, 0.6);\r\n\t}\n.marker-cluster-medium div {\r\n\tbackground-color: rgba(240, 194, 12, 0.6);\r\n\t}\n.marker-cluster-large {\r\n\tbackground-color: rgba(253, 156, 115, 0.6);\r\n\t}\n.marker-cluster-large div {\r\n\tbackground-color: rgba(241, 128, 23, 0.6);\r\n\t}\n/* IE 6-8 fallback colors */\n.leaflet-oldie .marker-cluster-small {\r\n\tbackground-color: rgb(181, 226, 140);\r\n\t}\n.leaflet-oldie .marker-cluster-small div {\r\n\tbackground-color: rgb(110, 204, 57);\r\n\t}\n.leaflet-oldie .marker-cluster-medium {\r\n\tbackground-color: rgb(241, 211, 87);\r\n\t}\n.leaflet-oldie .marker-cluster-medium div {\r\n\tbackground-color: rgb(240, 194, 12);\r\n\t}\n.leaflet-oldie .marker-cluster-large {\r\n\tbackground-color: rgb(253, 156, 115);\r\n\t}\n.leaflet-oldie .marker-cluster-large div {\r\n\tbackground-color: rgb(241, 128, 23);\r\n}\n.marker-cluster {\r\n\tbackground-clip: padding-box;\r\n\tborder-radius: 20px;\r\n\t}\n.marker-cluster div {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tmargin-left: 5px;\r\n\tmargin-top: 5px;\r\n\r\n\ttext-align: center;\r\n\tborder-radius: 15px;\r\n\tfont: 12px \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\n.marker-cluster span {\r\n\tline-height: 30px;\r\n\t}\n* {\n  box-sizing: border-box;\n}\nhtml, body {\n  font-family: \"Hiragino Sans CNS\", \"微軟正黑體\", \"Arial\";\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9EOlxcVGhlRjJFXzIwMTlcXHdlZWsxMC9zcmNcXHN0eWxlcy5zY3NzIiwibm9kZV9tb2R1bGVzL2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyIsIm5vZGVfbW9kdWxlcy9sZWFmbGV0Lm1hcmtlcmNsdXN0ZXIvZGlzdC9NYXJrZXJDbHVzdGVyLmNzcyIsIm5vZGVfbW9kdWxlcy9sZWFmbGV0Lm1hcmtlcmNsdXN0ZXIvZGlzdC9NYXJrZXJDbHVzdGVyLkRlZmF1bHQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiw4RUFBQTtBQ0FBLG9CQUFvQjtBQUVwQjs7Ozs7Ozs7OztDQVVDLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsTUFBTTtDQUNOO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7QUFDRDs7O0NBR0MseUJBQXlCO0lBQ3RCLHNCQUFzQjtTQUNqQixxQkFBaUI7S0FBakIsaUJBQWlCO0dBQ3ZCLHVCQUF1QjtDQUN6QjtBQUNELGtEQUFrRDtBQUNsRDtDQUNDLHVCQUF1QjtBQUN4QjtBQUZBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0EsbUZBQW1GO0FBQ25GO0NBQ0MsMENBQTBDO0NBQzFDO0FBQ0QscUVBQXFFO0FBQ3JFO0NBQ0MsYUFBYTtDQUNiLGNBQWM7Q0FDZCw2QkFBNkI7Q0FDN0I7QUFDRDs7Q0FFQyxjQUFjO0NBQ2Q7QUFDRCxnR0FBZ0c7QUFDaEcscUZBQXFGO0FBQ3JGOzs7Ozs7Q0FNQywwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCO0FBRUQ7Q0FFQyx5QkFBeUI7Q0FDekI7QUFDRDtDQUVDLHFEQUFxRDtDQUNyRCxrQkFBa0I7Q0FDbEIsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FFQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLHdDQUF3QztBQUN6QztBQUNBO0NBQ0Msb0RBQW9EO0FBQ3JEO0FBQ0E7Q0FDQyx1QkFBZTtTQUFmLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEI7QUFDRDtD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LHdFQUF3RTtBQUN6RTtBQ2JBO0NBQ0MsMENBQTBDO0NBQzFDO0FBQ0Q7Q0FDQyx5Q0FBeUM7Q0FDekM7QUFFRDtDQUNDLHlDQUF5QztDQUN6QztBQUNEO0NBQ0MseUNBQXlDO0NBQ3pDO0FBRUQ7Q0FDQywwQ0FBMEM7Q0FDMUM7QUFDRDtDQUNDLHlDQUF5QztDQUN6QztBQUVBLDJCQUEyQjtBQUM1QjtDQUNDLG9DQUFvQztDQUNwQztBQUNEO0NBQ0MsbUNBQW1DO0NBQ25DO0FBRUQ7Q0FDQyxtQ0FBbUM7Q0FDbkM7QUFDRDtDQUNDLG1DQUFtQztDQUNuQztBQUVEO0NBQ0Msb0NBQW9DO0NBQ3BDO0FBQ0Q7Q0FDQyxtQ0FBbUM7QUFDcEM7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixtQkFBbUI7Q0FDbkI7QUFDRDtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGVBQWU7O0NBRWYsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix5REFBeUQ7Q0FDekQ7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQjtBSHJERDtFQUNFLHNCQUFBO0FEQUY7QUNHQTtFQUNFLGtEQUFBO0FEQUYiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCBcIn5sZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIjtcbkBpbXBvcnQgXCJ+bGVhZmxldC5tYXJrZXJjbHVzdGVyL2Rpc3QvTWFya2VyQ2x1c3Rlci5jc3NcIjtcbkBpbXBvcnQgXCJ+bGVhZmxldC5tYXJrZXJjbHVzdGVyL2Rpc3QvTWFya2VyQ2x1c3Rlci5EZWZhdWx0LmNzc1wiO1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHkge1xuICBmb250LWZhbWlseTogXCJIaXJhZ2lubyBTYW5zIENOU1wiLCBcIuW+rui7n+ato+m7kemrlFwiLCBcIkFyaWFsXCI7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCBcIn5sZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIjtcbkBpbXBvcnQgXCJ+bGVhZmxldC5tYXJrZXJjbHVzdGVyL2Rpc3QvTWFya2VyQ2x1c3Rlci5jc3NcIjtcbkBpbXBvcnQgXCJ+bGVhZmxldC5tYXJrZXJjbHVzdGVyL2Rpc3QvTWFya2VyQ2x1c3Rlci5EZWZhdWx0LmNzc1wiO1xuXG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5e1xuICBmb250LWZhbWlseTogJ0hpcmFnaW5vIFNhbnMgQ05TJywn5b6u6Luf5q2j6buR6auUJywnQXJpYWwnO1xufVxuIiwiLyogcmVxdWlyZWQgc3R5bGVzICovXHJcblxyXG4ubGVhZmxldC1wYW5lLFxyXG4ubGVhZmxldC10aWxlLFxyXG4ubGVhZmxldC1tYXJrZXItaWNvbixcclxuLmxlYWZsZXQtbWFya2VyLXNoYWRvdyxcclxuLmxlYWZsZXQtdGlsZS1jb250YWluZXIsXHJcbi5sZWFmbGV0LXBhbmUgPiBzdmcsXHJcbi5sZWFmbGV0LXBhbmUgPiBjYW52YXMsXHJcbi5sZWFmbGV0LXpvb20tYm94LFxyXG4ubGVhZmxldC1pbWFnZS1sYXllcixcclxuLmxlYWZsZXQtbGF5ZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcbi5sZWFmbGV0LXRpbGUsXHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLFxyXG4ubGVhZmxldC1tYXJrZXItc2hhZG93IHtcclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdCAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHQgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG5cdH1cclxuLyogUHJldmVudHMgSUUxMSBmcm9tIGhpZ2hsaWdodGluZyB0aWxlcyBpbiBibHVlICovXHJcbi5sZWFmbGV0LXRpbGU6OnNlbGVjdGlvbiB7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLyogU2FmYXJpIHJlbmRlcnMgbm9uLXJldGluYSB0aWxlIG9uIHJldGluYSBiZXR0ZXIgd2l0aCB0aGlzLCBidXQgQ2hyb21lIGlzIHdvcnNlICovXHJcbi5sZWFmbGV0LXNhZmFyaSAubGVhZmxldC10aWxlIHtcclxuXHRpbWFnZS1yZW5kZXJpbmc6IC13ZWJraXQtb3B0aW1pemUtY29udHJhc3Q7XHJcblx0fVxyXG4vKiBoYWNrIHRoYXQgcHJldmVudHMgaHcgbGF5ZXJzIFwic3RyZXRjaGluZ1wiIHdoZW4gbG9hZGluZyBuZXcgdGlsZXMgKi9cclxuLmxlYWZsZXQtc2FmYXJpIC5sZWFmbGV0LXRpbGUtY29udGFpbmVyIHtcclxuXHR3aWR0aDogMTYwMHB4O1xyXG5cdGhlaWdodDogMTYwMHB4O1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG5cdH1cclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3cge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuLyogLmxlYWZsZXQtY29udGFpbmVyIHN2ZzogcmVzZXQgc3ZnIG1heC13aWR0aCBkZWNsZXJhdGlvbiBzaGlwcGVkIGluIEpvb21sYSEgKGpvb21sYS5vcmcpIDMueCAqL1xyXG4vKiAubGVhZmxldC1jb250YWluZXIgaW1nOiBtYXAgaXMgYnJva2VuIGluIEZGIGlmIHlvdSBoYXZlIG1heC13aWR0aDogMTAwJSBvbiB0aWxlcyAqL1xyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtb3ZlcmxheS1wYW5lIHN2ZyxcclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LW1hcmtlci1wYW5lIGltZyxcclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LXNoYWRvdy1wYW5lIGltZyxcclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LXRpbGUtcGFuZSBpbWcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciBpbWcubGVhZmxldC1pbWFnZS1sYXllcixcclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LXRpbGUge1xyXG5cdG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xyXG5cdG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1jb250YWluZXIubGVhZmxldC10b3VjaC16b29tIHtcclxuXHQtbXMtdG91Y2gtYWN0aW9uOiBwYW4teCBwYW4teTtcclxuXHR0b3VjaC1hY3Rpb246IHBhbi14IHBhbi15O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyLmxlYWZsZXQtdG91Y2gtZHJhZyB7XHJcblx0LW1zLXRvdWNoLWFjdGlvbjogcGluY2gtem9vbTtcclxuXHQvKiBGYWxsYmFjayBmb3IgRkYgd2hpY2ggZG9lc24ndCBzdXBwb3J0IHBpbmNoLXpvb20gKi9cclxuXHR0b3VjaC1hY3Rpb246IG5vbmU7XHJcblx0dG91Y2gtYWN0aW9uOiBwaW5jaC16b29tO1xyXG59XHJcbi5sZWFmbGV0LWNvbnRhaW5lci5sZWFmbGV0LXRvdWNoLWRyYWcubGVhZmxldC10b3VjaC16b29tIHtcclxuXHQtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xyXG5cdHRvdWNoLWFjdGlvbjogbm9uZTtcclxufVxyXG4ubGVhZmxldC1jb250YWluZXIge1xyXG5cdC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxlYWZsZXQtY29udGFpbmVyIGEge1xyXG5cdC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSg1MSwgMTgxLCAyMjksIDAuNCk7XHJcbn1cclxuLmxlYWZsZXQtdGlsZSB7XHJcblx0ZmlsdGVyOiBpbmhlcml0O1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcbi5sZWFmbGV0LXRpbGUtbG9hZGVkIHtcclxuXHR2aXNpYmlsaXR5OiBpbmhlcml0O1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1ib3gge1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdHotaW5kZXg6IDgwMDtcclxuXHR9XHJcbi8qIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4ODMxOSAqL1xyXG4ubGVhZmxldC1vdmVybGF5LXBhbmUgc3ZnIHtcclxuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXBhbmUgICAgICAgICB7IHotaW5kZXg6IDQwMDsgfVxyXG5cclxuLmxlYWZsZXQtdGlsZS1wYW5lICAgIHsgei1pbmRleDogMjAwOyB9XHJcbi5sZWFmbGV0LW92ZXJsYXktcGFuZSB7IHotaW5kZXg6IDQwMDsgfVxyXG4ubGVhZmxldC1zaGFkb3ctcGFuZSAgeyB6LWluZGV4OiA1MDA7IH1cclxuLmxlYWZsZXQtbWFya2VyLXBhbmUgIHsgei1pbmRleDogNjAwOyB9XHJcbi5sZWFmbGV0LXRvb2x0aXAtcGFuZSAgIHsgei1pbmRleDogNjUwOyB9XHJcbi5sZWFmbGV0LXBvcHVwLXBhbmUgICB7IHotaW5kZXg6IDcwMDsgfVxyXG5cclxuLmxlYWZsZXQtbWFwLXBhbmUgY2FudmFzIHsgei1pbmRleDogMTAwOyB9XHJcbi5sZWFmbGV0LW1hcC1wYW5lIHN2ZyAgICB7IHotaW5kZXg6IDIwMDsgfVxyXG5cclxuLmxlYWZsZXQtdm1sLXNoYXBlIHtcclxuXHR3aWR0aDogMXB4O1xyXG5cdGhlaWdodDogMXB4O1xyXG5cdH1cclxuLmx2bWwge1xyXG5cdGJlaGF2aW9yOiB1cmwoI2RlZmF1bHQjVk1MKTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdH1cclxuXHJcblxyXG4vKiBjb250cm9sIHBvc2l0aW9uaW5nICovXHJcblxyXG4ubGVhZmxldC1jb250cm9sIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogODAwO1xyXG5cdHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlUGFpbnRlZDsgLyogSUUgOS0xMCBkb2Vzbid0IGhhdmUgYXV0byAqL1xyXG5cdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9wLFxyXG4ubGVhZmxldC1ib3R0b20ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAxMDAwO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9wIHtcclxuXHR0b3A6IDA7XHJcblx0fVxyXG4ubGVhZmxldC1yaWdodCB7XHJcblx0cmlnaHQ6IDA7XHJcblx0fVxyXG4ubGVhZmxldC1ib3R0b20ge1xyXG5cdGJvdHRvbTogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWxlZnQge1xyXG5cdGxlZnQ6IDA7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRjbGVhcjogYm90aDtcclxuXHR9XHJcbi5sZWFmbGV0LXJpZ2h0IC5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHR9XHJcbi5sZWFmbGV0LXRvcCAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtYm90dG9tIC5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG4ubGVhZmxldC1sZWZ0IC5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtcmlnaHQgLmxlYWZsZXQtY29udHJvbCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuXHJcblxyXG4vKiB6b29tIGFuZCBmYWRlIGFuaW1hdGlvbnMgKi9cclxuXHJcbi5sZWFmbGV0LWZhZGUtYW5pbSAubGVhZmxldC10aWxlIHtcclxuXHR3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxuXHR9XHJcbi5sZWFmbGV0LWZhZGUtYW5pbSAubGVhZmxldC1wb3B1cCB7XHJcblx0b3BhY2l0eTogMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcblx0ICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuXHR9XHJcbi5sZWFmbGV0LWZhZGUtYW5pbSAubGVhZmxldC1tYXAtcGFuZSAubGVhZmxldC1wb3B1cCB7XHJcblx0b3BhY2l0eTogMTtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYW5pbWF0ZWQge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG5cdCAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG5cdCAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXpvb20tYW5pbWF0ZWQge1xyXG5cdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWFuaW0gLmxlYWZsZXQtem9vbS1hbmltYXRlZCB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMCwwLDAuMjUsMSk7XHJcblx0ICAgLW1vei10cmFuc2l0aW9uOiAgICAtbW96LXRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMCwwLDAuMjUsMSk7XHJcblx0ICAgICAgICB0cmFuc2l0aW9uOiAgICAgICAgIHRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMCwwLDAuMjUsMSk7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWFuaW0gLmxlYWZsZXQtdGlsZSxcclxuLmxlYWZsZXQtcGFuLWFuaW0gLmxlYWZsZXQtdGlsZSB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogbm9uZTtcclxuXHQgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXpvb20taGlkZSB7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdH1cclxuXHJcblxyXG4vKiBjdXJzb3JzICovXHJcblxyXG4ubGVhZmxldC1pbnRlcmFjdGl2ZSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuLmxlYWZsZXQtZ3JhYiB7XHJcblx0Y3Vyc29yOiAtd2Via2l0LWdyYWI7XHJcblx0Y3Vyc29yOiAgICAtbW96LWdyYWI7XHJcblx0Y3Vyc29yOiAgICAgICAgIGdyYWI7XHJcblx0fVxyXG4ubGVhZmxldC1jcm9zc2hhaXIsXHJcbi5sZWFmbGV0LWNyb3NzaGFpciAubGVhZmxldC1pbnRlcmFjdGl2ZSB7XHJcblx0Y3Vyc29yOiBjcm9zc2hhaXI7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1wYW5lLFxyXG4ubGVhZmxldC1jb250cm9sIHtcclxuXHRjdXJzb3I6IGF1dG87XHJcblx0fVxyXG4ubGVhZmxldC1kcmFnZ2luZyAubGVhZmxldC1ncmFiLFxyXG4ubGVhZmxldC1kcmFnZ2luZyAubGVhZmxldC1ncmFiIC5sZWFmbGV0LWludGVyYWN0aXZlLFxyXG4ubGVhZmxldC1kcmFnZ2luZyAubGVhZmxldC1tYXJrZXItZHJhZ2dhYmxlIHtcclxuXHRjdXJzb3I6IG1vdmU7XHJcblx0Y3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xyXG5cdGN1cnNvcjogICAgLW1vei1ncmFiYmluZztcclxuXHRjdXJzb3I6ICAgICAgICAgZ3JhYmJpbmc7XHJcblx0fVxyXG5cclxuLyogbWFya2VyICYgb3ZlcmxheXMgaW50ZXJhY3Rpdml0eSAqL1xyXG4ubGVhZmxldC1tYXJrZXItaWNvbixcclxuLmxlYWZsZXQtbWFya2VyLXNoYWRvdyxcclxuLmxlYWZsZXQtaW1hZ2UtbGF5ZXIsXHJcbi5sZWFmbGV0LXBhbmUgPiBzdmcgcGF0aCxcclxuLmxlYWZsZXQtdGlsZS1jb250YWluZXIge1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLmxlYWZsZXQtaW50ZXJhY3RpdmUsXHJcbi5sZWFmbGV0LWltYWdlLWxheWVyLmxlYWZsZXQtaW50ZXJhY3RpdmUsXHJcbi5sZWFmbGV0LXBhbmUgPiBzdmcgcGF0aC5sZWFmbGV0LWludGVyYWN0aXZlLFxyXG5zdmcubGVhZmxldC1pbWFnZS1sYXllci5sZWFmbGV0LWludGVyYWN0aXZlIHBhdGgge1xyXG5cdHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlUGFpbnRlZDsgLyogSUUgOS0xMCBkb2Vzbid0IGhhdmUgYXV0byAqL1xyXG5cdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG5cdH1cclxuXHJcbi8qIHZpc3VhbCB0d2Vha3MgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRhaW5lciB7XHJcblx0YmFja2dyb3VuZDogI2RkZDtcclxuXHRvdXRsaW5lOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIGEge1xyXG5cdGNvbG9yOiAjMDA3OEE4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIGEubGVhZmxldC1hY3RpdmUge1xyXG5cdG91dGxpbmU6IDJweCBzb2xpZCBvcmFuZ2U7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWJveCB7XHJcblx0Ym9yZGVyOiAycHggZG90dGVkICMzOGY7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG5cdH1cclxuXHJcblxyXG4vKiBnZW5lcmFsIHR5cG9ncmFwaHkgKi9cclxuLmxlYWZsZXQtY29udGFpbmVyIHtcclxuXHRmb250OiAxMnB4LzEuNSBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0fVxyXG5cclxuXHJcbi8qIGdlbmVyYWwgdG9vbGJhciBzdHlsZXMgKi9cclxuXHJcbi5sZWFmbGV0LWJhciB7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwwLDAsMC42NSk7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGEsXHJcbi5sZWFmbGV0LWJhciBhOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG5cdHdpZHRoOiAyNnB4O1xyXG5cdGhlaWdodDogMjZweDtcclxuXHRsaW5lLWhlaWdodDogMjZweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhLFxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGE6Zmlyc3QtY2hpbGQge1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGE6bGFzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhLmxlYWZsZXQtZGlzYWJsZWQge1xyXG5cdGN1cnNvcjogZGVmYXVsdDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG5cdGNvbG9yOiAjYmJiO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciBhIHtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0fVxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIgYTpmaXJzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XHJcblx0fVxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIgYTpsYXN0LWNoaWxkIHtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcclxuXHR9XHJcblxyXG4vKiB6b29tIGNvbnRyb2wgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRyb2wtem9vbS1pbixcclxuLmxlYWZsZXQtY29udHJvbC16b29tLW91dCB7XHJcblx0Zm9udDogYm9sZCAxOHB4ICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG5cdHRleHQtaW5kZW50OiAxcHg7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC16b29tLWluLCAubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLXpvb20tb3V0ICB7XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdH1cclxuXHJcblxyXG4vKiBsYXllcnMgY29udHJvbCAqL1xyXG5cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMge1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLDAuNCk7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvbGF5ZXJzLnBuZyk7XHJcblx0d2lkdGg6IDM2cHg7XHJcblx0aGVpZ2h0OiAzNnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtcmV0aW5hIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9sYXllcnMtMngucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDI2cHggMjZweDtcclxuXHR9XHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0d2lkdGg6IDQ0cHg7XHJcblx0aGVpZ2h0OiA0NHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMgLmxlYWZsZXQtY29udHJvbC1sYXllcnMtbGlzdCxcclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtZXhwYW5kZWQgLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtZXhwYW5kZWQgLmxlYWZsZXQtY29udHJvbC1sYXllcnMtbGlzdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtZXhwYW5kZWQge1xyXG5cdHBhZGRpbmc6IDZweCAxMHB4IDZweCA2cHg7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXNjcm9sbGJhciB7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHRwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1zZWxlY3RvciB7XHJcblx0bWFyZ2luLXRvcDogMnB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IDFweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzIGxhYmVsIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXNlcGFyYXRvciB7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG5cdG1hcmdpbjogNXB4IC0xMHB4IDVweCAtNnB4O1xyXG5cdH1cclxuXHJcbi8qIERlZmF1bHQgaWNvbiBVUkxzICovXHJcbi5sZWFmbGV0LWRlZmF1bHQtaWNvbi1wYXRoIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL21hcmtlci1pY29uLnBuZyk7XHJcblx0fVxyXG5cclxuXHJcbi8qIGF0dHJpYnV0aW9uIGFuZCBzY2FsZSBjb250cm9scyAqL1xyXG5cclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24ge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG5cdG1hcmdpbjogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24sXHJcbi5sZWFmbGV0LWNvbnRyb2wtc2NhbGUtbGluZSB7XHJcblx0cGFkZGluZzogMCA1cHg7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIGEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24gYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbixcclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LWNvbnRyb2wtc2NhbGUge1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHR9XHJcbi5sZWFmbGV0LWxlZnQgLmxlYWZsZXQtY29udHJvbC1zY2FsZSB7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJvdHRvbSAubGVhZmxldC1jb250cm9sLXNjYWxlIHtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmUge1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICM3Nzc7XHJcblx0Ym9yZGVyLXRvcDogbm9uZTtcclxuXHRsaW5lLWhlaWdodDogMS4xO1xyXG5cdHBhZGRpbmc6IDJweCA1cHggMXB4O1xyXG5cdGZvbnQtc2l6ZTogMTFweDtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdCAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmU6bm90KDpmaXJzdC1jaGlsZCkge1xyXG5cdGJvcmRlci10b3A6IDJweCBzb2xpZCAjNzc3O1xyXG5cdGJvcmRlci1ib3R0b206IG5vbmU7XHJcblx0bWFyZ2luLXRvcDogLTJweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtc2NhbGUtbGluZTpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzc3NztcclxuXHR9XHJcblxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uLFxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLWxheWVycyxcclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1sYXllcnMsXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciB7XHJcblx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xyXG5cdGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblx0fVxyXG5cclxuXHJcbi8qIHBvcHVwICovXHJcblxyXG4ubGVhZmxldC1wb3B1cCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtY29udGVudC13cmFwcGVyIHtcclxuXHRwYWRkaW5nOiAxcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtY29udGVudCB7XHJcblx0bWFyZ2luOiAxM3B4IDE5cHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuNDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQgcCB7XHJcblx0bWFyZ2luOiAxOHB4IDA7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC10aXAtY29udGFpbmVyIHtcclxuXHR3aWR0aDogNDBweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRtYXJnaW4tbGVmdDogLTIwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLXRpcCB7XHJcblx0d2lkdGg6IDE3cHg7XHJcblx0aGVpZ2h0OiAxN3B4O1xyXG5cdHBhZGRpbmc6IDFweDtcclxuXHJcblx0bWFyZ2luOiAtMTBweCBhdXRvIDA7XHJcblxyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdCAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdCAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdCAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtY29udGVudC13cmFwcGVyLFxyXG4ubGVhZmxldC1wb3B1cC10aXAge1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGJveC1zaGFkb3c6IDAgM3B4IDE0cHggcmdiYSgwLDAsMCwwLjQpO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIGEubGVhZmxldC1wb3B1cC1jbG9zZS1idXR0b24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0cGFkZGluZzogNHB4IDRweCAwIDA7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMThweDtcclxuXHRoZWlnaHQ6IDE0cHg7XHJcblx0Zm9udDogMTZweC8xNHB4IFRhaG9tYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHRjb2xvcjogI2MzYzNjMztcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIgYS5sZWFmbGV0LXBvcHVwLWNsb3NlLWJ1dHRvbjpob3ZlciB7XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1zY3JvbGxlZCB7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtY29udGVudC13cmFwcGVyIHtcclxuXHR6b29tOiAxO1xyXG5cdH1cclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHR3aWR0aDogMjRweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHJcblx0LW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KE0xMT0wLjcwNzEwNjc4LCBNMTI9MC43MDcxMDY3OCwgTTIxPS0wLjcwNzEwNjc4LCBNMjI9MC43MDcxMDY3OClcIjtcclxuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5NYXRyaXgoTTExPTAuNzA3MTA2NzgsIE0xMj0wLjcwNzEwNjc4LCBNMjE9LTAuNzA3MTA2NzgsIE0yMj0wLjcwNzEwNjc4KTtcclxuXHR9XHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLXRpcC1jb250YWluZXIge1xyXG5cdG1hcmdpbi10b3A6IC0xcHg7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtY29udHJvbC16b29tLFxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1jb250cm9sLWxheWVycyxcclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtY29udGVudC13cmFwcGVyLFxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC10aXAge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcblx0fVxyXG5cclxuXHJcbi8qIGRpdiBpY29uICovXHJcblxyXG4ubGVhZmxldC1kaXYtaWNvbiB7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG5cdH1cclxuXHJcblxyXG4vKiBUb29sdGlwICovXHJcbi8qIEJhc2Ugc3R5bGVzIGZvciB0aGUgZWxlbWVudCB0aGF0IGhhcyBhIHRvb2x0aXAgKi9cclxuLmxlYWZsZXQtdG9vbHRpcCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHBhZGRpbmc6IDZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGNvbG9yOiAjMjIyO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC5sZWFmbGV0LWNsaWNrYWJsZSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC10b3A6YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLWJvdHRvbTpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtbGVmdDpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtcmlnaHQ6YmVmb3JlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0Ym9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHR9XHJcblxyXG4vKiBEaXJlY3Rpb25zICovXHJcblxyXG4ubGVhZmxldC10b29sdGlwLWJvdHRvbSB7XHJcblx0bWFyZ2luLXRvcDogNnB4O1xyXG59XHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wIHtcclxuXHRtYXJnaW4tdG9wOiAtNnB4O1xyXG59XHJcbi5sZWFmbGV0LXRvb2x0aXAtYm90dG9tOmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC10b3A6YmVmb3JlIHtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLWxlZnQ6IC02cHg7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLXRvcDpiZWZvcmUge1xyXG5cdGJvdHRvbTogMDtcclxuXHRtYXJnaW4tYm90dG9tOiAtMTJweDtcclxuXHRib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b206YmVmb3JlIHtcclxuXHR0b3A6IDA7XHJcblx0bWFyZ2luLXRvcDogLTEycHg7XHJcblx0bWFyZ2luLWxlZnQ6IC02cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtbGVmdCB7XHJcblx0bWFyZ2luLWxlZnQ6IC02cHg7XHJcbn1cclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodCB7XHJcblx0bWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQ6YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLXJpZ2h0OmJlZm9yZSB7XHJcblx0dG9wOiA1MCU7XHJcblx0bWFyZ2luLXRvcDogLTZweDtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtbGVmdDpiZWZvcmUge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdG1hcmdpbi1yaWdodDogLTEycHg7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLXJpZ2h0OmJlZm9yZSB7XHJcblx0bGVmdDogMDtcclxuXHRtYXJnaW4tbGVmdDogLTEycHg7XHJcblx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuIiwiLmxlYWZsZXQtY2x1c3Rlci1hbmltIC5sZWFmbGV0LW1hcmtlci1pY29uLCAubGVhZmxldC1jbHVzdGVyLWFuaW0gLmxlYWZsZXQtbWFya2VyLXNoYWRvdyB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCBvcGFjaXR5IDAuM3MgZWFzZS1pbjtcclxuXHQtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIG9wYWNpdHkgMC4zcyBlYXNlLWluO1xyXG5cdC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCBvcGFjaXR5IDAuM3MgZWFzZS1pbjtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCwgb3BhY2l0eSAwLjNzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5sZWFmbGV0LWNsdXN0ZXItc3BpZGVyLWxlZyB7XHJcblx0Lyogc3Ryb2tlLWRhc2hvZmZzZXQgKGR1cmF0aW9uIGFuZCBmdW5jdGlvbikgc2hvdWxkIG1hdGNoIHdpdGggbGVhZmxldC1tYXJrZXItaWNvbiB0cmFuc2Zvcm0gaW4gb3JkZXIgdG8gdHJhY2sgaXQgZXhhY3RseSAqL1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC1zdHJva2UtZGFzaG9mZnNldCAwLjNzIGVhc2Utb3V0LCAtd2Via2l0LXN0cm9rZS1vcGFjaXR5IDAuM3MgZWFzZS1pbjtcclxuXHQtbW96LXRyYW5zaXRpb246IC1tb3otc3Ryb2tlLWRhc2hvZmZzZXQgMC4zcyBlYXNlLW91dCwgLW1vei1zdHJva2Utb3BhY2l0eSAwLjNzIGVhc2UtaW47XHJcblx0LW8tdHJhbnNpdGlvbjogLW8tc3Ryb2tlLWRhc2hvZmZzZXQgMC4zcyBlYXNlLW91dCwgLW8tc3Ryb2tlLW9wYWNpdHkgMC4zcyBlYXNlLWluO1xyXG5cdHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDAuM3MgZWFzZS1vdXQsIHN0cm9rZS1vcGFjaXR5IDAuM3MgZWFzZS1pbjtcclxufVxyXG4iLCIubWFya2VyLWNsdXN0ZXItc21hbGwge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgxLCAyMjYsIDE0MCwgMC42KTtcclxuXHR9XHJcbi5tYXJrZXItY2x1c3Rlci1zbWFsbCBkaXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEwLCAyMDQsIDU3LCAwLjYpO1xyXG5cdH1cclxuXHJcbi5tYXJrZXItY2x1c3Rlci1tZWRpdW0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyMTEsIDg3LCAwLjYpO1xyXG5cdH1cclxuLm1hcmtlci1jbHVzdGVyLW1lZGl1bSBkaXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxOTQsIDEyLCAwLjYpO1xyXG5cdH1cclxuXHJcbi5tYXJrZXItY2x1c3Rlci1sYXJnZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTMsIDE1NiwgMTE1LCAwLjYpO1xyXG5cdH1cclxuLm1hcmtlci1jbHVzdGVyLWxhcmdlIGRpdiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDEyOCwgMjMsIDAuNik7XHJcblx0fVxyXG5cclxuXHQvKiBJRSA2LTggZmFsbGJhY2sgY29sb3JzICovXHJcbi5sZWFmbGV0LW9sZGllIC5tYXJrZXItY2x1c3Rlci1zbWFsbCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MSwgMjI2LCAxNDApO1xyXG5cdH1cclxuLmxlYWZsZXQtb2xkaWUgLm1hcmtlci1jbHVzdGVyLXNtYWxsIGRpdiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDExMCwgMjA0LCA1Nyk7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtb2xkaWUgLm1hcmtlci1jbHVzdGVyLW1lZGl1bSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjExLCA4Nyk7XHJcblx0fVxyXG4ubGVhZmxldC1vbGRpZSAubWFya2VyLWNsdXN0ZXItbWVkaXVtIGRpdiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTk0LCAxMik7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtb2xkaWUgLm1hcmtlci1jbHVzdGVyLWxhcmdlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAxNTYsIDExNSk7XHJcblx0fVxyXG4ubGVhZmxldC1vbGRpZSAubWFya2VyLWNsdXN0ZXItbGFyZ2UgZGl2IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAxMjgsIDIzKTtcclxufVxyXG5cclxuLm1hcmtlci1jbHVzdGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0fVxyXG4ubWFya2VyLWNsdXN0ZXIgZGl2IHtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdGZvbnQ6IDEycHggXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdH1cclxuLm1hcmtlci1jbHVzdGVyIHNwYW4ge1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdH0iXX0= */", '', '']]

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