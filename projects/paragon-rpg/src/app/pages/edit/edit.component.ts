import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Repository } from 'utility';
import { Subscription } from 'rxjs';

import { Character } from '../../model/character';
import { Progression } from '../../data/leveling';
import { CharacterService } from '../../core/services/character.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private service: CharacterService,
    private repository: Repository,
  ) { 
    this.subscriptions.push(this.service.current.subscribe(c => this.character = c));
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.characterForm.form.valueChanges.subscribe({
      next: () => {
        //After the change has been applied, save.
        setTimeout(() => this.save())
      }
    });
  }

  subscriptions: Subscription[] = [];

  character!: Character;
  @ViewChild(NgForm, { static: false })
  characterForm: NgForm;

  progression = Progression;

  protected save() {
    return this.repository.save(Character, this.character);
  }

  public up(): void {
    var scrollTargets = document.querySelectorAll("[data-scroll-target]");

    for (let i = scrollTargets.length - 1; i >= 0; i--) {
      const target = scrollTargets[i];
      var rect = target.getBoundingClientRect();

      if (rect.top < -1) {
        
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  public down(): void {
    var scrollTargets = document.querySelectorAll("[data-scroll-target]");

    for (let i = 0; i < scrollTargets.length; i++) {
      const target = scrollTargets[i];
      var rect = target.getBoundingClientRect()

      if (rect.top > 1) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        return;
      }
    }

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
