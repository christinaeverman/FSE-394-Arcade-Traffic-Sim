#pragma strict

function Start ()
{
	Time.timeScale = 0;
	PlayerPrefs.SetInt("agentsAtGoal", 0);
	PlayerPrefs.SetInt("totalMoney", 0);
	PlayerPrefs.SetInt("floorType", 1);
	PlayerPrefs.SetInt("spawnRate", 1);
	PlayerPrefs.SetInt("totalGameTime", 0);
}

function Update ()
{
	
}

function SetFloorType1()
{
	PlayerPrefs.SetInt("floorType", 1);
}

function SetFloorType2()
{
	PlayerPrefs.SetInt("floorType", 2);
}

function SetFloorType3()
{
	PlayerPrefs.SetInt("floorType", 3);
}

function SetFloorType4()
{
	PlayerPrefs.SetInt("floorType", 4);
}

function SetFloorType5()
{
	PlayerPrefs.SetInt("floorType", 5);
}

function SetFloorType6()
{
	PlayerPrefs.SetInt("floorType", 6);
}

function StartSimulation()
{
	TimeScaleSlider();
}

function PauseSimulation()
{
	Time.timeScale = 0;
}

function ResetSimulation()
{
	Application.LoadLevel("FinalProjectScene3");
}

function CloseSimulation()
{
	Application.LoadLevel("FinalProjectScene4");
}

function TimeScaleSlider()
{
	var obj = GameObject.Find("TimeScaleSlider");
	Time.timeScale = obj.GetComponent.<UI.Slider>().value;
}

function SpawnRateSlider()
{
	var obj = GameObject.Find("SpawnRateSlider");
	PlayerPrefs.SetInt("spawnRate", obj.GetComponent.<UI.Slider>().value);
}