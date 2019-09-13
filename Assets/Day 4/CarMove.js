#pragma strict

var speed : float = 5;
var maxSpeed : float = 8;
var isMoving : boolean;

function Start ()
{
	GetComponent.<Rigidbody>().velocity = transform.forward;
	speed = Random.Range(5.0, 8.0);
	isMoving = true;
}

function Update ()
{
	if (isMoving)
	{
		if (speed < maxSpeed)
			speed += 1;
		GetComponent.<Rigidbody>().velocity = transform.forward * speed;
	}
	else
	{
		speed = 0;
		GetComponent.<Rigidbody>().velocity = Vector3.zero;
	}
}

function OnTriggerEnter(other : Collider)
{
	if (other.tag == "StreetNode")
	{
		transform.position = other.transform.position;
		var nodes = other.GetComponent.<StreetNode>().nextNodes;

		if (nodes == null || nodes.Length == 0)
			Destroy(gameObject);
		if (nodes && nodes.Length > 0)
		{
			var rnd = Random.Range(0, nodes.Length);
			var dir = other.GetComponent.<StreetNode>().directions[rnd];
			GetComponent.<Rigidbody>().velocity = dir * speed;
			transform.forward = dir;
		}
	}
}

function OnTriggerStay(other : Collider)
{
	if (other.tag == "Car")
	{
		speed -= 0.5;

		if (speed < 0)
			speed = 0;
	}
}