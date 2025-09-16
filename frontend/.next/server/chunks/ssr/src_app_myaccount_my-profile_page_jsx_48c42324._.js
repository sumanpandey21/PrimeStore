module.exports = [
"[project]/src/app/myaccount/my-profile/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../components/AlertMessage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../data/users'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/app/components/Dropdown'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/app/data/nepal_locations'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
function MyProfilePage() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (Users.users.length > 0) {
            const user = Users.users[0];
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
    }, []);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [alertTrigger, setAlertTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
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
            showMessage(`Please fill in: ${missingFields.join(", ")}`);
            return;
        }
        showMessage("Saved successfully!");
    };
    const handleCancel = ()=>{
        if (Users.users.length > 0) {
            const user = Users.users[0];
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
    const provinces = locations.provinces;
    const districts = formData.province ? provinces.find((p)=>p.name === formData.province)?.districts || [] : [];
    const cities = formData.district ? districts.find((d)=>d.name === formData.district)?.cities || [] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-sm p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold text-red-500 mb-6",
                    children: "Edit Your Profile"
                }, void 0, false, {
                    fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSaveChanges,
                    className: "space-y-6 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                "firstName",
                                "lastName",
                                "email"
                            ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: field === "firstName" ? "First Name" : field === "lastName" ? "Last Name" : "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: field === "email" ? "email" : "text",
                                            value: formData[field] || "",
                                            disabled: true,
                                            className: "w-full px-3 py-2 rounded-md shadow-sm bg-gray-200 cursor-not-allowed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, field, true, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dropdown, {
                                    label: "Province",
                                    options: locations.provinces,
                                    value: formData.province,
                                    onChange: (val)=>setFormData({
                                            ...formData,
                                            province: val,
                                            district: "",
                                            city: ""
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dropdown, {
                                    label: "District",
                                    options: districts,
                                    value: formData.district,
                                    onChange: (val)=>setFormData({
                                            ...formData,
                                            district: val,
                                            city: ""
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dropdown, {
                                    label: "City",
                                    options: cities,
                                    value: formData.city,
                                    onChange: (val)=>setFormData({
                                            ...formData,
                                            city: val
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center gap-5 mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleCancel,
                                    className: "px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 active:bg-gray-300 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 active:bg-red-800 transition-colors",
                                    children: "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertMessage, {
                    message: message,
                    trigger: alertTrigger
                }, void 0, false, {
                    fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/myaccount/my-profile/page.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_myaccount_my-profile_page_jsx_48c42324._.js.map