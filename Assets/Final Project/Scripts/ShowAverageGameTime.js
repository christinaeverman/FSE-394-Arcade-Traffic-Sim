#pragma strict

var message : UI.Text;

function Start () {
	message = GetComponent.<UI.Text>();
}

function Update () {
	var averageGameTime: float;
	averageGameTime = PlayerPrefs.GetInt("totalGameTime") / PlayerPrefs.GetInt("agentsAtGoal");
	message.text = "Average game time / customer: " + averageGameTime.ToString();
}