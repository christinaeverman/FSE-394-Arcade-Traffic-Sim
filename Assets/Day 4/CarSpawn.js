#pragma strict

var step : int = 0;
var car : GameObject;

function Start ()
{
	
}

function Update ()
{
	step++;

	if (step == 210)
	{
		step = 0;
		var tempCar = Instantiate(car, transform.position, transform.rotation);
	}
}
