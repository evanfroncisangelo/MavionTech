import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { WhyChooseUs } from './components/why-choose-us/why-choose-us';
import { Technologies } from './components/technologies/technologies';
import { Process } from './components/process/process';
import { Team } from './components/team/team';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    Hero,
    Services,
    WhyChooseUs,
    Technologies,
    Process,
    Team,
    About,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

