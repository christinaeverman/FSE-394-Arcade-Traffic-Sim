#pragma strict

var step : int;
var redMat : Material;
var greenMat : Material;
var trafficLight : GameObject;
var stop : boolean;

function Start ()
{
	step = 0;
	trafficLight.GetComponent.<Renderer>().material = greenMat;
	stop = false;
}

function Update ()
{
	step++;

	if (step == 150)
	{
		trafficLight.GetComponent.<Renderer>().material = redMat;
		stop = true;
	}
	else if (step == 300)
	{
		trafficLight.GetComponent.<Renderer>().material = greenMat;
		stop = false;
		step = 0;
	}
}

function OnTriggerEnter(other : Collider)
{
	if (other.tag == "Agent" && stop)
	{
		other.gameObject.GetComponent.<UnityEngine.AI.NavMeshAgent>().Stop();
	}
}

function OnTriggerStay(other : Collider)
{
	if (other.tag == "Agent" && !stop)
	{
		other.gameObject.GetComponent.<UnityEngine.AI.NavMeshAgent>().Resume();
	}
}

function OnTriggerExit(other : Collider)
{
	if (other.tag == "Agent")
	{
		other.gameObject.GetComponent.<UnityEngine.AI.NavMeshAgent>().Resume();
	}
}