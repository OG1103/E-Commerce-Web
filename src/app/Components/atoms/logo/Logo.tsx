import { FC } from "react";
import { Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

type LogoProps = {
  color?: "primary" | "white";
  size?: "small" | "medium" | "large";
};

const Logo: FC<LogoProps> = ({ color = "primary", size = "medium" }) => {
  const fontSize = {
    small: "1.25rem",
    medium: "1.5rem",
    large: "2rem",
  };

  return (
    <Link href="/" passHref legacyBehavior>
      <MuiLink
        underline="none"
        color={color === "primary" ? "primary" : "white"}
        sx={{
          display: "inline-block",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          fontSize={fontSize[size]}
          sx={{
            letterSpacing: "-0.5px",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          ModernShop
        </Typography>
      </MuiLink>
    </Link>
  );
};

export default Logo;
