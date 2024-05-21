const ffmpeg = require("fluent-ffmpeg");

ffmpeg.ffprobe("./OE_PHY_1303_V19_Intro 8.mp4", function (err, metadata) {
	if (err) {
		console.error("Error reading metadata:", err);
		return;
	}

	const videoStream = metadata.streams.find(
		(stream) => stream.codec_type === "video"
	);
	if (videoStream) {
		console.log("Resolution:", videoStream.width, "x", videoStream.height);
	} else {
		console.log("No video stream found in the file.");
	}
});
