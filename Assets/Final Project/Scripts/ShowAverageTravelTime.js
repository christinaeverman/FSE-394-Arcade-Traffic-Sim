#pragma strict

var message : UI.Text;

function Start () {
	message = GetComponent.<UI.Text>();
}

function Update () {
	var averageTravelTime: float;
	averageTravelTime = 120.0 - (PlayerPrefs.GetInt("totalGameTime") / PlayerPrefs.GetInt("agentsAtGoal"));
	message.text = "Average travel time / customer: " + averageTravelTime.ToString();
}