import React from "react";
import styles from "./DemoControlsComponent.module.css";

export type DemoControlsComponentProps = {
  text: string;
  isActive: boolean;
  count: number;
  rangeValue: number;
  color: string;
  date: Date;
  data: Record<string, unknown>;
  items: string[];
  variant: "primary" | "secondary" | "danger";
  tags: string[];
};

// ...existing code...

const icon = (isActive: boolean) => (isActive ? "🟢" : "⚪️");

export const DemoControlsComponent: React.FC<DemoControlsComponentProps> = ({
  text,
  isActive,
  count,
  rangeValue,
  color,
  date,
  data,
  items,
  variant,
  tags,
}) => {
  return (
    <div className={styles.wrapper} style={{ borderColor: color }}>
      <h2 className={styles.header}>
        {icon(isActive)} {text}
      </h2>
      <div className={styles.info}>
        <span>Count: {count}</span>
        <span>Range: {rangeValue}</span>
      </div>
      <div className={styles.date}>Дата: {date.toDateString()}</div>
      <div className={styles.items}>
        <b>Items:</b>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.variant}>
        <b>Variant:</b> <span>{variant}</span>
      </div>
      <div className={styles.tags}>
        <b>Tags:</b> {tags.join(", ")}
      </div>
      <div className={styles.data}>
        <b>Data:</b>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};
