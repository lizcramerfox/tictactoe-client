# Tic-Tac-Toe
by Liz Fox | *for General Assembly Boston (SEI-09)*

### Description
A game of tic-tac-toe with user login and game tracking features using an existing backend API.

### Technologies Used
- HTML
- JavaScript
- jQuery
- CSS/SASS/Bootstrap

### Planning, Development, and Problem-Solving

When I first began this project, my understanding of JavaScript and jQuery were extremely limited. That said, I did know how to build a website using HTML/CSS, so I approached this problem in a similar way to how I would if I were building a static website.

I began by first whiteboarding some basic [user stories](https://imgur.com/a/qja9qjA) which I used as criteria to sketch a [wireframe](https://imgur.com/a/UGt9Mxk) of site's structure. With this visualization of the working parts and their various relationships, I found the site' functions could be split nicely into three tranches:

**1) Gameplay** --- Includes the tic-tac-toe gameboard grid, all game interface-user interactions (starting a new game, making moves), and game logic (recording only valid moves and checking for a winner)

**2) User Authentication** --- Includes user accounts (create new account, login, logout, change password) and related API interactions (CRUD, user IDs, tokens)

**3) Game Records & Statistics** ---
Includes game history and user stats functions (linking game records to user, updating game records, displaying up-to-date game record data, parsing game record data for display on UI)

I decided to focus on the Tic-Tac-Toe gameplay and logic first, as the other tranches are pointless without having a working game to play. My lack of experience with JavaScript meant I felt lost from the start, so I chose to begin where I did feel comfortable: creating the bare bones HTML structure needed to house the game (a 3x3 grid and a button to "start new game"). I gave it the absolute minimum of styling (i.e. I added black borders), since I didn't even know if I could use all those nested <div>s for any practical purpose. Having run into a dead end not knowing how to turn these static boxes into a response game, I desperately searched for *any* other parts of the project which I did understand and realized I'd need some logic to dictate the rules of my game. "This is *perfect*," I thought, as I happily distracted myself again from my JavaScript woes by writing out the various combinations which make up a winning gameboard. Thankfully, after finishing this particular task, my usual panic about how "that all makes sense logically, but *how the hell* am I supposed to make this all happen through JavaScript!?" was cut off early by the realization that I still had to more logic to work out - after all, I needed to make sure players couldn't make invalid move.

At this point, I was despondent, having "wasted" two whole days trying to teach myself JavaScript without learning a thing. I could never get those two days back, and I desperately needed them since my site was still just a static 3x3 grid with a "start" button. Let's just say pure HTML does not allow for a very engaging experience.

The next day, I shamefully admitted to my teachers and coding friends (special thanks to Dan Fox for all his help) that I had completely and utterly wasted my time and I nothing to show for it. I needed someone else to show me how to do this from the ground up... but when the cavalry finally came in to help, it turned out I had already won most of the battle. All that preparation and planning meant I really did have the entire site mostly made - it was just still in pseudocode! Every time I went looking for new ways to avoid coding (sketching another relationship map, manually writing out the game logic), I was really creating a roadmap for my JavaScript with all the individual component functions already listed out. What's more, when I looked at my work through this new lens, I discovered that I already *did* know how to code the majority of these smaller JavaScript problems on an individual basis. And that, apparently, is a very good way to go about coding - regardless of one's comfort level or experience.



### Unsolved Problems & Goals for Future Iterations
#### Gameplay
*As a player, I'd like to:*

  - change the placement of my current move (game marker) to another valid spot before switching to the next player's turn

  - confirm the placement of my game marker before my move is submitted

#### API User & Game Records
*As a user, I'd like to:*

  - retrieve unfinished games so I can finish playing

  - save the moves I make after loading a previously-unfinished game's data

  - play and record a two-player game against a different user (two user accounts must be able to share an individual game record)

  - play a single-player game against a computer opponant (AI)


#### Style
*As a user, I'd like to:*

  - see on the screen which account I am currently logged in to (only after succesfully signing in), keep that information visible for the duration of my session, and make sure it disappears when I sign out

  - have uniform whitespace (padding) between all text elements and their containers (buttons, form inputs, messages, etc.) so I can more easily read them and know their purpose

  - choose my own game marker to make my experience more personalized
   - **v1:** first player can choose either "X" *or* "O" as their game marker, and second player is automatically assigned the opposite marker
   - **v2:** each player can choose their own marker from a predefined set of characters and/or images
   - **v3:** users can upload their own image to select as a game marker

  - have the login windows (on UI when user is NOT currently logged in)

*As a developer, I'd like to:*
- rework my HTML & CSS files to remove remaining usage of the Bootstrap plug-in (it is currently only used to form the gameboard grid) so any future styling changes can be made uniformly on a global level

- normalize my HTML/CSS classes and IDs to remove redundancies and maintain site-wide uniformity in subsequent style updates

- update my CSS to conform to the more readable Sass nesting style so other developers can more easily understand the site's styling relationships and update the site's overall appearance


### Links to User Stories and Wireframe
##### User Stories
https://imgur.com/a/qja9qjA
##### Wireframe
https://imgur.com/a/UGt9Mxk
