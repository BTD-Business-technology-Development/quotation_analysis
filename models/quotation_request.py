from odoo import api, fields, models, _


class QuotationRequest(models.Model):
    _name = "quotation.request"

    name = fields.Char()
    state = fields.Selection([
        ('draft', 'Draft'),
        ('in_progress', 'Progress'),
        ('complete', 'Complete'),
        ('cancel', 'Cancelled')
    ])

    def get_quotation_orders(self):
        # return [
        #     {
        #         "id": 1,
        #         "partner_id": {
        #             "id": 2,
        #             "identifier": "Provider C"
        #         },
        #         "line_ids": [
        #             {
        #                 "id": 1,
        #                 "brand": "Brandom Cafes",
        #                 "product_id": 1,
        #                 "qty": 12,
        #                 "price_unit": 12.5,
        #                 'price_in_currency': 507.84,
        #                 "total": 150,
        #                 "total_in_currency": 6094.08,
        #             },
        #             {
        #                 "id": 2,
        #                 "product_id": 2,
        #                 "brand": "Brandom Cafes",
        #                 "qty": 12,
        #                 "price_unit": 12.5,
        #                 'price_in_currency': 507.84,
        #                 "total": 150,
        #                 "total_in_currency": 6094.08,
        #             }
        #         ],
        #         "payment_terms": "",
        #         "payment_methods": "",
        #         "delivery_rules": ""
        #     },
        #     {
        #         "id": 1,
        #         "partner_id": {
        #             "id": 2,
        #             "identifier": "Provider A"
        #         },
        #         "line_ids": [
        #             {
        #                 "id": 4,
        #                 "product_id": 1,
        #                 "brand": "Brandom Cafes",
        #                 "qty": 12,
        #                 "price_unit": 12.5,
        #                 'price_in_currency': 507.84,
        #                 "total": 150,
        #                 "total_in_currency": 6094.08,
        #             },
        #             {
        #                 "id": 3,
        #                 "product_id": 2,
        #                 "brand": "Brandom Cafes",
        #                 "qty": 1,
        #                 "price_unit": 1,
        #                 'price_in_currency': 42.32,
        #                 "total": 1,
        #                 "total_in_currency": 42.32,
        #             }
        #         ],
        #         "payment_terms": "",
        #         "payment_methods": "",
        #         "delivery_rules": ""
        #     },
        #     {
        #         "id": 1,
        #         "partner_id": {
        #             "id": 2,
        #             "identifier": "Provider B"
        #         },
        #         "line_ids": [
        #             {
        #                 "id": 1,
        #                 "brand": "Brandom Cafes",
        #                 "qty": 12,
        #                 "price_unit": 12.5,
        #                 'price_in_currency': 507.84,
        #                 "total": 150,
        #                 "total_in_currency": 6094.08,
        #             },
        #             {
        #                 "product_id": 2,
        #                 "brand": "Brandom Cafes",
        #                 "qty": 12,
        #                 "price_unit": 12.5,
        #                 'price_in_currency': 507.84,
        #                 "total": 150,
        #                 "total_in_currency": 6094.08,
        #             }
        #         ],
        #         "payment_terms": "",
        #         "payment_methods": "",
        #         "delivery_rules": ""
        # }]

        return []

    def get_quotation_products(self):
        # return [
        #     {
        #         "id": 1,
        #         "name": "Grano de cafe - 1 Kilogramo",
        #     },
        #     {
        #         "id": 2,
        #         "name": "Grano de cafe - 500 Gramos",
        #     },
        #     {
        #         "id": 3,
        #         "name": "Grano de cafe - 800 Gramos",
        #     },
        #     {
        #         "id": 5,
        #         "name": "Empaque de cafe plastico - 10 Metros",
        #     }
        # ];

        return []
