from flask import Flask, render_template, request, jsonify

# Initialize the Flask app
app = Flask(__name__)

# Define the main route to serve your HTML file
@app.route('/')
def home():
    return render_template('categories.html')  # Replace 'index.html' with your main HTML file name

@app.route('/reportanalysis')
def reportanalysis():
    return render_template('reportanalysis.html')

@app.route('/fc1finalreport')
def fc1finalreport():
    return render_template('fc1_final_report.html')

@app.route('/fc1reportanalysis')
def fc1reportanalysis():
    return render_template('fc1_report_analysis.html')

@app.route('/fc1reportlist')
def fc1reportlist():
    return render_template('fc1_report_list.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/reports')
def reports():
    return render_template('reports.html')

@app.route('/signin')
def signin():
    return render_template('signin.html')

@app.route('/u_available_fc')
def uavailablefc():
    return render_template('u_available_fc.html')

@app.route('/ufc1details')
def ufc1details():
    return render_template('u_fc1_details.html')

@app.route('/ufinalreport')
def ufinalreport():
    return render_template('u_final_report.html')

@app.route('/ureportdetails')
def ureportdetails():
    return render_template('u_report_details.html')

# Example route to handle a form submission or AJAX request
@app.route('/process', methods=['POST'])
def process_data():
    # Get data from the request
    data = request.json
    print(f"Received data: {data}")

    # Process the data and send a response
    response = {'message': 'Data processed successfully!', 'data': data}
    return jsonify(response)

# Run the app
if __name__ == '__main__':
    app.run(debug=True)


