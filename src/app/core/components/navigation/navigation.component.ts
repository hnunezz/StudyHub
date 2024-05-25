import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, Inject, Output, inject, input, output, signal } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item';
import { CommonModule } from '@angular/common';

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

    navigationItems: NavigationItem[] = [
        {
            icon: "pi-sitemap",
            title: "Conteúdo",
            path: "Conteúdo",
        },
        {
            icon: "pi-list",
            title: "Painel",
            subItem: [
                {
                    title: "",
                    subTitle: [
                        {
                            title: "Alunos",
                            path: "",
                        },
                        {
                            title: "Professores",
                            path: "",
                        },
                        {
                            title: "Administrativo",
                            path: "",
                        }
                    ]
                },
            ]
        },
        {
            icon: "pi-users",
            title: "Cadastro",
            subItem: [
                {
                    title: "Usuário",
                    subTitle: [
                        {
                            title: "Alunos/Professores",
                            path: "students-teachers",
                        },
                        {
                            title: "Administrativo",
                            path: "administrative",
                        }
                    ]
                },
                {
                    title: "Conteúdo",
                    subTitle: [
                        {
                            title: "Aula",
                            path: "Aula",
                        },
                        {
                            title: "Módulo",
                            path: "Módulo",
                        },
                        {
                            title: "Curso/Plano",
                            path: "Curso/Plano",
                        },
                        {
                            title: "Turma",
                            path: "Turma",
                        },
                    ]
                }
            ]
        },
        {
            icon: "pi-video",
            title: "Aula ao vivo",
            path: "Aula ao vivo",
        },
        {
            icon: "pi-cog",
            title: "Configurações",
            path: "Configurações",
        },
        {
            icon: "pi-wrench",
            title: "Suporte",
            path: "Suporte",
        },
        {
            icon: "pi-file",
            title: "Notas de Atualizações",
            path: "release-notes",
        },
    ]

    handleNavigate(route: string) {
        if (!route) { return }


        this.pathEmitter.emit(route);
        this.actualItem = route;
    }

    handleNavigation() {
        this.show = false;
        this.toggleNavigation = !this.toggleNavigation
    }

}
