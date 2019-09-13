#pragma strict

var message: UI.Text;
var agentsAtGoal : int;

function Start () {
	message = GetComponent.<UI.Text>();
	PlayerPrefs.SetInt("agentsAtGoal", 0);
}

function Update () {

	message.text =  PlayerPrefs.GetInt("agentsAtGoal").ToString();
}