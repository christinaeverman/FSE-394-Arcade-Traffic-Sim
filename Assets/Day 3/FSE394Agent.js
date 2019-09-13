#pragma strict

var agent : UnityEngine.AI.NavMeshAgent;

function Start () {
	var goals : GameObject[] = GameObject.FindGameObjectsWithTag("Goal");
	agent = GetComponent.<UnityEngine.AI.NavMeshAgent>();
	agent.destination = goals[Random.Range(0, goals.length)].transform.position;
}

function Update () {
	var dis = Vector3.Distance(transform.position, agent.destination);

	if (PlayerPrefs.GetInt("Stop") == 0)
	{
		agent.Stop();
	}
	else if (PlayerPrefs.GetInt("Stop") == 1)
	{
		agent.Resume();
	}

	if (dis < 0.5)
	{
		PlayerPrefs.SetInt("agentsAtGoal", PlayerPrefs.GetInt("agentsAtGoal") + 1);
		Destroy(gameObject);
	}
}
