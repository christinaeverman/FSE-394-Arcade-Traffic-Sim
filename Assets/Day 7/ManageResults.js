#pragma strict

import System.IO;
var fileName : String;
var message : UI.Text;
var agents : int;
var averageTime : float;

function Start()
{
	message = GetComponent.<UI.Text>();
	fileName = Application.dataPath + "/output.txt";

	if (File.Exists(fileName))
	{
		var sr = File.OpenText(fileName);
		var line = sr.ReadLine();
		agents = parseInt(line);
		PlayerPrefs.SetInt("NumAgents", agents);
		line = sr.ReadLine();
		averageTime = parseFloat(line);
		averageTime = averageTime * 5 / agents;
		PlayerPrefs.SetFloat("AverageTime", averageTime);
		sr.Close();
	}
	else
	{
		print("Could not open the file: " + fileName);
	}
}

function ReturnToTitle()
{
	Application.LoadLevel("Day7Title");
}