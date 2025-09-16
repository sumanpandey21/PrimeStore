(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/wishlistStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
"use client";
;
const useWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        wishlistItems: [],
        addWishlistItem: (item)=>set((state)=>{
                const exists = state.wishlistItems.some((i)=>i.id === item.id);
                if (exists) return state;
                return {
                    wishlistItems: [
                        ...state.wishlistItems,
                        item
                    ]
                };
            }),
        removeWishlistItem: (id)=>set((state)=>({
                    wishlistItems: state.wishlistItems.filter((item)=>item.id !== id)
                })),
        clearWishlist: ()=>set({
                wishlistItems: []
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/cartStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
"use client";
;
const useCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        cartItems: [],
        setCartItems: (items)=>set({
                cartItems: items
            }),
        addCartItem: (item)=>set((state)=>{
                const existing = state.cartItems.find((i)=>i.id === item.id);
                if (existing) {
                    return {
                        cartItems: state.cartItems.map((i)=>i.id === item.id ? {
                                ...i,
                                quantity: i.quantity + 1
                            } : i)
                    };
                }
                return {
                    cartItems: [
                        ...state.cartItems,
                        item
                    ]
                };
            }),
        updateQuantity: (id, newQuantity)=>set((state)=>({
                    cartItems: state.cartItems.map((item)=>item.id === id ? {
                            ...item,
                            quantity: newQuantity
                        } : item)
                })),
        removeCartItem: (id)=>set((state)=>({
                    cartItems: state.cartItems.filter((item)=>item.id !== id)
                })),
        clearCart: ()=>set({
                cartItems: []
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/EmptyCart.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
function EmptyCart(param) {
    let { title, message } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-6xl mb-4",
                children: "🛒"
            }, void 0, false, {
                fileName: "[project]/src/components/EmptyCart.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-gray-600 mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/EmptyCart.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 mb-6",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/EmptyCart.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/all-products",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer",
                    children: "Continue Shopping"
                }, void 0, false, {
                    fileName: "[project]/src/components/EmptyCart.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/EmptyCart.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EmptyCart.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = EmptyCart;
const __TURBOPACK__default__export__ = EmptyCart;
var _c;
__turbopack_context__.k.register(_c, "EmptyCart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/wishlist/page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/wishlist/page.js'\n\nExpected 'from', got 'function'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=src_4f173b2e._.js.map