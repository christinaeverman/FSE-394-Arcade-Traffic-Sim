#pragma strict

var stationObj : GameObject;
var speed : float;
var step : int;
var weight : float;
var targetArray : Transform[];
var targetA : Transform;
var targetB : Transform;
var targetC : Transform;
var targetD : Transform;
var place : int;

function Start ()
{
	speed = 0.005;
	step = 0;
	weight = 0;
	targetArray = new Transform[4];
	targetArray[0] = targetA;
	targetArray[1] = targetB;
	targetArray[2] = targetC;
	targetArray[3] = targetD;
	place = 0;
	transform.position = targetArray[1].position * weight + targetArray[0].position * (1 - weight);
}

function Update ()
{
	weight += speed;

	if (place == 4)
		transform.position = targetArray[0].position * weight + targetArray[place - 1].position * (1 - weight);
	else
		transform.position = targetArray[place].position * weight + targetArray[place - 1].position * (1 - weight);
}

function OnTriggerEnter (object : Collider)
{
	if (object.gameObject.tag.Equals("Target"))
	{
		weight = 0;
		if (place == 4) {
			place = 0;
		}
		place++;
		if (place == 4)
		{
			var direction = Vector3.Normalize(targetArray[0].position - targetArray[place - 1].position);
		}
		else
		{
			direction = Vector3.Normalize(targetArray[place].position - targetArray[place - 1].position);
		}
		var rot = Quaternion.LookRotation(direction);
		transform.rotation = rot;

	}
}

function OnTriggerStay (object : Collider)
{
	if (object.gameObject.tag.Equals("Station"))
	{
		if (speed > 0)
			speed -= 0.0002;
		else if (speed <= 0)
		{
			speed = 0;
			step++;
		}

		if (step == 30)
		{
			speed += 0.0004;
		}
	}
}

function OnTriggerExit (object : Collider)
{
	if (object.gameObject.tag.Equals("Station"))
	{
		step = 0;
	}
}