import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { CheckboxModule } from '../checkbox/checkbox.module';

import { FacetContainerComponent } from './facet-container.component';
import { FacetBaseComponent } from './base/facet-base/facet-base.component';
import { FacetHeaderComponent } from './base/facet-header/facet-header.component';
import { FacetCheckListComponent } from './facet-check-list/facet-check-list.component';
import { FacetTypeaheadListComponent, FacetTypeaheadHighlight } from './facet-typeahead-list/facet-typeahead-list.component';

const DECLARATIONS = [
    FacetContainerComponent,
    FacetHeaderComponent,
    FacetBaseComponent,
    FacetCheckListComponent,
    FacetTypeaheadListComponent,
    FacetTypeaheadHighlight
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CheckboxModule,
        TooltipModule.forRoot(),
        TypeaheadModule.forRoot()
    ],
    exports: DECLARATIONS,
    declarations: DECLARATIONS
})
export class FacetsModule { }
