import React from "react";
import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Message to show in label tag
   */
  label?: string;
  /**
   * Size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * color of label
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * allCaps is a flag to transform the text in Cap
   */
  allCaps?: boolean;
  /**
   * Custom Font Color
   */
  fontColor?: string;
  /**
   * Custom Font Color
   */
  backgroundColor?: string;
}

export function MyLabel({
  allCaps = true,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
}
