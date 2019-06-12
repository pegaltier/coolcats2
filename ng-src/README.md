# coolcats2 (angular front-end)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Holochain dev hApp

### Prerequisite
- dna-src (the holochain codebase)
- ng-src (the angular codebase)

### Test mode
cd dna-src
hc test

`hc test` will build a `dna-src.dna.json` and then launch the test file `index.js` inside the `test` folder.

### User mode

1. Run DNA
cd dna-src
hc package
hc run

`hc package` will build a `dna-src.dna.json` and `hc run` launch the holochain server.

2. Run NG UI
cd ng-src
ng serve
`ng serve` will build the angular app and launch the node server.

OR 

2. Run RUST UI
cd ui-src


### Holochain update

1. Update dna test
cd dna-src/test
rmdir /s/q node_modules

2. Update Holochain 
download cli + conductor
unzip cli + conductor

3. Run the app
run hc test or hc package
rust will rebuild everything


### Ngrx/data helper

override / create custom entity data service that querying holochain dna
https://next.ngrx.io/guide/data/entity-dataservice#the-defaultdataservice
https://github.com/johnpapa/angular-ngrx-data/blob/master/docs/entity-dataservice.md
https://github.com/johnpapa/angular-ngrx-data/blob/master/lib/src/dataservices/entity-data.service.ts
https://github.com/johnpapa/angular-ngrx-data/blob/master/docs/extension-points.md

### Ngrx/data errors

TypeError: entities.reduce is not a function
1. return object but it should be an array or conversely


### Todo

- needed dna changes:

1. add 'post' need to return the id/address
2. 