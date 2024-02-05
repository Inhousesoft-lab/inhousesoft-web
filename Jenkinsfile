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
        stage('Docker build') {
            agent any
            steps {
                sh 'docker build -t inhouse-web-image:latest .'
            }
        }
        stage('Docker run') {
            agent any
            steps {
                sh 'docker ps -f name=inhousesoft -q | xargs --no-run-if-empty docker container stop'
                sh 'docker container ls -a -f name=inhousesoft -q | xargs -r docker container rm'
                sh 'docker images --no-trunc --all --quiet --filter="dangling=true" | xargs --no-run-if-empty docker rmi'
                sh 'docker run -d --network=blooming_network -e -p 5020:5020 --name inhousesoft inhouse-web-image:latest'
            }
        }
    }
}
