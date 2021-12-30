var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
// Esto siempre debe de tener
export default {
    title: "UI/MyLabel",
    component: MyLabel,
    argTypes: {
        color: { control: "select" },
    },
};
// Estos ComponentStory y ComponentMeta son genericos
var Template = function (args) { return (_jsx(MyLabel, __assign({}, args), void 0)); };
// Paginas
export var Basic = Template.bind({});
Basic.args = {
    size: "normal",
    allCaps: false,
};
export var Secondary = Template.bind({});
Secondary.args = { size: "normal", color: "secondary" };
export var Tertiary = Template.bind({});
Tertiary.args = {
    size: "normal",
    allCaps: true,
    color: "tertiary",
};
export var CustomColor = Template.bind({});
CustomColor.args = {
    size: "h1",
    fontColor: "#5517ac",
};
export var CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: "h1",
    fontColor: "#eeeeee",
    backgroundColor: "#000000",
};
