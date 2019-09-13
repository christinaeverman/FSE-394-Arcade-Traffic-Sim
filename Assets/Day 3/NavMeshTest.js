#pragma strict

var goal: Transform;

function Start () {
	var agent : UnityEngine.AI.NavMeshAgent = GetComponent.<UnityEngine.AI.NavMeshAgent>();
	agent.destination = goal.position;
	//GetComponent.<NavMeshAgent>().destination = goal.position;
}

function Update () {
	
}
