import { Component } from '@angular/core';
// @ts-ignore
import { overlayEditor } from 'pintura';
import { PinturaEditorAbstractComponent } from './pintura-editor-abstract.component';
export class PinturaEditorOverlayComponent extends PinturaEditorAbstractComponent {
    initEditor(element, props) {
        return overlayEditor(element, props);
    }
}
PinturaEditorOverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'pintura-editor-overlay',
                template: ` <ng-content></ng-content> `
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGludHVyYS1lZGl0b3Itb3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2FuZ3VsYXItcGludHVyYS92OS9wcm9qZWN0cy9hbmd1bGFyLXBpbnR1cmEvc3JjLyIsInNvdXJjZXMiOlsibGliL3BpbnR1cmEtZWRpdG9yLW92ZXJsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsYUFBYTtBQUNiLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFPckYsTUFBTSxPQUFPLDZCQUNULFNBQVEsOEJBQThCO0lBRXRDLFVBQVUsQ0FBQyxPQUFvQixFQUFFLEtBQVU7UUFDdkMsT0FBTyxhQUFhLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQVZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsNkJBQTZCO2FBRTFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IG92ZXJsYXlFZGl0b3IgfSBmcm9tICdwaW50dXJhJztcbmltcG9ydCB7IFBpbnR1cmFFZGl0b3JBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4vcGludHVyYS1lZGl0b3ItYWJzdHJhY3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwaW50dXJhLWVkaXRvci1vdmVybGF5JyxcbiAgICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gICAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUGludHVyYUVkaXRvck92ZXJsYXlDb21wb25lbnRcbiAgICBleHRlbmRzIFBpbnR1cmFFZGl0b3JBYnN0cmFjdENvbXBvbmVudFxuICAgIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpbml0RWRpdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wczogYW55KSB7XG4gICAgICAgIHJldHVybiBvdmVybGF5RWRpdG9yKGVsZW1lbnQsIHByb3BzKTtcbiAgICB9XG59XG4iXX0=