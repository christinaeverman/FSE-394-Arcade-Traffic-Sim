#pragma strict
// This is for the exercise on the second day.

var targetA : Transform;
var targetB : Transform;
var speed : float;
var correctObject : GameObject;

function Start ()
{
	
}

function Update ()
{
	if (Input.GetKey("w"))
		transform.position.z += 0.5;
	if (Input.GetKey("s"))
		transform.position.z -= 0.5;
	if (Input.GetKey("d"))
		transform.position.x += 0.5;
	if (Input.GetKey("a"))
		transform.position.x -= 0.5;

	/*
	var weight = Mathf.Cos(Time.time * speed * 2 * Mathf.PI) * 0.5 + 0.5;
	transform.position = targetA.position * weight + targetB.position * (1 - weight);
	*/
}

function OnTriggerEnter (object : Collider)
{
	if (object == correctObject.GetComponent.<Collider>())
	{
		print("Enter"); // Debug.Log("Enter");
	}
}

function OnTriggerExit (object : Collider)
{
	if (object == correctObject.GetComponent.<Collider>())
	{
		print("Exit"); // Debug.Log("Exit");
	}
}

function OnTriggerStay (object : Collider)
{
	if (object == correctObject.GetComponent.<Collider>())
	{
		print("Stay"); // Debug.Log("Stay");
	}
}