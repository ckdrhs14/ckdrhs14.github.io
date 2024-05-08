$(document).ready(function(){
	var polyline = document.querySelector('.drawing_line_polyline');
	var polyPoints = polyline.getAttribute('points');
	var circle = document.querySelector('.drawing_line_circle');
	var circleX = circle.getAttribute('cx');
	var circleY = circle.getAttribute('cy');
	var circleR = circle.getAttribute('r');

	var total = 0;
	var gap = 50;
	var ease = 0.5;
	var debounce_removeLine;
	var debounce_counter = 0;

	var pointer = {
	  x: window.innerWidth / 2,
	  y: window.innerHeight / 2,
	  tx: 0,
	  ty: 0,
	  dist: 0,
	  scale: 1,
	  speed: 2,
	  circRadius: 8,
	  updateCrds: function () {
		if (this.x != 0) {
		  this.dist = Math.abs((this.x - this.tx) + (this.y - this.ty));
		  //this.scale = Math.max(this.scale + ((100 - this.dist * 8) * 0.01 - this.scale) * 0.1, 0.25); // gt 0.25 = 4px
		  this.tx += (this.x - this.tx) / this.speed;
		  this.ty += (this.y - this.ty) / this.speed;
		}
	  }
	};

	var points = [];

	$(window).on('mousemove', function (e) {
	  pointer.x = e.clientX;
	  pointer.y = e.clientY;
	  debounce_counter = 0;
	  drawLine();

	  // debounce
	  clearTimeout(debounce_removeLine);
	  debounce_removeLine = setTimeout(() => {
		//console.log('debounce_removeLine', new Date().getTime());
		debounce_counter = 12;
		drawLine();
	  }, 80);
	})

	$(window).on('mousedown', function (e) {
	  pointer.circRadius = 6;
	  drawLine();
	});

	$(window).on('mouseup', function (e) {
	  pointer.circRadius = 8;
	  drawLine();
	});


	$(document).ready(function(){
	  $("img[class=blend]").hover(function (e) {
		  pointer.circRadius = 50;
		  $(".drawing_line_polyline").hide();
		  $("#drawing_line").css("mix-blend-mode", "difference");
	  }, function(){
		  pointer.circRadius = 6;
		  $(".drawing_line_polyline").show();
		  $("#drawing_line").css("mix-blend-mode", "normal");
	  });
	});

	function drawLine() {
	  pointer.updateCrds();

	  points.push({
		x: pointer.tx,
		y: pointer.ty
	  });
	  while (points.length > total) {
		points.shift();
		if (points.length > gap) {
		  for (var i = 0; i < 5; i++) {
			points.shift();
		  }
		}
	  }
	  var pointsArr = points.map(point => `${point.x},${point.y}`);
	  polyPoints = pointsArr.join(' ');
	  polyline.setAttribute('points', polyPoints);

	  // circle
	  circleX = pointer.x;
	  circleY = pointer.y;
	  circleR = pointer.scale * pointer.circRadius;

	  circle.setAttribute('cx', circleX);
	  circle.setAttribute('cy', circleY);
	  circle.setAttribute('r', circleR);

	  if (debounce_counter > 0) {
		debounce_counter--;
		requestAnimationFrame(drawLine);
	  }
	}
});

// ie 구문오류로 인한 메인 마지막 호출처리
// 캔버스 효과
$(function(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	class Particle {
	  constructor(x, y, radius, dx, dy, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.directionX = dx;
		this.directionY = dy;
		this.color = color;
	  }
	  draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	  }
	  update() {
		if (this.x < 0 || this.x + this.radius > canvas.width) {
		  this.directionX = -this.directionX;
		}
		if (this.y < 0 || this.y + this.radius > canvas.height) {
		  this.directionY = -this.directionY;
		}
		this.x += this.directionX;
		this.y += this.directionY;
		this.draw();
	  }
	}

	function init(count, radius, speed) {
	  var particlesArray = [];
	  const particlesCount = count;
	  const radiusRange = radius;
	  const speedRange = 1;
	  for (let i = 0; i < particlesCount; i++) {
		let radius = Math.random() * (radiusRange - 1) + 1;
		let x = Math.random() * (canvas.width - 2 * radius) + radius;
		let y = Math.random() * (canvas.height - 2 * radius) + radius;
		let dx = Math.random() * 1 * speedRange - speedRange;
		let dy = Math.random() * 1 * speedRange - speedRange;
		particlesArray.push(new Particle(x, y, radius, dx, dy, "#fff"));
		particlesArray[i].draw();
	  }
	  animate(particlesArray);
	}

	function animate(particlesArray) {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  for (let particle of particlesArray) {
		particle.update();
	  }
	  connect(particlesArray);
	  requestAnimationFrame(() => animate(particlesArray));
	}

	function connect(particlesArray) {
	  for (let i = 0; i < particlesArray.length; i++) {
		for (let j = i; j < particlesArray.length; j++) {
		  let distance = Math.sqrt(
			Math.pow(particlesArray[i].x - particlesArray[j].x, 2) +
			  Math.pow(particlesArray[i].y - particlesArray[j].y, 2)
		  );
		  if (distance < 180) {
			ctx.lineWidth = 0.3; // 선 굵기
			ctx.strokeStyle = "#fff";
			ctx.beginPath();
			ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
			ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
			ctx.stroke();
		  }
		}
	  }
	}

	window.addEventListener("resize", () => {
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	});
	init(50, 5, 2);
});