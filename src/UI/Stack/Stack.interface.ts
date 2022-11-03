export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  contentPosition?: 'center' | 'flex-start' | 'flex-end';
  children: JSX.Element | JSX.Element[];
}
