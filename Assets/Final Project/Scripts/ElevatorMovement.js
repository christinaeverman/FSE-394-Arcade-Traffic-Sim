#pragma strict

var isUp : boolean;
var isMoving : boolean;
var timer : float;
var currentFloor : int;
var stop0 : boolean;
var stop1 : boolean;
var stop2 : boolean;
var stop3 : boolean;
var stop4 : boolean;
var stop5 : boolean;
var stop6 : boolean;

function Start () {
	isUp = true;
	isMoving = false;
	timer = 0.0;
	currentFloor = 1;
	PlayerPrefs.SetInt("elevatorFloor", 1);
	PlayerPrefs.SetInt("agentsInElevator", 0);
	PlayerPrefs.SetInt("agentsB1F", 0);
	PlayerPrefs.SetInt("agents1F", 0);
	PlayerPrefs.SetInt("agents2F", 0);
	PlayerPrefs.SetInt("agents3F", 0);
	PlayerPrefs.SetInt("agents4F", 0);
	PlayerPrefs.SetInt("agents5F", 0);
	PlayerPrefs.SetInt("agents6F", 0);
	stop0 = true;
	stop1 = true;
	stop2 = false;
	stop3 = false;
	stop4 = false;
	stop5 = false;
	stop6 = false;
}

function Update()
{
	if(PlayerPrefs.GetInt("agentsInElevator") > 0)
	{
		timer += Time.deltaTime;

		if (timer >= 3.0 && isUp)
		{
			transform.position += Vector3(0, 0.1 * Time.timeScale, 0);

			if (transform.position.y >= 3.9 && !stop1)
			{
				timer = 0.0;
				stop1 = true;
				PlayerPrefs.SetInt("agents1F", 0);
				PlayerPrefs.SetInt("elevatorFloor", 1);
			}
			else if (transform.position.y >= 9.9 && !stop2)
			{
				timer = 0.0;
				stop2 = true;
				PlayerPrefs.SetInt("elevatorFloor", 2);
			}
			else if (transform.position.y >= 15.9 && !stop3)
			{
				timer = 0.0;
				stop3 = true;
				PlayerPrefs.SetInt("agents3F", 0);
				PlayerPrefs.SetInt("elevatorFloor", 3);
			}
			else if (transform.position.y >= 21.9 && !stop4)
			{
				timer = 0.0;
				stop4 = true;
				PlayerPrefs.SetInt("agents4F", 0);
				PlayerPrefs.SetInt("elevatorFloor", 4);
			}
			else if (transform.position.y >= 27.9 && !stop5)
			{
				timer = 0.0;
				stop5 = true;
				PlayerPrefs.SetInt("agents5F", 0);
				PlayerPrefs.SetInt("elevatorFloor", 5);
			}
			else if (transform.position.y >= 33.9 && !stop6)
			{
				timer = 0.0;
				PlayerPrefs.SetInt("agents6F", 0);
				isUp = false;
				stop0 = false;
				stop1 = false;
				stop2 = false;
				stop3 = false;
				stop4 = false;
				stop5 = false;
				stop6 = false;
				PlayerPrefs.SetInt("elevatorFloor", 6);
			}
		}
		else if (timer >= 3.0 && !isUp)
		{
			transform.position -= Vector3(0, 0.1 * Time.timeScale, 0);
			
			if (transform.position.y <= 27.9 && !stop5)
			{
				timer = 0.0;
				stop5 = true;
				PlayerPrefs.SetInt("agents5F", 0);
				PlayerPrefs.SetInt("elevatorFloor", 5);
			}
			else if (transform.position.y <= 21.9 && !stop4)
			{
				timer = 0.0;
				stop4 = true;
				PlayerPrefs.SetInt("agents4F", 0);
				PlayerPrefs.SetInt("elevatorFloor", 4);
			}
			else if (transform.position.y <= 15.9 && !stop3)
			{
				timer = 0.0;
				stop3 = true;
				PlayerPrefs.SetInt("agents3F", 0);
				PlayerPrefs.SetInt("elevatorFloor", 3);
			}
			else if (transform.position.y <= 9.9 && !stop2)
			{
				timer = 0.0;
				stop2 = true;
				PlayerPrefs.SetInt("elevatorFloor", 2);
			}
			else if (transform.position.y <= 3.9 && !stop1)
			{
				timer = 0.0;
				stop1 = true;
				PlayerPrefs.SetInt("agents1F", 0);
				PlayerPrefs.SetInt("elevatorFloor", 1);
			}
			else if (transform.position.y <= -2.1 && !stop0)
			{
				timer = 0.0;
				PlayerPrefs.SetInt("agentsB1F", 0);
				isUp = true;
				stop0 = false;
				stop1 = false;
				stop2 = false;
				stop3 = false;
				stop4 = false;
				stop5 = false;
				stop6 = false;
				PlayerPrefs.SetInt("elevatorFloor", 0);
			}
		}
	}
}