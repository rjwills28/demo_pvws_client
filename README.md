# demo_pvws_client

A demo client that connects to a PVWS websocket and subscribes to a single PV. The PV value is displayed on the webpage.

# Modify
You will need to make 2 changes to the script.js file:
- Modify the Websocket URL to your instance of PVWS. Note that you must leave the `/pvws/pv` at the end of your url.
- Modify the PV name that you want to subscribe to.
