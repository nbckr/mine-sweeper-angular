import {Component, ViewContainerRef} from '@angular/core';
import {Modal, BSModalContext} from "angular2-modal/plugins/bootstrap";
import {NewGameModalComponent} from "../shared/new-game-modal.component";
import {overlayConfigFactory} from "angular2-modal";
import {DataAccessService} from "../shared/dataaccess.service";


@Component({
  selector: 'app-game',
  templateUrl: 'game-page.component.html',
  styles: [`
    :host {
    }
    .btn {
      cursor: pointer;
      margin-top: 1.5em;
    }
  `]
})
export class GamePageComponent {

  constructor(private vcRef: ViewContainerRef, public modal: Modal, private dataProviderService: DataAccessService) {
  }

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
}
