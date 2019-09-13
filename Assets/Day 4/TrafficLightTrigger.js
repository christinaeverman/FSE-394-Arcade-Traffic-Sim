#pragma strict

var step : int = 0;
var redMat : Material;
var greenMat : Material;
var stop : boolean = false;
var velocity : Vector3;

function Start () {
	
}

function Update ()
{
	step++;

	if (step == 150)
	{
		GetComponent.<Renderer>().material = redMat;
		stop = true;
	}
	else if (step == 300)
	{
		GetComponent.<Renderer>().material = greenMat;
		stop = false;
		step = 0;
	}
}

function OnTriggerEnter(other : Collider)
{
	if (other.tag == "Car" && stop)
	{
		other.gameObject.GetComponent.<CarMove>().isMoving = false;
	}
}

function OnTriggerStay(other : Collider)
{
	if (other.tag == "Car" && !stop)
	{
		other.gameObject.GetComponent.<CarMove>().isMoving = true;
	}
}

function OnTriggerExit(other : Collider)
{
	if (other.tag == "Car")
	{
		other.gameObject.GetComponent.<CarMove>().isMoving = true;
	}
}