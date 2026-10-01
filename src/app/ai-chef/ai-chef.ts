import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ai-chef',
  imports: [FormsModule],
  templateUrl: './ai-chef.html',
  styleUrl: './ai-chef.css'
})
export class AiChef {

  userMessage = '';

  messages: {
    sender: 'user' | 'ai';
    text: string;
  }[] = [
    {
      sender: 'ai',
      text: 'Hello! 👋 What would you like to cook today?'
    }
  ];

  loading = false;

  constructor(private http: HttpClient) {}

  sendMessage() {

    if (!this.userMessage.trim() || this.loading) {
      return;
    }

    const message = this.userMessage.trim();

    this.messages.push({
      sender: 'user',
      text: message
    });

    this.userMessage = '';
    this.loading = true;

    console.log('Sending message to backend:', message);

    this.http.post(
      'http://localhost:8080/api/ai-chef/chat',
      { message },
      { responseType: 'text' }
    ).subscribe({

      next: (response) => {

        console.log('AI Chef response:', response);

        this.messages.push({
          sender: 'ai',
          text: this.getAiResponse(response)
        });

        this.loading = false;
      },

      error: (error) => {

        console.error('AI Chef error:', error);

        this.messages.push({
          sender: 'ai',
          text: 'AI Chef could not connect to the backend.'
        });

        this.loading = false;
      }

    });
  }

  getAiResponse(response: string): string {

    if (response.includes('credit_balance_exhausted') ||
        response.includes('insufficient_quota')) {

      return 'AI Chef is connected successfully, but the OpenAI API currently has no credits available. The backend connection is working.';
    }

    if (response.includes('invalid_api_key')) {

      return 'AI Chef is connected to the backend, but the OpenAI API key is invalid.';
    }

    if (response.includes('OPENAI ERROR')) {

      return 'AI Chef received an error from the OpenAI API. Please check the backend response.';
    }

    return response;
  }
}