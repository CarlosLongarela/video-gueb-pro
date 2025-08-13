// Animación avanzada de círculos flotantes y rebote
const colorPalette = [
	'#00ffe7', '#ff6bff', '#ffe05c', '#5cff7a', '#ff5c5c', '#5c5cff', '#00e0ff', '#ffb700', '#00ff8c', '#ff00c8'
];

const circles = [
	{ el: document.querySelector( '.circle1' ) },
	{ el: document.querySelector( '.circle2' ) },
	{ el: document.querySelector( '.circle3' ) },
	{ el: document.querySelector( '.circle4' ) }
];

// Asignar tamaño y color aleatorio a cada círculo
circles.forEach( ( c, i ) => {
	c.size                = Math.floor( Math.random() * 160 ) + 60; // entre 60 y 220 px
	c.color               = colorPalette[ Math.floor( Math.random() * colorPalette.length ) ];
	c.el.style.width      = c.size + 'px';
	c.el.style.height     = c.size + 'px';
	c.el.style.background = c.color;
	c.el.style.boxShadow  = `0 0 60px 10px ${c.color}`;
} );

circles.forEach( ( c, i ) => {
	c.x  = Math.random() * ( window.innerWidth - c.size );
	c.y  = Math.random() * ( window.innerHeight - c.size );
	c.vx = ( Math.random() * 2.5 + 1.5 ) * ( Math.random() > 0.5 ? 1 : -1 );
	c.vy = ( Math.random() * 2.5 + 1.5 ) * ( Math.random() > 0.5 ? 1 : -1 );

	c.el.style.background = c.color;
	c.el.style.boxShadow  = `0 0 60px 10px ${c.color}`;
} );

function animateCircles() {
	circles.forEach( ( c ) => {
		c.x += c.vx;
		c.y += c.vy;

		// Rebote en bordes
		if ( c.x <= 0 || c.x >= window.innerWidth - c.size ) {
			c.vx *= -1;
			c.x = Math.max( 0, Math.min( c.x, window.innerWidth - c.size ) );
		}

		if ( c.y <= 0 || c.y >= window.innerHeight - c.size ) {
			c.vy *= -1;
			c.y = Math.max( 0, Math.min( c.y, window.innerHeight - c.size ) );
		}

		// Mantener velocidad constante
		c.el.style.left = c.x + 'px';
		c.el.style.top  = c.y + 'px';
	} );
	requestAnimationFrame( animateCircles );
}

animateCircles();

window.addEventListener( 'resize', () => {
	circles.forEach( ( c ) => {
		c.x = Math.max( 0, Math.min( c.x, window.innerWidth - c.size ) );
		c.y = Math.max( 0, Math.min( c.y, window.innerHeight - c.size ) );
	} );
} );
