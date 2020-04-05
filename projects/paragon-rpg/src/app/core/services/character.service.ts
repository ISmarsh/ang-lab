import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from 'projects/paragon-rpg/src/app/model/character';
import { Repository } from 'utility';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private repository: Repository) {}

  public current = new BehaviorSubject<Character>(this.repository.get(Character)[0] || new Character());
}
