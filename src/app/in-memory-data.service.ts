import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'The Magnolia All Suites', amenities: ['Pool', 'Gym', 'Spa', 'Business Office'], numRooms: 50, weekendDif: 50 },
      { id: 12, name: 'The Lofts at Town Centre', amenities: ['Pool', 'Gym', 'Spa', 'Business Office'], numRooms: 50, weekendDif: 50 },
      { id: 13, name: 'Park North Hotel', amenities: ['Pool', 'Gym', 'Spa', 'Business Office'], numRooms: 50, weekendDif: 50 },
      { id: 14, name: 'The Courtyard Suites', amenities: ['Pool', 'Gym', 'Spa', 'Business Office'], numRooms: 50, weekendDif: 50 },
      { id: 15, name: 'The Regency Rooms', amenities: ['Pool', 'Gym', 'Spa', 'Business Office'], numRooms: 50, weekendDif: 50 },
      { id: 16, name: 'Town Inn Budget Rooms', amenities: ['Pool', 'Gym', 'Spa', 'Business Office'], numRooms: 50, weekendDif: 50 },
      { id: 17, name: 'The Comfy Motel Place', amenities: ['Pool', 'Gym', 'Spa', 'Business Office'], numRooms: 50, weekendDif: 50 },
      { id: 18, name: 'Sun Palace Inn', amenities: ['Pool', 'Gym', 'Spa', 'Business Office'], numRooms: 50, weekendDif: 50 },
      { id: 19, name: 'HomeAway Inn', amenities: ['Pool', 'Gym', 'Spa', 'Business Office'], numRooms: 50, weekendDif: 50 },
      { id: 20, name: 'Rio Inn', amenities: ['Pool', 'Gym', 'Spa', 'Business Office'], numRooms: 50, weekendDif: 50 }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}