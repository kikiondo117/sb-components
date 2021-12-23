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
}

export function MyLabel({
  allCaps = true,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
}: MyLabelProps) {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
}
