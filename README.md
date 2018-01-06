### Module 2 Assignment Lab: REST API with Express

1. The code is split into modules to keep functionality independent of each other. 
All logic is placed into routes directory. **comments.js** and **posts.js** implements comments 
and posts logic respectively. **index.js** combines posts and comments, adds storage to them 
and exports `init` methods. **server.js** code is kept to minimal, it exports and initialises
required middleware and routes.

2. The tests were performed manually. PART 2 section from curl_commands.txt file was used for testing.
 
3. Everything should work as expected. But testing was not very thorough, so there might be bugs. 

