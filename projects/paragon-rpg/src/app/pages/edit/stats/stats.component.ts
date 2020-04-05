import { Component, OnInit, OnDestroy } from '@angular/core';
import { Stats, StatName } from 'projects/paragon-rpg/src/app/data/stat';
import { Skills } from 'projects/paragon-rpg/src/app/data/skill';
import { SkillMap } from 'projects/paragon-rpg/src/app/data/stat-skill-map';
import { EditComponent } from '../edit.component';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent extends EditComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    super.ngOnInit();
  }

  stats = Stats;
  skills = Skills;
  skillMap = SkillMap;

  misc: { name?:string, base?: any, type?: StatName, proficient?: boolean } = {};
  miscTypes = Stats.map(s => s.name);
  editMisc(key: string): void {
    let misc = this.character.miscellaneous[key];

    this.misc = {
      name: key,
      base: misc.base,
      type: misc.type,
      proficient: misc.proficient,
    }
  }
  saveMisc(): void {
    if (this.misc.name) {
      let isString = (this.misc.base || "").length === 0 || /[^0-9]/.test(this.misc.base);

      this.character.miscellaneous[this.misc.name] = {
        base: isString ? this.misc.base : +this.misc.base,
        mod: 0,
        type: this.misc.type,
        proficient: this.misc.proficient
      }

      this.save();

      this.misc = {};
    }
  }
  changeMisc(key: string, value: number) {
    let misc = this.character.miscellaneous[key];

    misc.mod = value === 0 ? 0 : +misc.mod + value;

    this.save();
  }
  getMiscValue(key: string) {
    let misc = this.character.miscellaneous[key];

    let base: string | number, isString: boolean;
    if (misc.base !== undefined) {
      base = misc.base;
      
      if (isString = typeof misc.base === "string") {
        base += " ";
      }
    } else {
      base = "";

      isString = true;
    }

    let mod = misc.mod;
    if (misc.type) {
      mod += this.character.getMod(misc.type);
    }
    if (misc.proficient) {
      mod += this.character.proficiency;
    }

    return isString ? base + `${mod >= 0 ? '+' : '-'} ${Math.abs(mod)}` : +base + mod;
  }
  removeMisc(key: string): void {
    delete this.character.miscellaneous[key];

    this.save();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
