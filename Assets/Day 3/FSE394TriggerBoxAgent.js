#pragma strict

function Start () {
	
}

function Update () {
	
}

function OnTriggerEnter(other : Collider)
{
	if (other.tag == "Agent")
	{
		other.gameObject.GetComponent.<UnityEngine.AI.NavMeshAgent>().Stop();
	}
}