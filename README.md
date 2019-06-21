# tags-extension
Chrome extension to allow users to create tags on a page for other users to see. 

# Installing the Chrome Extension
...

# Running the Tags server
## Build the docker image
With Docker installed, run `docker build --tag=tags-server ./server`

## Run the container
Run the container via `docker run -p 4000:80 tags-server`