export interface NavItem {
  path: string;
  name: string;
  label: string;
  icon?: string;
  description?: string;
  children?: NavItem[];
  collapsible?: boolean;
}
