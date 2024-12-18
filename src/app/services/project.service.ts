import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private graphQLUrl = 'http://localhost:5000/graphql';
  constructor(private http: HttpClient) { }

  // Récupérer tous les projets
  getProjects(): Observable<any> {
    const body = {
      query: `
        query {
          listerProjets {
            id
            titre
            date
            humMax
            tempMax
            pompeSt
          }
        }
      `,
    };
    return this.http.post(this.graphQLUrl, body);
  }

  // Récupérer les projets par titre
  getProjectsByTitre(titre: string): Observable<any> {
    const body = {
      query: `
        query {
          getByTitre(titre: "${titre}") {
            id
            titre
            date
            humMax
            tempMax
            pompeSt
          }
        }
      `,
    };
    return this.http.post(this.graphQLUrl, body);
  }

  // Récupérer les projets par date
  getProjectsByDate(date: string): Observable<any> {
    const body = {
      query: `
        query {
          getByDate(date: "${date}") {
            id
            titre
            date
            humMax
            tempMax
            pompeSt
          }
        }
      `,
    };
    return this.http.post(this.graphQLUrl, body);
  }

  // Créer un projet
  createProject(project: any): Observable<any> {
    const body = {
      query: `
        mutation {
          creerProjet(titre: "${project.titre}", date: "${project.date}", humMax: ${project.humMax}, tempMax: ${project.tempMax}, pompeSt: ${project.pompeSt}) {
            message
            projetId
          }
        }
      `,
    };
    return this.http.post(this.graphQLUrl, body);
  }

  // Mettre à jour un projet
  updateProject(project: any): Observable<any> {
    const body = {
      query: `
        mutation {
          updateProjet(id: ${project.id}, titre: "${project.titre}", date: "${project.date}", humMax: ${project.humMax}, tempMax: ${project.tempMax}, pompeSt: ${project.pompeSt})
        }
      `,
    };
    return this.http.post(this.graphQLUrl, body);
  }

  // Supprimer un projet
  deleteProject(id: number): Observable<any> {
    const body = {
      query: `
        mutation {
          deleteProjet(id: ${id})
        }
      `,
    };
    return this.http.post(this.graphQLUrl, body);
  }

}
