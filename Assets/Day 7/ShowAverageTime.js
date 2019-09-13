#pragma strict

var message: UI.Text;

function Start () {
	Application.targetFrameRate = 30;
	message = GetComponent.<UI.Text>();
}

function Update ()
{
	message.text = "Average Time: " + PlayerPrefs.GetFloat("AverageTime");
}