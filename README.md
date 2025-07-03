# Request Header Parser Microservice

A microservice that parses HTTP request headers and returns client information including IP address, language preference, and user agent software.

## 🚀 Features

- Parse client IP address (supports forwarded headers)
- Extract accepted language from request headers
- Identify user agent/browser information
- Simple REST API with JSON response
- CORS enabled for cross-origin requests

## 📁 Project Structure

```text
boilerplate-project-headerparser/
├── controllers/
│   ├── home.controller.js     # Home page controller
│   └── whoami.controller.js   # API endpoint controller
├── public/
│   └── style.css             # Stylesheet
├── routes/
│   └── route.js              # Application routes
├── views/
│   └── index.html            # Home page template
├── index.js                  # Main application file
├── package.json              # Dependencies and scripts
└── sample.env                # Environment variables template
```

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd boilerplate-project-headerparser
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp sample.env .env
   # Edit .env file with your configuration
   ```

4. **Start the application**

   ```bash
   npm start
   ```

The application will run on `http://localhost:3000` by default.

## 📚 API Documentation

### Endpoints

#### GET `/`

Returns the home page with API documentation and usage examples.

#### GET `/api/whoami`

Returns client information parsed from request headers.

**Response Format:**

```json
{
  "ipaddress": "::ffff:127.0.0.1",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}
```

**Response Fields:**

- `ipaddress`: Client's IP address (supports X-Forwarded-For header)
- `language`: Accepted languages from Accept-Language header
- `software`: User agent string identifying the client software

### Example Usage

```bash
# Using curl
curl https://your-app-domain.com/api/whoami

# Using fetch in JavaScript
fetch('/api/whoami')
  .then(response => response.json())
  .then(data => console.log(data));
```

## 🧪 Testing

Test the API endpoints:

```bash
# Test home page
curl http://localhost:3000/

# Test whoami endpoint
curl http://localhost:3000/api/whoami

# Test with custom headers
curl -H "Accept-Language: es-ES,es;q=0.9" \
     -H "User-Agent: Custom-Agent/1.0" \
     http://localhost:3000/api/whoami
```

## 🔧 Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📝 Environment Variables

Create a `.env` file based on `sample.env`:

```env
PORT=3000
```

## 🚀 Deployment

### Heroku

```bash
# Create Heroku app
heroku create your-app-name

# Deploy
git push heroku main
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎓 Educational Purpose

This project is part of the freeCodeCamp curriculum for learning APIs and Microservices. Learn more at [freeCodeCamp](https://www.freecodecamp.org/learn/apis-and-microservices/).

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Visit [freeCodeCamp Forum](https://forum.freecodecamp.org/)
- Check the [freeCodeCamp Documentation](https://www.freecodecamp.org/learn/)

---

Made with ❤️ by [freeCodeCamp](https://www.freecodecamp.org) Community
