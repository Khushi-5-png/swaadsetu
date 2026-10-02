import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-chef',
  imports: [],
  templateUrl: './ai-chef.html',
  styleUrl: './ai-chef.css'
})
export class AiChef {

  openChatGPT() {
    window.open('https://chatgpt.com/', '_blank');
  }

}