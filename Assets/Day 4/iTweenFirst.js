#pragma strict

var waypoints : Transform[];
var rate : int = 20;
var start : int = 100;
var step : int = 0;
private var currentWaypoint : int = 0;

function Start ()
{
	
}

function Update ()
{
	step++;

	if (step == start)
		MoveToWayPoint();
}

function OnDrawGizmos()
{
	iTween.DrawLine(waypoints, Color.yellow);
}

function MoveToWayPoint()
{
	var travelTime : float = Vector3.Distance(transform.position, waypoints[currentWaypoint].position) / rate;
	iTween.MoveTo(gameObject, iTween.Hash("position", waypoints[currentWaypoint], "time", travelTime, "easetype", "linear", 
		"oncomplete", "MoveToWayPoint", "Looktarget", waypoints[currentWaypoint].position, "looktime", 0.4));
	currentWaypoint++;

	if (currentWaypoint > waypoints.length - 2)
		currentWaypoint = 0;
}