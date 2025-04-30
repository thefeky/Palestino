function Icon({
  subIcon,
  subName,
  color,
  size,
  iconSize,
  radius = "xl",
  border = "border-2 border-black",
  includeNames = true,
  includeDescription = false,
  subDescription,
  classes,
}: {
  subIcon: string;
  subName: string;
  color?: string;
  size?: number;
  iconSize?: number;
  radius?: string;
  border?: string;
  includeNames?: boolean;
  includeDescription?: boolean;
  subDescription?: string;
  classes?: string;
}) {
  return (
    <div className={`${classes} flex-center flex-col gap-6`}>
      <div className={`flex items-center ${border} rounded-${radius}`}>
        <div
          className={`${
            size ? `w-${size} h-${size}` : "w-40 h-40"
          } flex-center flex-col rounded-${radius} gap-2 bg-${color}`}
        >
          <img
            src={subIcon}
            className={`${
              iconSize ? `w-${iconSize} h-${iconSize}` : "w-14 h-14"
            } object-contain" alt="icon`}
          />
          {includeNames ? (
            <span
              className={`font-semibold text-${
                color === "black" ? "white" : "black"
              }`}
            >
              {subName}
            </span>
          ) : null}
        </div>
      </div>
      {includeDescription ? (
        <div className="flex-center flex-col gap-2">
          <p className="font-semibold">{subName}</p>
          <span className="text-xs font-semibold">{subDescription}</span>
        </div>
      ) : null}
    </div>
  );
}

export default Icon;
