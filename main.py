"""
This is the main script for the Flask application.

It can be executed directly to start the web server.
"""

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    """
    Root endpoint that serves the IoT dashboard.
    """
    return render_template('index.html')

if __name__ == '__main__':
    # Running on 0.0.0.0 makes the server publicly available.
    # The default port is 5000.
    app.run(host='0.0.0.0', debug=True)
