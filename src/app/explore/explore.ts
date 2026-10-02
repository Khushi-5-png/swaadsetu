import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.html',
  styleUrl: './explore.css'
})
export class Explore {

  openChatGPT() {
    window.open('https://chatgpt.com/', '_blank');
  }

}