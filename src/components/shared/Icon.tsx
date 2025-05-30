import { Link } from "react-router-dom";

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
  linkify?: boolean;
}

const radiusMap = {
  xl: "rounded-xl",
  lg: "rounded-lg",
  md: "rounded-md",
  sm: "rounded-sm",
  full: "rounded-full",
};

function encodeCategoryName(name: string): string {
  return name.replace(/&/g, "%26").replace(/ /g, "+");
}

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
  linkify = false,
}: IconProps) {
  const bgColor = color ? `bg-${color}` : "";
  const textColor = color === "black" ? "text-white" : "text-black";
  const titleStyle = nameSize ? { fontSize: `${nameSize}px` } : {};

  const content = (
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

  if (linkify) {
    const encodedName = encodeCategoryName(subName);
    const url = `/shop?search=${encodedName}`;
    return (
      <Link
        to={url}
        className={`flex flex-col items-center cursor-pointer ${classes}`}
        aria-label={`Shop ${subName}`}
      >
        {content}
      </Link>
    );
  }

  return content;
}

export default Icon;
