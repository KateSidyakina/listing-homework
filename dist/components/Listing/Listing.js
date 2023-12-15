"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Listing({ items = [] }) {
    const getItemTitle = (title) => {
        if (title.length > 50) {
            return title.substring(0, 50) + "...";
        }
        else {
            return title;
        }
    };
    const getCurrencyCode = (code) => {
        if (code === "USD") {
            return "$";
        }
        else if (code === "EUR") {
            return "€";
        }
        else {
            return code + " ";
        }
    };
    const getLevelClassName = (quantity) => {
        if (quantity <= 10) {
            return "low";
        }
        else if (quantity <= 20) {
            return "medium";
        }
        else {
            return "high";
        }
    };
    return (react_1.default.createElement("div", { className: "item-list" }, items.map((item) => {
        return (item.state === "active" ?
            react_1.default.createElement("div", { className: "item", key: item.listing_id },
                react_1.default.createElement("div", { className: "item-image" },
                    react_1.default.createElement("a", { href: item.url },
                        react_1.default.createElement("img", { src: item.MainImage.url_570xN, alt: item.title }))),
                react_1.default.createElement("div", { className: "item-details" },
                    react_1.default.createElement("p", { className: "item-title" }, getItemTitle(item.title)),
                    react_1.default.createElement("p", { className: "item-price" },
                        getCurrencyCode(item.currency_code),
                        item.price),
                    react_1.default.createElement("p", { className: `item-quantity level-${getLevelClassName(item.quantity)}` }, item.quantity)))
            : "");
    })));
}
exports.default = Listing;
//# sourceMappingURL=Listing.js.map