#pragma strict

var message : UI.Text;

function Start () {
	message = GetComponent.<UI.Text>();
}

function Update () {
	var averageMoney: float;
	averageMoney = PlayerPrefs.GetInt("totalMoney") / PlayerPrefs.GetInt("agentsAtGoal");
	message.text = "Average yen / customer: " + averageMoney.ToString();
}