import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, Inject, Output, inject, input, output, signal } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item';
import { CommonModule } from '@angular/common';
import { navigationItems } from '../../../../assets/data/navigation-item';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
    pathEmitter = output<string>();

    show: boolean = false;
    toggleNavigation: boolean = false;
    actualItem: string = "";

    navigationItems: NavigationItem[] = navigationItems;  //? MOCK!

    handleNavigate(route: string) {
        if (!route) { return }


        this.pathEmitter.emit(route);
        this.actualItem = route;
    }

    handleNavigation() {
        this.navigationItems.forEach(item => item.active = false);

        this.toggleNavigation = !this.toggleNavigation
    }

    toogleSubItems(item: NavigationItem) {
        this.navigationItems.forEach(_ => {
            if (_ == item) {
                item.active = !item.active;
            } else {
                _.active = false
            }

        });
    }

}
