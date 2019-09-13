#pragma strict

var targetA : Transform;
var targetB : Transform;
var correctObj : GameObject;
var sendToObj : GameObject;
var speed : float;
var redMat : Material;
var blueMat : Material;

function Start () {
	
}

function Update () {
	var weight = Mathf.Cos(Time.time * speed * 2 * Mathf.PI) * 0.5 + 0.5;
	transform.position = targetA.position * weight + targetB.position * (1 - weight);

	var direction = Vector3.Normalize(targetB.position - targetA.position);
	var rot = Quaternion.LookRotation(direction);
	transform.rotation = rot;
	//transform.forward = direction;
}

function OnTriggerEnter (object : Collider)
{
	if (object == correctObj.GetComponent.<Collider>())
	{
		GetComponent.<Renderer>().material = redMat;
		sendToObj.GetComponent.<Renderer>().enabled = false;
	}
}

function OnTriggerExit (object : Collider)
{
	if (object == correctObj.GetComponent.<Collider>())
	{
		GetComponent.<Renderer>().material = blueMat;
		sendToObj.GetComponent.<Renderer>().enabled = true;
	}
}