
## Installation

To start the backend service you first have to make sure you are in the backend folder 'backend'. To install all the node modules you have to run `npm install` (this can take a while). When all the modules are installed we can simply start the service by running `npm start`, the backend API will now run on `localhost:5000` (or if you have specified a different port in the .env file you have to navigate to that port). To make sure the backend is working optimally you have to run the Resolume REST API and fill in the ip address of your computer in the .env file of the backend service under the key IP.


Starting the frontend is very simillar to the backend, first make sure you are in the right directory 'frontend', then to install the node modules run `npm install` and to start the service run `npm start`.
You can now access the frontend on `localhost:3000`.
  

## (Docker) Configuration

To make sure the backend can communicate with the Resolume Webserver and the REST API we will have to fill in the IP address of the host computer in the 'docker-compose.yml' file. The backend is running a bridge network allowing the service to communicate with the host computer (this implies that the Resolume API has to run on the host computer).

```yml
environment:
- PORT=5000
- DB_HOST=db
- DB_USER=root
- DB_PASSWORD=root	
- DB_SCHEME=resolume
- IP=<IP ADDRESS>
```
In the docker-compose.yml file you will find the above structure in the 'backend' service. Here you have to replace <IP ADDRESS> with the IP address of the host computer.

When you are done configuring the 'docker-compose.yml' file all you have to do is run `docker-compose up` in the directory of the 'docker-compose.yml' file and wait untill all the services are set up.

## Testing
To test the application run `npm test`, in the backend directory (`cd backend`).

## Usage
To use the application you have to go to `localhost:3000`, here you will find the frontend. You can interact with the different clips and the changes will be reflected in your own Resolume arena.

## Dependencies
To run this entire application you will have to install [Docker](https://docs.docker.com/engine/install/) and [Resolume Arena]([https://docs.docker.com/engine/install/](https://www.resolume.com/download/)).

## License
This project is released under the [MIT License](./LICENSE).

## Contact
Yassin Bendella
<br>
If you have any questions, please feel free to send me a messsage on discord, linkedin or just through my email.
<br>
YassinDella#7708
<br>
[My Linkedin](https://www.linkedin.com/in/yass%C3%AEn-bendella-8263721a2/)
<br>
[yassin.bendella@student.ehb.be](yassin.bendella@student.ehb.be)
