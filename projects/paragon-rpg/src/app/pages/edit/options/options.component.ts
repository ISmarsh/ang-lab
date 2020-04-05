import { Component, OnInit, OnDestroy } from '@angular/core';

import { Origins } from 'projects/paragon-rpg/src/app/data/origin';
import { Languages } from 'projects/paragon-rpg/src/app/data/language';
import { Alignments } from 'projects/paragon-rpg/src/app/data/alignment';
import { Archetypes } from 'projects/paragon-rpg/src/app/data/archetype';
import { PowerSets } from 'projects/paragon-rpg/src/app/data/power-set';
import { TraversalPowers } from 'projects/paragon-rpg/src/app/data/traversal';
import { DamageTypes } from 'projects/paragon-rpg/src/app/data/damage-type';
import { Skills } from 'projects/paragon-rpg/src/app/data/skill';
import { EditComponent } from '../edit.component';
import { AncillaryPowers } from 'projects/paragon-rpg/src/app/data/ancillary-power';
import { Stats } from 'projects/paragon-rpg/src/app/data/stat';
import { SkillMap } from 'projects/paragon-rpg/src/app/data/stat-skill-map';
import { MainPower } from 'projects/paragon-rpg/src/app/data/main-power';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent extends EditComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    super.ngOnInit();
  }

  origins = Origins;
  languages = Languages;
  alignments = Alignments;
  archetypes = Archetypes;
  powerSets = PowerSets;
  traversalPowers = TraversalPowers;
  damageTypes = DamageTypes;
  skills = Skills;
  ancillaryPowers = AncillaryPowers;
  stats = Stats;
  skillMap = SkillMap;

  changeOriginSkill(from: string, to: string): void {
    this.character.changeOriginSkill(from, to);

    this.save();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
