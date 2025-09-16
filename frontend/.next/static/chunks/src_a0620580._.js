(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AlertMessage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlertMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AlertMessage(param) {
    let { message, trigger } = param;
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AlertMessage.useEffect": ()=>{
            if (message && trigger) {
                // Clear any existing timeout
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                console.log(timeoutRef);
                // Show the message
                setVisible(true);
                // Set auto-hide timeout
                timeoutRef.current = setTimeout({
                    "AlertMessage.useEffect": ()=>{
                        setVisible(false);
                    }
                }["AlertMessage.useEffect"], 4000);
            }
            // Cleanup
            return ({
                "AlertMessage.useEffect": ()=>{
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                }
            })["AlertMessage.useEffect"];
        }
    }["AlertMessage.useEffect"], [
        trigger
    ]); // Only depend on trigger, not message
    const handleClose = ()=>{
        setVisible(false);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };
    if (!message || !visible) return null;
    const isSuccess = message === null || message === void 0 ? void 0 : message.toLowerCase().includes("success");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: -10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -10
            },
            transition: {
                duration: 0.3,
                ease: "easeOut"
            },
            className: "w-full px-4 py-2 rounded-md mb-4 flex items-center justify-between gap-3 shadow-sm border \n            ".concat(isSuccess ? "bg-green-600 border-green-700 text-white" : "bg-red-600 border-red-700 text-white"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 text-white flex-shrink-0",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M5 13l4 4L19 7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AlertMessage.jsx",
                                lineNumber: 69,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AlertMessage.jsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 text-white flex-shrink-0",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AlertMessage.jsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AlertMessage.jsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/components/AlertMessage.jsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AlertMessage.jsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClose,
                    className: "ml-2 rounded-full p-1 hover:bg-white/20 transition",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4 cursor-pointer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AlertMessage.jsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AlertMessage.jsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AlertMessage.jsx",
            lineNumber: 48,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AlertMessage.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(AlertMessage, "7rhD1/GLufp0CdXPp1QpsGtZwKI=");
_c = AlertMessage;
var _c;
__turbopack_context__.k.register(_c, "AlertMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/users.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"users\":[{\"id\":1,\"firstName\":\"Ram\",\"lastName\":\"Paudel\",\"email\":\"rampaudel12@gmail.com\",\"province\":\"Bagmati\",\"district\":\"Chitwan\",\"city\":\"Bharatpur\"}]}"));}),
"[project]/src/components/Dropdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Dropdown = (param)=>{
    let { label, options, value, onChange, disabled } = param;
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [highlightIndex, setHighlightIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    // 🔹 Close dropdown on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dropdown.useEffect": ()=>{
            const handleClickOutside = {
                "Dropdown.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setOpen(false);
                    }
                }
            }["Dropdown.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Dropdown.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Dropdown.useEffect"];
        }
    }["Dropdown.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/Dropdown.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: disabled,
                onClick: ()=>!disabled && setOpen(!open),
                className: "w-full flex items-center justify-between px-4 py-3 border rounded-lg \n          bg-gray-50 text-left focus:outline-none transition\n          ".concat(disabled ? "cursor-not-allowed opacity-60" : "focus:border-red-500", "\n        "),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: value || "Select ".concat(label)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dropdown.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 18,
                        className: "cursor-pointer transition-transform ".concat(open ? "rotate-180" : "")
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dropdown.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Dropdown.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-full mt-1 w-full max-h-52 overflow-y-auto   bg-white border border-gray-200 rounded-lg shadow-lg z-10   transition-all duration-200 transform origin-top   animate-scale-fade",
                role: "listbox",
                children: options.length > 0 ? options.map((opt, index)=>{
                    const key = typeof opt === "object" ? opt.id || "".concat(opt.name, "-").concat(index) : "".concat(opt, "-").concat(index);
                    const label = typeof opt === "object" ? opt.name : opt;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "option",
                        "aria-selected": value === label,
                        onClick: ()=>{
                            onChange(label);
                            setOpen(false);
                        },
                        className: "px-4 py-2 cursor-pointer transition \n                    ".concat(highlightIndex === index ? "bg-red-100" : "", "\n                    hover:bg-red-50 hover:text-red-600"),
                        children: label
                    }, key, false, {
                        fileName: "[project]/src/components/Dropdown.jsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0));
                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2 text-gray-400",
                    children: "No options"
                }, void 0, false, {
                    fileName: "[project]/src/components/Dropdown.jsx",
                    lineNumber: 79,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Dropdown.jsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Dropdown.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Dropdown, "JRU0GNbHLeMqgr/EkXuO5U0orpA=");
_c = Dropdown;
const __TURBOPACK__default__export__ = Dropdown;
var _c;
__turbopack_context__.k.register(_c, "Dropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/nepal_locations.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"provinces\":[{\"id\":1,\"name\":\"Koshi\",\"districts\":[{\"name\":\"Bhojpur\",\"cities\":[\"Bhojpur\",\"Shadananda\",\"Hatuwagadhi\"]},{\"name\":\"Dhankuta\",\"cities\":[\"Dhankuta\",\"Pakhribas\",\"Chhathar\"]},{\"name\":\"Morang\",\"cities\":[\"Biratnagar\",\"Rangeli\",\"Belbari\"]},{\"name\":\"Sankhuwasabha\",\"cities\":[\"Khandbari\",\"Chainpur\",\"Diding\"]},{\"name\":\"Sunsari\",\"cities\":[\"Inaruwa\",\"Itahari\",\"Dharan\"]},{\"name\":\"Taplejung\",\"cities\":[\"Taplejung\",\"Phungling\",\"Mikwang\"]},{\"name\":\"Terhathum\",\"cities\":[\"Myanglung\",\"Chhathar\",\"Phedap\"]},{\"name\":\"Jhapa\",\"cities\":[\"Bhadrapur\",\"Mechinagar\",\"Birtamod\"]},{\"name\":\"Panchthar\",\"cities\":[\"Phidim\",\"Chiyandada\",\"Falelung\"]},{\"name\":\"Sankhuwasabha\",\"cities\":[\"Khandbari\",\"Chainpur\",\"Diding\"]}]},{\"id\":2,\"name\":\"Madesh\",\"districts\":[{\"name\":\"Saptari\",\"cities\":[\"Rajbiraj\",\"Hanumannagar\",\"Kalyanpur\"]},{\"name\":\"Siraha\",\"cities\":[\"Siraha\",\"Lahan\",\"Mirchaiya\"]},{\"name\":\"Dhanusha\",\"cities\":[\"Janakpur\",\"Bideha\",\"Kamala\"]},{\"name\":\"Mahottari\",\"cities\":[\"Jaleshwar\",\"Bardibas\",\"Manara\"]},{\"name\":\"Sarlahi\",\"cities\":[\"Malangwa\",\"Haripur\",\"Bagmati\"]},{\"name\":\"Rautahat\",\"cities\":[\"Gaur\",\"Paroha\",\"Ishanath\"]},{\"name\":\"Bara\",\"cities\":[\"Kalaiya\",\"Jitpur\",\"Parwanipur\"]},{\"name\":\"Parsa\",\"cities\":[\"Birgunj\",\"Bahadurpur\",\"Pokhariya\"]}]},{\"id\":3,\"name\":\"Bagmati\",\"districts\":[{\"name\":\"Kathmandu\",\"cities\":[\"Kathmandu\",\"Kirtipur\",\"Budhanilkantha\",\"Mahalaxmi\"]},{\"name\":\"Lalitpur\",\"cities\":[\"Lalitpur\",\"Godawari\",\"Mangalbazaar\"]},{\"name\":\"Bhaktapur\",\"cities\":[\"Bhaktapur\",\"Madhyapur Thimi\",\"Changunarayan\"]},{\"name\":\"Dhading\",\"cities\":[\"Dhading Besi\",\"Galchhi\",\"Benighat\"]},{\"name\":\"Kavrepalanchok\",\"cities\":[\"Dhulikhel\",\"Banepa\",\"Panauti\"]},{\"name\":\"Rasuwa\",\"cities\":[\"Dhunche\",\"Timure\"]},{\"name\":\"Nuwakot\",\"cities\":[\"Bidur\",\"Belkot\",\"Suryagadhi\"]},{\"name\":\"Sindhupalchok\",\"cities\":[\"Chautara\",\"Bharatpur\",\"Melamchi\"]},{\"name\":\"Ramechhap\",\"cities\":[\"Manthali\",\"Kalinchok\",\"Ramechhap\"]},{\"name\":\"Makwanpur\",\"cities\":[\"Hetauda\",\"Thaha\",\"Bakaiya\"]},{\"name\":\"Chitwan\",\"cities\":[\"Bharatpur\",\"Khairahani\",\"Ratnanagar\"]}]},{\"id\":4,\"name\":\"Gandaki\",\"districts\":[{\"name\":\"Kaski\",\"cities\":[\"Pokhara\",\"Lekhnath\",\"Hemja\"]},{\"name\":\"Nawalparasi East (Nawalpur)\",\"cities\":[\"Devchuli\",\"Dumkibaas\",\"Gaindakot\"]},{\"name\":\"Gorkha\",\"cities\":[\"Gorkha Bazaar\",\"Palungtar\",\"Barpak\"]},{\"name\":\"Lamjung\",\"cities\":[\"Besisahar\",\"Dordi\",\"Rainas\"]},{\"name\":\"Tanahun\",\"cities\":[\"Damauli\",\"Bhanu\",\"Byas\"]},{\"name\":\"Syangja\",\"cities\":[\"Putalibazar\",\"Arjun Chaupari\",\"Bungdikali\"]},{\"name\":\"Parbat\",\"cities\":[\"Phalebas\",\"Jaljala\",\"Katuwa Chaupari\"]},{\"name\":\"Baglung\",\"cities\":[\"Baglung\",\"Galkot\",\"Dhaulagiri\"]},{\"name\":\"Manang\",\"cities\":[\"Chame\",\"Nar\",\"Manang\"]},{\"name\":\"Mustang\",\"cities\":[\"Jomsom\",\"Lo Manthang\",\"Marpha\"]},{\"name\":\"Myagdi\",\"cities\":[\"Beni\",\"Raghuganga\",\"Mangale\"]}]},{\"id\":5,\"name\":\"Lumbini\",\"districts\":[{\"name\":\"Rupandehi\",\"cities\":[\"Butwal\",\"Bhairahawa\",\"Lumbini\"]},{\"name\":\"Kapilvastu\",\"cities\":[\"Taulihawa\",\"Banganga\",\"Kapilvastu\"]},{\"name\":\"Nawalparasi West (Parasi)\",\"cities\":[\"Parasi\",\"Bardaghat\",\"Sunwal\"]},{\"name\":\"Palpa\",\"cities\":[\"Tansen\",\"Rampur\",\"Mathillo Bazar\"]},{\"name\":\"Arghakhanchi\",\"cities\":[\"Sandhikharka\",\"Bhumikasthan\",\"Arghakhanchi\"]},{\"name\":\"Gulmi\",\"cities\":[\"Tamghas\",\"Resunga\",\"Isma\"]},{\"name\":\"Pyuthan\",\"cities\":[\"Pyuthan Bazaar\",\"Gaidakot\",\"Gaumukhi\"]},{\"name\":\"Dang\",\"cities\":[\"Ghorahi\",\"Tulsipur\",\"Lamahi\"]},{\"name\":\"Rolpa\",\"cities\":[\"Liwang\",\"Rohini\",\"Rolpa\"]},{\"name\":\"Rukum West\",\"cities\":[\"Musikot\",\"Sani Bheri\",\"Chaurjahari\"]}]},{\"id\":6,\"name\":\"Karnali\",\"districts\":[{\"id\":1,\"name\":\"Jumla\",\"cities\":[\"Jumla\",\"Chandannath\",\"Sinja\"]},{\"id\":2,\"name\":\"Dolpa\",\"cities\":[\"Dolkha\",\"Thuli Bheri\",\"Tarakot\"]}]},{\"id\":7,\"name\":\"Sudurpashchim\",\"districts\":[{\"id\":1,\"name\":\"Kanchanpur\",\"cities\":[\"Dhangadhi\",\"Krishna Nagar\",\"Mahendranagar\"]},{\"id\":2,\"name\":\"Dadeldhura\",\"cities\":[\"Amargadhi\",\"Gokuleshwar\",\"Ajayameru\"]}]}]}"));}),
"[project]/src/app/myaccount/my-profile/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AlertMessage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AlertMessage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/users.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Dropdown.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nepal_locations$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/nepal_locations.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MyProfilePage() {
    var _provinces_find, _districts_find;
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyProfilePage.useEffect": ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2e$json__$28$json$29$__["default"].users.length > 0) {
                const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2e$json__$28$json$29$__["default"].users[0];
                console.log(user);
                setFormData({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    province: user.province || "",
                    district: user.district || "",
                    city: user.city || ""
                });
            }
        }
    }["MyProfilePage.useEffect"], []);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [alertTrigger, setAlertTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const showMessage = (msg)=>{
        setMessage(msg);
        setAlertTrigger((prev)=>prev + 1);
    };
    const handleSaveChanges = (e)=>{
        e.preventDefault();
        const requiredFields = [
            "province",
            "district",
            "city"
        ];
        const missingFields = requiredFields.filter((field)=>!formData[field]);
        if (missingFields.length > 0) {
            showMessage("Please fill in: ".concat(missingFields.join(", ")));
            return;
        }
        showMessage("Saved successfully!");
    };
    const handleCancel = ()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2e$json__$28$json$29$__["default"].users.length > 0) {
            const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2e$json__$28$json$29$__["default"].users[0];
            setFormData({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                province: user.province || "",
                district: user.district || "",
                city: user.city || ""
            });
        }
    };
    const provinces = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nepal_locations$2e$json__$28$json$29$__["default"].provinces;
    const districts = formData.province ? ((_provinces_find = provinces.find((p)=>p.name === formData.province)) === null || _provinces_find === void 0 ? void 0 : _provinces_find.districts) || [] : [];
    const cities = formData.district ? ((_districts_find = districts.find((d)=>d.name === formData.district)) === null || _districts_find === void 0 ? void 0 : _districts_find.cities) || [] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-sm p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold text-red-500 mb-6",
                    children: "Edit Your Profile"
                }, void 0, false, {
                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSaveChanges,
                    className: "space-y-6 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                "firstName",
                                "lastName",
                                "email"
                            ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: field === "firstName" ? "First Name" : field === "lastName" ? "Last Name" : "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: field === "email" ? "email" : "text",
                                            value: formData[field] || "",
                                            disabled: true,
                                            className: "w-full px-3 py-2 rounded-md shadow-sm bg-gray-200 cursor-not-allowed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, field, true, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/myaccount/my-profile/page.js",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "Province",
                                    options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nepal_locations$2e$json__$28$json$29$__["default"].provinces,
                                    value: formData.province,
                                    onChange: (val)=>setFormData({
                                            ...formData,
                                            province: val,
                                            district: "",
                                            city: ""
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "District",
                                    options: districts,
                                    value: formData.district,
                                    onChange: (val)=>setFormData({
                                            ...formData,
                                            district: val,
                                            city: ""
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "City",
                                    options: cities,
                                    value: formData.city,
                                    onChange: (val)=>setFormData({
                                            ...formData,
                                            city: val
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/myaccount/my-profile/page.js",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center gap-5 mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleCancel,
                                    className: "px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 active:bg-gray-300 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 active:bg-red-800 transition-colors",
                                    children: "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/myaccount/my-profile/page.js",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AlertMessage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    message: message,
                    trigger: alertTrigger
                }, void 0, false, {
                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/myaccount/my-profile/page.js",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/myaccount/my-profile/page.js",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(MyProfilePage, "3DrCD0eIGzKgWMixQ+swFIVILoI=");
_c = MyProfilePage;
var _c;
__turbopack_context__.k.register(_c, "MyProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a0620580._.js.map