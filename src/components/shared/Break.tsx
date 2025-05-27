interface BreakProps {
  horizontal?: boolean;
  percentage?: number;
  gap?: number;
}

function Break({ horizontal = true, percentage = 100, gap = 32 }: BreakProps) {
  const dimensionStyle = horizontal
    ? { width: `${percentage}%`, height: "2px" }
    : { height: `${percentage}%`, width: "2px" };

  return (
    <div
      className="bg-gray-700 mx-auto"
      style={{
        ...dimensionStyle,
        marginTop: `${gap}px`,
        marginBottom: `${gap}px`,
      }}
    />
  );
}

export default Break;
