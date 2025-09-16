module.exports = [
"[project]/src/components/ProductCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/slugify/slugify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
const ReactStars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-stars/dist/react-stars.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const ProductCard = ({ id, image, title, price, rating, ratingCount, discount = null })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/products/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(title, {
            replacement: "-",
            lower: true
        })}?q=${id}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-md relative hover:cursor-pointer hover:shadow-sm lg:hover:shadow-lg ",
            children: [
                discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1 left-1 z-10 bg-red-500 lg:w-15 lg:h-7.5 w-10 h-5 rounded-md flex justify-center items-center text-white text-xs sm:text-sm md:text-base",
                    children: [
                        "-",
                        discount,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductCard.jsx",
                    lineNumber: 17,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full bg-[#f5f5f5] flex justify-center items-center p-8 rounded-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "object-contain object-center w-full h-full",
                        src: image,
                        alt: title,
                        width: 100,
                        height: 100
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.jsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProductCard.jsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-start items-start gap-1 w-full h-full rounded-md p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs sm:text-sm md:text-base text-ellipsis overflow-hidden whitespace-nowrap w-full",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCard.jsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start items-center text-red-500 text-xs sm:text-sm md:text-base",
                                    children: [
                                        "Rs. ",
                                        discount ? Math.round(price - price * discount / 100) : price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductCard.jsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs sm:text-sm md:text-base text-gray-500 line-through",
                                    children: [
                                        "Rs. ",
                                        price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductCard.jsx",
                                    lineNumber: 36,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductCard.jsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start items-center gap-0.5 text-gray-500 text-xs sm:text-sm md:text-base mt-[-4px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactStars, {
                                    count: 5,
                                    size: 20,
                                    value: rating,
                                    edit: false,
                                    color1: "#bfbfbf",
                                    color2: '#ebb050'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductCard.jsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "(",
                                        ratingCount,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProductCard.jsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProductCard.jsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductCard.jsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProductCard.jsx",
            lineNumber: 14,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ProductCard.jsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProductCard;
}),
"[project]/src/components/ProductView.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.jsx [app-ssr] (ecmascript)");
;
;
;
const ProductView = ({ products })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
        children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: product.id,
                image: product.image,
                title: product.name,
                price: product.price,
                rating: product.rating,
                ratingCount: product.totalRatings,
                discount: product.discount
            }, product.id, false, {
                fileName: "[project]/src/components/ProductView.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/ProductView.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProductView;
}),
"[project]/src/components/UpperText.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const UpperText = ({ text })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-start items-center gap-1.5 text-[15px] lg:text-base  lg:gap-2 font-semibold mx-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-500 lg:w-4.5 lg:h-10 w-4 h-9 rounded-sm"
                }, void 0, false, {
                    fileName: "[project]/src/components/UpperText.jsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-600 ",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/components/UpperText.jsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UpperText.jsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/UpperText.jsx",
        lineNumber: 5,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = UpperText;
}),
"[project]/src/components/Timer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$timer$2d$hook$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-timer-hook/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Timer({ expiryTimestamp }) {
    const { seconds, minutes, hours, days } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$timer$2d$hook$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimer"])({
        expiryTimestamp,
        onExpire: ()=>console.warn('onExpire called'),
        interval: 1000
    });
    const formatTime = (time)=>String(time).padStart(2, '0');
    // Dot separator at the bottom
    const DotSeparator = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center items-center mx-2 space-y-1 h-full mt-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1 h-1 bg-red-500 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/Timer.jsx",
                    lineNumber: 17,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1 h-1 bg-red-500 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/Timer.jsx",
                    lineNumber: 18,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Timer.jsx",
            lineNumber: 16,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2.5 lg:space-x-5 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-semibold mb-1",
                        children: "Days"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timer.jsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl lg:text-3xl font-bold text-gray-900",
                        children: formatTime(days)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timer.jsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timer.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotSeparator, {}, void 0, false, {
                fileName: "[project]/src/components/Timer.jsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-semibold mb-1",
                        children: "Hours"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timer.jsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl lg:text-3xl font-bold text-gray-900",
                        children: formatTime(hours)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timer.jsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timer.jsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotSeparator, {}, void 0, false, {
                fileName: "[project]/src/components/Timer.jsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-semibold mb-1",
                        children: "Minutes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timer.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl lg:text-3xl font-bold text-gray-900",
                        children: formatTime(minutes)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timer.jsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timer.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DotSeparator, {}, void 0, false, {
                fileName: "[project]/src/components/Timer.jsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-semibold mb-1",
                        children: "Seconds"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timer.jsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl lg:text-3xl font-bold text-gray-900",
                        children: formatTime(seconds)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timer.jsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timer.jsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Timer.jsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Timer;
}),
"[project]/src/components/LowerText.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timer.jsx [app-ssr] (ecmascript)");
;
;
;
const LowerText = ({ text, time = null })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-start items-end gap-4 lg:gap-16 mx-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:text-3xl text-xl font-semibold text-gray-900",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/LowerText.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    expiryTimestamp: time
                }, void 0, false, {
                    fileName: "[project]/src/components/LowerText.jsx",
                    lineNumber: 12,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/LowerText.jsx",
                lineNumber: 11,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LowerText.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LowerText;
}),
"[project]/src/app/flash-sales/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductView.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mockdata$2f$mockdata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mockdata/mockdata.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UpperText$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UpperText.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LowerText$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LowerText.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const page = ()=>{
    const [expiryTime, setExpiryTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchExpiryDate() {
            try {
                const savedTime = localStorage.getItem('flashSaleExpiry');
                if (savedTime) {
                    // Always ensure a valid date object before setting state
                    const savedDate = new Date(savedTime);
                    if (savedDate.getTime() === 0) {
                        setExpiryTime(null); // Fix: Reset to null if it's a zero timestamp
                    } else {
                        setExpiryTime(savedDate);
                    }
                } else {
                    const fetchedDate = new Date(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mockdata$2f$mockdata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dateMockData"]);
                    // Fix: Check if fetched date is 0 before saving
                    if (fetchedDate.getTime() === 0) {
                        setExpiryTime(null);
                    } else {
                        localStorage.setItem('flashSaleExpiry', fetchedDate.toISOString());
                        setExpiryTime(fetchedDate);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch expiry date:", err);
                setExpiryTime(null); // Optional: Set state to null on error
            }
        }
        fetchExpiryDate();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-start lg:ml-15.5 lg:mr-18.5 lg:py-10 py-6 mx-5 lg:gap-10 gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-start items-start w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UpperText$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            text: "Today's"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flash-sales/page.js",
                            lineNumber: 49,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        expiryTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LowerText$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            text: "Flash Sales",
                            time: expiryTime
                        }, void 0, false, {
                            fileName: "[project]/src/app/flash-sales/page.js",
                            lineNumber: 51,
                            columnNumber: 38
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LowerText$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            text: "Flash Sales"
                        }, void 0, false, {
                            fileName: "[project]/src/app/flash-sales/page.js",
                            lineNumber: 51,
                            columnNumber: 91
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/flash-sales/page.js",
                    lineNumber: 48,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductView$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    products: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mockdata$2f$mockdata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productMockData"]
                }, void 0, false, {
                    fileName: "[project]/src/app/flash-sales/page.js",
                    lineNumber: 54,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/flash-sales/page.js",
            lineNumber: 47,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/flash-sales/page.js",
        lineNumber: 46,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = page;
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)");
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = workStore.assetPrefix + "/_next/" + (0, _encodeuripath.encodeURIPath)(chunk) + dplId;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style"
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low'
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : "TURBOPACK unreachable",
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    var _mergedOptions_loadableGenerated;
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: (_mergedOptions_loadableGenerated = mergedOptions.loadableGenerated) == null ? void 0 : _mergedOptions_loadableGenerated.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}),
"[project]/node_modules/react-timer-hook/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = t(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)")) : "TURBOPACK unreachable";
}("undefined" != typeof self ? self : /*TURBOPACK member replacement*/ __turbopack_context__.e, (e)=>(()=>{
        "use strict";
        var t = {
            155: (t)=>{
                t.exports = e;
            }
        }, s = {};
        function i(e) {
            var o = s[e];
            if (void 0 !== o) return o.exports;
            var r = s[e] = {
                exports: {}
            };
            return t[e](r, r.exports, i), r.exports;
        }
        i.d = (e, t)=>{
            for(var s in t)i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, {
                enumerable: !0,
                get: t[s]
            });
        }, i.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t), i.r = (e)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        };
        var o = {};
        i.r(o), i.d(o, {
            useStopwatch: ()=>u,
            useTime: ()=>d,
            useTimer: ()=>m
        });
        var r = i(155);
        class n {
            static getTimeFromMilliseconds(e, t = !0) {
                const s = t ? Math.ceil(e / 1e3) : Math.floor(e / 1e3), i = Math.floor(s / 86400), o = Math.floor(s % 86400 / 3600), r = Math.floor(s % 3600 / 60), n = Math.floor(s % 60);
                return {
                    totalMilliseconds: e,
                    totalSeconds: s,
                    milliseconds: Math.floor(e % 1e3),
                    seconds: n,
                    minutes: r,
                    hours: o,
                    days: i
                };
            }
            static getMillisecondsFromExpiry(e) {
                const t = (new Date).getTime(), s = (null == e ? void 0 : e.getTime()) - t;
                return s > 0 ? s : 0;
            }
            static getMillisecondsFromPrevTime(e) {
                const t = (new Date).getTime() - e;
                return t > 0 ? t : 0;
            }
            static getMillisecondsFromTimeNow() {
                const e = new Date;
                return e.getTime() - 60 * e.getTimezoneOffset() * 1e3;
            }
            static getFormattedTimeFromMilliseconds(e, t) {
                const { milliseconds: s, seconds: i, minutes: o, hours: r } = n.getTimeFromMilliseconds(e);
                let l = "", a = r;
                return "12-hour" === t && (l = r >= 12 ? "pm" : "am", a = r % 12), {
                    milliseconds: s,
                    seconds: i,
                    minutes: o,
                    hours: a,
                    ampm: l
                };
            }
        }
        class l {
            static expiryTimestamp(e) {
                const t = new Date(e).getTime() > 0;
                return t || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", e), t;
            }
            static onExpire(e) {
                const t = e && "function" == typeof e;
                return e && !t && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", e), t;
            }
        }
        function a(e, t) {
            const s = (0, r.useRef)(e);
            (0, r.useEffect)(()=>{
                s.current = e;
            }), (0, r.useEffect)(()=>{
                if (!t) return ()=>{};
                const e = setInterval(()=>{
                    var e;
                    null === (e = null == s ? void 0 : s.current) || void 0 === e || e.call(s);
                }, t);
                return ()=>clearInterval(e);
            }, [
                t
            ]);
        }
        const c = 1e3;
        function m({ expiryTimestamp: e, onExpire: t = ()=>{}, autoStart: s = !0, interval: i = c }) {
            const [o, m] = (0, r.useState)(e), [u, d] = (0, r.useState)(n.getMillisecondsFromExpiry(o)), [g, f] = (0, r.useState)(s), [p, T] = (0, r.useState)(s), [M, y] = (0, r.useState)(i), v = (0, r.useCallback)(()=>{
                l.onExpire(t) && t(), f(!1), y(null);
            }, [
                t
            ]), b = (0, r.useCallback)(()=>{
                f(!1);
            }, []), x = (0, r.useCallback)((e, t = !0)=>{
                y(i), T(t), f(t), m(e), d(n.getMillisecondsFromExpiry(e));
            }, [
                i
            ]), F = (0, r.useCallback)(()=>{
                const e = new Date;
                e.setMilliseconds(e.getMilliseconds() + u), x(e);
            }, [
                u,
                x
            ]), S = (0, r.useCallback)(()=>{
                p ? (d(n.getMillisecondsFromExpiry(o)), f(!0)) : F();
            }, [
                o,
                p,
                F
            ]);
            return a(()=>{
                const e = n.getMillisecondsFromExpiry(o);
                d(e), e <= 0 ? v() : M && e < M && y(e);
            }, g ? M : null), (0, r.useEffect)(()=>{
                l.expiryTimestamp(o);
            }, [
                o
            ]), Object.assign(Object.assign({}, n.getTimeFromMilliseconds(u)), {
                start: S,
                pause: b,
                resume: F,
                restart: x,
                isRunning: g
            });
        }
        function u({ autoStart: e = !0, offsetTimestamp: t, interval: s = c } = {}) {
            const i = t ? n.getMillisecondsFromExpiry(t) : 0, [o, l] = (0, r.useState)((new Date).getTime() - new Date(i).getTime()), [m, u1] = (0, r.useState)(n.getMillisecondsFromPrevTime(o || 0)), [d, g] = (0, r.useState)(e), f = c - m % c, [p, T] = (0, r.useState)(s < f ? s : f);
            a(()=>{
                p !== s && T(s), u1(n.getMillisecondsFromPrevTime(o));
            }, d ? p : null);
            const M = (0, r.useCallback)(()=>{
                l((new Date).getTime() - new Date(m).getTime()), g(!0);
            }, [
                m
            ]), y = (0, r.useCallback)(()=>{
                d && (u1(n.getMillisecondsFromPrevTime(o)), g(!1));
            }, [
                o,
                d
            ]), v = (0, r.useCallback)((e, t = !0)=>{
                const i = e ? n.getMillisecondsFromExpiry(e) : 0, o = (new Date).getTime() - new Date(i).getTime(), r = n.getMillisecondsFromPrevTime(o), a = c - r % c;
                l(o), u1(r), T(s < a ? s : a), g(t);
            }, [
                s
            ]);
            return Object.assign(Object.assign({}, n.getTimeFromMilliseconds(m, !1)), {
                start: M,
                pause: y,
                reset: v,
                isRunning: d
            });
        }
        function d({ format: e, interval: t = c } = {}) {
            const [s, i] = (0, r.useState)(n.getMillisecondsFromTimeNow());
            return a(()=>{
                i(n.getMillisecondsFromTimeNow());
            }, t), Object.assign({}, n.getFormattedTimeFromMilliseconds(s, e));
        }
        return o;
    })());
}),
];

//# sourceMappingURL=_d09c4aa7._.js.map