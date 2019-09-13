#pragma strict

var message: UI.Text;
var step: int = 0;

function Start () {
	Application.targetFrameRate = 30;
	message = GetComponent.<UI.Text>();
}

function Update () {
	//message.text = Time.timeSinceLevelLoad.ToString("F2") + "\nSTEP" + step;
	message.text = PlayerPrefs.GetFloat("Time").ToString("F2");
	step++;
	PlayerPrefs.SetInt("Step", step);
}
