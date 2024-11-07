{
    "name": "Purchase quotation analysis",
    "summary": "Idempiere purchase analysis connector in Odoo",
    "description": """
        Display quotation orders from Idempiere and create order analysis for better offers
    """,

    "author": "BTD Sistemas",
    "website": "https://btdsistemas.com",
    'application': True,
    'installable': True,
    'depends': ['base', 'web', 'mail', 'crm'],

    'data': [
        "views/menus.xml"
    ],
    'assets': {
        'web.assets_backend': [
            'quotation_analysis/static/src/quotation_comparison/**/*',
        ],
    },
    'license': 'AGPL-3'
}