module.exports = [
  {
    "type": "heading",
    "defaultValue": "Configuration"
  },
     {
        "type": "text",
        "defaultValue": "<h6>A white toggle = OFF, an orange toggle = ON</h6>",
      },
	{
    "type": "section",
    "items": [
 	{
        "type": "heading",
        "defaultValue": "<h5>Display</h5>"
	},
     {
        "type": "color",
        "messageKey": "hrcol",
        "defaultValue": "0xFFFFFF",
        "label": "Hour Hand Color"
      },
      {
        "type": "color",
        "messageKey": "mincol",
        "defaultValue": "0xFFFFFF",
        "label": "Minute Hand Colour"
      },
      {
        "type": "color",
        "messageKey": "seccol",
        "defaultValue": "0xFFFFFF",
        "label": "Second Hand Colour"
	  },
	  {
        "type": "toggle",
        "messageKey": "day",
        "label": "Show day",
        "defaultValue": true
      },
	  {
        "type": "toggle",
        "messageKey": "date",
        "label": "Show date",
        "defaultValue": true
      },
	  {
        "type": "toggle",
        "messageKey": "secs",
        "label": "Show second hand",
        "defaultValue": true
      },
	  {
        "type": "toggle",
        "messageKey": "batt",
        "label": "Show battery icon",
        "defaultValue": true
      },

	
			{
  "type": "select",
  "messageKey": "background",
  "defaultValue": 0,
  "label": "Watch style",
  "options": [

    { 
      "label": "(gold/yellow) All second tics, no numbers",
      "value": 0
    },
    { 
      "label": "(gold) Some second tics, small hour numbers",
      "value": 1
    },
    { 
      "label": "(gold) No second tics, no numbers",
      "value": 2
    },
    { 
      "label": "(gold) No second tics, big hour numbers (no 3,6,9,12)",
      "value": 3
    },
    { 
      "label": "(silver/white) All second tics, no numbers",
      "value": 4
    },
	{ 
      "label": "(silver) Some second tics, small hour numbers",
      "value": 5
    },
    { 
      "label": "(silver) No second tics, no numbers",
      "value": 6
    },
    { 
      "label": "(silver) No second tics, big hour numbers (no 3,6,9,12)",
      "value": 7
    },
    { 
      "label": "Grey with black radial lines",
      "value": 8
    }
  ]
}
	]		
},

  {
        "type": "text",
        "defaultValue": "<h6>If you find this watchface useful, please consider making a <a href='https://www.paypal.me/markchopsreed'>small donation here</a>. Thankyou.</h6>",
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];