#pragma strict

import System.IO;
var fileName : String;
var prefab : GameObject;
var agent : UnityEngine.AI.NavMeshAgent;
var isStopped : boolean;

function Start ()
{
	Time.timeScale = 0;
	//PlayerPrefs.SetFloat("Time", 0.0);
	//PlayerPrefs.SetInt("Stop", 1);
	agent = prefab.GetComponent.<UnityEngine.AI.NavMeshAgent>();
	//isStopped = false;
}

function Update ()
{/*
	if (!isStopped)
		PlayerPrefs.SetFloat("Time", PlayerPrefs.GetFloat("Time") + Time.deltaTime);*/
}

function StartSimulation()
{
	Time.timeScale = 1.0;
}

function StopSimulation()
{
	Time.timeScale = 0;
	//PlayerPrefs.SetInt("Stop", 1);
	//isStopped = false;
}

function CloseSimulation()
{/*
	fileName = Application.dataPath + "/output.txt";
	var sr = File.CreateText(fileName);
	sr.WriteLine("Number of agents that reached the goal: " + PlayerPrefs.GetInt("agentsAtGoal"));
	sr.WriteLine("Time: " + PlayerPrefs.GetFloat("Time"));

	sr.Close();*/
}

function TimeScaleSlider()
{
	var obj = GameObject.Find("TimeScaleSlider");
	Time.timeScale = obj.GetComponent.<UI.Slider>().value;
}