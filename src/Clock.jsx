import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formattedHour = String(hours % 12 || 12).padStart(2, "0");
  const formattedMinute = String(minutes).padStart(2, "0");
  const formattedSecond = String(seconds).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";

  return (
    <div className="flex gap-6 items-center relative left-[35%] top-6">

      {/* Hour */}
      <div className="relative  w-28 h-28 bg-white/50  backdrop-blur-md rounded-xl flex items-center justify-center text-black text-5xl font-bold shadow-lg">
        <span className="absolute top-2 left-3 text-xs text-gray-300">{period}</span>
        {formattedHour}
      </div>

      {/* Minute */}
      <div className="w-28 h-28 bg-white/50  backdrop-blur-md rounded-xl flex items-center justify-center text-black text-5xl font-bold shadow-lg">
        {formattedMinute}
      </div>

      {/* Second */}
      <div className="w-28 h-28 bg-white/50  backdrop-blur-md rounded-xl flex items-center justify-center text-black text-5xl font-bold shadow-lg">
        {formattedSecond}
      </div>

    </div>
  );
}