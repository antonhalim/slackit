var slackToken;
var team = localStorage.getItem('slack-team')


// $(document).on('click', 'button#OAuth', function() {
//   console.log('OAuth dance initiated');
//   chrome.extension.sendRequest({msg: 'beginOAuth'});
// });

$(document).on('click', 'button#OAuth', function() {
  alert( "CALIING OAUTH on background" );
});
