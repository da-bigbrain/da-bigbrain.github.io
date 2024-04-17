// import ScrollDown from "./scroll-down-svg/svg.svg";
export default function ScrollDown() {
  return (
    <div className="flex flex-col items-center">
      <svg
        width="59"
        height="94"
        viewBox="0 0 59 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="11.5"
          y="1.5"
          width="37"
          height="77"
          rx="18.5"
          stroke="black"
          stroke-width="3"
        />
        <circle
          cx="29.5"
          cy="40"
          r="7.5"
          fill="black"
          className="animate-bounce"
        />
      </svg>
      <h1 className="uppercase text-base">scroll</h1>
    </div>
  );
}
