class Snow{
	constructor(x,y,r){
	var options ={
		resistution:0.3,
		friction:5,
		density:1,
	}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var snowpos=this.body.position;		
			push()
			translate(snowpos.x, snowpos.y);
			strokeWeight(4);
			stroke("white");
			fill("lightblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(CENTER);
            ellipse(0,0,this.r,this.r)
			pop()
	}

}