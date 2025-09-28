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
