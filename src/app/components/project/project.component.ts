import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent  implements OnInit  {

  projects: any[] = [];
  searchBy = 'all';
  searchValue = '';
  formProject = { id: null, titre: '', date: '', humMax: 0, tempMax: 0, pompeSt: 0 };

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  // Récupérer les projets
  fetchProjects(): void {
    if (this.searchBy === 'titre') {
      this.projectService.getProjectsByTitre(this.searchValue).subscribe((res) => {
        this.projects = res.data.getByTitre;
      });
    } else if (this.searchBy === 'date') {
      this.projectService.getProjectsByDate(this.searchValue).subscribe((res) => {
        this.projects = res.data.getByDate;
      });
    } else {
      this.projectService.getProjects().subscribe((res) => {
        this.projects = res.data.listerProjets;
      });
    }
  }

  // Créer un projet
  createProject(): void {
    this.projectService.createProject(this.formProject).subscribe(() => {
      alert('Projet créé avec succès!');
      this.fetchProjects();
    });
  }

  // Mettre à jour un projet
  updateProject(): void {
    this.projectService.updateProject(this.formProject).subscribe(() => {
      alert('Projet mis à jour avec succès!');
      this.fetchProjects();
    });
  }

  // Supprimer un projet
  deleteProject(id: number): void {
    this.projectService.deleteProject(id).subscribe(() => {
      alert('Projet supprimé avec succès!');
      this.fetchProjects();
    });
  }

  // Remplir le formulaire pour mise à jour
  editProject(project: any): void {
    this.formProject = { ...project };
  }

}
