#pragma strict

var signal : boolean = false;
var redMat : Material;
var greenMat : Material;
var step : int = 0;
var signalChange : int = 100;

function Start () {
	
}

function Update ()
{
	step++;

	if (step == signalChange)
	{
		step = 0;
		signal = !signal;

		if (signal)
		{
			GetComponent.<Renderer>().material = greenMat;
		}
		else
		{
			GetComponent.<Renderer>().material = redMat;
		}
	}
}

function OnTrigerEnter(object : Collider)
{
	if (object.tag == "CarView" && !signal)
	{
		object.gameObject.GetComponent.<CarView>().isStop = true;
	}
}

function OnTriggerStay(object : Collider)
{
	if (object.tag == "CarView" && signal)
	{
		object.gameObject.GetComponent.<CarView>().isStop = false;
		object.gameObject.transform.parent.GetComponent.<CarMove1>().speed = Random.Range(2, 5);
		object.gameObject.transform.parent.GetComponent.<Renderer>().material = greenMat;
	}
}