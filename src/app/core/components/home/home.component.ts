import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StorageKeys } from '../../enums/storage-keys';

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const weekDays = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
    week_day
    day
    month
    year

    emotionTitle: [string, string] = [" _ ", ""];
    emotionsList = [
        { path: `assets/images/svgs/emotion-04.svg#emotion-04`, active: false, title: 'Bleh!', color: "#e42221" },
        { path: `assets/images/svgs/emotion-06.svg#emotion-06`, active: false, title: 'Bravo', color: "#ea631f" },
        { path: `assets/images/svgs/emotion-05.svg#emotion-05`, active: false, title: 'Entediado', color: "#f5972b" },
        { path: `assets/images/svgs/emotion-03.svg#emotion-03`, active: false, title: 'Apaixonado', color: "#ffc800" },
        { path: `assets/images/svgs/emotion-02.svg#emotion-02`, active: false, title: 'Feliz', color: "#99cf24" },
        { path: `assets/images/svgs/emotion-01.svg#emotion-01`, active: false, title: 'Radiante', color: "#008f18" },
    ]

    ngOnInit() {
        this.setDays();

        const emotionSetIndex = localStorage.getItem(StorageKeys.EMOTION_DAY_KEY)
        if (emotionSetIndex) {
            this.setEmotionDay(JSON.parse(emotionSetIndex));
        }
    }

    setEmotionDay(index: number) {
        this.emotionsList.forEach(emotion => emotion.active = false);
        this.emotionsList[index].active = true;
        this.emotionTitle = [this.emotionsList[index].title, this.emotionsList[index].color];

        localStorage.setItem(StorageKeys.EMOTION_DAY_KEY, JSON.stringify(index));
    }

    setDays() {
        const date = new Date();

        this.week_day = weekDays[date.getDay()];
        this.day = date.getDate();
        this.month = monthNames[date.getUTCMonth()];
        this.year = date.getFullYear();
    }
}

