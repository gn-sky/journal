import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JournalEntry } from '@skydevs/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get<JournalEntry[]>('/api/entries');
  }

  save(entry: JournalEntry) {
    return this.http.post('/api/entries', entry);
  }

  delete(id: number) {
    return this.http.delete(`/api/entries/${id}`);
  }
}
