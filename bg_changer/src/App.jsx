import { useState, useEffect } from "react";

const DEFAULT_COLORS = [
  { name: "Red", value: "#ef4444" },
  { name: "Green", value: "#22c55e" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Olive", value: "#708238" },
  { name: "Yellow", value: "#facc15" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Pink", value: "#ec4899" },
];

export default function App() {
  const [bgColor, setBgColor] = useState("#708238"); // olive
  const [customColor, setCustomColor] = useState("#ff00ff");
  const [previewColor, setPreviewColor] = useState(null);
  const [palette, setPalette] = useState(DEFAULT_COLORS);

  // Save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("colorplay-bg");
    if (saved) setBgColor(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("colorplay-bg", bgColor);
  }, [bgColor]);

  const exportPalette = () => {
    navigator.clipboard.writeText(JSON.stringify(palette, null, 2));
    alert("Palette copied to clipboard!");
  };

  return (
    <div
      className="w-full h-screen transition-all duration-500"
      style={{ backgroundColor: previewColor || bgColor }}
    >
      {/* Header */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">🎨 ColorPlay</h1>
        <p className="text-sm text-white/70 mt-1">Click a color to set background. Hover to preview.</p>
      </div>

      {/* Palette */}
      <div className="absolute bottom-8 inset-x-0 px-4 flex justify-center">
        <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl p-4 flex flex-wrap justify-center gap-4 max-w-4xl w-full">
          {palette.map((color) => (
            <div
              key={color.name}
              className="group relative cursor-pointer transition transform hover:scale-110"
              onMouseEnter={() => setPreviewColor(color.value)}
              onMouseLeave={() => setPreviewColor(null)}
              onClick={() => setBgColor(color.value)}
            >
              <div
                className="w-16 h-16 rounded-full shadow-inner border-2 border-white"
                style={{ backgroundColor: color.value }}
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-1 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
                {color.name} <br />
                {color.value.toUpperCase()}
              </div>
            </div>
          ))}

          {/* Custom Color Picker */}
          <div className="flex flex-col items-center gap-1">
            <input
              type="color"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="w-16 h-16 rounded-full overflow-hidden border-2 border-white"
              onMouseEnter={() => setPreviewColor(customColor)}
              onMouseLeave={() => setPreviewColor(null)}
              onClick={() => {
                setBgColor(customColor);
                const name = "Custom " + customColor.toUpperCase();
                setPalette((prev) =>
                  [...prev, { name, value: customColor }].slice(-10)
                );
              }}
            />
            <span className="text-xs text-gray-600 font-medium">Custom</span>
          </div>
        </div>
      </div>

      {/* Export Button */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={exportPalette}
          className="bg-black text-white px-4 py-2 rounded-md shadow hover:bg-zinc-800 transition"
        >
          Export Palette
        </button>
      </div>
    </div>
  );
}
