// components/TableCard.jsx
"use client";
export default function TableCard({ title, data, columns, statusStyles }) {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>

      <div className="overflow-x-auto">
        <div className="min-w-[600px] space-y-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center gap-4 border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
            >
              {columns.map((col) => {
                if (col.type === "status") {
                  return (
                    <span
                      key={col.key}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[item[col.key]]}`}
                    >
                      {item[col.key]}
                    </span>
                  );
                } else if (col.type === "action") {
                  return (
                    <button
                      key={col.key}
                      onClick={() => col.onClick(item)}
                      className="px-4 py-2 text-sm border border-black rounded hover:bg-black hover:text-white transition"
                    >
                      {col.label || "Action"}
                    </button>
                  );
                } else {
                  return (
                    <p key={col.key} className={col.className || ""}>
                      {item[col.key]}
                    </p>
                  );
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
