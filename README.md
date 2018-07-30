# Gaia Code Challenge

### Getting Started

##### Checkout this repo, install dependencies, then start:

```
> git clone https://github.com/melissjs/GCC.git
> cd GCC
> npm install
> npm start
```

### Transparency

##### I used a boilerplate project for webpack configuration:


* https://github.com/StephenGrider/ReduxSimpleStarter
* this boilerplate also has an existing configuration for testing


### Known Issues

##### There are a few issues I moved on from for the sake of expediency:


* video tile uniformity in the grid breaks down on loading more (maybe flexbox related?)
* concatenating episode/series titles caused flexbox related issues so I allowed them to wrap
* select option dropdown menu not styled (used the default select element when I should have used a div?)
* BEM naming conventions could definitely be better


### Hindsight:


* as specified, video tiles are both a child and parent component but I understand now that the child should have been a vote component; breaking out the thumbnail and details into separate components had no advantage
* I would have liked to integrate immutableJS, I see where I could have used it in my caching data structure but I already had a steep learning curve and left this for last 
* I should have allotted more time to implementing tests, I got really stuck with moxios 



