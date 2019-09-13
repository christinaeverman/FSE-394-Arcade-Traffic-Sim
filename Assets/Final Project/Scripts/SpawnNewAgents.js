#pragma strict

var step : float;
var prefabAgent : GameObject;

function Start ()
{
	step = 4.0;
}

function Update ()
{
	step += Time.deltaTime;
	Debug.Log(PlayerPrefs.GetInt("spawnRate"));
	if (step >= 5.0 / PlayerPrefs.GetInt("spawnRate"))
	{
		var numAgents : int = Random.Range(1, 5);
		step = 0.0;

		for (var i : int = 0; i < numAgents; i++)
		{
			var temp = Instantiate(prefabAgent, transform.position, Quaternion.identity);
		}
	}
}
