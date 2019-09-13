#pragma strict

var message: UI.Text;

function Start () {
	Application.targetFrameRate = 30;
	message = GetComponent.<UI.Text>();
}

function Update () {
	message.text = PlayerPrefs.GetInt("SizeX") + ", " + PlayerPrefs.GetInt("SizeY") + ", " + PlayerPrefs.GetInt("SizeZ");
}