




import { Component, EventEmitter, Output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

@Component({
  selector: 'app-custom-range-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-72 bg-white rounded-2xl shadow-2xl border text-black border-gray-100 p-4 -mt-2 select-none animate-in fade-in zoom-in duration-200">
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
            [class.bg-orange-500]="isStart(date) || isEnd(date)"
            [class.text-white]="isStart(date) || isEnd(date)"
            [class.bg-orange-50]="isInRange(date) && !isStart(date) && !isEnd(date)"
            [class.text-orange-600]="isInRange(date)"
            [class.hover:bg-gray-100]="!isInRange(date)"
            class="h-8 w-8 text-xs font-bold rounded-lg flex items-center justify-center transition-all cursor-pointer relative">
            {{ date.getDate() }}
          </button>
        }
      </div>

      <div class="mt-4 pt-4 border-t border-gray-50 flex flex-col gap-2">
         <div class="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-gray-400">
            <span>Range:</span>
            <span class="text-gray-900">
              {{ range().start ? (range().start | date:'dd MMM') : '...' }} -
              {{ range().end ? (range().end | date:'dd MMM') : '...' }}
            </span>
         </div>
         <button (click)="resetRange()" class="w-full py-2 text-[10px] font-black uppercase tracking-widest text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
          Reset Selection
        </button>
      </div>
    </div>
  `
})
export class CustomRangeCalendar {
  @Output() rangeSelected = new EventEmitter<DateRange>();

  viewDate = signal(new Date());
  range = signal<DateRange>({ start: null, end: null });

  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  daysInMonth = computed(() => {
    const year = this.viewDate().getFullYear();
    const month = this.viewDate().getMonth();
    const daysCount = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysCount }, (_, i) => new Date(year, month, i + 1));
  });

  blanks = computed(() => {
    const firstDay = new Date(this.viewDate().getFullYear(), this.viewDate().getMonth(), 1).getDay();
    return Array(firstDay).fill(0);
  });

  selectDate(date: Date) {
    const currentRange = this.range();

    if (!currentRange.start || (currentRange.start && currentRange.end)) {
      // First click or reset: set as start
      this.range.set({ start: date, end: null });
    } else if (date < currentRange.start) {
      // If clicked date is before start, make it the new start
      this.range.set({ start: date, end: null });
    } else {
      // Second click: set as end
      const newRange = { start: currentRange.start, end: date };
      this.range.set(newRange);
      this.rangeSelected.emit(newRange);
    }
  }

  isInRange(date: Date) {
    const { start, end } = this.range();
    if (!start || !end) return false;
    return date >= start && date <= end;
  }

  isStart(date: Date) {
    return this.range().start?.toDateString() === date.toDateString();
  }

  isEnd(date: Date) {
    return this.range().end?.toDateString() === date.toDateString();
  }

  resetRange() {
    this.range.set({ start: null, end: null });
  }

  changeMonth(delta: number) {
    const current = this.viewDate();
    this.viewDate.set(new Date(current.getFullYear(), current.getMonth() + delta, 1));
  }
}
