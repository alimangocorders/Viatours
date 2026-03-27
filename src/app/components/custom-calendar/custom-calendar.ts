import { Component, EventEmitter, Output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 -mt-2 select-none animate-in fade-in zoom-in duration-200">
      <div class="flex items-center justify-between mb-4">
        <h4 class="font-bold text-gray-900 text-sm">
          {{ monthNames[viewDate().getMonth()] }} {{ viewDate().getFullYear() }}
        </h4>
        <div class="flex gap-1">
          <button (click)="changeMonth(-1)" class="p-1.5 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
            <i class="ri-arrow-left-s-line"></i>
          </button>
          <button (click)="changeMonth(1)" class="p-1.5 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
            <i class="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-7 gap-1 mb-2">
        @for (day of ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']; track day) {
          <div class="text-[10px] font-black text-gray-400 uppercase text-center py-1">{{ day }}</div>
        }
      </div>

      <div class="grid grid-cols-7 gap-1">
        @for (blank of blanks(); track $index) {
          <div class="h-8 w-8"></div>
        }

        @for (date of daysInMonth(); track date.getTime()) {
          <button
            (click)="selectDate(date)"
            [class.bg-(--primary-color)]="isSameDate(date, selectedDate())"
            [class.text-white]="isSameDate(date, selectedDate())"
            [class.hover:bg-orange-50]="!isSameDate(date, selectedDate())"
            class="h-8 w-8 text-xs font-bold rounded-lg flex items-center justify-center transition-all cursor-pointer">
            {{ date.getDate() }}
          </button>
        }
      </div>

      <button (click)="goToToday()" class="w-full mt-4 py-2 text-[10px] font-black uppercase tracking-widest text-(--primary-color) hover:bg-orange-50 rounded-lg transition-colors">
        Go to Today
      </button>
    </div>
  `
})
export class CustomCalendarComponent {
  @Output() dateSelected = new EventEmitter<Date>();

  // Signals for reactive state
  viewDate = signal(new Date());
  selectedDate = signal(new Date());

  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Computed signal to calculate days in the current view month
  daysInMonth = computed(() => {
    const year = this.viewDate().getFullYear();
    const month = this.viewDate().getMonth();
    const daysCount = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysCount }, (_, i) => new Date(year, month, i + 1));
  });

  // Computed signal to calculate leading empty slots
  blanks = computed(() => {
    const firstDay = new Date(this.viewDate().getFullYear(), this.viewDate().getMonth(), 1).getDay();
    return Array(firstDay).fill(0);
  });

  changeMonth(delta: number) {
    const current = this.viewDate();
    this.viewDate.set(new Date(current.getFullYear(), current.getMonth() + delta, 1));
  }

  goToToday() {
    const today = new Date();
    this.viewDate.set(today);
    this.selectDate(today);
  }

  selectDate(date: Date) {
    this.selectedDate.set(date);
    this.dateSelected.emit(date);
  }

  isSameDate(d1: Date, d2: Date) {
    return d1.toDateString() === d2.toDateString();
  }
}

