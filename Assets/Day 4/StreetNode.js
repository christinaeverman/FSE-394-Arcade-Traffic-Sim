#pragma strict

var nextNodes : Transform[];
var directions : Vector3[];

function Start ()
{
	if (nextNodes)
	{
		directions = new Vector3[nextNodes.Length];

		for (var i : int = 0; i < nextNodes.length; i++)
			directions[i] = Vector3.Normalize(nextNodes[i].position - transform.position);
	}
}

function Update ()
{
	
}
