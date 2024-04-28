import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, Inject, inject, output, signal } from '@angular/core';
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
    path = output<string>();

    show: boolean = false;
    toggleNavigation: boolean = false;

    navigationItems: NavigationItem[] = [
        {
            icon: "pi-sitemap",
            title: "Conteúdo",
            path: "Conteúdo",
        },
        {
            icon: "pi-list",
            title: "Painel",
            path: "Painel"
        },
        {
            icon: "pi-users",
            title: "Cadastro",
            path: "Cadastro",
            subItem: [
                {
                    title: "Usuário",
                    subTitle: [
                        {
                            title: "Alunos/Professores",
                            path: "Alunos/Professores"
                        },
                        {
                            title: "Administrativo",
                            path: "Administrativo"
                        }
                    ]
                },
                {
                    title: "Conteúdo",
                    subTitle: [
                        {
                            title: "Aula",
                            path: "Aula"
                        },
                        {
                            title: "Módulo",
                            path: "Módulo"
                        },
                        {
                            title: "Curso/Plano",
                            path: "Curso/Plano"
                        },
                        {
                            title: "Turma",
                            path: "Turma"
                        },
                    ]
                }
            ]
        },
        {
            icon: "pi-video",
            title: "Aula ao vivo",
            path: "Aula ao vivo"
        },
        {
            icon: "pi-cog",
            title: "Configurações",
            path: "Configurações"
        },
        {
            icon: "pi-wrench",
            title: "Suporte",
            path: "Suporte"
        },
        {
            icon: "pi-file",
            title: "Notas de Atualizações",
            path: "Notas de Atualizações"
        },
    ]

    handleNavigate(route: string) {
        if (!route) { return console.error("Path Empty") }

        this.path.emit(route);
    }

}
