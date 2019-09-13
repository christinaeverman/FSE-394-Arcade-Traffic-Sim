#pragma strict

var step : float;
var prefabAgent : GameObject;

function Start () {
	PlayerPrefs.SetInt("agentsAtGoal", 0);
	step = 0;
}

function Update () {
	if (PlayerPrefs.GetInt("Stop") == 1)
	{
		step += Time.deltaTime;
		Debug.Log(step + Time.deltaTime);
	}

	if (step >= 5.0)
	{
		step = 0.0;

		for (var i : int = 0; i < 5; i++)
		{
			var temp = Instantiate(prefabAgent, transform.position, Quaternion.identity);
		}
	}
}
