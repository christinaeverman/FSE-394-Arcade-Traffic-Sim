#pragma strict

import System.IO;
var fileName : String;
var prefab : GameObject;
var agent : UnityEngine.AI.NavMeshAgent;
var isStopped : boolean;

function Start ()
{
	PlayerPrefs.SetFloat("Time", 0.0);
	PlayerPrefs.SetInt("Stop", 0);
	agent = prefab.GetComponent.<UnityEngine.AI.NavMeshAgent>();
	isStopped = true;
}

function Update ()
{
	if (!isStopped)
		PlayerPrefs.SetFloat("Time", PlayerPrefs.GetFloat("Time") + Time.deltaTime);
}

function StartSimulation()
{
	PlayerPrefs.SetInt("Stop", 1);
	isStopped = false;
}

function StopSimulation()
{
	PlayerPrefs.SetInt("Stop", 0);
	isStopped = true;
	fileName = Application.dataPath + "/output.txt";
	var sr = File.CreateText(fileName);
	sr.WriteLine(PlayerPrefs.GetInt("agentsAtGoal"));
	sr.WriteLine(PlayerPrefs.GetFloat("Time"));

	sr.Close();
}

function CloseSimulation()
{
	Application.LoadLevel("Day8Results");
}

function ResetSimulation()
{
	Application.LoadLevel("Homework6");
}

function TimeScaleSlider()
{
	var obj = GameObject.Find("TimeScaleSlider");
	Time.timeScale = obj.GetComponent.<UI.Slider>().value;
}

/*
#pragma strict

import System.IO;
var fileName : String;
var prefab : GameObject;
var agent : UnityEngine.AI.NavMeshAgent;
var isStopped : boolean;

function Start ()
{
	PlayerPrefs.SetFloat("Time", 0.0);
	PlayerPrefs.SetInt("Stop", 1);
	agent = prefab.GetComponent.<UnityEngine.AI.NavMeshAgent>();
	isStopped = false;
}

function Update ()
{
	if (!isStopped)
		PlayerPrefs.SetFloat("Time", PlayerPrefs.GetFloat("Time") + Time.deltaTime);
}

function StopSimulation()
{
	PlayerPrefs.SetInt("Stop", 0);
	isStopped = true;
}

function ResumeSimulation()
{
	PlayerPrefs.SetInt("Stop", 1);
	isStopped = false;
}

function SaveSimulation()
{
	fileName = Application.dataPath + "/output.txt";
	var sr = File.CreateText(fileName);
	sr.WriteLine("Number of agents that reached the goal: " + PlayerPrefs.GetInt("agentsAtGoal"));
	sr.WriteLine("Time: " + PlayerPrefs.GetFloat("Time"));

	sr.Close();
}

function TimeScaleSlider()
{
	var obj = GameObject.Find("TimeScaleSlider");
	Time.timeScale = obj.GetComponent.<UI.Slider>().value;
}
*/