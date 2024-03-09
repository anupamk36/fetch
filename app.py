from flask import Flask, render_template, request, redirect, url_for, jsonify
import json

app = Flask(__name__)

# Load data from products.json
with open('data/products.json', 'r') as file:
    products_data = json.load(file)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/select-food-type')
def select_food_type():
    return render_template('select_food_type.html')

@app.route('/customize-order')
def customize_order():
    food_type = request.args.get('type')
    if food_type in products_data:
        return render_template('customize_order.html', food_type=food_type, ingredients=products_data[food_type])
    else:
        return 'Invalid food type'

@app.route('/get-ingredients/<food_type>')
def get_ingredients(food_type):
    if food_type in products_data:
        return jsonify(products_data[food_type])
    else:
        return jsonify({})

@app.route('/thank-you', methods=['POST'])
def thank_you():
    # Process order data here
    return render_template('thank_you.html')

if __name__ == '__main__':
    app.run(debug=True)
