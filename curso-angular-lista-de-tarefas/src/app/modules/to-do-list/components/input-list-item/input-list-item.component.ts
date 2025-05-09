import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss'
})
export class InputListItemComponent {

  @Input({ required: true}) public inputListItems: IListItems[] = [];

  @Output() public outputUpdateItemCheckobox = new EventEmitter<{
    id: string;
    checked: boolean;
  }>();

  public updateItemCheckbox(id: string, checked: boolean){
    return this.outputUpdateItemCheckobox.emit({ id, checked });
  }

  @Output() public outputUpdateItemText = new EventEmitter<{
    id: string;
    value: string;
  }>();

  public updateItemText(id: string, value: string){
    return this.outputUpdateItemText.emit({ id, value });
  }

  @Output() public outputDeleteItemText = new EventEmitter<string>();

  public deleteItemText(id: string){
    return this.outputDeleteItemText.emit(id);
  }
}
