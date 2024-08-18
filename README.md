<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>FitTrack-ejrd48
</h1>
<h4 align="center">Web application for fitness enthusiasts to track their progress, set goals, and share their achievements.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="Framework: Next.js" />
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="Frontend: Javascript, HTML, CSS" />
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend: Node.js" />
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="LLMs: Custom, Gemini, OpenAI" />
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/spectra-ai-codegen/FitTrack-ejrd48?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/spectra-ai-codegen/FitTrack-ejrd48?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/spectra-ai-codegen/FitTrack-ejrd48?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</p>


## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
The repository contains a Minimum Viable Product (MVP) called "FitTrack-ejrd48" that provides a comprehensive solution for fitness enthusiasts to effectively track their fitness goals, monitor their progress, and celebrate their achievements with their social network. This web application will enable users to set personalized fitness goals, record their workouts and progress, and share their achievements with friends and family. The application is built using modern web technologies, including HTML, CSS, JavaScript, and the Next.js framework with a Node.js backend and a PostgreSQL database.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase follows a modular architectural pattern with separate directories for different functionalities, ensuring easier maintenance and scalability.             |
| 📄 | **Documentation**  | The repository includes a README file that provides a detailed overview of the Minimum Viable Product (MVP), its dependencies, and usage instructions.|
| 🔗 | **Dependencies**   | The codebase relies on various external libraries and packages such as React, uuid, esbuild, and eslint, which are essential for building and styling the UI components, and handling external services.|
| 🧩 | **Modularity**     | The modular structure allows for easier maintenance and reusability of the code, with separate directories and files for different functionalities such as background, components, and content.|
| 🧪 | **Testing**        | Implement unit tests using frameworks like Jest or React Testing Library to ensure the reliability and robustness of the codebase.       |
| ⚡️  | **Performance**    | The performance of the system can be optimized based on factors such as the browser and hardware being used. Consider implementing performance optimizations for better efficiency.|
| 🔐 | **Security**       | Enhance security by implementing measures such as input validation, data encryption, and secure communication protocols.|
| 🔀 | **Version Control**| Utilizes Git for version control with GitHub Actions workflow files for automated build and release processes.|
| 🔌 | **Integrations**   | Interacts with browser APIs, external services through HTTP requests, and includes integrations with speech recognition and synthesis APIs.|
| 📶 | **Scalability**    | Design the system to handle increased user load and data volume, utilizing caching strategies and cloud-based solutions for better scalability.           |

## 📂 Structure

```
├── pages
│   ├── api
│   │   └── auth
│   │       └── [...nextauth].js
│   ├── _app.js
│   ├── index.js
│   ├── dashboard
│   │   └── page.js
│   ├── goals
│   │   └── page.js
│   ├── workouts
│   │   └── page.js
│   ├── social
│   │   └── page.js
│   └── profile
│       └── page.js
├── components
│   ├── Header.js
│   ├── Footer.js
│   ├── GoalCard.js
│   ├── WorkoutCard.js
│   ├── ProgressChart.js
│   ├── SocialFeed.js
│   ├── LoginForm.js
│   ├── SignupForm.js
│   ├── UserProfile.js
│   └── UserGoal.js
├── utils
│   ├── helpers.js
│   └── constants.js
├── prisma
│   └── schema.prisma
├── .env
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── tsconfig.json

```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- Docker

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/spectra-ai-codegen/FitTrack-ejrd48.git`
2. Navigate to the Minimum Viable Product (MVP) directory:
   - `cd FitTrack-ejrd48`
3. Install dependencies:
   - `npm install`

## 🏗️ Usage
### 🏃‍♂️ Running the Minimum Viable Product (MVP)
1. Start the development server:
   - `npm start`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
Adjust configuration settings in `config.js` or `.env`.

### 📚 Examples
- 📝 **Example 1**: Setting a fitness goal
  - Go to the `goals` page.
  - Select the type of goal (e.g., weight loss, muscle gain).
  - Enter the target value and deadline.
  - Click "Set Goal" to save the goal.
- 📝 **Example 2**: Logging a workout
  - Go to the `workouts` page.
  - Select the type of exercise (e.g., cardio, strength training).
  - Enter the duration and intensity level.
  - Click "Log Workout" to save the workout.
- 📝 **Example 3**: Sharing a fitness achievement
  - Go to the `social` page.
  - Click "Create Post" to share a workout achievement, progress update, or motivational message.
  - Select your audience (e.g., friends, followers).
  - Click "Post" to share the update.

## 🌐 Hosting
### 🚀 Deployment Instructions

#### Heroku
1. Install the Heroku CLI:
   - `npm install -g heroku`
2. Login to Heroku:
   - `heroku login`
3. Create a new Heroku app:
   - `heroku create`
4. Deploy the code:
   - `git push heroku main`


### 🔑 Environment Variables
- `DB_HOST`: Database host
- `DB_USER`: Database user
- `DB_PASS`: Database password

## 📜 API Documentation
### 🔍 Endpoints
- **GET /api/users**: Retrieves a list of users.
- **POST /api/users**: Creates a new user.
- **GET /api/goals**: Retrieves a list of goals for a user.
- **POST /api/goals**: Creates a new goal for a user.
- **GET /api/workouts**: Retrieves a list of workouts for a user.
- **POST /api/workouts**: Logs a new workout for a user.

### 🔒 Authentication
Use JWT tokens for authentication.

### 📝 Examples
- `curl -X GET http://localhost:3000/api/users`

## 📜 License
This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/).

## 👥 Authors
- **Author Name** - [Spectra.codes](https://spectra.codes)
- **Creator Name** - [DRIX10](https://github.com/Drix10)

<p align="center">
  <h1 align="center">🌐 Spectra.Codes</h1>
</p>
<p align="center">
  <em>Why only generate Code? When you can generate the whole Repository!</em>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Developer-Drix10-red" alt="Developer: Drix10" />
  <img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="Website: Spectra.codes" />
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="Backed by: Google, Microsoft & Amazon for Startups" />
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="Finalist: Backdrop Build v4" />
</p>