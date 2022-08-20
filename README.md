## Angular Video Game Database

## Project Description 
This application lists detailed information on the latest video games available.
The data set is retrieved through RapidAPI website.

Home Page:
It implements a search bar and sort by name, released, added, created, updated, rating.
Each game widget in the home page contains game image, game name and platforms in which they are available.

Details Page:
Upon clicking a particular game widget, the view redirects to the details page.
The details page displays release information, genre and rating provided by Metacritic website.
It also includes About, Screenshots and Trailers section only when data for these sections are available.

## How to use 
This project was generated with [Angular CLI] version 14.1.3.

1. Set base URL under environment.ts :
           BASE_URL: 'https://rawg-video-games-database.p.rapidapi.com'

2. Download project into your local system. 

3. Run it using Angular CLI using command: ng serve

4. Navigate to `http://localhost:4200/`.

## Credits

1. Youtube Tutorial by freeCodeCamp.org : https://www.youtube.com/watch?v=LiOzTQAz13Q
2. Open API by RapidAPI: https://rapidapi.com/accujazz/api/rawg-video-games-database/

# GameDb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
