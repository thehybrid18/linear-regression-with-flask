import pickle
import pandas as pd

sales_data=pd.read_csv('sales.csv')

X=sales_data.iloc[:, 1:3]
Y=sales_data['Sales']
from sklearn.linear_model import LinearRegression
regressor=LinearRegression()

regressor.fit(X,Y)

pickle.dump(regressor, open('model.pkl', 'wb'))