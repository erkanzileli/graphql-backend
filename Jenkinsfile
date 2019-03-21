// Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            parallel {
                stages {
                    stage('Deploy Preview') {
                        steps {
                            echo 'Deploying Preview'
                        }
                    }
                    stage('Deploy Production') {
                        steps {
                            echo 'Deploying Production'
                        }                        
                    }
                }
            }
        }
    }
}