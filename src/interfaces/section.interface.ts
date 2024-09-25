import {Item} from "./item.interface";
// section for sidebar menu
export interface Section {
  id: number;
  title: string;
  iconUrl: string;
  isSelected: boolean;
  isExpanded: boolean;
  items: Item[];
}
