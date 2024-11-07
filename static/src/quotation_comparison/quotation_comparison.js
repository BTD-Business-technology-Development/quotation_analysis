/** @odoo-module **/


import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { SelectMenu } from "@web/core/select_menu/select_menu";

import { useService } from "@web/core/utils/hooks";

class QuotationComparison extends Component {
    static template = "quotation_analysis.QuotationComparison";

    setup() {
        super.setup();
        this.action = useService("action");

        this.state = useState({
            productProviderSelected: {
                1: null,
                2: {}
            },
            orders: [
                {
                    "id": 1,
                    "partner_id": {
                        "id": 2,
                        "identifier": "Provider C"
                    },
                    "line_ids": [
                        {
                            "id": 1,
                            "brand": "Brandom Cafes",
                            "product_id": 1,
                            "qty": 12,
                            "price_unit": 12.5,
                            'price_in_currency': 507.84,
                            "total": 150,
                            "total_in_currency": 6094.08,
                        },
                        {
                            "id": 2,
                            "product_id": 2,
                            "brand": "Brandom Cafes",
                            "qty": 12,
                            "price_unit": 12.5,
                            'price_in_currency': 507.84,
                            "total": 150,
                            "total_in_currency": 6094.08,
                        }
                    ],
                    "payment_terms": "",
                    "payment_methods": "",
                    "delivery_rules": ""
                },
                {
                    "id": 1,
                    "partner_id": {
                        "id": 2,
                        "identifier": "Provider A"
                    },
                    "line_ids": [
                        {
                            "id": 4,
                            "product_id": 1,
                            "brand": "Brandom Cafes",
                            "qty": 12,
                            "price_unit": 12.5,
                            'price_in_currency': 507.84,
                            "total": 150,
                            "total_in_currency": 6094.08,
                        },
                        {
                            "id": 3,
                            "product_id": 2,
                            "brand": "Brandom Cafes",
                            "qty": 1,
                            "price_unit": 1,
                            'price_in_currency': 42.32,
                            "total": 1,
                            "total_in_currency": 42.32,
                        }
                    ],
                    "payment_terms": "",
                    "payment_methods": "",
                    "delivery_rules": ""
                },
                {
                    "id": 1,
                    "partner_id": {
                        "id": 2,
                        "identifier": "Provider B"
                    },
                    "line_ids": [
                        {
                            "id": 1,
                            "brand": "Brandom Cafes",
                            "qty": 12,
                            "price_unit": 12.5,
                            'price_in_currency': 507.84,
                            "total": 150,
                            "total_in_currency": 6094.08,
                        },
                        {
                            "product_id": 2,
                            "brand": "Brandom Cafes",
                            "qty": 12,
                            "price_unit": 12.5,
                            'price_in_currency': 507.84,
                            "total": 150,
                            "total_in_currency": 6094.08,
                        }
                    ],
                    "payment_terms": "",
                    "payment_methods": "",
                    "delivery_rules": ""
                },
            ]
        });
    }

    products = [
        {
            "id": 1,
            "name": "Grano de cafe - 1 Kilogramo",
        },
        {
            "id": 2,
            "name": "Grano de cafe - 500 Gramos",
        },
        {
            "id": 3,
            "name": "Grano de cafe - 800 Gramos",
        },
        {
            "id": 5,
            "name": "Empaque de cafe plastico - 10 Metros",
        }
    ];

    getOrderLineByProduct = (order, productId) => {
        for (let i = 0; i < order.line_ids.length; ++i) {
            // If target found return and exit program
            if (order.line_ids[i].product_id === productId) {
                return order.line_ids[i];
            }
        }
        
        return {};
    }

    onCheckBoxSelection = (value) => {
        value.selected = !value.selected;

        this.state.productProviderSelected[value.product_id] = value;
    }

    async selectPaymentMethods() {
        // Example:

        // const result = await this.action.doAction({
        //     type: 'ir.actions.act_window',
        //     res_model: "btd.document.search",
        //     view_mode: 'form',
        //     view_type: 'form',
        //     views: [[false, 'form']],
        //     target: 'new',
        //     context: {
        //         'default_is_from_js': true
        //     },
        //     res_id: false,
        // });

        // return result;
    }
}

QuotationComparison.props = {
    "orders": Array,
}
QuotationComparison.components = { Layout, SelectMenu }
registry.category("actions").add("quotation_analysis.quotation_comparison", QuotationComparison);