document.addEventListener('DOMContentLoaded', () => {
    const discordLoginButton = document.getElementById('discord-login');
    
    if (discordLoginButton) {
        discordLoginButton.addEventListener('click', () => {
            // Implement your OAuth logic here
            // This typically involves redirecting to the Discord OAuth URL
            // For now, it just logs a message
            console.log('Discord login clicked');
            alert('Redirecting to Discord login...');
        });
    }
});
