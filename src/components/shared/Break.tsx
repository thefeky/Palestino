interface BreakProps {
  horizontal?: boolean;
  percentage?: number;
  gap?: number;
}
function Break({ horizontal = true, percentage = 100, gap = 32 }: BreakProps) {
  return (
    <div
      className={`${horizontal ? "h-0.5" : "w-0.5"} bg-gray-300 flex mx-auto`}
      style={{
        [horizontal ? "width" : "height"]: `${percentage}%`,
        marginTop: `${gap}px`,
        marginBottom: `${gap}px`,
      }}
    ></div>
  );
}

export default Break;
