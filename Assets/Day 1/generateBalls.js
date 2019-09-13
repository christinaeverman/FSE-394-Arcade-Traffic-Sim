#pragma strict

var prefabBall : Transform;
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
		// generate 20 balls
		for (var j : int = 0; j < 20; j++)
		{
			var instanceBall = Instantiate(prefabBall, Vector3(Random.Range(-2.0, 2.0), 0.1, Random.Range(-2.0, 2.0)), Quaternion.identity);
			//instanceBall.GetComponent.<Rigidbody>().velocity = Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0));
			instanceBall.GetComponent.<Rigidbody>().AddForce(Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0)) * 100);
		}
		step = 0;
	}

	if (Input.GetKeyDown(KeyCode.Space))
	{
		var balls : GameObject[] = GameObject.FindGameObjectsWithTag("Ball");
		for (var i : int = 0; i < balls.length; i++)
			Destroy(balls[i]);
		Debug.Log("All balls are deleted.");
	}
}
