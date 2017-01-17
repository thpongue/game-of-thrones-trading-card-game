[x] Iteration 1: Front-end template (basic setup, dependencies etc)  
	[x] base Angular 2 project with angular cli  
  
[x] Iteration 2: Back-end template  
	[x] base node project - use express  
  
[-] Iteration 3: e2e MVP   
	[-] Unstyled card selection page  
		- write failing e2e test in protractor  
	[] Unstyled card details page   
		- write failing e2e test in protractor  
  
[] Unsorted  
	[] Responsive  
	[] Card customisation  
	[] Tear up card  
	[] Support for CRUD operations  
	[] Simple animated transitions between views  
	[] Enable navigation using the browser back/forward buttons  
	[] Push to Github pages  
	- running ng build doesn't check the npm dependencies - my README.md says to do npm install but there may be a more cli-friendly approach
	- look at integrating our server with the built-in angular cli commands  
		- see http://tattoocoder.com/angular2-giving-your-cli-server/ - this guy copies the node server into dist
		- eg can / should I override ng serve to call: ng build && node server.js?  
		- eg how about pushing to github pages  
		- etc  
	- swap chrome for phantomjs for unit tests
