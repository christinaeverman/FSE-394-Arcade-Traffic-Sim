#pragma strict

import System.IO;
var fileName : String;
var cube : GameObject;
var message : UI.Text;

function Start () {
	var temp = Instantiate(cube, transform.position, Quaternion.identity);
	temp.transform.localScale.x = Random.Range(1, 5);
	temp.transform.localScale.y = Random.Range(1, 5);
	temp.transform.localScale.z = Random.Range(1, 5);
	PlayerPrefs.SetInt("SizeX", temp.transform.localScale.x);
	PlayerPrefs.SetInt("SizeY", temp.transform.localScale.y);
	PlayerPrefs.SetInt("SizeZ", temp.transform.localScale.z);


}

function ShowTest()
{
	print("Christina");
}

function FSE394WriteFile()
{
	fileName = Application.dataPath + "/output.txt"; // c:/document/christina/unity/asset/output.txt

	var sr = File.CreateText(fileName);
	sr.WriteLine(PlayerPrefs.GetInt("SizeX"));
	sr.WriteLine(PlayerPrefs.GetInt("SizeY"));
	sr.WriteLine(PlayerPrefs.GetInt("SizeZ"));

	sr.Close();
}

function FSE394ReadFile()
{
	fileName = Application.dataPath + "/output.txt";

	if (File.Exists(fileName))
	{
		var sr = File.OpenText(fileName);
		var line = sr.ReadLine();
		message.text += line + " ";
		while (line != null)
		{
			print(line);
			line = sr.ReadLine();
			message.text += line + " ";
		}
		sr.Close();
	}
	else
	{
		print("Could not open the file: " + fileName);
	}
}
