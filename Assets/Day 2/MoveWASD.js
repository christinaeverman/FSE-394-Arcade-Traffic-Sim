#pragma strict

function Start () {
	
}

function Update () {
	if (Input.GetKey("w"))
		transform.position.z += 0.5;
	if (Input.GetKey("s"))
		transform.position.z -= 0.5;
	if (Input.GetKey("d"))
		transform.position.x += 0.5;
	if (Input.GetKey("a"))
		transform.position.x -= 0.5;
}
