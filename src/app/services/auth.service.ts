import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router:Router) {}

  // Método para criar um novo usuário
  async signUpWithEmail(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return userCredential;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
    }
  }

  // Método para fazer login de um usuário
  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['home']);
    } catch (error) {
      this.router.navigate(['cadastro']);
    }
  }

  async googleLogin() {
    try {
      await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.router.navigate(['home']);
    } catch (error) {
      this.router.navigate(['login']);
    }
  }

  // Método para sair do usuário
  async signOut() {
    await this.afAuth.signOut();
  }
}
