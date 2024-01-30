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
                script {
                    // Corrected Docker build step
                    sh '''
                    docker build -t inhouse-web-image:latest -f- . <<EOF
                    FROM nginx:alpine
                    COPY index.html /usr/share/nginx/html/index.html
                    EOF
                    '''
                }
            }
        }
        stage('Docker run') {
            agent any
            steps {
                // Stop and remove any existing container
                sh 'docker ps -f name=inhousesoft -q | xargs --no-run-if-empty docker container stop'
                sh 'docker container ls -a -f name=inhousesoft -q | xargs -r docker container rm'

                // Remove unused images
                sh 'docker images --no-trunc --all --quiet --filter="dangling=true" | xargs --no-run-if-empty docker rmi'

                // Run the new Docker container
                sh 'docker run -d --network=blooming_network -e VIRTUAL_HOST=www.inhousesoft.co.kr,www.inhousesoft.com --name inhousesoft inhouse-web-image:latest'
            }
        }
    }
}
