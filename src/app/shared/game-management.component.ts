import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {DataAccessService} from "./dataaccess.service";
import {Modal, overlayConfigFactory} from "angular2-modal";
import {NewGameModalComponent} from "./new-game-modal.component";
import {BSModalContext} from "angular2-modal/plugins/bootstrap";

@Component({
  selector: 'app-game-management',
  templateUrl: './game-management.component.html',
  styles: [`    
    .btn {
      cursor: pointer;
      margin-top: 1.5em;
    }
    .dropdown-item {
      cursor: pointer;
      cursor: pointer;
    }
  `]
})
export class GameManagementComponent {

  constructor(private vcRef: ViewContainerRef, public modal: Modal, private dataProviderService: DataAccessService) { }

  onNewGame() {
    // we set the baseContextType to BSModalContext so the defaults for bootstrap will apply
    this.modal.open(NewGameModalComponent, overlayConfigFactory({}, BSModalContext));
  }

  onSave() {
    this.dataProviderService.sendAction({ action: 'save' });
  }

  onLoad() {
    this.dataProviderService.sendAction({ action: 'load' });
  }

  onSolveAll() {
    this.dataProviderService.sendAction({ action: 'solve', option: 'all' });
  }

  onGiveHint() {
    this.dataProviderService.sendAction({ action: 'solve', option: 'hint' });

  }

  onShowProbabilites() {
    this.dataProviderService.sendAction({ action: 'solve', option: 'probabilities' });
  }
}
