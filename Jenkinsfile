// Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Push Image') {
            steps {
                echo 'Docker image pushing..'
                docker.withRegistry('http://18.184.154.149:5000') {
                    def customImage = docker.build("mongo-boilerplate:${BUILD_NUMBER}",".")
                    customImage.push()
                }
            }
        }
        stage('Deploy') {
            parallel {
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