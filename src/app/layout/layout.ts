import { Component } from "@angular/core";
import { RouterOutlet, RouterLinkWithHref } from "@angular/router";
import { AuthService } from "../auth/auth-service";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

    constructor(private authServ: AuthService) { }

  logout() {
    this.authServ.logOut();
  }
}