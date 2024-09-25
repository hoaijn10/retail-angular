import {Item} from "./item.interface";

export interface Section {
  id: number;
  title: string;
  iconUrl: string;
  isSelected: boolean;
  isExpanded: boolean;
  items: Item[];
}
