import { NavigationItem } from "../../app/core/models/navigation-item";

export const navigationItems: NavigationItem[] = [
    {
        icon: "pi-sitemap",
        title: "Conteúdo",
        path: "content",
    },
    {
        icon: "pi-list",
        title: "Painel",
        active: false,
        subItem: [
            {
                title: "",
                subTitle: [
                    {
                        title: "Alunos",
                        path: "a",
                    },
                    {
                        title: "Professores",
                        path: "ab",
                    },
                    {
                        title: "Administrativo",
                        path: "abc",
                    }
                ]
            },
        ]
    },
    {
        icon: "pi-users",
        title: "Cadastro",
        active: false,
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
