
# ✦ Sundar — Personal Portfolio

<p align="center">
  <b>A Modern, Animated Developer Portfolio</b>
  <br />
  Showcasing my skills, experience, projects, and journey as a software developer.
</p>

<p align="center">
  <a href="YOUR_LIVE_WEBSITE_URL">🌐 Live Portfolio</a>
</p>

---

## 🚀 About

Welcome to my personal portfolio!

This portfolio is designed to showcase my technical skills, work experience, projects, and achievements through a modern, interactive, and visually engaging experience.

Built with **React and Vite**, it features a dark futuristic interface, smooth GSAP animations, responsive layouts, and a functional contact form.

## ✨ Features

- 🎬 **Animated Hero Section** — Dynamic title animation transitioning from "SUNDAR" to "PORTFOLIO", with animated visual elements.
- 🌌 **Futuristic Design** — Dark interface with animated background visuals and modern styling.
- 🧭 **Responsive Navigation** — Smooth navigation across sections with a responsive mobile menu.
- 👨‍💻 **About Me** — Introduction, background, and developer profile.
- 💼 **Work Experience** — Highlights of professional experience and internships.
- 🛠️ **Skills** — Overview of technical skills and tools.
- 📂 **Projects** — Showcase of selected projects and development work.
- ✉️ **Contact Form** — Visitors can submit messages through the portfolio.
- 📩 **Email Confirmation** — Automatic confirmation emails using EmailJS.
- ☁️ **Cloud Database** — Contact messages are stored in Firebase Firestore.
- 📱 **Responsive Layout** — Optimized for desktop, tablet, and mobile devices.
- 📄 **Resume Access** — Resume available directly from the navigation bar.

## 🖥️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animations | GSAP |
| Database | Firebase Firestore |
| Email Service | EmailJS |
| Deployment | Vercel |
| Version Control | Git, GitHub |

## 📸 Portfolio Sections

| Section | Description |
|---|---|
| Home | Animated hero section with an interactive visual design |
| About | Personal introduction and developer profile |
| Work Experience | Internship and professional experience |
| Skills | Technical skills, tools, and technologies |
| Projects | Selected development projects |
| Contact | Contact information and message submission |
| Resume | View or access my resume |

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd your-portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal, usually:

   ```text
   http://localhost:5173
   ```

## 🔐 Environment Variables

The project uses environment variables for services such as Firebase and EmailJS.

Create a `.env` file in the root directory and add the required variables.

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

Add your Firebase configuration variables using the exact names expected by your `firebase.js` file.

**Important:**
- Never commit your `.env` file to GitHub.
- Ensure your environment variables are configured in Vercel before deployment.
- Use only public client-side configuration values in frontend code. Never expose private keys or server secrets.

## 📬 Contact Form Workflow

The contact form integrates Firebase Firestore and EmailJS.

1. A visitor fills out the contact form.
2. The message is saved to Firebase Firestore.
3. EmailJS attempts to send a confirmation email to the visitor.
4. The visitor receives a success or warning message based on the submission result.

If email delivery fails, the saved Firestore message is retained.

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The generated production files are stored in the `dist` directory.

## ☁️ Deployment

This portfolio is deployed using **Vercel**.

To deploy your own version:

1. Push your project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables in Vercel.
4. Deploy the project.
5. Redeploy after updating environment variables, if needed.

## 📁 Project Structure

```text
portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── hero_assets/
│   ├── components/
│   ├── services/
│   ├── firebase.js
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── README.md
```

*The structure above is a simplified overview. Your actual folders and files may vary.*

## 👨‍💻 Developer

**Sundar**

Software Developer | B.E. Computer Science and Engineering

- 🌐 Portfolio: [Visit Website](YOUR_LIVE_WEBSITE_URL)
- 💼 LinkedIn: [Your LinkedIn Profile](YOUR_LINKEDIN_URL)
- 🐙 GitHub: [Your GitHub Profile](YOUR_GITHUB_URL)
- 📧 Email: your-email@example.com

## 📄 License

This project is created for personal portfolio purposes. You may explore the code for learning and inspiration.

---

<p align="center">
  Designed and developed with ❤️ by <b>Sundar</b>
</p>
