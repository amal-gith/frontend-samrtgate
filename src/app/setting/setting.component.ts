
/*
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  // Variables pour stocker les niveaux sélectionnés
  selectedSecurityLevel: string = 'none';
  selectedPriorityLevel: string = 'none';

  constructor(private http: HttpClient) {}

  // Fonction pour soumettre les paramètres sélectionnés
  submitSettings() {
    // Préparer les données pour l'envoi
    const settings = {
      securityLevel: this.selectedSecurityLevel,
      priorityLevel: this.selectedPriorityLevel
    };

    // Envoyer les données au backend
    this.http.post('http://votre-backend-api-url/settings', settings)
      .subscribe(
        (response) => {
          console.log('Réponse du backend:', response);
          alert('Les paramètres ont été envoyés avec succès.');
        },
        (error) => {
          console.error('Erreur lors de l\'envoi des paramètres:', error);
          alert('Erreur lors de l\'envoi des paramètres.');
        }
      );
  }
}
*/
import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  selectedSecurityLevel = 'none';
  selectedPriorityLevel = 'none';
  dataToEncrypt = '';
  encryptedData = '';
  decryptedData = '';

  constructor(private settingsService: SettingsService) {}

  encrypt() {
    this.settingsService.encryptData(this.dataToEncrypt, this.selectedSecurityLevel)
      .subscribe(response => {
        this.encryptedData = response.encryptedData;
        console.log('Data encrypted:', this.encryptedData);
      });
  }

  decrypt() {
    this.settingsService.decryptData(this.encryptedData, this.selectedSecurityLevel)
      .subscribe(response => {
        this.decryptedData = response.decryptedData;
        console.log('Data decrypted:', this.decryptedData);
      });
  }

  submitSettings() {
    console.log('Security Level:', this.selectedSecurityLevel);
    console.log('Priority Level:', this.selectedPriorityLevel);
    // Vous pouvez ajouter une logique supplémentaire ici si nécessaire
  }
}

