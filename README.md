# liri-app

This is a Node.js command line interface (CLI) app that allows users to search the APIs of SeatGeek, Spotify, and Open Movie Database (omdb) with the help of the packages of node-spotify-api and axios. Secret keys are stored outside of the source code with the help of the dotenv package. The package moment helped with formatting dates. This app was created to satisfy the requirements of Unit-09-nodejs of the Georgia Institute of Technology software development professional program in the Fall of 2019.

## Getting Started

In order for this application to run on your local computer, you must have Node.js installed as well as the required node modules. 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node.js and moment, axios, node-spotify-api, and dotenv packages are required to run this application. This application also requires API keys for Spotify, omdb, and SeatGeek.

```
Spotify API key
```
   * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

   * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

   * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

   * These keys can be stored in your .env and accessed by your keys.js file. 

```
SeatGeek API key
```
* The SeatGeek API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

* Step One: Visit <https://seatgeek.com/account/develop>

* Step Two: Either login to your existing SeatGeek account or create a new one (a free account is fine) and log in.

* Step Three: Once logged in, navigate to <https://seatgeek.com/account/develop> to register a new application to be used with the SeatGeek API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

* Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the SeatGeek API.

* These keys can be stored in your .env and accessed by your keys.js file. 

```
Open Movie Database API Key
```
* Procure an omdb API key as well. 

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

>install Node.js from <https://nodejs.org/en/>

> install npm packages

```shell
$ npm install
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Authors

* **Adam Day** - *Initial work* - [Adam Day](https://github.com/dayadam)

## Acknowledgments

* Thanks to all the open source contributors that helped with the building blocks of this project. 

