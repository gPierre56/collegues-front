import {Routes} from "@angular/router";
import {AccueilComponent} from "./accueil/accueil.component";
import {GallerieComponent} from "./gallerie/gallerie.component";
import {AProposComponent} from "./a-propos/a-propos.component";
import {AuthentificationComponentComponent} from "./authentification-component/authentification-component.component";
import {CollegueComponent} from "./collegue/collegue.component";
import {RechercheCollegueParNomComponent} from "./recherche-collegue-par-nom/recherche-collegue-par-nom.component";
import {DetailsCollegueComponent} from "./details-collegue/details-collegue.component";

export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent},
    { path: 'gallerie', component: GallerieComponent},
    { path: 'apropos', component: AProposComponent},
    { path: 'authentification', component: AuthentificationComponentComponent},
    { path: 'collegue', component: CollegueComponent},
    { path: 'recherche_collegue', component: RechercheCollegueParNomComponent},
    { path: 'gallerie/:matricule', component: DetailsCollegueComponent},
    {path: '', pathMatch: 'full', redirectTo: 'accueil'}
];
