# CCAR Credit Risk Analytics - Dashboard
This dashboard was developed as a part of a university team project and provides a user enough data to make informed decisions about the Peer Benchmarking aspect of CCAR, which is a regulatory exercise in US for financial institutions. Even though we paid utmost attention to detail, user should conduct their due diligence and ensure sanity of their data if they plan to use this dashboard. All the files in **datasets** folder are prepopulated and show a very small sample of the whole banking world data that we produced for our project. A user can replace these files with their own data and the results should flow through to the dashboard. It utilizies Javascript, D3, HTML, and CSS, and a bunch of prepopulated result files. I was responsible for sourcing the historical data for this project, develop some models, as well as providing guidance on loss forecasting modelling, and developing this dashboard end-to-end. 

**Data**: All the historical data was sourced using an API with Python to download data from Federal Reserve website. 

**Models**: I used unsupervides KNN models to create an algorithm that helps find simila peers for each portfolio of any selected bank. Other team members who were responsible for the loss forecast models used PCA, ARIMA, and Linear Regression models for the loss forecast results that you can view in the dashboard (last 4 graphs).

**Dashboard**: 
We have tested this Dashboard using latest Forefox and Google Chrome browsers, so please ensure to use one of these browsers to view this Dashboard. Please ensure you have the ability to run local testing server on your machine. Instructions to set up a local server can be found at: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server. As mentioned, it uses avascript, D3, HTML, and CSS codes, all of which are provided with this repository.

**Instructions:**
Open command line in Windows or terminal in Mac, and change your directory to the CODE folder provided under root directory e.g. cd C:\Documents\team025final\CODE
- Run the command to start your localhost e.g. python3 -m http.server
- Open Firefox or Google Chrome and go to http://localhost:8000/CODE/CCAR_analytics.html
- The Dashboard shows a few charts and a US map, which are linked to two dropdown menus. 
- Please select a Bank or a Product of your interest, and the graphs and choropleth map should update accordingly. 
- Hovering over the map would provide you more information on the bank and its peers.
