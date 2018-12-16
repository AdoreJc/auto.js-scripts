auto("fast");
requestScreenCapture()
launchPackage("com.cmplay.tiles2");
var img;
sleep(1);
for (;;) {
img = captureScreen();
if (images.detectsColor(img,"#000000", 135, 1111,threads = 15)) {
press(135,1111,1);
continue;
}

if (images.detectsColor(img,"#000000", 405, 1111,threads = 15))

{
press(405, 1111,1);
continue;
}

if (images.detectsColor(img,"#000000", 675, 1111,threads = 15))

{
press(675, 1111,1);
continue;
}

if (images.detectsColor(img,"#000000", 945, 1111,threads = 15)) {
press(945, 1111,1);
continue;
}
sleep(1);
}
