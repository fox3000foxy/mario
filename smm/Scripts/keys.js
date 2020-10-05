/*
 * *****
 * WRITTEN BY FLORIAN RAPPL, 2012.
 * florian-rappl.de
 * mail@florian-rappl.de
 * *****
 */

var keys = {
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
			case 57392://CTRL on MAC
			case 17://CTRL
			case 'J'.charCodeAt()://J
				keys.accelerate = status;
				break;
			case 40://DOWN ARROW
			case 'S'.charCodeAt()://
				keys.down = status;
				break;
			case 39://RIGHT ARROW
			case 'D'.charCodeAt()://
				keys.right = status;
				break;
			case 37://LEFT ARROW
			case 'A'.charCodeAt()://
				keys.left = status;			
				break;
			case 38://UP ARROW
			case 'W'.charCodeAt()://
				keys.up = status;
				break;
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
