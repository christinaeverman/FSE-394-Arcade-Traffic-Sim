#pragma strict

var prefabBullet: Transform; // Not assigned yet

function Start () {
	// This is called only once when an object is created.
	//GetComponent.<Renderer>().enabled = false;
	var objs = GameObject.FindGameObjectsWithTag("Bullet");
	Debug.Log("number of bullets is " + objs.length);
	//for () {
	//	Destroy (objs[i]); // i is increased one by one
	//}
}

function Update () {
	// 30-60 updates per second
	//transform.Rotate(0, 50 * 0.033f, 0);
	if (Input.GetKeyDown(KeyCode.Space)) {
		var instanceBullet = Instantiate (prefabBullet, transform.position, Quaternion.identity);
		instanceBullet.GetComponent.<Rigidbody>().AddForce(transform.forward * 1000);
	}
}
