# News Service - CodersCamp JavaScript project
[![Build Status](https://travis-ci.com/jkopyto/JSQuizTesting.svg?token=Nn68j54XqraFb3FFDZ9p&branch=master)](https://travis-ci.com/jkopyto/JSQuizTesting)
[![Coverage Status](https://coveralls.io/repos/github/jkopyto/CodersCamp2020.Project.JavaScript.NewsService/badge.svg?branch=master)](https://coveralls.io/github/jkopyto/CodersCamp2020.Project.JavaScript.NewsService?branch=master)

## Table of contents
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Setup](#setup)
    - [Project testing](#project-testing)
  - [Content](#content)
    - [Homepage](#homepage)
    - [Sportpage](#sportpage)
    - [Foodpage](#foodpage)
    - [Weatherpage](#weatherpage)
    - [Newspage](#newspage)
    - [Cryptocurrencypage](#cryptocurrencypage)
  - [Sources](#sources)
  - [Other](#other)

## General info
[News Service](https://jkopyto.github.io/CodersCamp2020.Project.JavaScript.NewsService/) is a service where You can find all newest, most relevant information You need.
Additionally, if You are willing to code with our team and enhance our project You are welcome to collaborate! ;)

## Technologies
For this project we used Vanilla JS, pure CSS and html. Each created subpage uses external REST API to get all needed data. Also, each contributor tried to cover as much code with test as it was possible.

## Setup
___________________________________________________________________
To run this project, install it locally:
* Use `git clone` to clone this repository
* install all needed dependencies using `npm install`
* build your project and start a server by `npm run start:dev`
The app will be hosted on localhost:8765/index.html

### Project testing
* Use `npm run test` command
* tests with coverage raport - `npm run test:cov`
_______________________________________________________________________________
## Content
Project was devided into 6 main parts:
* homepage (developed by [Rafał](https://github.com/R4fau)),
* sportpage (developed by [Jakub](https://github.com/kubaszajna)),
* foodpage (developed by [Kacper](https://github.com/kacperzolkiewski)),
* weatherpage (developed by [Karolina](https://github.com/kgutka)),
* newspage (developed by [Adam](https://github.com/adam-kostuch)),
* cryptocurrencypage (developed by [Mateusz](https://github.com/mateuszCabala95)).
  
Each page was supervisored by [Jakub](https://github.com/jkopyto).

### Homepage
* Uses [carousel](https://glidejs.com/) which serves as menu
* Displays calendar with current date
* Footer and nav-menu for other pages


### Sportpage
* Fetching data with scores from last round
* Future games with team logs

### Foodpage
* Searching recipes by nutrients
* Displaying random recipe
* Displaying most popular recipes
* Displaying details of ingredient
* Similar functionalities are available with vines

### Weatherpage
* Current weather in selected city
* Weather alerts
* Weather forecast for next 8 days
* Air pollution info

### Newspage
* News from world: 5 news per day
* News from Poland
* Health events

### Cryptocurrencypage
* Displaying list of all cryptocurrencies (with pagination)
* After click on selected coin - display a modal window with data based on coin
* In the modal window: exchange coins to USD

## Sources
Design inspiration [Behance](https://www.behance.net/gallery/83771953/Flooks) 

## Other
Webpage was developed using "Mobile first" principle which means that we start the product design from the mobile end which has more restrictions, then expand its features to create a tablet or desktop version.
No bootstrap was used during development.

## Contributors
* [Jakub](https://github.com/jkopyto)
* [Rafał](https://github.com/R4fau)
* [Jakub](https://github.com/kubaszajna)
* [Kacper](https://github.com/kacperzolkiewski)
* [Karolina](https://github.com/kgutka)
* [Adam](https://github.com/adam-kostuch)
* [Mateusz](https://github.com/mateuszCabala95)
