# Environment Configuration

This portfolio website uses a centralized configuration system to manage sensitive information and API keys.

## Files

- **`.env`** - Contains your actual secrets (DO NOT commit to git)
- **`.env.example`** - Template file with placeholder values (safe to commit)
- **`config.js`** - JavaScript configuration file that loads the values
- **`.gitignore`** - Ensures `.env` files are not committed to version control

## Setup Instructions

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file** and fill in your actual values:
   ```env
   CONTACT_EMAIL=your.email@example.com
   WHATSAPP_NUMBER=1234567890
   WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   GITHUB_USERNAME=your_github_username
   LINKEDIN_USERNAME=your_linkedin_username
   EMAIL_RECIPIENT=your.email@example.com
   ```

3. **Update `config.js`** with your values from `.env`:
   - Open `config.js`
   - Replace the hardcoded values with your actual secrets
   - For production, consider using a build process to inject these values

## Current Configuration

The following secrets are currently stored in `config.js`:

- **Contact Email**: srinivasnallamati987@gmail.com
- **WhatsApp Number**: 7013725286
- **Web3Forms Access Key**: bda0a8d6-ba6f-45cb-aeac-2192a0608717
- **GitHub Username**: srinivas600
- **LinkedIn Username**: srinivas-nallamati

## Security Notes

⚠️ **Important:**
- Never commit `.env` files to version control
- The `config.js` file contains actual values - consider adding it to `.gitignore` if you want to keep secrets out of the repository
- For production deployments, use environment variables or a secure configuration management system
- Consider using a build process to inject environment variables at build time

## Usage in HTML

The configuration is loaded via:
```html
<script src="config.js"></script>
```

Then accessed in JavaScript:
```javascript
const email = window.PortfolioConfig.contactEmail;
const whatsappLink = window.PortfolioConfig.getWhatsAppLink();
```

## Getting Web3Forms Access Key

1. Visit https://web3forms.com
2. Enter your email address
3. Get your free access key
4. Add it to your `.env` file and `config.js`

