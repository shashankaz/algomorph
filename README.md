# Algomorph - DSA Algorithm Explorer

### A comprehensive platform for learning and implementing Data Structures and Algorithms (DSA) in multiple languages.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [API Documentation](#api-documentation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

**Algomorph** is a web-based platform that allows users to explore popular data structures and algorithms in multiple programming languages such as Python, Java, C++, JavaScript, and more. The platform offers interactive tools to visualize, run, and modify algorithms directly in the browser. It also includes an extensive list of algorithms with implementations and examples, making it a great resource for both students and professionals looking to improve their understanding of algorithms.

## Features

1. **Multi-Language Support**
   - Users can run and test data structures and algorithms in multiple languages like C, C++, Java, Python and JavaScript.
   
2. **Interactive Code Playground**
   - Users can write, run, and modify algorithms directly in the browser using the Monaco Editor. The editor supports real-time output in multiple languages.

3. **Algorithm Visualizations**
   - Users can visualize how algorithms work with step-by-step graphical representations, which helps in understanding the internal mechanics of complex algorithms.

4. **API for Developers**
   - The platform provides a powerful API, allowing developers to programmatically access the algorithms and their implementations. The API supports multiple languages and formats.

5. **Community Contributions**
   - Developers can contribute their own algorithms, improve existing implementations, and collaborate with a thriving community of programmers.

## Installation

### Prerequisites
- **Node.js** (>= 18.x)
- **Appwrite** for backend services like authentication, storage, and execution of algorithms.

### Clone the Repository
```bash
git clone https://github.com/shashankaz/algomorph.git
cd algomorph
```

### Install Dependencies
```bash
npm install
```

### Set up Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_PROJECT_ID=your_project_id
NEXT_PUBLIC_DATABASE_ID=your_database_id
NEXT_PUBLIC_COLLECTION_ID=your_collection_id
```

### Run the Application
```bash
npm run dev
```

The application will be running on `http://localhost:3000`.

## Technologies Used

- **Next.js**: Full-stack framework for building React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Monaco Editor**: Code editor component for browser-based editing.
- **Appwrite**: Backend-as-a-service used for authentication and file storage.
- **React**: JavaScript library for building user interfaces.

## API Documentation

### Overview
The platform provides a REST API that allows developers to programmatically access the algorithms and run them with custom inputs. You can fetch algorithm implementations in various languages and even run algorithms with specific inputs.

### Endpoints

#### 1. Explore Algorithm Implementations

- **Description**: Fetch the source code of a specific algorithm in a given language.
- **Endpoint**: `GET /api/algorithms/{algorithm}/{language}`
- **Request Parameters**:
  - `algorithm`: Name of the algorithm (e.g., "quick-sort", "merge-sort").
  - `language`: Programming language for the implementation (e.g., "java", "python").
- **Example**:
  
  ```bash
  GET /api/algorithms/quick-sort/java
  ```

- **Response**:

  ```json
  {
    "algorithm": "quick-sort",
    "description": "Quick Sort is an efficient, divide-and-conquer algorithm that sorts { /* Description here */ }",
    "language": "java",
    "code": "public class QuickSort { /* QuickSort Java code here */ }"
  }
  ```

- **Status Codes**:
  - `200 OK`: Request succeeded.
  - `404 Not Found`: Algorithm or language not found.

#### 2. Perform Algorithm Execution

- **Description**: Run the selected algorithm with provided input and get the output.
- **Endpoint**: `POST /api/algorithms/{algorithm}/{language}/run`
- **Request Body** (JSON):

  ```json
  {
    "input": [3, 6, 1, 8]
  }
  ```

- **Example**:

  ```bash
  POST /api/algorithms/quick-sort/java/run
  ```

- **Response**:

  ```json
  {
    "algorithm": "quick-sort",
    "language": "java",
    "input": [3, 6, 1, 8],
    "output": [1, 3, 6, 8],
    "executionTime": "25ms"
  }
  ```

- **Status Codes**:
  - `200 OK`: Execution succeeded.
  - `400 Bad Request`: Invalid input or parameters.

## Usage

1. **Explore Algorithms**:
   - Visit the **Algorithm Explorer** to browse through a wide variety of algorithms. Select the desired algorithm and language to see the source code.
   
2. **Interactive Code Editor**:
   - Use the **Interactive Playground** to modify and run algorithms. You can write custom inputs, execute code, and see the results in real-time.

3. **Visualize Algorithms**:
   - For supported algorithms, use the **Visualization** feature to view step-by-step graphical representations of how the algorithm works.

4. **API Integration**:
   - For developers, use the provided API to fetch algorithm implementations or run them programmatically. Check the **API Documentation** for more details.

## Contributing

We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Create a Pull Request describing your changes.
