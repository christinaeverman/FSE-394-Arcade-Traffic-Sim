#pragma strict

var prefabAgent : Transform;
var step : int;

function Start ()
{
	step = 0;
}

function Update ()
{
	step++;

	if (step == 90)
	{
		for (var i : int = 0; i < 5; i++)
		{
			var instanceAgent = Instantiate(prefabAgent, Vector3(Random.Range(-2.0, 2.0), 0.1, Random.Range(-2.0, 2.0)), Quaternion.identity);
			instanceAgent.GetComponent.<Rigidbody>().AddForce(Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0)) * 100);
		}

		step = 0;
	}
}
