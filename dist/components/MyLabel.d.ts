/// <reference types="react" />
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
export declare function MyLabel({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps): JSX.Element;
