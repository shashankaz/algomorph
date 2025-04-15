# Algomorph - DSA Algorithm Explorer

### A comprehensive platform for learning and implementing Data Structures and Algorithms (DSA) in multiple languages.

## Overview

**Algomorph** is a web-based platform that allows users to explore popular data structures and algorithms in multiple programming languages. Built with Next.js and powered by Appwrite, it offers an interactive environment to learn, test, and visualize algorithms. The platform includes implementations in C, C++, Java, Python, and JavaScript, making it an invaluable resource for both students and professionals.

## Features

1. **Multi-Language Support**
   - Implementations available in C (v24.0.0), C++ (v20.0.0), Java (v15.0.2), Python (v3.10.0), and JavaScript (v18.15.0)
   
2. **Interactive Code Playground**
   - Monaco Editor integration for in-browser code editing
   - Real-time code execution and output display
   
3. **User Profile & Settings**
   - Customizable user profiles
   - Password and phone number management
   - Profile picture upload functionality

4. **RESTful API**
   - No authentication required for easy access
   - Endpoints for retrieving and executing algorithms
   - Support for multiple programming languages

5. **Discussion System**
   - User interactions with upvote/downvote functionality
   - Collaborative learning environment

## Coming Soon Features
- Algorithm visualizer
- Live code editor enhancements
- Additional programming languages
- Time and space complexity analysis
- Algorithm saving functionality

## Prerequisites
- Node.js (>= 18.x)
- Appwrite account (for authentication and file storage)
- PostgreSQL database
- NeonDB account (for discussion system)

## Installation

1. **Clone the Repository**
```bash
git clone https://github.com/shashankaz/algomorph.git
cd algomorph
```

2. **Install Dependencies**
```bash
npm install
```

3. **Environment Setup**
Create `.env.local` with:
```env
NEXT_PUBLIC_PROJECT_ID=your_project_id
NEXT_PUBLIC_DATABASE_ID=your_database_id
NEXT_PUBLIC_COLLECTION_ID=your_collection_id
DATABASE_URL=your_neondb_database_url
```

4. **Database Setup**
```bash
npx prisma generate
npx prisma migrate dev
```

5. **Start Development Server**
```bash
npm run dev
```

## Docker Support

Build and run using Docker:
```bash
docker build -t algomorph .
docker run -p 3000:3000 algomorph
```

## API Documentation

### Base URL
```
http://localhost:3000/api/algorithms
```

### Key Endpoints

1. **Get Algorithm Implementation**
```http
GET /api/algorithms/{algorithm}/{language}
```

2. **Execute Algorithm (Coming Soon)**
```http
POST /api/algorithms/{algorithm}/{language}/run
```

For detailed API documentation, visit `/api-docs` in the application.

## Technologies

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Editor**: Monaco Editor
- **Backend**: Appwrite
- **Database**: PostgreSQL, Prisma ORM, NeonDB
- **Styling**: Tailwind CSS with custom configurations
- **Icons**: React Icons

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request
