pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/JoshiKrish07/MERN_CRUD', branch: 'master'
            }
        }
        stage('Build Client') {
            steps {
                dir('client') {
                    sh 'npm install' // Adjust commands as needed
                    sh 'npm run build'
                }
            }
        }
        stage('Test Client') {
            steps {
                dir('client') {
                    sh 'npm test'
                }
            }
        }
        stage('Build Server') {
            steps {
                dir('server') {
                    sh 'npm install' // Adjust commands as needed
                }
            }
        }
        stage('Test Server') {
            steps {
                dir('server') {
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                dir('client') {
                    sh 'npm run deploy'
                }
                dir('server') {
                    sh 'npm run deploy'
                }
            }
        }
    }
}
