#pragma strict

var isClose : boolean = false;
var isStop : boolean = false;
var greenMat : Material;
var redMat : Material;

function Start () {
	
}

function Update ()
{
	if (isClose || isStop)
	{
		gameObject.transform.parent.GetComponent.<CarMove1>().speed = 0;
		gameObject.transform.parent.GetComponent.<Renderer>().material = redMat;
	}
}

function OnTriggerEnter(other : Collider)
{
	if (other.tag == "Car")
		isClose = true;
}

function OnTriggerExit(other : Collider)
{
	if (other.tag == "Car")
	{
		isClose = false;
		gameObject.transform.parent.GetComponent.<CarMove1>().speed = Random.Range(2, 5);
		gameObject.transform.parent.GetComponent.<Renderer>().material = greenMat;
	}
}