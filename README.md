<pre>
This is a concept project for a lunch & mearn presentation. I am going to use a Photon Particle with a magnetic reed switch to monitor if bathroom doors are open or closed. At work, one can lose valuable development time looking for a place to water the lawn or lay some logs. So, with this web interface an employee can see what bathrooms are open and go there.

Release 0:
Dashboard with one monitor on one bathroom.
There will be either a green door or an 'open' status when the door is open
conversely, there will be a red door or a 'closed' status when the door is closed

Release 1:
Data collection -> door closed/open
analytics screen -> average time spent in bathroom, total time, 

Release 2:
???? Mobile app ????
???? Notify when something needs to be cleaned ????
Eventually want UserIds, BuildingId, and generic Door for eventual home automation
maybe include time spent in rooms?

===================================================================================================

SETTING UP THE APP FOR THE FIRST TIME
1. Install Node.js
	a. After you install Node.js, check the version you have installed
	b. This can be done by typing the following command in your Command Prompt: "node -v"
		- This should be v0.12.0 or greater
2. After pulling down the code cd into the directory <src code home>/BMApp/
3. Once in this directory, install the node-modules needed for this app
	a. This can be done by typing the following command in your Command Prompt: "npm install"
4. Set the default application to be debugged to 'BMApp'
	a. This can be done by typing the following command in your Command Prompt: "set DEBUG=BMApp"
5. Run the applicaiton
	a. This can be done by typing the following command in your Command Prompt: "npm start"
6. Go to http://localhost:3000/ to view the app running
	a You should not see the loading gif change unless the Photon is plugged in and running
</pre>
