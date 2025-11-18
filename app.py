from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

# Էջ 2: Ինտերակտիվ 3D մոդել
@app.route("/interactive")
def interactive():
    return render_template("interactive.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    debug_mode = os.environ.get("FLASK_DEBUG", "True") == "True"
    app.run(debug=debug_mode, host="0.0.0.0", port=port)