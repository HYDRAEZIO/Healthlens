from flask import Flask, render_template, Response
import cv2
import threading

app = Flask(__name__)

class MotionDetector:
    def __init__(self):
        # Initialize the camera
        self.cap = cv2.VideoCapture(0)  # You may need to change the camera index

        # Initialize variables for motion detection
        self.prev_frame = None
        self.motion_detected = False

        # Alert settings
        self.alert_message = "Slight Motion Detected!"
        self.alert_frequency = 2500  # Sound frequency in Hz
        self.alert_duration = 1000  # Sound duration in milliseconds

    def detect_motion(self):
        while True:
            # Read a frame from the camera
            ret, frame = self.cap.read()

            # Convert the frame to grayscale for motion detection
            gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            gray_frame = cv2.GaussianBlur(gray_frame, (21, 21), 0)

            # Initialize the previous frame if it's the first frame
            if self.prev_frame is None:
                self.prev_frame = gray_frame
                continue

            # Compute the absolute difference between the current and previous frames
            frame_diff = cv2.absdiff(self.prev_frame, gray_frame)

            # Threshold the frame difference to identify motion
            thresh_frame = cv2.threshold(frame_diff, 30, 255, cv2.THRESH_BINARY)[1]
            thresh_frame = cv2.dilate(thresh_frame, None, iterations=2)

            # Calculate the total changed pixel count
            pixel_count = cv2.countNonZero(thresh_frame)

            # Check for motion
            if pixel_count > 100:  # Adjust the threshold as needed
                self.motion_detected = True
            else:
                self.motion_detected = False

            # Update the previous frame
            self.prev_frame = gray_frame.copy()

            # Trigger an alert if slight motion is detected
            if self.motion_detected:
                cv2.putText(frame, self.alert_message, (10, 30),
                            cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
                # Play a sound (Windows)
                winsound.Beep(self.alert_frequency, self.alert_duration)

            # Convert the frame to JPEG format
            _, jpeg = cv2.imencode('.jpg', frame)
            frame_bytes = jpeg.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

    def start_detection(self):
        threading.Thread(target=self.detect_motion, daemon=True).start()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(MotionDetector().detect_motion(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    MotionDetector().start_detection()
    app.run(debug=True)
