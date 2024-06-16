import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  email: string ='';
  password: string ='';
  

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    try {
      await this.authService.signUpWithEmail(this.email, this.password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro ao registrar:', error);
    }
  }
  ngOnInit() {
  }

}
