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