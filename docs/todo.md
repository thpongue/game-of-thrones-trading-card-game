[x] Iteration 1: Front-end template (basic setup, dependencies etc)  
	[x] base Angular 2 project with angular cli  
  
[-] Iteration 2: Back-end template  
	[x] base node project - use express  
	- look at how this works with the built-in angular cli commands  
		- eg can / should I override ng serve to call: ng build && node server.js?  
		- eg how about pushing to github pages  
		- etc  
  
[] Iteration 3: e2e MVP   
	[] Unstyled card selection page  
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
