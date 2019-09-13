#pragma strict

var agent : UnityEngine.AI.NavMeshAgent;
var currentFloor : int;
var floorNumber : int;
var machineNumber : int;
var reachedFloor : boolean;
var reachedSecondMachine : boolean;
var elevator : GameObject;
var goals : GameObject[];
var floorMachines : int[];
var timer : float;
var exit : GameObject;
var totalTime : float;
var moneySpent : int;
var timeToLeave : boolean;
var machineType : int;
var waitingForElevator : boolean;
var goingToElevator : boolean;
var gameTime : int;

function Start () {
	totalTime = 120.0;
	moneySpent = 0;
	floorMachines = new int[7];
	gameTime = 0;

	floorNumber = Random.Range(0, 7); // choose floor
	machineNumber = Random.Range(0, 16);  // choose machine
	elevator = GameObject.FindGameObjectWithTag("Elevator1F");

	// decide on machine on desired floor
	if (floorNumber == 0)
		goals = GameObject.FindGameObjectsWithTag("MachineB1F");
	else if (floorNumber == 1)
		goals = GameObject.FindGameObjectsWithTag("Machine1F");
	else if (floorNumber == 2)
		goals = GameObject.FindGameObjectsWithTag("Machine2F");
	else if (floorNumber == 3)
		goals = GameObject.FindGameObjectsWithTag("Machine3F");
	else if (floorNumber == 4)
		goals = GameObject.FindGameObjectsWithTag("Machine4F");
	else if (floorNumber == 5)
		goals = GameObject.FindGameObjectsWithTag("Machine5F");
	else if (floorNumber == 6)
		goals = GameObject.FindGameObjectsWithTag("Machine6F");

	// 6 types
	// type 1: bottom floors - 1 minute, middle floors - 3 minutes, top floors - 5 minutes
	// type 2: bottom floors - 3 minutes, middle floors - 5 minutes, top floors - 1 minute
	// type 3: bottom floors - 5 minutes, middle floors - 1 minute, top floors - 3 minutes
	// type 4: bottom floors - 1 minute, middle floors, 5 minutes, top floors, 3 minutes
	// type 5: bottom floors - 3 minutes, middle floors - 1 minute, top floors - 5 minutes
	// type 6: bottom floors - 5 minutes, middle floors - 3 minutes, top floors - 1 minute

	agent = GetComponent.<UnityEngine.AI.NavMeshAgent>();
	agent.destination = elevator.transform.position;
	currentFloor = 1;
	timer = 0.0;
	exit = GameObject.FindGameObjectWithTag("Exit");

	if (PlayerPrefs.GetInt("floorType") == 1)
		floorMachines = [1, 1, 1, 3, 3, 5, 5];
	else if (PlayerPrefs.GetInt("floorType") == 2)
		floorMachines = [3, 3, 5, 5, 1, 1, 1];
	else if (PlayerPrefs.GetInt("floorType") == 3)
		floorMachines = [5, 5, 1, 1, 1, 3, 3];
	else if (PlayerPrefs.GetInt("floorType") == 4)
		floorMachines = [1, 1, 1, 5, 5, 3, 3];
	else if (PlayerPrefs.GetInt("floorType") == 5)
		floorMachines = [3, 3, 1, 1, 1, 5, 5];
	else if (PlayerPrefs.GetInt("floorType") == 6)
		floorMachines = [5, 5, 3, 3, 1, 1, 1];

	waitingForElevator = false;

	if (floorNumber == currentFloor)
	{
		goingToElevator = false;
		agent.destination = goals[machineNumber].transform.position;
	}
	else
		goingToElevator = true;
}

function Update ()
{
	totalTime -= Time.deltaTime;
	var distance = Vector3.Distance(transform.position, agent.destination);

	if (goingToElevator && distance < 0.5)
	{
		agent.Stop();
		timer += Time.deltaTime;

		if (timer >= 10.0)
		{
			machineNumber = Random.Range(0, goals.Length);
			agent.destination = goals[machineNumber].transform.position;
			goingToElevator = false;
			agent.Resume();
		}
		else if (PlayerPrefs.GetInt("elevatorFloor") == currentFloor)
		{
			PlayerPrefs.SetInt("agentsInElevator", PlayerPrefs.GetInt("agentsInElevator") + 1);

			if (floorNumber == 0)
				PlayerPrefs.SetInt("agentsB1F", PlayerPrefs.GetInt("agentsB1F") + 1);
			if (floorNumber == 1)
				PlayerPrefs.SetInt("agents1F", PlayerPrefs.GetInt("agents1F") + 1);
			if (floorNumber == 2)
				PlayerPrefs.SetInt("agents2F", PlayerPrefs.GetInt("agents2F") + 1);
			if (floorNumber == 3)
				PlayerPrefs.SetInt("agents3F", PlayerPrefs.GetInt("agents3F") + 1);
			if (floorNumber == 4)
				PlayerPrefs.SetInt("agents4F", PlayerPrefs.GetInt("agents4F") + 1);
			if (floorNumber == 5)
				PlayerPrefs.SetInt("agents5F", PlayerPrefs.GetInt("agents5F") + 1);
			if (floorNumber == 6)
				PlayerPrefs.SetInt("agents6F", PlayerPrefs.GetInt("agentsF") + 1);

			Destroy(gameObject);
		}
	}
	else if (totalTime <= 0.0)
	{
		if (distance < 0.5 && !timeToLeave)
		{
			agent.Stop();
			timer += Time.deltaTime;

			if (timer >= floorMachines[floorNumber])
			{
				agent.destination = exit.transform.position;
				timeToLeave = true;
				gameTime += floorMachines[floorNumber];
				moneySpent += 100;
				agent.Resume();
			}
		}
		else if (distance < 0.5 && timeToLeave)
		{
			PlayerPrefs.SetInt("agentsAtGoal", PlayerPrefs.GetInt("agentsAtGoal") + 1);
			PlayerPrefs.SetInt("totalMoney", PlayerPrefs.GetInt("totalMoney") + moneySpent);
			PlayerPrefs.SetInt("totalGameTime", PlayerPrefs.GetInt("totalGameTime") + gameTime);
			Destroy(gameObject);
		}
	}
	else if (distance < 0.5)
	{
		agent.Stop();
		timer += Time.deltaTime;
		currentFloor = floorNumber;

		if (totalTime <= 0.0)
		{
			agent.destination = exit.transform.position;
			PlayerPrefs.SetInt("agentsAtGoal", PlayerPrefs.GetInt("agentsAtGoal") + 1);
			PlayerPrefs.SetInt("totalMoney", PlayerPrefs.GetInt("totalMoney") + moneySpent);
			PlayerPrefs.SetInt("totalGameTime", PlayerPrefs.GetInt("totalGameTime") + gameTime);
			Destroy(gameObject);
		}
		if (timer >= floorMachines[floorNumber])
		{
			machineNumber = Random.Range(0, goals.Length);
			agent.destination = goals[machineNumber].transform.position;
			gameTime += floorMachines[floorNumber];
			moneySpent += 100;
			agent.Resume();
			timer = 0.0;
		}
	}
}