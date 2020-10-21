/*
 * *****
 * WRITTEN BY FLORIAN RAPPL, 2012.
 * florian-rappl.de
 * mail@florian-rappl.de
 * *****
 */
 


var cam = 0
setInterval("if(cam==-1){cam=counterplayer-1}if(cam==counterplayer){cam=0}",100)
var keys = {
	bind : function() {
		$(document).on('keydown', function(event) {	
			return keys.handler(event, true,1,0);
			return keysluigi.handler(event, true,1,0);
		});
		$(document).on('keyup', function(event) {	
			return keys.handler(event, false,1,0);
			return keysluigi.handler(event, false,1,0);
		});
	},
	reset : function() {
		keys.left = false;
		keys.right = false;
		keys.accelerate = false;
		keys.up = false;
		keys.down = false;
		keysluigi.left = false;
		keysluigi.right = false;
		keysluigi.accelerate = false;
		keysluigi.up = false;
		keysluigi.down = false;
	},
	unbind : function() {
		$(document).off('keydown');
		$(document).off('keyup');
	},
	handler : function(event, status, withkeypad,elsebutton) {
	if(withkeypad){
        switch(event.keyCode) {
			case 57392://CTRL on MAC
			case 17://CTRL
				keys.accelerate = status;
				break;
			case 40://DOWN ARROW
				keys.down = status;
				break;
			case 39://RIGHT ARROW
				keys.right = status;
				break;
			case 37://LEFT ARROW
				keys.left = status;			
				break;
			case 38://UP ARROW
				keys.up = status;
				break;
			case 'A'.charCodeAt()://F
				keysluigi.accelerate = status;
				break;
			case 'S'.charCodeAt()://
				keysluigi.down = status;
				break;
			case 'D'.charCodeAt()://
				keysluigi.right = status;
				break;
			case 'Q'.charCodeAt()://
				keysluigi.left = status;			
				break;
			case 'Z'.charCodeAt()://
				keysluigi.up = status;
				break;
			case 'N'.charCodeAt()://F
				keyspeach.accelerate = status;
				break;
			case 'K'.charCodeAt()://
				keyspeach.down = status;
				break;
			case 'L'.charCodeAt()://
				keyspeach.right = status;
				break;
			case 'J'.charCodeAt()://
				keyspeach.left = status;			
				break;
			case 'I'.charCodeAt()://
				keyspeach.up = status;
				break;
			case 'Y'.charCodeAt()://CAMERA SWICTH
				if (cam > 2)
				{
				setTimeout('cam = 0',200)
				break;
				}
				else
				{
				setTimeout('cam += 0.5',200)
				break;
				}
			case 'T'.charCodeAt()://CAMERA SWICTH
				if (cam < 0 )
				{
				setTimeout('cam = 2',200)
				break;
				}
				else
				{
				setTimeout('cam += -0.5',200)
				break;
				}
			default:
				return true;
		}
    }
    else{
				switch(elsebutton) {
                    case "fireball":
				keys.accelerate = status;
				break;
                    case 'down':
				keys.down = status;
				break;
                    case 'right':
				keys.right = status;
				break;
                    case 'left':
				keys.left = status;			
				break;
                    case 'up':
				keys.up = status;
				break;
			default:
				return true;
		}
    }
		event.preventDefault();
		return false;
	},
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
};

var keysluigi = {
	bind : function() {
		$(document).on('keydown', function(event) {	
			return keys.handler(event, true,1,0);
		});
		$(document).on('keyup', function(event) {	
			return keys.handler(event, false,1,0);
		});
	},
	reset : function() {
		keys.left = false;
		keys.right = false;
		keys.accelerate = false;
		keys.up = false;
		keys.down = false;
	},
	unbind : function() {
		$(document).off('keydown');
		$(document).off('keyup');
	},
	handler : function(event, status, withkeypad,elsebutton) {
	if(withkeypad){
        switch(event.keyCode) {
			case 'J'.charCodeAt()://J
				keys.accelerate = status;
				break;
			case 'S'.charCodeAt()://
				keys.down = status;
				break;
			case 'D'.charCodeAt()://
				keys.right = status;
				break;
			case 'Q'.charCodeAt()://
				keys.left = status;			
				break;
			case 'Z'.charCodeAt()://
				keys.up = status;
				break;
			default:
				return true;
		}
    }
		event.preventDefault();
		return false;
	},
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
};

var keyspeach = {
	bind : function() {
		$(document).on('keydown', function(event) {	
			return keys.handler(event, true,1,0);
		});
		$(document).on('keyup', function(event) {	
			return keys.handler(event, false,1,0);
		});
	},
	reset : function() {
		keys.left = false;
		keys.right = false;
		keys.accelerate = false;
		keys.up = false;
		keys.down = false;
	},
	unbind : function() {
		$(document).off('keydown');
		$(document).off('keyup');
	},
	handler : function(event, status, withkeypad,elsebutton) {
	if(withkeypad){
        switch(event.keyCode) {
			case 'B'.charCodeAt()://J
				keys.accelerate = status;
				break;
			case 'K'.charCodeAt()://
				keys.down = status;
				break;
			case 'L'.charCodeAt()://
				keys.right = status;
				break;
			case 'J'.charCodeAt()://
				keys.left = status;			
				break;
			case 'I'.charCodeAt()://
				keys.up = status;
				break;
			default:
				return true;
		}
    }
		event.preventDefault();
		return false;
	},
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
};
