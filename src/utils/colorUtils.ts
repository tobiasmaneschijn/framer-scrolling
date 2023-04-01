export const hexToRGBA = (hex: string, alpha: number) => {
  const [r, g, b] = hexToRGB(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const hexToRGB = (hex: string) => {
  // Remove '#' if present
  hex = hex.startsWith("#") ? hex.slice(1) : hex;

  // Handle 3-digit and 6-digit hex codes
  const hexLength = hex.length;
  if (hexLength !== 3 && hexLength !== 6) {
    throw new Error("Invalid hex color format");
  }

  // If 3-digit hex, convert to 6-digit by doubling each digit
  const normalizedHex =
    hexLength === 3
      ? hex
          .split("")
          .map((x) => x + x)
          .join("")
      : hex;

  // Convert to RGB
  const [r, g, b] = normalizedHex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return [r, g, b];
};
