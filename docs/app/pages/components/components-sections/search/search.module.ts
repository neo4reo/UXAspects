import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SearchBuilderModule, ItemDisplayPanelModule, ToolbarSearchModule, ToggleSwitchModule, RadioButtonModule } from '../../../../../../src/index';

import { DocumentationComponentsModule } from '../../../../components/components.module';
import { ResolverService, DocumentationPage } from '../../../../services/resolver/resolver.service';
import { DocumentationCategoryComponent } from '../../../../components/documentation-category/documentation-category.component';
import { WrappersModule } from '../../../../wrappers/wrappers.module';

import { ComponentsSearchBuilderNg1Component } from './search-builder-ng1/search-builder-ng1.component';
import { ComponentsSearchHistoryNg1Component } from './search-history-ng1/search-history-ng1.component';
import { ComponentsSearchToolbarNg1Component } from './search-toolbar-ng1/search-toolbar-ng1.component';
import { ComponentsToolbarSearchComponent } from './toolbar-search/toolbar-search.component';
import { ComponentsSearchBuilderComponent } from './search-builder/search-builder.component';

const SECTIONS = [
    ComponentsSearchBuilderNg1Component,
    ComponentsSearchHistoryNg1Component,
    ComponentsSearchToolbarNg1Component,
    ComponentsToolbarSearchComponent,
    ComponentsSearchBuilderComponent
];

const ROUTES = [
    {
        path: '**',
        component: DocumentationCategoryComponent,
        data: {
            category: ResolverService.resolveCategoryData(DocumentationPage.Components, 'Search')
        }
    }
];

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild(ROUTES),
        CommonModule,
        AccordionModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule,
        TooltipModule.forRoot(),
        DocumentationComponentsModule,
        ItemDisplayPanelModule,
        RadioButtonModule,
        SearchBuilderModule,
        ToggleSwitchModule,
        ToolbarSearchModule,
        WrappersModule,
    ],
    exports: SECTIONS,
    declarations: SECTIONS,
    entryComponents: SECTIONS
})
export class ComponentsSearchModule {

    constructor(componentFactoryResolver: ComponentFactoryResolver, resolverService: ResolverService) {
        resolverService.registerResolver(componentFactoryResolver);
    }
}