var CLIENT_ID2 = '365997196332-m4ujgu7nm7pjqh71kkvfka0cilabb0rm.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

var authorizeButton2 = document.getElementById('authorize-button2');
var signoutButton2 = document.getElementById('signout-button2');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID2,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton2.onclick = handleAuthClick;
    signoutButton2.onclick = handleSignoutClick;
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton2.style.display = 'none';
    signoutButton2.style.display = 'block';
    listUpcomingEvents();
  } else {
    authorizeButton2.style.display = 'block';
    signoutButton2.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event2) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event2) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message2) {
  var pre2 = document.getElementById('content2');
  var textContent2 = document.createTextNode(message2 + '\n');
  pre2.appendChild(textContent2);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function listUpcomingEvents() {
  gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  }).then(function(response2) {
    var events2 = response2.result.items;
    appendPre('Upcoming events:');

    if (events2.length > 0) {
      for (i = 0; i < events2.length; i++) {
        var event2 = events2[i];
        var when2 = event2.start.dateTime;
        if (!when2) {
          when2 = event.start.date;
        }
        appendPre(event2.summary + ' (' + when2 + ')')
      }
    } else {
      appendPre('No upcoming events found.');
    }
  });
}
