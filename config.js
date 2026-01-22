// Configuration file for Portfolio Website
// This file loads environment variables and provides them to the application
// For production, you can replace these with actual values or use a build process

const config = {
    // Contact Information
    contactEmail: 'srinivasnallamati987@gmail.com',
    whatsappNumber: '7013725286',
    
    // Web3Forms API Configuration
    web3formsAccessKey: 'bda0a8d6-ba6f-45cb-aeac-2192a0608717',
    
    // Social Media Links
    githubUsername: 'srinivas600',
    linkedinUsername: 'srinivas-nallamati',
    
    // Email Configuration
    emailRecipient: 'srinivasnallamati987@gmail.com',
    
    // Helper functions
    getWhatsAppLink: () => `https://wa.me/${config.whatsappNumber}`,
    getEmailLink: (subject = '', body = '') => {
        const params = new URLSearchParams();
        if (subject) params.append('subject', subject);
        if (body) params.append('body', body);
        return `mailto:${config.contactEmail}${params.toString() ? '?' + params.toString() : ''}`;
    },
    getGithubLink: () => `https://github.com/${config.githubUsername}`,
    getLinkedInLink: () => `https://linkedin.com/in/${config.linkedinUsername}`
};

// Export for use in modules (if using ES6 modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}

// Make available globally
window.PortfolioConfig = config;

