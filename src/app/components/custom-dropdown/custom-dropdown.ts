import { Component, Input, Output, EventEmitter, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="relative w-full">
      <div (click)="toggle()"
           class="w-full bg-white border border-gray-100 rounded-full px-5 py-3 flex items-center justify-between cursor-pointer hover:border-(--primary-color) hover:shadow-md transition-all duration-300 group">
        <div class="flex items-center gap-4 overflow-hidden">
          <div class="w-10 h-10 shrink-0 bg-orange-50 rounded-full flex items-center justify-center text-(--primary-color) group-hover:scale-110 transition-transform">
            <i [class]="icon + ' text-xl'"></i>
          </div>
          <div class="overflow-hidden text-left">
            <h3 class="font-bold text-[10px] text-gray-400 uppercase tracking-widest">{{ label }}</h3>
            <p class="text-sm font-black text-gray-900 truncate">{{ selected() || placeholder }}</p>
          </div>
        </div>
        <i class="ri-arrow-down-s-line text-gray-300 text-xl transition-transform duration-300" [class.rotate-180]="isOpen()"></i>
      </div>

      @if (isOpen()) {
        <div class="absolute z-50 w-full mt-3 bg-white rounded-2xl shadow-2xl border border-gray-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div class="p-3 border-b border-gray-50 bg-gray-50/50">
            <div class="relative">
              <i class="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input type="text" [(ngModel)]="searchText" (click)="$event.stopPropagation()" placeholder="Search..."
                     class="w-full pl-9 pr-4 py-2 text-sm bg-white rounded-xl outline-none border border-gray-100 focus:border-(--primary-color) transition-all">
            </div>
          </div>

          <div class="max-h-64 overflow-y-auto custom-scrollbar">
            @for (option of filteredOptions(); track option) {
              <div (click)="selectOption(option)"
                   [class.bg-orange-50]="option === selected()"
                   [class.text-(--primary-color)]="option === selected()"
                   class="px-5 py-3.5 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-(--primary-color) cursor-pointer transition-colors flex items-center justify-between">
                {{ option }}
                @if (option === selected()) { <i class="ri-check-line"></i> }
              </div>
            } @empty {
              <div class="p-8 text-center">
                <i class="ri-find-replace-line text-2xl text-gray-200 mb-2 block"></i>
                <p class="text-xs text-gray-400 font-bold uppercase tracking-tighter">No results found</p>
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: #f1f1f1; border-radius: 10px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #e5e7eb; }
  `]
})
export class CustomDropdownComponent {
  @Input() label: string = 'Select';
  @Input() placeholder: string = 'Choose an option';
  @Input() icon: string = 'ri-map-pin-line';
  @Input() options: string[] = [];
  @Output() valueChange = new EventEmitter<string>();

  isOpen = signal(false);
  selected = signal('');
  searchText = '';

  constructor(private eRef: ElementRef) {}

  // Closes the dropdown if user clicks outside of this component
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  filteredOptions() {
    return this.options.filter(option =>
      option.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  toggle() {
    this.isOpen.set(!this.isOpen());
    if (this.isOpen()) this.searchText = ''; // Reset search when opening
  }

  selectOption(val: string) {
    this.selected.set(val);
    this.valueChange.emit(val);
    this.isOpen.set(false);
  }
}
