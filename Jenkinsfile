pipeline {
    agent none
    options { skipDefaultCheckout(true) }
    stages {
        stage('Checkout repository') {
            agent any
            steps {
                checkout scm
            }
        }        
        stage('Build') {
            agent {
                docker {
                    image 'node:16-alpine'
                    args '-u root:root'
                }
            }
            options { skipDefaultCheckout(false) }
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Docker build') {
            agent any
            steps {
                sh 'docker build -t blooming-web-image:latest .'
            }
        }
        stage('Docker run') {
            agent any
            steps {
                sh 'docker ps -f name=blooming-web-container -q | xargs --no-run-if-empty docker container stop'
                sh 'docker container ls -a -fname=blooming-web-container -q | xargs -r docker container rm'
                sh 'docker images --no-trunc --all --quiet --filter="dangling=true" | xargs --no-run-if-empty docker rmi'
                sh 'docker run -d --name blooming-web-container -p 80:80 blooming-web-image:latest'
                
            }
        }
    }
}
