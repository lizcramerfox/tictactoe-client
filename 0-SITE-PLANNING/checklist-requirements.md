# Requirements

In order to get a satisfactory score, by the time you present your project, you
**must** meet the following requirements:

### Deployment

Be deployed online, where the rest of the world can access it.

1.  [ ] Deploy on your public Github page, not Github Enterprise.
1.  [ ] Present a working browser game, built by you, hosted and deployed on GitHub Pages.

### Version Control

Demonstrate using version control by:

1.  [x] Sharing your work through a git repository hosted on Github.
1.  [x] Making frequent, cohesive commits dating back to the **first day**
of the project week.

### Documentation

Produce documentation in the form of a **README**, which must:

1.  [ ] Pin your repository on GitHub as a Popular Repository
1.  [ ] Complete the repository `Description` field and `Website` field with a meaningful sentence description of the application and link to the live URL
![github image](https://git.generalassemb.ly/storage/user/3667/files/beae41ae-aaaa-11e7-8867-63958d376a0b)
1.  [ ] List technologies used
1.  [ ] Document your planning and tell a story about your development process and problem-solving strategy.
1.  [ ] List unsolved problems which would be fixed in future iterations.
1.  [ ] Link to wireframes and user stories.

### Technical Specifications

1.  [x] Use a custom game engine written by you.
1.  [x] Be a single-page application, no browser refresh.
1.  [x] Render a game board in the browser.
1.  [x] Switch turns between X and O (or whichever markers you select).  Tip:  Assume player X is the first player to start the game.
1.  [x] Visually display which side won if a player gets three in a row or show a draw if neither wins.
1.  [ ] Support playing multiple games, one at a time.
1.  [x] Use jQuery for DOM manipulation and event handling.
1.  [x] Use AJAX for interacting with a provided API.

### API Specifications

1.  [x] Create new games on the server. (CREATE)
1.  [ ] Update a game by storing new moves. (UPDATE)
1.  [ ] Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
1.  [x] Give feedback to the user after each action.

### Auth Specifications

1.  [x] Signup with email, password, and password confirmation.
1.  [x] Login with email and password.
1.  [x] Logout when logged in.
1.  [x] Change password with current and new password.
1.  [x] Signup and Signin must only be available to not signed in users.
1.  [x] Logout and Change password must only be available to signed in users.
1.  [x] Give feedback to the user after each action's success or failure.
1.  [x] All forms must clear after submit success or failure

### DO NOT!!

Your app **must not**:
1.  [ ] Delete your repository at any time or start over.
1.  [ ] Rely on refreshing the page for any functionality.
1.  [ ] Have any user-facing bugs.
    -  [ ] Display non-functional buttons, nor buttons that do not successfully complete a task.
    -  [ ] Show actions at inappropriate times (example: sign out button when not signed in).
    -  [ ] Forms not clearing at appropriate times (example: sign up form not clearing after success).
1.  [ ] Allow the same game to be played after a player has won or tied.
1.  [ ] Allow players to move in the same square more than once.
1.  [ ] Change players when an invalid move is made.
1.  [ ] Use alerts for anything.
1.  [ ] Display errors or warnings in the console.
1.  [ ] Display debugging messages in the console.
