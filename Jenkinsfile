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
                stash includes: 'Dockerfile', name: 'dockerfile'
                echo 'Docker image pushing..'
                script {
                    unstash 'dockerfile'
                    docker.withRegistry('http://18.184.154.149:5000') {
                        def customImage = docker.build("mongo-nodejs-boilerplate:${env.BUILD_NUMBER}")
                        /* Push the container to the custom Registry */
                        customImage.push()
                    }
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