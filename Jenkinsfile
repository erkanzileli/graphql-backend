// Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any
    environment {
        registry = "https://registry.k8s.kalderasoft.xyz/my-image"
    }

    stages {
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Push Image') {
            agent { label 'jenkins'}
            steps {
                echo 'Docker image pushing..'
                script {
                    docker.withRegistry('http://18.184.154.149:5000') {
                        def customImage = docker.build("my-image:${env.BUILD_NUMBER}")
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