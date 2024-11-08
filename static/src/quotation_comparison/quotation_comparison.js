/** @odoo-module **/


import { Component, useState, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { SelectMenu } from "@web/core/select_menu/select_menu";

import { useService } from "@web/core/utils/hooks";

class QuotationComparison extends Component {
    static template = "quotation_analysis.QuotationComparison";

    setup() {
        super.setup();

        this.action = useService("action");
        this.orm = useService("orm");
        
        this.state = useState({
            productProviderSelected: {},
            orders: []
        });

        onWillStart(async () => {
            this.state.orders = await this.orm.call(
                "quotation.request",
                "get_quotation_orders",
                [0],
                {}
            );
            this.products = await this.orm.call(
                "quotation.request",
                "get_quotation_products",
                [0],
                {}
            );
        });
    }

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

    selectPaymentMethods = () => {
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

    selectPaymentTerms = () => {

    }

    selectDeliveryFlow = () => {

    }

    confirmComparison = () => {
        console.log("I'm confirming the quotation flow")
    }
}

QuotationComparison.props = {
    "orders": Array,
}
QuotationComparison.components = { Layout, SelectMenu }
registry.category("actions").add("quotation_analysis.quotation_comparison", QuotationComparison);