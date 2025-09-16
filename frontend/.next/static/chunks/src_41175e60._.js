(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/TableCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TableCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function TableCard(param) {
    let { title, data, columns, statusStyles } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white text-black p-6 rounded-lg shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold mb-6",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/TableCard.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: data.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center sm:items-start gap-20 border border-gray-100 rounded-lg p-4 hover:shadow-md transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-30 h-30 flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.image,
                                    alt: item.product,
                                    className: "w-full h-full object-cover rounded-md bg-gray-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TableCard.jsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TableCard.jsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 w-full space-y-2 text-center sm:text-left",
                                children: columns.map((col)=>{
                                    if (col.type === "status") {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 rounded-full text-xs font-medium border ".concat(statusStyles[item[col.key]]),
                                                children: item[col.key]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TableCard.jsx",
                                                lineNumber: 28,
                                                columnNumber: 23
                                            }, this)
                                        }, col.key, false, {
                                            fileName: "[project]/src/components/TableCard.jsx",
                                            lineNumber: 27,
                                            columnNumber: 21
                                        }, this);
                                    } else if (col.type === "action") {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>col.onClick(item),
                                                className: "px-4 py-2 text-sm border border-black rounded hover:bg-black hover:text-white transition",
                                                children: col.label || "Action"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TableCard.jsx",
                                                lineNumber: 38,
                                                columnNumber: 23
                                            }, this)
                                        }, col.key, false, {
                                            fileName: "[project]/src/components/TableCard.jsx",
                                            lineNumber: 37,
                                            columnNumber: 21
                                        }, this);
                                    } else {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-700 ".concat(col.className || ""),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium capitalize",
                                                    children: [
                                                        col.key,
                                                        ": "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TableCard.jsx",
                                                    lineNumber: 52,
                                                    columnNumber: 23
                                                }, this),
                                                item[col.key]
                                            ]
                                        }, col.key, true, {
                                            fileName: "[project]/src/components/TableCard.jsx",
                                            lineNumber: 48,
                                            columnNumber: 21
                                        }, this);
                                    }
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/TableCard.jsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/components/TableCard.jsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/TableCard.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TableCard.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = TableCard;
var _c;
__turbopack_context__.k.register(_c, "TableCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/myaccount/returns/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/myaccount/returns/page.jsx
__turbopack_context__.s([
    "default",
    ()=>ReturnsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TableCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TableCard.jsx [app-client] (ecmascript)");
"use client";
;
;
function ReturnsPage() {
    const returns = [
        {
            id: "1001",
            product: "Wireless Headphones",
            date: "2025-08-18",
            status: "Pending",
            reason: "Defective item",
            image: "/mobilephone.png"
        },
        {
            id: "1002",
            product: "Smart Watch",
            date: "2025-07-25",
            status: "Approved",
            reason: "Wrong color received",
            image: "/mobilephone.png"
        },
        {
            id: "1003",
            product: "Gaming Mouse",
            date: "2025-06-10",
            status: "Rejected",
            reason: "Outside return window",
            image: "/mobilephone.png"
        }
    ];
    const statusStyles = {
        Pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
        Approved: "bg-green-100 text-green-700 border-green-300",
        Rejected: "bg-red-100 text-red-700 border-red-300"
    };
    const columns = [
        // { key: "id" },
        {
            key: "product"
        },
        {
            key: "date",
            className: "text-sm text-gray-600"
        },
        {
            key: "status",
            type: "status"
        },
        {
            key: "action",
            type: "action",
            onClick: (item)=>alert("View ".concat(item.id)),
            label: "View Details"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TableCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "My Returns",
        data: returns,
        columns: columns,
        statusStyles: statusStyles
    }, void 0, false, {
        fileName: "[project]/src/app/myaccount/returns/page.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = ReturnsPage;
var _c;
__turbopack_context__.k.register(_c, "ReturnsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_41175e60._.js.map