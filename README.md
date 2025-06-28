
# Linear Regression Web App (Flask + Python)

This is a simple web application demonstrating how to deploy a **linear regression model** using the Flask web framework. The app accepts user input, runs predictions using a pre-trained model (`model.pkl`), and visualizes results using JavaScript charts.

🔗 **Live demo (was previously hosted on Heroku):** [regression-with-flask.herokuapp.com](https://regression-with-flask.herokuapp.com)

> 📐 This notebook also is a modern ode to the first data mining model — **Linear Regression**, introduced by **Adrien-Marie Legendre** in **1805**.

---

## 🚀 Features

- Trains a linear regression model using sample sales data
- Web UI for inputting custom values
- Interactive plots using JavaScript
- Flask-based backend with Python-powered predictions
- Easy to customize and extend with your own datasets

---

## 📸 Screenshots

### 🖥️ Homepage with Input Form

![3333](https://github.com/user-attachments/assets/7d4d7182-c682-407b-94ad-f0a656a08a8c)



### ⚙️ Model Logic Behind the Scenes

![2](https://github.com/user-attachments/assets/78ed965f-7b0e-407c-bb0d-64fb83ec5061)

---

## 🧠 How It Works

1. A linear regression model is trained using the `sales.csv` data.
2. The model is saved to disk as `model.pkl`.
3. A basic Flask server (`app.py`) serves a form where users can input custom values.
4. JavaScript dynamically updates charts and displays predicted results.
5. The app uses a simple Bootstrap layout defined in `templates/index.html`.

---

## 📁 File Structure

```
├── app.py               # Flask web app to serve the interface and model
├── regression.py        # Script to train and save the linear regression model
├── model.pkl            # Pickled trained model
├── sales.csv            # Sample advertising/sales dataset
├── sales.json           # Alternate format of the dataset
├── templates/
│   └── index.html       # HTML template for the web UI
├── static/
│   └── js/
│       ├── Data.js
│       ├── app1.js
│       ├── data2.js
│       └── plots2.js
```

---

## ⚙️ Getting Started

To run the app locally:

```bash
# Clone the repository
git clone https://github.com/thehybrid18/linear-regression-with-flask.git
cd linear-regression-with-flask

# (Optional) Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies
pip install flask pandas scikit-learn

# Run the app
python app.py
```

Then navigate to [http://127.0.0.1:5000/](http://127.0.0.1:5000/) in your browser.

---

## 📊 Example Dataset

The dataset (`sales.csv`) simulates a basic marketing scenario, showing how advertising budgets (e.g., TV ads) relate to sales performance. You can easily adapt the model to your own data — such as housing prices, student scores, or business KPIs — by retraining the regression.

---

## 🔄 Potential Extensions

- Support for multiple regression (more than one variable)
- Try polynomial regression or ridge/lasso regularization
- Host the model on AWS Lambda or Streamlit Cloud
- Add CSV upload functionality
- Use Plotly or Dash for interactive visualizations

---

## 👤 Author

Developed by [@thehybrid18](https://github.com/thehybrid18)  
A project combining machine learning, web development, and usability for aspiring data scientists.

---


