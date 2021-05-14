## System Designer systems

System Designer is entirely based on **systems** that you edit with System Designer. You can update all its components, models or behaviors to follow your needs. To do so:

* open a version of [System Designer](https://designfirst.io/systemdesigner/),
* import the system you want,
* edit the system,
* export it,
* save it in the same place and
* run `npm run build`.

### Architecture

* `classes`: systems of System Designer
* `core`: core system of each pages. Entry point is *system-designer.json* system
* `platforms`: specific system for each platform
* `types`: types used in System Designer 
