export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'basic' | 'clearable' | 'rounded';
  color?: 'light' | 'primary' | 'dark';
  onBadgeClick?(): void;
  onClear?(): void;
  children: React.ReactNode;
}
