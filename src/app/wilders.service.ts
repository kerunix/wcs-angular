import { Injectable } from '@angular/core';

// Import Http library
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WildersService {

  constructor(private http: HttpClient) { }

  // Declare backend URL
  private backendUrl = 'api/wilders';

  getWilders() {
    // Get request to backend url
    return this.http.get(this.backendUrl);
  }
}
