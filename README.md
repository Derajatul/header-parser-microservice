# Request Header Parser Microservice

Sebuah microservice yang mem-parsing HTTP request headers dan mengembalikan informasi klien termasuk alamat IP, preferensi bahasa, dan software user agent.

Project ini merupakan salah satu tantangan dari freeCodeCamp Backend Development and APIs.

## 🚀 Fitur

- Parsing alamat IP klien (mendukung forwarded headers)
- Ekstrak bahasa yang diterima dari request headers
- Identifikasi informasi user agent/browser
- REST API sederhana dengan respons JSON
- CORS diaktifkan untuk cross-origin requests

## 📁 Struktur Proyek

```text
boilerplate-project-headerparser/
├── controllers/
│   ├── home.controller.js     # Controller halaman utama
│   └── whoami.controller.js   # Controller endpoint API
├── public/
│   └── style.css             # File CSS
├── routes/
│   └── route.js              # Rute aplikasi
├── views/
│   └── index.html            # Template halaman utama
├── index.js                  # File aplikasi utama
├── package.json              # Dependencies dan scripts
└── sample.env                # Template environment variables
```

## 🛠️ Instalasi & Setup

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd boilerplate-project-headerparser
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**

   ```bash
   cp sample.env .env
   # Edit file .env dengan konfigurasi Anda
   ```

4. **Jalankan aplikasi**

   ```bash
   npm start
   ```

Aplikasi akan berjalan di `http://localhost:3000` secara default.

## 📚 Dokumentasi API

### Endpoints

#### GET `/`

Mengembalikan halaman utama dengan dokumentasi API dan contoh penggunaan.

#### GET `/api/whoami`

Mengembalikan informasi klien yang di-parsing dari request headers.

**Format Respons:**

```json
{
  "ipaddress": "::ffff:127.0.0.1",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}
```

**Field Respons:**

- `ipaddress`: Alamat IP klien (mendukung X-Forwarded-For header)
- `language`: Bahasa yang diterima dari Accept-Language header
- `software`: String user agent yang mengidentifikasi software klien

### Contoh Penggunaan

```bash
# Menggunakan curl
curl https://your-app-domain.com/api/whoami

# Menggunakan fetch di JavaScript
fetch('/api/whoami')
  .then(response => response.json())
  .then(data => console.log(data));
```

## 🧪 Testing

Test endpoint API:

```bash
# Test halaman utama
curl http://localhost:3000/

# Test endpoint whoami
curl http://localhost:3000/api/whoami

# Test dengan custom headers
curl -H "Accept-Language: es-ES,es;q=0.9" \
     -H "User-Agent: Custom-Agent/1.0" \
     http://localhost:3000/api/whoami
```

## 🔧 Teknologi Yang Digunakan

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Manajemen environment variable

## 📝 Environment Variables

Buat file `.env` berdasarkan `sample.env`:

```env
PORT=3000
```

## 🚀 Deployment

### Heroku

```bash
# Buat Heroku app
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

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/fitur-keren`)
3. Commit perubahan Anda (`git commit -m 'Tambah fitur keren'`)
4. Push ke branch (`git push origin feature/fitur-keren`)
5. Buka Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🎓 Tujuan Edukasi

Proyek ini adalah bagian dari kurikulum freeCodeCamp untuk mempelajari APIs dan Microservices. Pelajari lebih lanjut di [freeCodeCamp](https://www.freecodecamp.org/learn/apis-and-microservices/).

## 📞 Dukungan

Jika Anda memiliki pertanyaan atau membutuhkan bantuan, silakan:

- Buka issue di GitHub
- Kunjungi [freeCodeCamp Forum](https://forum.freecodecamp.org/)
- Periksa [Dokumentasi freeCodeCamp](https://www.freecodecamp.org/learn/)

---

Dibuat dengan ❤️ oleh Komunitas [freeCodeCamp](https://www.freecodecamp.org)
