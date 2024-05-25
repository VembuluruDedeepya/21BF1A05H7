from flask import Flask, jsonify, request
import requests
from threading import Lock
import time

app = Flask(_name_)

# Configuration
WINDOW_SIZE = 10
THIRD_PARTY_API_URL = "https://third-party-api.com/numbers"

# Global variables
number_window = []
lock = Lock()

def fetch_numbers(number_id):
    try:
        response = requests.get(f"{THIRD_PARTY_API_URL}/{number_id}", timeout=0.5)
        response.raise_for_status()
        numbers = response.json().get('numbers', [])
        return list(set(numbers))  # Ensure unique numbers
    except (requests.RequestException, ValueError):
        return []

@app.route('/numbers/<number_id>', methods=['GET'])
def get_numbers(number_id):
    if number_id not in ['p', 'f', 'e', 'r']:
        return jsonify({"error": "Invalid number ID"}), 400
    
    with lock:
        window_prev_state = number_window.copy()
        new_numbers = fetch_numbers(number_id)

        if new_numbers:
            for number in new_numbers:
                if number not in number_window:
                    if len(number_window) >= WINDOW_SIZE:
                        number_window.pop(0)
                    number_window.append(number)

        window_curr_state = number_window.copy()
        avg = sum(number_window) / len(number_window) if number_window else 0

    response = {
        "windowPrevState": window_prev_state,
        "windowCurrState": window_curr_state,
        "numbers": new_numbers,
        "avg": round(avg, 2)
    }
    
    return jsonify(response)

if _name_ == '_main_':
    app.run(debug=True)