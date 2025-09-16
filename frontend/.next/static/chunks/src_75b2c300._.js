(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/orderStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useOrderStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        orders: [],
        addOrder: (order)=>set((state)=>({
                    orders: [
                        ...state.orders,
                        {
                            id: Date.now().toString(),
                            status: "pending",
                            paymentStatus: "pending",
                            createdAt: new Date().toISOString(),
                            ...order
                        }
                    ]
                })),
        //  Update order status (e.g. shipped, delivered)
        updateOrderStatus: (orderId, status)=>set((state)=>({
                    orders: state.orders.map((order)=>order.id === orderId ? {
                            ...order,
                            status
                        } : order)
                })),
        //  Update payment status (eg. paid, pending, refunded)
        updatePaymentStatus: (orderId, paymentStatus)=>set((state)=>({
                    orders: state.orders.map((order)=>order.id === orderId ? {
                            ...order,
                            paymentStatus
                        } : order)
                })),
        //  Remove order (e.g. cancelled order)
        removeOrder: (orderId)=>set((state)=>({
                    orders: state.orders.filter((order)=>order.id !== orderId)
                })),
        //  Get order by ID
        getOrderById: (orderId)=>{
            return get().orders.find((order)=>order.id === orderId);
        }
    }));
const __TURBOPACK__default__export__ = useOrderStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/myaccount/order/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/orderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Page() {
    _s();
    const { orders } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: orders && orders.length > 0 ? orders.map((order, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: order.image,
                        height: 100,
                        width: 100,
                        alt: order.name || "Order image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 13,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: [
                            "Product Name: ",
                            order.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: [
                            "Full Name: ",
                            order.fullName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 20,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: [
                            "Province: ",
                            order.province
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: [
                            "District: ",
                            order.district
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: [
                            "City: ",
                            order.city
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: [
                            "Order ID: ",
                            order.id
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: [
                            "Order Date: ",
                            order.date
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: [
                            "Order status: ",
                            order.status
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: [
                            "Payment status:",
                            order.paymentStatus
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: [
                            "Total amount: ",
                            order.amount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: [
                            "Total quantity: ",
                            order.quantity
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                        fileName: "[project]/src/app/myaccount/order/page.js",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/app/myaccount/order/page.js",
                lineNumber: 12,
                columnNumber: 11
            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "No orders found."
        }, void 0, false, {
            fileName: "[project]/src/app/myaccount/order/page.js",
            lineNumber: 34,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/myaccount/order/page.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Page, "ejgtm6t0NFwpDJIqBWsKCKjaKK0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$orderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Page;
const __TURBOPACK__default__export__ = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_75b2c300._.js.map