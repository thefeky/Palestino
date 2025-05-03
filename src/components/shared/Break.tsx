interface BreakProps {
  horizontal?: boolean;
  percentage?: number;
  gap?: number;
}
function Break({ horizontal = true, percentage = 100, gap = 8 }: BreakProps) {
  return (
    <div
      className={`${
        horizontal
          ? `w-[${percentage}%] h-0.5 my-${gap}`
          : `h-[${percentage}%] w-0.5`
      } bg-gray-300 flex mx-auto`}
    ></div>
  );
}

export default Break;
