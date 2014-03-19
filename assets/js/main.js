// Cudos to Yash Bhardwaj for his pen over at http://codepen.io/yashbhardwaj/pen/EBFxA which is the base to what I've done for the landing.

$(document).ready(function(){
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     ||  
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

    var canvas = document.getElementById("landing-canvas");

    var startAnimation = function(){
        var ctx = canvas.getContext("2d"),
            W = window.innerWidth,
            H = window.innerHeight;

        canvas.width = W;
        canvas.height = H;

        var particleDensity = Math.round((W+H)/15);

        var particleCount = particleDensity,
            particles = [],
            minDist = particleCount*0.9,
            dist;

        function paintCanvas() {
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fillRect(0,0,W,H);
        }

        function Particle() {
            this.x = Math.random() * W;
            this.y = Math.random() * H;
            
            this.vx = -1 + Math.random() * 1.7;
            this.vy = -1 + Math.random() * 1.7;

            this.radius = 5;
            
            this.draw = function() {
                ctx.fillStyle = "rgba(100,100,100,1)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                
                ctx.fill();
            }
        }

        for(var i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function draw() {
            
            paintCanvas();
            
            for (var i = 0; i < particles.length; i++) {
                p = particles[i];
                p.draw();
            }
            
            update();
        }

        function update() {
            
            for (var i = 0; i < particles.length; i++) {
                p = particles[i];
                
                p.x += p.vx * 0.8;
                p.y += p.vy * 0.8;
                    
                if(p.x + p.radius > W) 
                    p.x = p.radius;
                
                else if(p.x - p.radius < 0) {
                    p.x = W - p.radius;
                }
                
                if(p.y + p.radius > H) 
                    p.y = p.radius;
                
                else if(p.y - p.radius < 0) {
                    p.y = H - p.radius;
                }
                
                for(var j = i + 1; j < particles.length; j++) {
                    p2 = particles[j];
                    distance(p, p2);
                }
            
            }
        }

        function distance(p1, p2) {
            var dist,
                dx = p1.x - p2.x;
                dy = p1.y - p2.y;
            
            dist = Math.sqrt(dx*dx + dy*dy);
                    
            if(dist <= minDist) {
                
                ctx.beginPath();
                ctx.strokeStyle = "rgba(100,100,100,"+ (1.2-dist/minDist) +")";
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
                ctx.closePath();
                
                var ax = dx/5000000,
                    ay = dy/5000000;
                
                p1.vx -= ax;
                p1.vy -= ay;
                
                p2.vx += ax;
                p2.vy += ay;
            }
        }

        function animloop() {
            draw();
            requestAnimFrame(animloop);
        }

        animloop();
    };

    var clearCanvas = function(){
        $(canvas).remove();
        $('.main-cont').prepend(canvas);
    }

    $(window).on('resize', function(){
        clearCanvas();
        startAnimation();
    });

    startAnimation(); 

});