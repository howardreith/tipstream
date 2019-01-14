# TipStream

TipStream is a tool for live-streaming video content to the web for users to view.

It is built using React/Redux, Google Auth, [JSON-Server](https://www.npmjs.com/package/json-server), and [Node Media Server](https://github.com/illuspas/Node-Media-Server)

## How to View

1. Navigate to https://tipstream.co

2. Click on whichever stream you would like to view.

3. Click the "play" button on the stream. Enjoy.

Note that any given stream may or may not be active at any given time. A broadcaster must be using the stream in order for you to view it.

## How to Broadcast

These instructions assume you are running an up-to-date version of [npm](https://www.npmjs.com/get-npm). The commands should be run from the command line in Linux or Mac and in the Powershell in Windows.

1. Clone or download the repository at https://github.com/howardreith/tipstreamvideo.

2. In the directory where you've placed the repository, install dependencies with "npm install".

3. Initiate your local server with "npm start" in your installed directory. This will start a server at localhost:8000.

4. Open a streaming software capable of streaming using http-flv format. TipStream was tested using [OBS](https://obsproject.com/). Instructions for alternative streaming tools can be found at [the Node Media Server repository](https://www.npmjs.com/package/node-media-server). Make sure your audio and video devices are configured correctly in your streaming software.

5. Navigate to https://tipstream.co.

6. Log in using your google account by clicking the "Log in" button in the upper right corner.

7. Click "Create Stream", enter a title and a description in the fields, click "Submit", and then navigate to your stream on the list of streams. Alternatively, if you have already created a stream, simply navigate to it immediately.

8. In your streaming software, configure your streaming settings for a custom streaming server streaming at http://localhost/live. Identify the ID of the stream you will be using by regarding the content after the last "/" in the URL at tipstream.co. For example, in https://tipstream.co/streams/1, the id is "1". Input this id as your "Stream Key".

9. Begin streaming with your streaming software. Your content should appear on the TipStream video player within moments.
