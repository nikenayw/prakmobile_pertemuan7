import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public showIdentityCard: boolean = false;
  private activatedRoute = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.showIdentityCard = false; // Reset identity card on page load
  }

  toggleIdentityCard() {
    this.showIdentityCard = !this.showIdentityCard; // Toggle card visibility
  }
}
