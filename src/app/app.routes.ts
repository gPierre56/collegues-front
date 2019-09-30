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
    {path: '', pathMatch: 'full', redirectTo: 'authentification'},
    {path: 'authentification', component: AuthentificationComponentComponent},
    {path: 'apropos', component: AProposComponent},



            {path: 'accueil',canActivate: [ConnexionGuardService], component: AccueilComponent},
            {path: 'gallerie', canActivate: [ConnexionGuardService],component: GallerieComponent},


            {path: 'collegue', canActivate: [ConnexionGuardService], component: CollegueComponent},
            {path: 'recherche_collegue',canActivate: [ConnexionGuardService], component: RechercheCollegueParNomComponent},
            {path: 'gallerie/:matricule', canActivate: [ConnexionGuardService],component: DetailsCollegueComponent}


];
