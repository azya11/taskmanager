# Universal Full-Stack Template

A modern, production-ready full-stack template with React frontend and TypeScript backend.

## 🚀 Features

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript  
- **Hot Reload**: Development with automatic refresh
- **API Integration**: Axios with interceptors
- **Routing**: React Router v6
- **Styling**: Modern CSS with responsive design
- **Type Safety**: TypeScript across the entire stack
- **Security**: CORS, Helmet middleware
- **Error Handling**: Centralized error handling

## 📁 Project Structure

```
├── backend/                 # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── index.ts        # Server entry point
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Express middleware
│   ├── package.json
│   └── tsconfig.json
├── frontend/               # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── main.tsx        # React entry point
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
└── package.json           # Root package.json
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up environment variables:**
   ```bash
   # Backend
   cd backend
   cp .env.example .env
   ```

3. **Start development servers:**
   ```bash
   # From root directory - runs both frontend and backend
   npm run dev
   ```

   Or run them separately:
   ```bash
   # Backend (runs on http://localhost:5000)
   npm run backend:dev
   
   # Frontend (runs on http://localhost:3000)
   npm run frontend:dev
   ```

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend in development mode
- `npm run install:all` - Install dependencies for both frontend and backend
- `npm run frontend:dev` - Start only frontend development server
- `npm run backend:dev` - Start only backend development server
- `npm run frontend:build` - Build frontend for production
- `npm run backend:build` - Build backend for production

### Backend Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run clean` - Remove build directory

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Endpoints

### Base URL: `http://localhost:5000`

- `GET /health` - Health check endpoint
- `GET /api` - API information
- `GET /api/users` - Get sample users
- `POST /api/users` - Create a new user

## 🎨 Frontend Features

- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **React Router**: Client-side routing with navigation
- **API Integration**: Axios setup with request/response interceptors
- **Component Structure**: Organized components and pages
- **TypeScript**: Full type safety throughout the application
- **Modern CSS**: Clean, modern styling with hover effects

## 🔧 Backend Features

- **Express Server**: RESTful API with Express.js
- **TypeScript**: Type-safe backend development
- **Middleware**: CORS, Helmet, and custom error handling
- **Environment Config**: dotenv for environment variables
- **API Structure**: Organized routes and middleware
- **Error Handling**: Centralized error handling middleware

## 🚀 Deployment

### Frontend (Vite)
```bash
cd frontend
npm run build
# Deploy the 'dist' folder to your hosting service
```

### Backend (Node.js)
```bash
cd backend
npm run build
# Deploy the 'dist' folder and package.json to your server
```

## 🔐 Environment Variables

### Backend (.env)
```bash
PORT=5000
NODE_ENV=development
```

## 📦 Dependencies

### Frontend
- React 18 + React DOM
- React Router v6
- Axios for HTTP requests
- Vite for build tooling
- TypeScript + ESLint

### Backend
- Express.js framework
- CORS for cross-origin requests
- Helmet for security headers
- dotenv for environment variables
- TypeScript + ts-node + nodemon

## 🤝 Development Tips

1. **API Proxy**: Frontend development server proxies API calls to backend
2. **Hot Reload**: Both frontend and backend support hot reloading
3. **Type Safety**: Shared types can be defined in a common directory
4. **Error Handling**: Frontend includes loading and error states
5. **Responsive**: Design works on desktop, tablet, and mobile devices

## 📄 License

MIT License - feel free to use this template for your projects!

## 🎯 Next Steps

This template provides a solid foundation. Consider adding:

- Database integration (MongoDB, PostgreSQL, etc.)
- Authentication & authorization
- State management (Redux, Zustand)
- Testing setup (Jest, React Testing Library)
- Docker configuration
- CI/CD pipeline
- API documentation (Swagger)
- Logging system