var config = require('./config/config.js');
var SlackBot = require('slackbots');

// create aMeetingBot 
var MeetingBot = new SlackBot({
	token: config.token,
	name: config.name
});

MeetingBot.on('start', function() {
	// more information about additional params https://api.slack.com/methods/chat.postMessage 
	var params = {
		icon_emoji: ':cat:'
	};

	// define channel, whereMeetingBot exist. You can adjust it there https://my.slack.com/services  
	MeetingBot.postMessageToChannel('general', 'meow!', params);
	
	// define existing username instead of 'user_name'
//	MeetingBot.postMessageToUser('user_name', 'meow!', params); 
	
	// If you add a 'slackbot' property,  
	// you will post to another user's slackbot channel instead of a direct message 
//	MeetingBot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' }); 
	
	// define private group instead of 'private_group', whereMeetingBot exist 
//	MeetingBot.postMessageToGroup('private_group', 'meow!', params); 
});

MeetingBot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm 
    console.log(data);
});
