import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { JournalEntry  } from '@skydevs/types';

@Component({
  selector: 'skydevs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  entries: JournalEntry[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetch();
  }

  onSaveEntry(titleInput: HTMLInputElement, bodyInput: HTMLInputElement) {
    const entry: JournalEntry = { title: titleInput.value, body: bodyInput.value };
    this.dataService.save(entry).subscribe({
      next: () => {
        this.fetch();
        titleInput.value = '';
        bodyInput.value = '';
      }
    });
  }

  onDeleteEntry(id: number) {
    this.dataService.delete(id).subscribe({
      next: () => {
        this.fetch();
      }
    })
  }

  private fetch() {
    this.dataService.fetch().subscribe({
      next: (response: JournalEntry[]) => (this.entries = response) 
    })
  }
}
