# Inhousesoft Web

This repository hosts the static HTML site for **Inhousesoft**. The page uses plain HTML and CSS without any build tools.

## Project structure
- `index.html` – main page
- `assets/` – stylesheets, fonts and images
- `public/` – icons and manifest used by browsers
- `Dockerfile` – builds a small nginx image to serve the site
- `Jenkinsfile` – pipeline that builds and runs the Docker image

## Running locally
Simply open `index.html` in your browser to view the page.

## Docker workflow
Build the nginx image and run the container as done in the Jenkins pipeline:

```bash
docker build -t inhouse-web-image:latest .
# Stop and remove a previous container if it exists
docker ps -f name=inhousesoft -q | xargs --no-run-if-empty docker container stop
docker container ls -a -f name=inhousesoft -q | xargs -r docker container rm
# Optional: clean dangling images
docker images --no-trunc --all --quiet --filter="dangling=true" | xargs --no-run-if-empty docker rmi
# Start the new container
docker run -d --network=blooming_network --name inhousesoft inhouse-web-image:latest
```

The container serves the site on port `80`. Map the port or attach it to your Docker network as needed.

