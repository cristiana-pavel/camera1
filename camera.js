var video = document.getElementById("video");

function on_cam_success(stream) {
	video.srcObject = stream;
}

function on_cam_error(err) {
	alert("Error: " + err.message);
}

var constraints = {audio: false, video: true};
navigator.mediaDevices.getUserMedia(constraints).then(on_cam_success).catch(on_cam_error);

$video.click(function() {
function capteaza() {
	var c = document.getElementById("canvas");
	c.width = video.width;
	c.height = video.height;

	var ctx = c.getContext("2d");
	ctx.drawImage(video, 0, 0, 640, 480);
}
});