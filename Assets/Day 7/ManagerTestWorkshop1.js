#pragma strict

import System.IO;
var fileName : String;

function Start () {

}

function Update () {
	
}

function ShowTest()
{
	print("Christina");
}

function FSE394WriteFile()
{
	fileName = Application.dataPath + "/output.txt"; // c:/document/christina/unity/asset/output.txt

	var sr = File.CreateText(fileName);
	sr.WriteLine("This is my file");
	sr.WriteLine("I can write int {0} or float {1}, and so on", PlayerPrefs.GetInt("Step"), 3.5);
	sr.Close();
}

function FSE394ReadFile()
{
	fileName = Application.dataPath + "/output.txt";

	if (File.Exists(fileName))
	{
		var sr = File.OpenText(fileName);
		var line = sr.ReadLine();
		while (line != null)
		{
			print(line);
			line = sr.ReadLine();
		}
		sr.Close();
	}
	else
	{
		print("Could not open the file: " + fileName);
	}
}