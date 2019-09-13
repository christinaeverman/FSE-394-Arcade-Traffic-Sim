#pragma strict

var prefabAgent : GameObject;

function Start ()
{
	
}

function Update ()
{
	if (PlayerPrefs.GetInt("elevatorFloor") == 2 && PlayerPrefs.GetInt("agents2F") > 0)
	{
		Debug.Log(PlayerPrefs.GetInt("agents2F"));
		for (var i : int = 0; i < PlayerPrefs.GetInt("agents2F"); i++)
		{
			var temp = Instantiate(prefabAgent, transform.position, Quaternion.identity);
		}

		PlayerPrefs.SetInt("agents2F", 0);
	}
}
