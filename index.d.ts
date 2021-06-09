
declare module 'vue-material/dist/components' {
    import { PluginFunction } from 'vue';

    export const MdApp: PluginFunction<any>;
    export const MdAutocomplete: PluginFunction<any>;
    export const MdAvatar: PluginFunction<any>;
    export const MdBadge: PluginFunction<any>;
    export const MdBottomBar: PluginFunction<any>;
    export const MdButton: PluginFunction<any>;
    export const MdCard: PluginFunction<any>;
    export const MdCheckbox: PluginFunction<any>;
    export const MdChips: PluginFunction<any>;
    export const MdContent: PluginFunction<any>;
    export const MdDatepicker: PluginFunction<any>;
    export const MdDialog: PluginFunction<any>;
    export const MdDivider: PluginFunction<any>;
    export const MdDrawer: PluginFunction<any>;
    export const MdElevation: PluginFunction<any>;
    export const MdEmptyState: PluginFunction<any>;
    export const MdField: PluginFunction<any>;
    export const MdHighlightText: PluginFunction<any>;
    export const MdIcon: PluginFunction<any>;
    export const MdImage: PluginFunction<any>;
    export const MdLayout: PluginFunction<any>;
    export const MdList: PluginFunction<any>;
    export const MdMenu: PluginFunction<any>;
    export const MdProgress: PluginFunction<any>;
    export const MdRadio: PluginFunction<any>;
    export const MdRipple: PluginFunction<any>;
    export const MdSnackbar: PluginFunction<any>;
    export const MdSpeedDial: PluginFunction<any>;
    export const MdSteppers: PluginFunction<any>;
    export const MdSubheader: PluginFunction<any>;
    export const MdSwitch: PluginFunction<any>;
    export const MdTable: PluginFunction<any>;
    export const MdTabs: PluginFunction<any>;
    export const MdToolbar: PluginFunction<any>;
    export const MdTooltip: PluginFunction<any>;
}    

declare const VueMaterial: {
    install: (Vue: VueConstructor) => void;
};

export default VueMaterial;
