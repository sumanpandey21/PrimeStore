module.exports = [
"[project]/src/data/users.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"users\":[{\"id\":1,\"firstName\":\"\",\"lastName\":\"\",\"email\":\"rampaudel12@gmail.com\",\"province\":\"Bagmati\",\"district\":\"Chitwan\",\"city\":\"Bharatpur\"}]}"));}),
"[project]/src/components/Dropdown.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
const Dropdown = ({ label, options, value, onChange, disabled })=>{
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [highlightIndex, setHighlightIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    // 🔹 Close dropdown on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/Dropdown.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: disabled,
                onClick: ()=>!disabled && setOpen(!open),
                className: `w-full flex items-center justify-between px-4 py-3 border rounded-lg 
          bg-gray-50 text-left focus:outline-none transition
          ${disabled ? "cursor-not-allowed opacity-60" : "focus:border-red-500"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: value || `Select ${label}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/Dropdown.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 18,
                        className: `cursor-pointer transition-transform ${open ? "rotate-180" : ""}`
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
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-full mt-1 w-full max-h-52 overflow-y-auto   bg-white border border-gray-200 rounded-lg shadow-lg z-10   transition-all duration-200 transform origin-top   animate-scale-fade",
                role: "listbox",
                children: options.length > 0 ? options.map((opt, index)=>{
                    const key = typeof opt === "object" ? opt.id || `${opt.name}-${index}` : `${opt}-${index}`;
                    const label = typeof opt === "object" ? opt.name : opt;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "option",
                        "aria-selected": value === label,
                        onClick: ()=>{
                            onChange(label);
                            setOpen(false);
                        },
                        className: `px-4 py-2 cursor-pointer transition 
                    ${highlightIndex === index ? "bg-red-100" : ""}
                    hover:bg-red-50 hover:text-red-600`,
                        children: label
                    }, key, false, {
                        fileName: "[project]/src/components/Dropdown.jsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0));
                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
const __TURBOPACK__default__export__ = Dropdown;
}),
"[project]/src/data/nepal_locations.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"provinces\":[{\"id\":1,\"name\":\"Koshi\",\"districts\":[{\"name\":\"Bhojpur\",\"cities\":[\"Bhojpur\",\"Shadananda\",\"Hatuwagadhi\"]},{\"name\":\"Dhankuta\",\"cities\":[\"Dhankuta\",\"Pakhribas\",\"Chhathar\"]},{\"name\":\"Morang\",\"cities\":[\"Biratnagar\",\"Rangeli\",\"Belbari\"]},{\"name\":\"Sankhuwasabha\",\"cities\":[\"Khandbari\",\"Chainpur\",\"Diding\"]},{\"name\":\"Sunsari\",\"cities\":[\"Inaruwa\",\"Itahari\",\"Dharan\"]},{\"name\":\"Taplejung\",\"cities\":[\"Taplejung\",\"Phungling\",\"Mikwang\"]},{\"name\":\"Terhathum\",\"cities\":[\"Myanglung\",\"Chhathar\",\"Phedap\"]},{\"name\":\"Jhapa\",\"cities\":[\"Bhadrapur\",\"Mechinagar\",\"Birtamod\"]},{\"name\":\"Panchthar\",\"cities\":[\"Phidim\",\"Chiyandada\",\"Falelung\"]},{\"name\":\"Sankhuwasabha\",\"cities\":[\"Khandbari\",\"Chainpur\",\"Diding\"]}]},{\"id\":2,\"name\":\"Madhesh\",\"districts\":[{\"name\":\"Saptari\",\"cities\":[\"Rajbiraj\",\"Hanumannagar\",\"Kalyanpur\"]},{\"name\":\"Siraha\",\"cities\":[\"Siraha\",\"Lahan\",\"Mirchaiya\"]},{\"name\":\"Dhanusha\",\"cities\":[\"Janakpur\",\"Bideha\",\"Kamala\"]},{\"name\":\"Mahottari\",\"cities\":[\"Jaleshwar\",\"Bardibas\",\"Manara\"]},{\"name\":\"Sarlahi\",\"cities\":[\"Malangwa\",\"Haripur\",\"Bagmati\"]},{\"name\":\"Rautahat\",\"cities\":[\"Gaur\",\"Paroha\",\"Ishanath\"]},{\"name\":\"Bara\",\"cities\":[\"Kalaiya\",\"Jitpur\",\"Parwanipur\"]},{\"name\":\"Parsa\",\"cities\":[\"Birgunj\",\"Bahadurpur\",\"Pokhariya\"]}]},{\"id\":3,\"name\":\"Bagmati\",\"districts\":[{\"name\":\"Kathmandu\",\"cities\":[\"Kathmandu\",\"Kirtipur\",\"Budhanilkantha\",\"Mahalaxmi\"]},{\"name\":\"Lalitpur\",\"cities\":[\"Lalitpur\",\"Godawari\",\"Mangalbazaar\"]},{\"name\":\"Bhaktapur\",\"cities\":[\"Bhaktapur\",\"Madhyapur Thimi\",\"Changunarayan\"]},{\"name\":\"Dhading\",\"cities\":[\"Dhading Besi\",\"Galchhi\",\"Benighat\"]},{\"name\":\"Kavrepalanchok\",\"cities\":[\"Dhulikhel\",\"Banepa\",\"Panauti\"]},{\"name\":\"Rasuwa\",\"cities\":[\"Dhunche\",\"Timure\"]},{\"name\":\"Nuwakot\",\"cities\":[\"Bidur\",\"Belkot\",\"Suryagadhi\"]},{\"name\":\"Sindhupalchok\",\"cities\":[\"Chautara\",\"Bharatpur\",\"Melamchi\"]},{\"name\":\"Ramechhap\",\"cities\":[\"Manthali\",\"Kalinchok\",\"Ramechhap\"]},{\"name\":\"Makwanpur\",\"cities\":[\"Hetauda\",\"Thaha\",\"Bakaiya\"]},{\"name\":\"Chitwan\",\"cities\":[\"Bharatpur\",\"Khairahani\",\"Ratnanagar\"]}]},{\"id\":4,\"name\":\"Gandaki\",\"districts\":[{\"name\":\"Kaski\",\"cities\":[\"Pokhara\",\"Lekhnath\",\"Hemja\"]},{\"name\":\"Nawalparasi East (Nawalpur)\",\"cities\":[\"Devchuli\",\"Dumkibaas\",\"Gaindakot\"]},{\"name\":\"Gorkha\",\"cities\":[\"Gorkha Bazaar\",\"Palungtar\",\"Barpak\"]},{\"name\":\"Lamjung\",\"cities\":[\"Besisahar\",\"Dordi\",\"Rainas\"]},{\"name\":\"Tanahun\",\"cities\":[\"Damauli\",\"Bhanu\",\"Byas\"]},{\"name\":\"Syangja\",\"cities\":[\"Putalibazar\",\"Arjun Chaupari\",\"Bungdikali\"]},{\"name\":\"Parbat\",\"cities\":[\"Phalebas\",\"Jaljala\",\"Katuwa Chaupari\"]},{\"name\":\"Baglung\",\"cities\":[\"Baglung\",\"Galkot\",\"Dhaulagiri\"]},{\"name\":\"Manang\",\"cities\":[\"Chame\",\"Nar\",\"Manang\"]},{\"name\":\"Mustang\",\"cities\":[\"Jomsom\",\"Lo Manthang\",\"Marpha\"]},{\"name\":\"Myagdi\",\"cities\":[\"Beni\",\"Raghuganga\",\"Mangale\"]}]},{\"id\":5,\"name\":\"Lumbini\",\"districts\":[{\"name\":\"Rupandehi\",\"cities\":[\"Butwal\",\"Bhairahawa\",\"Lumbini\"]},{\"name\":\"Kapilvastu\",\"cities\":[\"Taulihawa\",\"Banganga\",\"Kapilvastu\"]},{\"name\":\"Nawalparasi West (Parasi)\",\"cities\":[\"Parasi\",\"Bardaghat\",\"Sunwal\"]},{\"name\":\"Palpa\",\"cities\":[\"Tansen\",\"Rampur\",\"Mathillo Bazar\"]},{\"name\":\"Arghakhanchi\",\"cities\":[\"Sandhikharka\",\"Bhumikasthan\",\"Arghakhanchi\"]},{\"name\":\"Gulmi\",\"cities\":[\"Tamghas\",\"Resunga\",\"Isma\"]},{\"name\":\"Pyuthan\",\"cities\":[\"Pyuthan Bazaar\",\"Gaidakot\",\"Gaumukhi\"]},{\"name\":\"Dang\",\"cities\":[\"Ghorahi\",\"Tulsipur\",\"Lamahi\"]},{\"name\":\"Rolpa\",\"cities\":[\"Liwang\",\"Rohini\",\"Rolpa\"]},{\"name\":\"Rukum West\",\"cities\":[\"Musikot\",\"Sani Bheri\",\"Chaurjahari\"]}]},{\"id\":6,\"name\":\"Karnali\",\"districts\":[{\"id\":1,\"name\":\"Jumla\",\"cities\":[\"Jumla\",\"Chandannath\",\"Sinja\"]},{\"id\":2,\"name\":\"Dolpa\",\"cities\":[\"Dolkha\",\"Thuli Bheri\",\"Tarakot\"]}]},{\"id\":7,\"name\":\"Sudurpashchim\",\"districts\":[{\"id\":1,\"name\":\"Kanchanpur\",\"cities\":[\"Dhangadhi\",\"Krishna Nagar\",\"Mahendranagar\"]},{\"id\":2,\"name\":\"Dadeldhura\",\"cities\":[\"Amargadhi\",\"Gokuleshwar\",\"Ajayameru\"]}]}]}"));}),
"[project]/src/app/myaccount/my-profile/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/users.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Dropdown.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nepal_locations$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/nepal_locations.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
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
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2e$json__$28$json$29$__["default"].users.length > 0) {
            const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2e$json__$28$json$29$__["default"].users[0];
            setFormData({
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                province: user.province || "",
                district: user.district || "",
                city: user.city || ""
            });
        }
    }, []);
    const handleSaveChanges = (e)=>{
        e.preventDefault();
        const requiredFields = [
            "firstName",
            "lastName",
            "province",
            "district",
            "city"
        ];
        const missingFields = requiredFields.filter((field)=>!formData[field]);
        if (missingFields.length > 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Please fill in: ${missingFields.join(", ")}`);
            return;
        }
        const nameRegex = /^[A-Za-z\s]{2,30}$/;
        if (!nameRegex.test(formData.firstName)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("First name must be 2–30 letters only");
            return;
        }
        if (!nameRegex.test(formData.lastName)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Last name must be 2–30 letters only");
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Saved successfully!");
        setFormData({
            firstName: "",
            lastName: "",
            province: "",
            district: "",
            city: ""
        });
    };
    const handleCancel = ()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2e$json__$28$json$29$__["default"].users.length > 0) {
            const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2e$json__$28$json$29$__["default"].users[0];
            setFormData({
                firstName: "",
                lastName: "",
                province: user.province || "",
                district: user.district || "",
                city: user.city || ""
            });
        }
    };
    const provinces = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nepal_locations$2e$json__$28$json$29$__["default"].provinces;
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
                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                    lineNumber: 77,
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
                                "lastName"
                            ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: field === "firstName" ? "First Name" : "Last Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData[field] || "",
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    [field]: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 rounded-md shadow-sm bg-gray-50 outline text-black focus:outline-none focus:ring-2 focus:ring-red-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, field, true, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/myaccount/my-profile/page.js",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Dropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    label: "City",
                                    options: cities,
                                    value: formData.city,
                                    onChange: (val)=>setFormData({
                                            ...formData,
                                            city: val
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/myaccount/my-profile/page.js",
                            lineNumber: 100,
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
                                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 active:bg-red-800 transition-colors",
                                    children: "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/myaccount/my-profile/page.js",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/myaccount/my-profile/page.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/myaccount/my-profile/page.js",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/myaccount/my-profile/page.js",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_17e681b1._.js.map