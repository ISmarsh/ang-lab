import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Character } from 'projects/paragon-rpg/src/app/model/character';
import { Repository } from 'projects/paragon-rpg/src/app/model/repository';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public current = new BehaviorSubject<Character>(Repository.get(Character)[0] || new Character());
}
