interface IconProps {
  subIcon: string;
  subName: string;
  color?: string;
  size?: number;
  iconSize?: number;
  radius?: "xl" | "lg" | "md" | "sm" | "full";
  border?: string;
  includeNames?: boolean;
  includeDescription?: boolean;
  subDescription?: string;
  classes?: string;
  nameSize?: number;
}

const radiusMap = {
  xl: "rounded-xl",
  lg: "rounded-lg",
  md: "rounded-md",
  sm: "rounded-sm",
  full: "rounded-full",
};

function Icon({
  subIcon,
  subName,
  color = "transparent",
  size,
  iconSize = 56,
  radius,
  border = "border-2 border-black",
  includeNames = true,
  includeDescription = false,
  subDescription,
  classes = "",
  nameSize,
}: IconProps) {
  const bgColor = color ? `bg-${color}` : "";
  const textColor = color === "black" ? "text-white" : "text-black";
  const titleStyle = nameSize ? { fontSize: `${nameSize}px` } : {};

  return (
    <div className={`${classes} flex-center flex-col gap-4`}>
      <div
        className={`flex items-center ${border} ${
          radius ? radiusMap[radius] : ""
        }`}
      >
        <div
          style={size ? { width: `${size}px`, height: `${size}px` } : undefined}
          className={`${
            size ? "" : "w-34 h-34 md:w-40 md:h-40"
          } flex-center flex-col ${
            radius ? radiusMap[radius] : ""
          } gap-2 ${bgColor}`}
        >
          <img
            src={subIcon}
            style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
            alt={subName}
            loading="lazy"
          />
          {includeNames && (
            <span className={`font-semibold ${textColor}`}>{subName}</span>
          )}
        </div>
      </div>
      {includeDescription && (
        <div className="flex-center flex-col text-center">
          <p className="font-semibold" style={titleStyle}>
            {subName}
          </p>
          <span className="text-sm font-semibold">{subDescription}</span>
        </div>
      )}
    </div>
  );
}

export default Icon;
