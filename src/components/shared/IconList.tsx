import axios from "axios";
import { useEffect, useState } from "react";
import Icon from "./Icon";

interface IconListProps {
  option: string;
  color?: string;
  size?: number;
  iconSize?: number;
  radius?: "xl" | "lg" | "md" | "sm" | "full";
  border?: string;
  includeNames?: boolean;
  gap?: string;
  includeDescription?: boolean;
  classes?: string;
  nameSize?: number;
  linkify?: boolean; // NEW prop
}

function IconList({
  option,
  color = "white",
  size,
  iconSize,
  radius,
  border,
  classes,
  includeNames,
  gap,
  includeDescription,
  nameSize,
  linkify = false, // default false
}: IconListProps) {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    function fetchIcons() {
      axios
        .get("/assets/icons.json")
        .then((res) => setIcons(res.data[option]))
        .catch((err) => console.error("Error fetching icons:", err));
    }
    fetchIcons();
  }, [option]);

  return (
    <div className={`flex-center flex-wrap gap-6 ${gap} mx-auto`}>
      {icons.map(
        (icon: {
          subIcon: string;
          subName: string;
          subDescription: string;
        }) => (
          <Icon
            key={icon.subIcon}
            subIcon={icon.subIcon}
            subName={icon.subName}
            color={color}
            size={size}
            iconSize={iconSize}
            radius={radius}
            border={border}
            includeNames={includeNames}
            subDescription={icon.subDescription}
            includeDescription={includeDescription}
            nameSize={nameSize}
            classes={classes}
            linkify={linkify} // pass prop down
          />
        )
      )}
    </div>
  );
}

export default IconList;
