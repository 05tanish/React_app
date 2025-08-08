

# Basic React Apps with Docker, Docker Compose & CI/CD (Jenkins Integration)

This repository contains a collection of small React projects designed to demonstrate fundamental concepts of React development, Docker containerization, and Continuous Integration/Continuous Deployment (CI/CD) practices using Jenkins. The repository includes multiple utility apps built with React, a Dockerized environment for deployment, and Jenkins pipelines to automate the CI/CD process.

## Projects Overview

1. **Currency Converter**
   A utility app that converts currency between various countries using real-time exchange rate data.

2. **Password Generator**
   A secure password generator that offers customizable options like length and complexity (including special characters, numbers, etc.).

3. **Background Changer**
   A simple app that allows users to change the background image of a webpage with predefined options.

4. **E-Commerce Front Page**
   A basic, static front-end layout for an e-commerce website, showcasing product listings, a shopping cart, and other essential features.

5. **React Basics**
   A collection of fundamental React components, hooks, and patterns to help streamline development across the above projects.

---

## Key Technologies & Tools

* **React**: A JavaScript library for building user interfaces, particularly single-page applications (SPAs).
* **Docker**: A platform to develop, ship, and run applications inside containers. Docker enables consistent environments for both development and production.
* **Docker Compose**: A tool to define and run multi-container Docker applications. It simplifies the management of multi-container setups.
* **Jenkins**: An open-source automation server that facilitates continuous integration and continuous delivery (CI/CD) through automated testing and deployment pipelines.
* **Node.js & npm**: Used for managing dependencies and running the React app in development mode.

---

## Getting Started

To get up and running with the project locally, please follow the steps below:

### Prerequisites

Ensure you have the following installed on your system:

* **Docker**: You can download it from [here](https://www.docker.com/get-started).
* **Docker Compose**: For managing multi-container applications. You can install it following the [official guide](https://docs.docker.com/compose/install/).
* **Jenkins**: For CI/CD automation. Installation instructions can be found [here](https://www.jenkins.io/doc/book/installing/).

---

### Cloning the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/repository-name.git
cd repository-name
```

---

### Installing Project Dependencies

Navigate to each project folder and install the required dependencies:

```bash
cd project-folder
npm install
```

---

### Running the Application Locally

To run any of the React apps locally, follow these steps:

1. **Start the app** using `npm`:

```bash
npm start
```

2. The app should now be running at [http://localhost:3000](http://localhost:3000).

---

## Dockerized Setup

This repository is fully Dockerized, meaning you can easily build and run the React apps in isolated containers using Docker.

### Docker Setup

1. **Build the Docker image for a specific project**:

```bash
docker build -t react-app .
```

2. **Run the Docker container**:

```bash
docker run -p 3000:3000 react-app
```

3. The app will now be accessible at [http://localhost:3000](http://localhost:3000).

---

## Docker Compose Setup

To simplify multi-container management, Docker Compose is used. It allows you to run the entire set of apps in containers using a single command.

### Using Docker Compose

1. **Build and start all services defined in `docker-compose.yml`**:

```bash
docker-compose up --build
```

This will:

* Build and run the containers as defined in the `docker-compose.yml` file.
* Expose each app on its respective port, typically [http://localhost:3000](http://localhost:3000).

2. **Stop the containers**:

```bash
docker-compose down
```

---

## Jenkins CI/CD Pipeline

This repository includes a Jenkinsfile to automate the Continuous Integration and Continuous Deployment (CI/CD) process using Jenkins.

### Setting Up Jenkins Pipeline

1. **Install Jenkins**: Follow the installation guide [here](https://www.jenkins.io/doc/book/installing/).

2. **Configure Jenkins with GitHub**:

   * Set up a Jenkins pipeline job.
   * Integrate your GitHub repository with Jenkins.

3. **Jenkinsfile**: This file defines the pipeline stages for building, testing, and deploying your Dockerized React apps.

Example Jenkinsfile for building and deploying the app:

```groovy
pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-username/repository-name.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'docker-compose run app npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
```

### Steps in the Pipeline

1. **Build**: Builds the Docker images using `docker-compose`.
2. **Test**: Runs the unit tests for the React apps within the Docker containers.
3. **Deploy**: Deploys the application by starting the containers in detached mode.

Once your Jenkins setup is done, it will automatically trigger the pipeline whenever changes are pushed to the GitHub repository.

---

## Developer Instructions

1. **Adding New Projects**: To add new React projects, simply create a new directory in the root of the repo, create the necessary files (`index.js`, `App.js`, etc.), and ensure a valid `package.json` is included.

2. **Running the App Locally**: Use `npm start` to launch the app during development. Ensure that the app runs on `localhost:3000`.

3. **Adding Tests**: Add unit tests with **Jest** or another testing framework for any new features or components.

---

## DevOps & CI/CD Instructions for Beginners

1. **Docker & Docker Compose**:

   * Understand how Docker containers are isolated environments where your apps run consistently across different machines.
   * Docker Compose simplifies managing multi-container applications like this one, where multiple services (React app, backend, etc.) may need to run together.

2. **Jenkins Pipeline**:

   * The Jenkinsfile defines a series of steps for Jenkins to follow in the CI/CD pipeline.
   * The `Build` stage creates Docker images, `Test` runs the tests inside the containers, and `Deploy` launches the app in production.
   * After configuring Jenkins with your GitHub repository, Jenkins will trigger this pipeline on each push to the repository.

3. **Modifying the Jenkinsfile**: If you need to change build or deployment steps, modify the `Jenkinsfile` accordingly.

---

## How to Contribute

Feel free to fork the repository and submit pull requests with enhancements or additional projects. If you plan to add new features or fix bugs, please open an issue first for discussion.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
