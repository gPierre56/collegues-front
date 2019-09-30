import {Routes} from "@angular/router";
import {AccueilComponent} from "./accueil/accueil.component";
import {GallerieComponent} from "./gallerie/gallerie.component";
import {AProposComponent} from "./a-propos/a-propos.component";
import {AuthentificationComponentComponent} from "./authentification-component/authentification-component.component";
import {CollegueComponent} from "./collegue/collegue.component";
import {RechercheCollegueParNomComponent} from "./recherche-collegue-par-nom/recherche-collegue-par-nom.component";
import {DetailsCollegueComponent} from "./details-collegue/details-collegue.component";
import {ConnexionGuardService} from "./services/connexion-guard.service";

export const ROUTES: Routes = [
    { path: 'authentification', component: AuthentificationComponentComponent},

    { path : '', canActivate: [ConnexionGuardService], children: [
    { path: 'accueil', component: AccueilComponent},
    { path: 'gallerie', component: GallerieComponent},
    { path: 'apropos', component: AProposComponent},

    { path: 'collegue', component: CollegueComponent},
    { path: 'recherche_collegue', component: RechercheCollegueParNomComponent},
    { path: 'gallerie/:matricule', component: DetailsCollegueComponent},
    {path: '', pathMatch: 'full', redirectTo: 'accueil'}]}
];
