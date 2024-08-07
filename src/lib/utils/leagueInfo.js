/*   STEP 1   */
export const leagueID = "1049456153182724096"; // your league ID
export const leagueName = "Cool League Name"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the Cool Leage Name (CLN) Fantasy Football League. The CLN began in 2021 when 12 ball knowers decided to start a Fantasy league that was about one thing: Football. It was started to bring friends and family closer together through the love of the game, turning a shared passion into an engaging and competitive community. It was founded on the belief that sports have the power to unite people, offering a platform for camaraderie, friendly rivalry, and memorable moments. Through accountability and immersion, the league not only amplifies each manager's enjoyment of football but also fosters deeper connections and lasting friendships. This league transforms every touchdown and tackle into a celebration of teamwork, strategy, and the sheer joy of playing and competing together. Long Live the League   </p>
  <p>In 2024 the CLN has expanded to 16 teams, creating one of the most competitve Fantasy Football leagues in the country. Each manager brings a top tier knowledge of football to the table, and each week they are demanded to put that knowledge on display.</p>
  
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
    //   Ryan Murphy Magager Page
         "managerID": "469516529285722112",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Ryan Murphy",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
         "location": "North Liberty, Iowa", // (optional)
         "bio": "Lorem ipsum...",
         //"photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Rival", // Can be anything (usually your rival's name)
           //link: 6, // manager array number within this array, or null to link back to all managers page
           //image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 6777, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "When it comes to wide receivers, Stack em' deep and sell em' cheap.", // (optional)
         "tradingScale": 6, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    //   GABE Simpson Manager page
         "managerID": "470433709049245696",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Gabe Simpson",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
         "location": "Colfax, Iowa", // (optional)
         "bio": "Lorem ipsum...",
         "photo": "/managers/Gabe.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2010, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Camden Glenn", // Can be anything (usually your rival's name)
           //link: 6, // manager array number within this array, or null to link back to all managers page
           //image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 100, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Find high floor players who are undervalued. Rarely try and guess the 'breakout' players, and only trade when you're confident", // (optional)
         "tradingScale": 4, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    //   Kyle Martens Manager Page
         "managerID": "606945493414633472",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Kyle Martens",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
         "location": "West Des Moines, Iowa", // (optional)
         "bio": "ddd",
         //"photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Rival", // Can be anything (usually your rival's name)
           //link: 6, // manager array number within this array, or null to link back to all managers page
           //image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 7547, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Try Not to Suck", // (optional)
         "tradingScale": 6.5, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
     {
    //   Cole Borwick Manager Page
         "managerID": "737338251186208768",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Cole Borwick",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
         "location": "Tiffin, Iowa", // (optional)
         "bio": "ddd",
         //"photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2008, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Jordan Gunti", // Can be anything (usually your rival's name)
           //link: , // manager array number within this array, or null to link back to all managers page
           //image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 223, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Embrace the chaos, exploit the unexpected, and thrive in the unpredictable ebb and flow of the fantasy football universe.", // (optional)
         "tradingScale": 4, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

   {
    //   Casey Blaylock Manager Page
         "managerID": "606970146476597248",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Casey Blaylock",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
         "location": "Chicago, Illinois", // (optional)
         "bio": "ddd",
         //"photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Cole Williams", // Can be anything (usually your rival's name)
           //link: , // manager array number within this array, or null to link back to all managers page
           //image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 348, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Draft well and try not to drop or trade away Dolphins RBs who combine for 31 TDs...", // (optional)
         "tradingScale": 7, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
     {
    //   Nolan Osland Manager Page
         "managerID": "730636154742886400",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Nolan Osland",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
         "location": "Iowa City, Iowa", // (optional)
         "bio": "ddd",
         //"photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Austin Klaver", // Can be anything (usually your rival's name)
           //link: , // manager array number within this array, or null to link back to all managers page
           //image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 4510, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Don't make trades with snakes", // (optional)
         "tradingScale": 7, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
   {
    //   Cole Hauser Manager Page
         "managerID": "731219307652059136",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
         "name": "Cole Hauser",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
         "location": "West Branch, Iowa", // (optional)
         "bio": "ddd",
         //"photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
         "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
         "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
         "rival": {
           name: "Austin Klaver", // Can be anything (usually your rival's name)
           //link: , // manager array number within this array, or null to link back to all managers page
           //image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
                  },
         "favoritePlayer": 1466, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
         "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Win", // (optional)
         "tradingScale": 2, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }
  
  
  
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
