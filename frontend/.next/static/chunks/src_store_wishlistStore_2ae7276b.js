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
]);

//# sourceMappingURL=src_store_wishlistStore_2ae7276b.js.map