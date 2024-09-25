import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Section} from "../interfaces/section.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, NgForOf, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'retail';

  collapsedMenu: boolean = false;
  sections: Section[] = [
    {
      id: 0,
      title: "Trang chủ",
      iconUrl: "assets/home.svg",
      isExpanded: false,
      isSelected: true,
      items: []},
    {
      id: 1,
      title: "Quản lý kho",
      iconUrl: "assets/stock.svg",
      isSelected: false,
      isExpanded: false,
      items: [
        {id: 0, text: "Nhập kho", isSelected: false},
        {id: 1, text: "Xuất kho", isSelected: false},
        {id: 2, text: "Tồn kho", isSelected: false}
      ]
    },
    {
      id: 2,
      title: "Quản lý hàng hóa",
      iconUrl: "assets/product.svg",
      isSelected: false,
      isExpanded: false,
      items: [
        {id: 0, text: "Nhập kho", isSelected: false},
        {id: 1, text: "Xuất kho", isSelected: false},
        {id: 2, text: "Tồn kho", isSelected: false}
      ]
    },
    {
      id: 3,
      title: "Quản lý bán hàng",
      iconUrl: "assets/sale.svg",
      isSelected: false,
      isExpanded: false,
      items: [
        {id: 0, text: "Nhập kho", isSelected: false},
        {id: 1, text: "Xuất kho", isSelected: false},
        {id: 2, text: "Tồn kho", isSelected: false}
      ]
    },
    {
      id: 4,
      title: "Báo cáo thống kê",
      iconUrl: "assets/stats.svg",
      isSelected: false,
      isExpanded: false,
      items: [
        {id: 0, text: "Nhập kho", isSelected: false},
        {id: 1, text: "Xuất kho", isSelected: false},
        {id: 2, text: "Tồn kho", isSelected: false}
      ]
    },
    {
      id: 5,
      title: "Quản lý hệ thống",
      iconUrl: "assets/system.svg",
      isSelected: false,
      isExpanded: false,
      items: [
        {id: 0, text: "Nhập kho", isSelected: false},
        {id: 1, text: "Xuất kho", isSelected: false},
        {id: 2, text: "Tồn kho", isSelected: false}
      ]
    },
  ];

  selectSection(id: number): void {
    this.sections[id].isSelected = true;
    for (let i = 0; i < this.sections.length; i++) {
      if (i !== id) {
        this.sections[i].isSelected = false;
        this.sections[i].isExpanded = false;
      }
    }
  }

  expandSection(id: number): void {
    this.selectSection(id);
    (this.sections)[id].isExpanded = !(this.sections)[id].isExpanded;
    for (let i = 0; i < this.sections.length; i++) {
      if (i !== id) {
        this.sections[i].isExpanded = false;
      }
    }
  }

  toggleMenu(): void {
    this.collapsedMenu = !this.collapsedMenu;
    for (let i = 0; i < this.sections.length; i++) {
      this.sections[i].isExpanded = false;
    }
  }

  selectItem(sectionId: number, itemId: number): void {
    this.sections[sectionId].items[itemId].isSelected = true;
    for (let i = 0; i < this.sections[sectionId].items.length; i++) {
      if (i !== itemId) {
        this.sections[sectionId].items[i].isSelected = false;
      }
    }
  }
}
