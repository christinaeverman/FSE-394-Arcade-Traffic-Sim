#pragma strict

function Start () {
	
}

function Update () {
	
}

function OnTriggerEnter (object : Collider)
{
	if (object.gameObject.tag.Equals("Agent"))
	{
		object.GetComponent.<Rigidbody>().velocity = Vector3(0, 0, 0);
	}
}