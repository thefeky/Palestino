import { useEffect, useState } from "react";
import axios from "axios";
import Icon from "./Icon";

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
}: {
  option: string;
  color?: string;
  size?: number;
  iconSize?: number;
  radius?: string;
  border?: string;
  includeNames?: boolean;
  gap?: string;
  includeDescription?: boolean;
  classes?: string;
}) {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    function fetchIcons() {
      axios
        .get(`http://localhost:3002/${option}`)
        .then((res) => setIcons(res.data));
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
            classes={classes}
          />
        )
      )}
    </div>
  );
}

export default IconList;
